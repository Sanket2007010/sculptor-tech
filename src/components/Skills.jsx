import React, { useEffect, useState } from "react";
import "./Skills.css";

const skillsData = [
  { name: "Website Design (HTML, CSS, JS)", level: 100 },
  { name: "Mobile Application Development", level: 60 },
  { name: "Data Management & Analytics", level: 70 },
  { name: "Cloud Solutions (Azure)", level: 85 },
  { name: "Web App Development (Angular, ASP .NET, React)", level: 90 },
  { name: "Web API Development (NodeJS, .NET Core)", level: 75 },
  { name: "Photoshop", level: 40 },
  { name: "CMS", level: 80 },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-container">

        <h2 className="title">Our Skills</h2>
        <p className="subtitle">
          We specialize in delivering innovative IT solutions that drive business growth.
        </p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-title">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className={`progress-fill ${animate ? "animate" : ""}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
