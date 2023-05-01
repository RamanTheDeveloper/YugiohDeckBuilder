import {Routes, Route} from 'react-router-dom'
import './App.css';
import Homepage from './Components/homepage/Homepage';
import Login from './Components/login/Login'
import Registration from './Components/registration/Registration'
import Navbar from './Components/navbar/Navbar';
import { initializeApp } from 'firebase/app'
import Decks from './Components/decks/Decks';
import DeckList from './Components/decks/DeckList';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/decks-list' element={<DeckList/>}/>
      </Routes>
    </>
  );
}

export default App;
