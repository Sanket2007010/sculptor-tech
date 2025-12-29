import React from 'react';
import './Careers.css';

const Careers = () => {
  const positions = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'On-site',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'Hybrid',
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      type: 'Part-time'
    }
  ];

  return (
    <section id="careers" className="careers-section">
      <div className="container">
        <h2 className="section-title">Join Our Team</h2>
        <p className="section-subtitle">
          Be part of something amazing. Explore our open positions.
        </p>
        
        <div className="careers-grid">
          {positions.map((position) => (
            <div key={position.id} className="career-card">
              <h3 className="career-title">{position.title}</h3>
              <div className="career-details">
                <span className="career-badge">{position.location}</span>
                <span className="career-badge">{position.type}</span>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;