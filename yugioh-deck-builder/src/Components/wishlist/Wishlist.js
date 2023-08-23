import React, { useState, useEffect } from "react";
import { auth, db } from "../../Firebase/firebase";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';
import { getDocs, collection, doc } from 'firebase/firestore'

function Wishlist() {
  const [currentUser, setCurrentUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;
      const userWishlistRef = collection(db, 'Wishlist', userId, 'cardId');
      console.log(userWishlistRef);
  
      getDocs(userWishlistRef)
        .then((querySnapshot) => {
          const wishlistData = [];
          querySnapshot.forEach((doc) => {
            const cardData = doc.data(); // Card data from the subcollection
            wishlistData.push(cardData);
          });
          console.log('Fetched wishlist data:', wishlistData);
          setWishlist(wishlistData);
          console.log('WishlistData: ', wishlistData);
        })
        .catch((error) => {
          console.error('Error fetching wishlist:', error);
        });
    }
  }, []);
  
  
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-semibold mb-6">Your Wishlist</h2>
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
