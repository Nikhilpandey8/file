import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Loader2 className="h-12 w-12 text-indigo-600 animate-spin" />
        <h1 className="text-2xl font-bold text-gray-800">Loading RideShareWay...</h1>
        <p className="text-gray-600">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export default LoadingScreen;