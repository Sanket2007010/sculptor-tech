import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const projects = [
    { id: 1, name: "", image: "/assets/project1.jpeg" },
    { id: 2, name: "", image: "/assets/project2.jpeg" },
    { id: 3, name: "", image: "/assets/project3.jpeg" },
    { id: 4, name: "", image: "/assets/project4.jpeg" },
    { id: 5, name: "", image: "/assets/project5.jpeg" },
    { id: 6, name: "", image: "/assets/project6.jpeg" }
  ];

  return (
    <section id="gallery" className="gallery-section">

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Showcasing our recent work and achievements
        </p>

        <div className="gallery-grid">
          {projects.map((project) => (
            <div key={project.id} className="gallery-item">
              <img src={project.image} alt={project.name} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-text">{project.name}</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;
