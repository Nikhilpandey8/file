import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';
import { AuthProvider } from './contexts/AuthContext';
import { LocationProvider } from './contexts/LocationContext';
import { RideProvider } from './contexts/RideContext';
import { ChatProvider } from './contexts/ChatContext';

// Pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import RideShare from './pages/RideShare';
import JoinRide from './pages/JoinRide';
import Chat from './pages/Chat';
import PaymentSplit from './pages/PaymentSplit';
import Help from './pages/Help';
import NotFound from './pages/NotFound';

// Components
import Layout from './components/layout/Layout';
import PrivateRoute from './components/auth/PrivateRoute';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AuthProvider>
      <LocationProvider>
        <RideProvider>
          <ChatProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                  <Route path="/ride-share" element={<PrivateRoute><RideShare /></PrivateRoute>} />
                  <Route path="/join-ride" element={<PrivateRoute><JoinRide /></PrivateRoute>} />
                  <Route path="/chat/:id?" element={<PrivateRoute><Chat /></PrivateRoute>} />
                  <Route path="/payment-split" element={<PrivateRoute><PaymentSplit /></PrivateRoute>} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
              </Layout>
            </Router>
          </ChatProvider>
        </RideProvider>
      </LocationProvider>
    </AuthProvider>
  );
}

export default App;