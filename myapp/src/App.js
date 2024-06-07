
import './App.css';

import React from 'react';


import NavBar from './components/navbar';
import Services from './components/services';

import ContactForm from './components/contactForm';
import Footer from './components/footer';
import Home from './components/home'
import Portfolio from './components/portfolio';




function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <Portfolio/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

