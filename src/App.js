import './App.css';
import Consultation from './components/Consultation/Consultation';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Consultation />
    </>
  );
}

export default App;
