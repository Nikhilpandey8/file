import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  User,
  updatePassword,
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../services/firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  register: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (data: any) => Promise<void>;
  updateUserPassword: (currentPassword: string, newPassword: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  uploadProfilePic: (file: File) => Promise<string>;
  userProfile: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        const profileDoc = await getDoc(doc(db, 'users', user.uid));
        if (profileDoc.exists()) {
          setUserProfile(profileDoc.data());
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Register new user
  async function register(email: string, password: string, name: string) {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      await updateProfile(user, { displayName: name });
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        createdAt: new Date().toISOString(),
        photoURL: '',
        phone: '',
        completedRides: 0,
        sharedRides: 0
      });
      
      setCurrentUser(user);
    } catch (error) {
      console.error("Error registering new user:", error);
      throw error;
    }
  }

  // Login existing user
  async function login(email: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const profileDoc = await getDoc(doc(db, 'users', user.uid));
      
      if (profileDoc.exists()) {
        setUserProfile(profileDoc.data());
      }
      
      setCurrentUser(user);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  // Logout current user
  async function logout() {
    try {
      await firebaseSignOut(auth);
      setCurrentUser(null);
      setUserProfile(null);
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  }

  // Update user profile
  async function updateUserProfile(data: any) {
    try {
      if (!currentUser) throw new Error("No authenticated user");
      
      // Update Firestore document
      await setDoc(doc(db, 'users', currentUser.uid), {
        ...userProfile,
        ...data,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      // If name is being updated, also update Auth profile
      if (data.name) {
        await updateProfile(currentUser, { displayName: data.name });
      }
      
      // If photo URL is being updated, also update Auth profile
      if (data.photoURL) {
        await updateProfile(currentUser, { photoURL: data.photoURL });
      }
      
      // Update local state
      setUserProfile(prev => ({ ...prev, ...data }));
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  }

  // Update password
  async function updateUserPassword(currentPassword: string, newPassword: string) {
    try {
      if (!currentUser || !currentUser.email) throw new Error("No authenticated user");
      
      // Re-authenticate user first
      const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
      await reauthenticateWithCredential(currentUser, credential);
      
      // Update password
      await updatePassword(currentUser, newPassword);
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  }

  // Reset password
  async function resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  }

  // Upload profile picture
  async function uploadProfilePic(file: File) {
    try {
      if (!currentUser) throw new Error("No authenticated user");
      
      const storageRef = ref(storage, `profilePics/${currentUser.uid}`);
      await uploadBytes(storageRef, file);
      
      const downloadURL = await getDownloadURL(storageRef);
      
      // Update user profile with new photo URL
      await updateUserProfile({ photoURL: downloadURL });
      
      return downloadURL;
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      throw error;
    }
  }

  const value = {
    currentUser,
    userProfile,
    loading,
    register,
    login,
    logout,
    updateUserProfile,
    updateUserPassword,
    resetPassword,
    uploadProfilePic
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}