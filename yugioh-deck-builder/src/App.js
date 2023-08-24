import { Routes, Route } from 'react-router-dom'
import './App.css';
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login'
import Registration from './Components/registration/Registration'
import Navbar from './Components/navbar/Navbar';
import { initializeApp } from 'firebase/app'
import Decks from './Components/decks/Decks';
import Profile from './Components/profile/Profile';
import Wishlist from './Components/wishlist/Wishlist';
import DeckList from './Components/decks/DeckList';
import Reset from './Components/login/Reset';
import NoPage from './Components/nopage/NoPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='deck-list' element={<DeckList />} />
        <Route path='/decks/:deckId' element={<Decks />}/>
        <Route path='profile' element={<Profile />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='reset' element={<Reset />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
