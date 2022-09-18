import './App.css';
import About from './components/About/About';
import Consultation from './components/Consultation/Consultation';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Partners from './components/Partners/Partners';
import Promo from './components/Promo/Promo';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Consultation />
      <About />
      <Partners />
      <Promo />
    </>
  );
}

export default App;
