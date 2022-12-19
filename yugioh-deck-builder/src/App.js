import './App.css';
import Homepage from './Components/homepage/Homepage';
import Navbar from './Components/navbar/Navbar';
import { initializeApp } from 'firebase/app'

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
    </>
  );
}

export default App;
