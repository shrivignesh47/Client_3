import React from 'react';
import '../Styles/Navbar.css';

export default function NavbarWithHoverEffect() {
  return (
    <div className="navbar">
      <div className="logo">Hotel Taj Restaurant</div>
      <div className="links">
        <a href="#home" className="link">Home</a>
        <a href="#services" className="link">Services</a>
        <a href="#about" className="link">About</a>
        <a href="#contact" className="link">Contact</a>
      </div>
    </div>
  );
}
