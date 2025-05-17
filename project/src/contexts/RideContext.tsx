import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  onSnapshot, 
  getDocs,
  orderBy,
  Timestamp,
  GeoPoint
} from 'firebase/firestore';
import { db } from '../services/firebase';
import { useAuth } from './AuthContext';
import { useLocation } from './LocationContext';
import { v4 as uuidv4 } from 'uuid';

interface Coordinates {
  lat: number;
  lng: number;
}

export interface Ride {
  id: string;
  creatorId: string;
  creatorName: string;
  creatorPhoto: string;
  pickup: {
    address: string;
    coordinates: Coordinates;
  };
  destination: {
    address: string;
    coordinates: Coordinates;
  };
  date: string;
  time: string;
  status: 'pending' | 'matched' | 'completed' | 'cancelled';
  maxPassengers: number;
  currentPassengers: number;
  passengers: string[];
  createdAt: string;
  estimatedFare: number;
  chatId?: string;
}

interface RideContextType {
  rides: Ride[];
  myRides: Ride[];
  pendingRides: Ride[];
  loadingRides: boolean;
  createRide: (ride: Omit<Ride, 'id' | 'creatorId' | 'creatorName' | 'creatorPhoto' | 'status' | 'currentPassengers' | 'passengers' | 'createdAt' | 'chatId'>) => Promise<string>;
  updateRide: (rideId: string, data: Partial<Ride>) => Promise<void>;
  deleteRide: (rideId: string) => Promise<void>;
  joinRide: (rideId: string) => Promise<void>;
  leaveRide: (rideId: string) => Promise<void>;
  findMatchingRides: (pickup: Coordinates, destination: Coordinates, date: string) => Promise<Ride[]>;
}

const RideContext = createContext<RideContextType | undefined>(undefined);

export function useRide() {
  const context = useContext(RideContext);
  if (!context) {
    throw new Error('useRide must be used within a RideProvider');
  }
  return context;
}

interface RideProviderProps {
  children: ReactNode;
}

export function RideProvider({ children }: RideProviderProps) {
  const [rides, setRides] = useState<Ride[]>([]);
  const [myRides, setMyRides] = useState<Ride[]>([]);
  const [pendingRides, setPendingRides] = useState<Ride[]>([]);
  const [loadingRides, setLoadingRides] = useState<boolean>(true);
  const { currentUser, userProfile } = useAuth();
  const { calculateDistance } = useLocation();

  // Listen for rides when user is authenticated
  useEffect(() => {
    if (!currentUser) {
      setRides([]);
      setMyRides([]);
      setPendingRides([]);
      setLoadingRides(false);
      return;
    }

    setLoadingRides(true);

    // All pending rides
    const pendingRidesQuery = query(
      collection(db, 'rides'),
      where('status', '==', 'pending'),
      orderBy('createdAt', 'desc')
    );

    // User's rides (created or joined)
    const myRidesQuery = query(
      collection(db, 'rides'),
      where('passengers', 'array-contains', currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribePending = onSnapshot(pendingRidesQuery, (snapshot) => {
      const pendingRidesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Ride[];
      setPendingRides(pendingRidesData);
    });

    const unsubscribeMy = onSnapshot(myRidesQuery, (snapshot) => {
      const myRidesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Ride[];
      setMyRides(myRidesData);
    });

    setLoadingRides(false);

    return () => {
      unsubscribePending();
      unsubscribeMy();
    };
  }, [currentUser]);

  // Create a new ride
  const createRide = async (rideData: Omit<Ride, 'id' | 'creatorId' | 'creatorName' | 'creatorPhoto' | 'status' | 'currentPassengers' | 'passengers' | 'createdAt' | 'chatId'>) => {
    try {
      if (!currentUser || !userProfile) throw new Error('User not authenticated');

      const chatId = uuidv4();
      
      const newRide = {
        ...rideData,
        creatorId: currentUser.uid,
        creatorName: userProfile.name || currentUser.displayName || 'Anonymous',
        creatorPhoto: userProfile.photoURL || '',
        status: 'pending',
        currentPassengers: 1, // Creator is the first passenger
        passengers: [currentUser.uid],
        createdAt: new Date().toISOString(),
        chatId
      };

      // Create a chat room for this ride
      await addDoc(collection(db, 'chats'), {
        id: chatId,
        rideId: '', // Will update after ride is created
        participants: [currentUser.uid],
        createdAt: new Date().toISOString(),
        lastMessage: {
          text: 'Ride share created',
          senderId: currentUser.uid,
          senderName: userProfile.name || currentUser.displayName || 'Anonymous',
          timestamp: new Date().toISOString()
        }
      });

      const rideRef = await addDoc(collection(db, 'rides'), newRide);
      
      // Update the chat with the ride ID
      const chatQuery = query(collection(db, 'chats'), where('id', '==', chatId));
      const chatSnapshot = await getDocs(chatQuery);
      if (!chatSnapshot.empty) {
        const chatDoc = chatSnapshot.docs[0];
        await updateDoc(doc(db, 'chats', chatDoc.id), {
          rideId: rideRef.id
        });
      }

      return rideRef.id;
    } catch (error) {
      console.error('Error creating ride:', error);
      throw error;
    }
  };

  // Update a ride
  const updateRide = async (rideId: string, data: Partial<Ride>) => {
    try {
      await updateDoc(doc(db, 'rides', rideId), data);
    } catch (error) {
      console.error('Error updating ride:', error);
      throw error;
    }
  };

  // Delete a ride
  const deleteRide = async (rideId: string) => {
    try {
      // Check if user is the creator
      const rideSnapshot = await getDocs(query(collection(db, 'rides'), where('id', '==', rideId)));
      if (rideSnapshot.empty) throw new Error('Ride not found');
      
      const rideData = rideSnapshot.docs[0].data() as Ride;
      if (rideData.creatorId !== currentUser?.uid) throw new Error('Only the creator can delete this ride');
      
      await deleteDoc(doc(db, 'rides', rideId));
    } catch (error) {
      console.error('Error deleting ride:', error);
      throw error;
    }
  };

  // Join a ride
  const joinRide = async (rideId: string) => {
    try {
      if (!currentUser) throw new Error('User not authenticated');

      const rideRef = doc(db, 'rides', rideId);
      const rideSnap = await getDocs(query(collection(db, 'rides'), where('id', '==', rideId)));
      
      if (rideSnap.empty) throw new Error('Ride not found');
      
      const rideData = rideSnap.docs[0].data() as Ride;
      
      if (rideData.passengers.includes(currentUser.uid)) {
        throw new Error('You are already a passenger in this ride');
      }
      
      if (rideData.currentPassengers >= rideData.maxPassengers) {
        throw new Error('This ride is already full');
      }
      
      const updatedPassengers = [...rideData.passengers, currentUser.uid];
      
      await updateDoc(rideRef, {
        passengers: updatedPassengers,
        currentPassengers: updatedPassengers.length,
        status: updatedPassengers.length >= rideData.maxPassengers ? 'matched' : 'pending'
      });

      // Also add user to the chat
      const chatQuery = query(collection(db, 'chats'), where('rideId', '==', rideId));
      const chatSnapshot = await getDocs(chatQuery);
      
      if (!chatSnapshot.empty) {
        const chatDoc = chatSnapshot.docs[0];
        const chatData = chatDoc.data();
        
        if (!chatData.participants.includes(currentUser.uid)) {
          await updateDoc(doc(db, 'chats', chatDoc.id), {
            participants: [...chatData.participants, currentUser.uid]
          });
        }
      }
    } catch (error) {
      console.error('Error joining ride:', error);
      throw error;
    }
  };

  // Leave a ride
  const leaveRide = async (rideId: string) => {
    try {
      if (!currentUser) throw new Error('User not authenticated');

      const rideRef = doc(db, 'rides', rideId);
      const rideSnap = await getDocs(query(collection(db, 'rides'), where('id', '==', rideId)));
      
      if (rideSnap.empty) throw new Error('Ride not found');
      
      const rideData = rideSnap.docs[0].data() as Ride;
      
      // Can't leave if you're the creator
      if (rideData.creatorId === currentUser.uid) {
        throw new Error('As the creator, you cannot leave the ride. You can cancel it instead.');
      }
      
      if (!rideData.passengers.includes(currentUser.uid)) {
        throw new Error('You are not a passenger in this ride');
      }
      
      const updatedPassengers = rideData.passengers.filter(id => id !== currentUser.uid);
      
      await updateDoc(rideRef, {
        passengers: updatedPassengers,
        currentPassengers: updatedPassengers.length,
        status: 'pending' // Always go back to pending when someone leaves
      });

      // Remove from chat as well
      const chatQuery = query(collection(db, 'chats'), where('rideId', '==', rideId));
      const chatSnapshot = await getDocs(chatQuery);
      
      if (!chatSnapshot.empty) {
        const chatDoc = chatSnapshot.docs[0];
        const chatData = chatDoc.data();
        
        await updateDoc(doc(db, 'chats', chatDoc.id), {
          participants: chatData.participants.filter((id: string) => id !== currentUser.uid)
        });
      }
    } catch (error) {
      console.error('Error leaving ride:', error);
      throw error;
    }
  };

  // Find matching rides based on location and date
  const findMatchingRides = async (pickup: Coordinates, destination: Coordinates, date: string): Promise<Ride[]> => {
    try {
      if (!currentUser) throw new Error('User not authenticated');
      
      // Get all pending rides for the given date
      const ridesQuery = query(
        collection(db, 'rides'),
        where('status', '==', 'pending'),
        where('date', '==', date)
      );
      
      const snapshot = await getDocs(ridesQuery);
      const allRides = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Ride[];
      
      // Filter rides by proximity (max 5km from pickup and destination)
      const MAX_DISTANCE = 5; // 5 km threshold
      
      const matchingRides = await Promise.all(
        allRides.map(async (ride) => {
          // Calculate distance from user's pickup to ride's pickup
          const pickupDistance = await calculateDistance(
            pickup,
            ride.pickup.coordinates
          );
          
          // Calculate distance from user's destination to ride's destination
          const destDistance = await calculateDistance(
            destination,
            ride.destination.coordinates
          );
          
          return {
            ride,
            pickupDistance,
            destDistance
          };
        })
      );
      
      // Filter rides where both pickup and destination are within threshold
      const filteredRides = matchingRides
        .filter(({ pickupDistance, destDistance }) => 
          pickupDistance <= MAX_DISTANCE && destDistance <= MAX_DISTANCE
        )
        .map(({ ride }) => ride)
        // Don't include rides created by the current user
        .filter(ride => ride.creatorId !== currentUser.uid)
        // Don't include rides where the user is already a passenger
        .filter(ride => !ride.passengers.includes(currentUser.uid))
        // Don't include full rides
        .filter(ride => ride.currentPassengers < ride.maxPassengers);
      
      return filteredRides;
    } catch (error) {
      console.error('Error finding matching rides:', error);
      return [];
    }
  };

  const value = {
    rides,
    myRides,
    pendingRides,
    loadingRides,
    createRide,
    updateRide,
    deleteRide,
    joinRide,
    leaveRide,
    findMatchingRides
  };

  return (
    <RideContext.Provider value={value}>
      {children}
    </RideContext.Provider>
  );
}