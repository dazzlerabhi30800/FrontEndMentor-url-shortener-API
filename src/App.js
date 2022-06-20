import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ShortenLink from './Components/ShortenLink';
import Statistics from './Components/Statistics';
import Start from './Components/Start';
import Footer from './Components/Footer';

function App() {
  const [shortLinks, setShortLinks] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShortenLink shortLinks={shortLinks} setShortLinks={setShortLinks} />
      <Statistics />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
