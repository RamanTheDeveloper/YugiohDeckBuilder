import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

function Wishlist() {
  const [currentUser, setCurrentUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user);
      
      if (user) {
        // Fetch user's wishlist from Firebase
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setWishlist(doc.data().wishlist || []);
            }
          });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-6">Wishlist</h2>
      <div className="grid grid-cols-3 gap-4">
        {wishlist.map((card) => (
          <div key={card.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={card.image_url} alt={card.name} className="w-24 h-32 mx-auto mb-2" />
            <h3 className="text-xl font-semibold mb-1">{card.name}</h3>
            <p className="text-gray-500">
              {card.attribute}/{card.race}/{card.type}
            </p>
            <div className='flex flex-row'>
              <span><AiFillStar /> {card.level}</span>
            </div>
            <p>{card.atk}/{card.def}</p>
          </div>
        ))}
      </div>
      {!currentUser && (
        <p className="mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>{" "}
          to view your wishlist.
        </p>
      )}
    </div>
  );
}

export default Wishlist;
