import React, { useState } from 'react';
import '../Styles/Navbar.css'; // Assuming your CSS is in this file
import logo from '../Assets/taj.png'; // Import the logo
import ShinyText from '../components/ShinyText/ShinyText';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`fabril-fatface links ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={closeMenu}>
          &times;
        </div>
        <div className="link" onClick={closeMenu}><ShinyText text="Home" disabled={false} speed={3} className="custom-class fabril-fatface text-1xl" /></div>
        <div className="link" onClick={closeMenu}><ShinyText text="Menu" disabled={false} speed={3} className="custom-class fabril-fatface text-1xl" /></div>
        <div className="link" onClick={closeMenu}><ShinyText text="About" disabled={false} speed={3} className="custom-class fabril-fatface text-1xl" /></div>
        <div className="link" onClick={closeMenu}><ShinyText text="Contact" disabled={false} speed={3} className="custom-class fabril-fatface text-1xl" /></div>
      </div>
      <img className="navbar-logo" src={logo} alt="Hotel Taj Logo" />
    </nav>
  );
}
