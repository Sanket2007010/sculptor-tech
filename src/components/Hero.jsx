import React from 'react';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Sculpting Your Digital Future</h1>
        <p className="hero-subtitle">
          Innovative technology solutions that transform businesses
        </p>
        <button className="btn-primary cta-btn" onClick={scrollToContact}>
          Get Started <ChevronRight size={20} />
        </button>
      </div>
      <div className="hero-gradient"></div>
    </section>
  );
};

export default Hero;