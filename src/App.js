import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Testimonials from './components/Skills';
import Careers from './components/Careers';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Gallery />
      <Testimonials />
      <Contact />
      <Careers />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}

export default App;