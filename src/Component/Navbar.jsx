import React, { useState } from 'react';
import '../Styles/Navbar.css'; // Assuming your CSS is in this file
import logo from '../Assets/taj.png'; // Import the logo

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
      <div className="logo">Hotel Taj</div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`links ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={closeMenu}>
          &times;
        </div>
        <div className="link" onClick={closeMenu}>Home</div>
        <div className="link" onClick={closeMenu}>Menu</div>
        <div className="link" onClick={closeMenu}>About</div>
        <div className="link" onClick={closeMenu}>Contact</div>
      </div>
      <img className="navbar-logo" src={logo} alt="Hotel Taj Logo" />
    </nav>
  );
}
