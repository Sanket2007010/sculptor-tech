import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title" style={{color: 'white'}}>Get In Touch</h2>
        <p className="section-subtitle" style={{color: '#e5e7eb'}}>
          Ready to start your next project? Contact us today!
        </p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <Mail className="contact-icon" size={24} />
              <div>
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">contact@sculptortechpvtltd.com</p>
                <p className="contact-value">sculptortechpvtltd@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" size={24} />
              <div>
                <h3 className="contact-label">Phone</h3>
                <p className="contact-value">+91 8623034275</p>
               < p className="contact-value"> +91 8668584275</p>
               
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">𝕏</a>
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">in</a>
              <a href="#" className="social-link">📷</a>
            </div>
          </div>
          
          <div className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="form-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="form-input"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="form-input"
            ></textarea>
            <button onClick={handleSubmit} className="submit-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;