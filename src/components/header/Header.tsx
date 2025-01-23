import { useState, useEffect } from 'react';
import { FaRegLightbulb, FaMoon } from "react-icons/fa6";
import './header.scss';
import "../../themes/light.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <header className="header">
      <div className="logo">BojanC</div>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        ☰
      </button>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
        {isDarkMode ? <FaRegLightbulb /> : <FaMoon />}
      </button>
    </header>
  );
};

export default Header;


