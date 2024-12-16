import "../style/skills.css";
import React from 'react';

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="text">
        <span>Technical and Professional</span>
        <h2>My SKILLS</h2>
      </div>
      
      <div className="skill-main">
        <div className="skill-left">
          <h3>TECHNICAL SKILLS</h3>
          <div className="skill-bar">
            <div className="info">
              <p>HTML</p>
              <p>80%</p>
            </div>
            <div className="bar">
              <span className="html"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>JAVASCRIPT</p>
              <p>60%</p>
            </div>
            <div className="bar">
              <span className="Javascript"></span>
            </div>
          </div> 

          <div className="skill-bar">
            <div className="info">
              <p>CSS</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <span className="css"></span>
            </div>
          </div> 

          <div className="skill-bar">
            <div className="info">
              <p>Figma</p>
              <p>40%</p>
            </div>
            <div className="bar">
              <span className="figma"></span>
            </div>
          </div> 
          
           <div className="skill-left">
           <h3>PROFESSIONAL SKILLS</h3>
          
          <div className="skill-bar">
            <div className="info">
              <p>Creativity</p>
              <p>60%</p>
            </div>
            <div className="bar">
              <span className="creativity"></span>
            </div>
          </div> 

          <div className="skill-bar">
            <div className="info">
              <p>COMMUNICATION</p>
              <p>70%</p>
            </div>
            <div className="bar">
              <span className="communication"></span>
            </div>
          </div> 
          

          <div className="skill-bar">
            <div className="info">
              <p>Project Management</p>
              <p>50%</p>
            </div>
            <div className="bar">
              <span className="project-management"></span>
            </div>
          </div> 

          <div className="skill-bar">
            <div className="info">
              <p>TEAM WORKER</p>
              <p>85%</p>
            </div>
            <div className="bar">
              <span className="team-worker"></span>
            </div>
          </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
