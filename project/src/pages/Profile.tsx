import React from 'react';

function Profile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 text-gray-900">User Name</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">user@example.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Ride History</h2>
            <p className="text-gray-600">No rides yet</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
            <p className="text-gray-600">No payment methods added</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;