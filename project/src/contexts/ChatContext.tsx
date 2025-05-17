import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  onSnapshot, 
  orderBy, 
  updateDoc,
  getDocs,
  doc,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../services/firebase';
import { useAuth } from './AuthContext';
import { v4 as uuidv4 } from 'uuid';

export interface Message {
  id: string;
  chatId: string;
  text: string;
  senderId: string;
  senderName: string;
  senderPhoto?: string;
  timestamp: string;
  imageUrl?: string;
  isRead: boolean;
}

export interface Chat {
  id: string;
  rideId?: string;
  participants: string[];
  createdAt: string;
  lastMessage: {
    text: string;
    senderId: string;
    senderName: string;
    timestamp: string;
  };
}

interface ChatContextType {
  chats: Chat[];
  currentChat: Chat | null;
  messages: Message[];
  loadingChats: boolean;
  loadingMessages: boolean;
  sendMessage: (chatId: string, text: string, imageFile?: File) => Promise<void>;
  setActiveChat: (chatId: string | null) => void;
  createChat: (participantIds: string[]) => Promise<string>;
  markMessagesAsRead: (chatId: string) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}

interface ChatProviderProps {
  children: ReactNode;
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingChats, setLoadingChats] = useState<boolean>(true);
  const [loadingMessages, setLoadingMessages] = useState<boolean>(false);
  const { currentUser, userProfile } = useAuth();

  // Fetch user's chats
  useEffect(() => {
    if (!currentUser) {
      setChats([]);
      setCurrentChat(null);
      setMessages([]);
      setLoadingChats(false);
      return;
    }

    setLoadingChats(true);

    const chatsQuery = query(
      collection(db, 'chats'),
      where('participants', 'array-contains', currentUser.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(chatsQuery, (snapshot) => {
      const chatsData = snapshot.docs.map(doc => ({
        ...doc.data(),
        firestoreId: doc.id
      })) as (Chat & { firestoreId: string })[];
      
      setChats(chatsData);
      setLoadingChats(false);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Fetch messages for current chat
  useEffect(() => {
    if (!currentChat) {
      setMessages([]);
      return;
    }

    setLoadingMessages(true);

    const messagesQuery = query(
      collection(db, 'messages'),
      where('chatId', '==', currentChat.id),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      
      setMessages(messagesData);
      setLoadingMessages(false);
      
      // Mark messages as read
      if (currentUser) {
        markMessagesAsRead(currentChat.id);
      }
    });

    return () => unsubscribe();
  }, [currentChat, currentUser]);

  // Set active chat
  const setActiveChat = (chatId: string | null) => {
    if (!chatId) {
      setCurrentChat(null);
      return;
    }

    const chat = chats.find(c => c.id === chatId);
    if (chat) {
      setCurrentChat(chat);
    }
  };

  // Create a new chat
  const createChat = async (participantIds: string[]): Promise<string> => {
    try {
      if (!currentUser || !userProfile) throw new Error('User not authenticated');
      
      // Ensure current user is included
      if (!participantIds.includes(currentUser.uid)) {
        participantIds.push(currentUser.uid);
      }
      
      const chatId = uuidv4();
      
      const newChat: Chat = {
        id: chatId,
        participants: participantIds,
        createdAt: new Date().toISOString(),
        lastMessage: {
          text: 'Chat created',
          senderId: currentUser.uid,
          senderName: userProfile.name || currentUser.displayName || 'Anonymous',
          timestamp: new Date().toISOString()
        }
      };
      
      await addDoc(collection(db, 'chats'), newChat);
      
      return chatId;
    } catch (error) {
      console.error('Error creating chat:', error);
      throw error;
    }
  };

  // Send a message
  const sendMessage = async (chatId: string, text: string, imageFile?: File) => {
    try {
      if (!currentUser || !userProfile) throw new Error('User not authenticated');
      
      let imageUrl = '';
      
      if (imageFile) {
        const storageRef = ref(storage, `chatImages/${chatId}/${uuidv4()}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }
      
      const message: Omit<Message, 'id'> = {
        chatId,
        text,
        senderId: currentUser.uid,
        senderName: userProfile.name || currentUser.displayName || 'Anonymous',
        senderPhoto: userProfile.photoURL || '',
        timestamp: new Date().toISOString(),
        isRead: false
      };
      
      if (imageUrl) {
        message.imageUrl = imageUrl;
      }
      
      await addDoc(collection(db, 'messages'), message);
      
      // Update last message in chat
      const chatQuery = query(collection(db, 'chats'), where('id', '==', chatId));
      const chatSnapshot = await getDocs(chatQuery);
      
      if (!chatSnapshot.empty) {
        const chatDoc = chatSnapshot.docs[0];
        await updateDoc(doc(db, 'chats', chatDoc.id), {
          lastMessage: {
            text: text || 'Sent an image',
            senderId: currentUser.uid,
            senderName: userProfile.name || currentUser.displayName || 'Anonymous',
            timestamp: new Date().toISOString()
          }
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  };

  // Mark messages as read
  const markMessagesAsRead = async (chatId: string) => {
    try {
      if (!currentUser) return;
      
      const unreadMessagesQuery = query(
        collection(db, 'messages'),
        where('chatId', '==', chatId),
        where('senderId', '!=', currentUser.uid),
        where('isRead', '==', false)
      );
      
      const snapshot = await getDocs(unreadMessagesQuery);
      
      snapshot.docs.forEach(async (messageDoc) => {
        await updateDoc(doc(db, 'messages', messageDoc.id), {
          isRead: true
        });
      });
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  };

  const value = {
    chats,
    currentChat,
    messages,
    loadingChats,
    loadingMessages,
    sendMessage,
    setActiveChat,
    createChat,
    markMessagesAsRead
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}