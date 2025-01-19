import React from 'react';
import './hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Bojan Crnovcic</span> .
        </h1>
        <h2>Full-Stack Developer | UI/UX Designer</h2>
        <p>
          Creating stunning websites and building powerful applications, from concept to execution.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn primary">
            About Me
          </a>
          <a href="#projects" className="btn secondary">
            My Projects
          </a>
          <a href="#contact" className="btn tertiary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-illustration">
      </div>
    </section>
  );
};

export default Hero;
