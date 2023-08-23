import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase/firebase";
import Logout from "../logout/Logout";
import { HiOutlineUserCircle } from 'react-icons/hi';

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <div className="flex items-center justify-center mb-4">
          <HiOutlineUserCircle className="text-6xl text-blue-600" />
        </div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">{currentUser?.displayName || "Guest"}</h2>
          <p className="text-gray-500">{currentUser?.email || "guest@example.com"}</p>
        </div>
        <div className="text-center">
          {currentUser ? (
            <Logout />
          ) : (
            <p className="text-gray-500">You are not logged in</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
