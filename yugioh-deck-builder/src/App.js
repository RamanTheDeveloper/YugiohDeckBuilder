import {Routes, Route} from 'react-router-dom'
import './App.css';
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login'
import Registration from './Components/registration/Registration'
import Navbar from './Components/navbar/Navbar';
import { initializeApp } from 'firebase/app'
import Decks from './Components/decks/Decks';
import Profile from './Components/profile/Profile';
import { useState } from 'react';
import Wishlist from './Components/wishlist/Wishlist';

function App() {



  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/decks' element={<Decks/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </>
  );
}

export default App;
