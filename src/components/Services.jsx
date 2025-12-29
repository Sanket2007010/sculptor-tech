import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: '📱'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions',
      icon: '☁️'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience',
      icon: '🎨'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to grow your online presence',
      icon: '📊'
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance for your technology and digital transformation',
      icon: '💡'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer comprehensive technology solutions tailored to your business needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;