import React from 'react';
import './about.scss';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <img
          src='/assets/coolProfilePicturesMonkey.jpg'
          alt="Bojan Crnovcic"
          className="profile-pic"
        />
        
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Bojan Crnovcic, a Full-Stack Developer and Web Designer. I specialize in creating
            seamless web applications with a focus on both functionality and design. I am passionate about
            building scalable solutions and delivering the best user experiences.
          </p>
        </div>
      </div>

      <div className="about-links">
        <p>Want to see my work?</p>
        <ul>
          <li><a href="#projects">Check out my projects</a></li>
          <li><a href="#content">Explore my content</a></li>
        </ul>
      </div>
    </section>
  );
};

export default About;

