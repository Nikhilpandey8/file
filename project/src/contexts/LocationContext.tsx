import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface Coordinates {
  lat: number;
  lng: number;
}

interface LocationContextType {
  currentLocation: Coordinates | null;
  isLocationLoading: boolean;
  locationError: string | null;
  requestLocationPermission: () => Promise<boolean>;
  getAddressFromCoords: (coords: Coordinates) => Promise<string>;
  getCoordsFromAddress: (address: string) => Promise<Coordinates | null>;
  calculateDistance: (origin: Coordinates, destination: Coordinates) => Promise<number>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}

interface LocationProviderProps {
  children: ReactNode;
}

export function LocationProvider({ children }: LocationProviderProps) {
  const [currentLocation, setCurrentLocation] = useState<Coordinates | null>(null);
  const [isLocationLoading, setIsLocationLoading] = useState<boolean>(true);
  const [locationError, setLocationError] = useState<string | null>(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      requestLocationPermission();
    }
  }, [currentUser]);

  const requestLocationPermission = async (): Promise<boolean> => {
    setIsLocationLoading(true);
    setLocationError(null);

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        });
      });

      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
      setIsLocationLoading(false);
      return true;
    } catch (error) {
      console.error('Error getting location:', error);
      setLocationError('Failed to get your location. Please enable location services and try again.');
      setIsLocationLoading(false);
      return false;
    }
  };

  const getAddressFromCoords = async (coords: Coordinates): Promise<string> => {
    try {
      // In a real app, you would call a geocoding API here
      // For demo purposes, we'll simulate a response
      console.log('Getting address for coordinates:', coords);
      return 'Simulated address for the given coordinates';
    } catch (error) {
      console.error('Error getting address from coordinates:', error);
      throw new Error('Failed to get address from coordinates');
    }
  };

  const getCoordsFromAddress = async (address: string): Promise<Coordinates | null> => {
    try {
      // In a real app, you would call a geocoding API here
      // For demo purposes, we'll simulate a response
      console.log('Getting coordinates for address:', address);
      const simulatedCoords = {
        lat: 28.6139 + (Math.random() - 0.5) * 0.1, // Simulate Delhi area with slight randomness
        lng: 77.2090 + (Math.random() - 0.5) * 0.1
      };
      return simulatedCoords;
    } catch (error) {
      console.error('Error getting coordinates from address:', error);
      return null;
    }
  };

  const calculateDistance = async (origin: Coordinates, destination: Coordinates): Promise<number> => {
    try {
      // In a real app, you would call a distance matrix API here
      // For demo purposes, we'll use a simple Haversine formula
      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(destination.lat - origin.lat);
      const dLng = deg2rad(destination.lng - origin.lng);
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(origin.lat)) * Math.cos(deg2rad(destination.lat)) * 
        Math.sin(dLng/2) * Math.sin(dLng/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      const distance = R * c; // Distance in km
      return distance;
    } catch (error) {
      console.error('Error calculating distance:', error);
      throw new Error('Failed to calculate distance');
    }
  };

  function deg2rad(deg: number) {
    return deg * (Math.PI/180);
  }

  const value = {
    currentLocation,
    isLocationLoading,
    locationError,
    requestLocationPermission,
    getAddressFromCoords,
    getCoordsFromAddress,
    calculateDistance
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}