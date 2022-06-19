import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ShortenLink from './Components/ShortenLink';
import Statistics from './Components/Statistics';
import Start from './Components/Start';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ShortenLink />
      <Statistics />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
