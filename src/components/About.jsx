import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">

          {/* Left Content */}
          <div className="about-content">
            <h2 className="section-title" style={{ color: 'white', textAlign: 'left' }}>
              SculptorTech Pvt Ltd
            </h2>

            <p className="about-text">
              SculptorTech Pvt Ltd helps Small and Medium Enterprises achieve their Revenue Goals
              by providing Technology and Business Solutions. We are committed to building modern,
              scalable and creative digital solutions for business growth.
            </p>

            <h3 className="section-title" style={{ color: 'white', textAlign: 'left' }}>
              Specialities
            </h3>

            <ul className="about-list">
              <li>Web Design & Development</li>
              <li>Mobile App Development</li>
              <li>Social Media Marketing</li>
              <li>SEO (Search Engine Optimization)</li>
              <li>Web Analytics</li>
            </ul>

            <div className="about-details">

              <p><strong>Industry:</strong> IT Services and IT Consulting</p>
              <p><strong>Company size:</strong> 05-20 employees</p>
              <p><strong>Headquarters:</strong> Pune, Maharashtra</p>
              <p><strong>Email:</strong> sculptortechpvtltd@gmail.com</p>
              <p><strong>Freelance:</strong> Available</p>
              <p><strong>Company Type:</strong> Private Limited</p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
