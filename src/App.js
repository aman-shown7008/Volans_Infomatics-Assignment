import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Stakeholders from './components/Stakeholders/Stakeholders';
import Ljourney from './components/L-Journey/Ljourney';
import Ujourney from './components/U-Journey/Ujourney';
import Offerings from './components/Offerings/Offerings';
import Training from './components/Training/Training';
import FAQs from './components/FAQs/FAQs';
import Partner from './components/Partner/Partner';
import Footer from './components/Footer/Footer';
import LowerFooter from './components/LowerFooter/LowerFooter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Stakeholders/>
      <Ljourney/>
      <Ujourney/>
      <Offerings/>
      <Training/>
      <FAQs/>
      <Partner/>
      <Footer/>
      <LowerFooter/>
    </div>
  );
}

export default App;
