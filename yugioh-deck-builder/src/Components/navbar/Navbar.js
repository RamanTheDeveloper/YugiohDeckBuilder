import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import Logout from "../logout/Logout";
import { db } from "../../Firebase/firebase";

function Navbar() {
  const logo = require("../images/yugioh-logo.png");

  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user)

      if (user) {
        console.log("User is logged in:", user.email);
        setIsLoggedin(true);
      } else {
        console.log("User is logged out");
        setIsLoggedin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="sticky flex flex-row justify-between align-middle flex-wrap bg-black w-full h-28 z-20 py-4 px-4">
      <Link to="/">
        <a>
          <img
            src={logo}
            alt="Logo"
            className="w-[145px] h-[75px] cursor-pointer relative pl-4"
          />
        </a>
      </Link>
      <ul className="flex justify-center align-middle list-none text-center pt-6 gap-2">
        <li>
          <a className="m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300">
            <Link to="/deck-list">Decks</Link>
          </a>
        </li>
        <li>
          <a className="m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300">
            Wishlist
          </a>
        </li>
        <li>
          <a className="m-8 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300">
            Ownlist
          </a>
        </li>
        <li>
          <a className="m-4 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300">
            <Link to="/profile">Profile</Link>
          </a>
        </li>
      </ul>

      {!isLoggedin ? (
        <ul className="flex justify-center align-middle list-none text-center pt-6 gap-0">
          <li>
            <a className="m-4 text-black bg-white px-6 py-2 rounded-2xl border-white border-2 hover:border-2-white decoration-none text-base font-semibold uppercase hover:text-white hover:bg-black hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300">
              <Link to="/login">Login</Link>
            </a>
          </li>
          <li>
            <a className="m-4 text-white decoration-none text-base font-semibold uppercase hover:text-black hover:bg-white hover:rounded-2xl hover:px-6 hover:py-2 hover:transition-all ease-in-out duration-300">
              <Link to="/register">Register</Link>
            </a>
          </li>
        </ul>
      ) : (
        <>
          <div className="flex justify-center align-middle w-auto h-auto pt-6">
            <span className="text-white font-bold">
              {auth.currentUser.email}
            </span>

            <div>
              <Logout />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
