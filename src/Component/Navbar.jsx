import React, { useState } from 'react';
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
    <nav className="navbar bg-[#121414] border-b-2 border-[#ecd5b7] shadow-lg sticky top-0 z-50 h-16 md:h-20">
      {/* Container for Logo, Links, and Hamburger */}
      <div className="flex items-center justify-between px-0 py-1 md:px-6 md:py-1 h-full w-full">
        {/* Logo (Far Left) */}
        <div className="logo flex items-center">
          <img
            src={logo}
            alt="Hotel Taj Logo"
            className="navbar-logo w-[10vh] md:w-20 h-auto"
          />
        </div>

        {/* Hamburger Icon (Far Right for Mobile) */}
        <div className="md:hidden text-[#ecd5b7] text-3xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links (Far Right for Desktop) */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 bg-[#121414] md:bg-transparent absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto`}
        >
          {/* Close Button for Mobile */}
          <div className="md:hidden text-right px-8 py-4 bg-[#121414] text-[#ecd5b7] text-3xl cursor-pointer">
            <span onClick={closeMenu}>×</span>
          </div>

          {/* Links */}
          <div className="link px-4 py-2 md:p-0 text-[#ecd5b7] hover:text-[#ffffff] md:text-base" onClick={closeMenu}>
            <ShinyText text="Home" disabled={false} speed={3} className="custom-class fabril-fatface text-xl md:text-lg" />
          </div>
          <div className="link px-4 py-2 md:p-0 text-[#ecd5b7] hover:text-[#ffffff] md:text-base" onClick={closeMenu}>
            <ShinyText text="Menu" disabled={false} speed={3} className="custom-class fabril-fatface text-xl md:text-lg" />
          </div>
          <div className="link px-4 py-2 md:p-0 text-[#ecd5b7] hover:text-[#ffffff] md:text-base" onClick={closeMenu}>
            <ShinyText text="About" disabled={false} speed={3} className="custom-class fabril-fatface text-xl md:text-lg" />
          </div>
          <div className="link px-4 py-2 md:p-0 text-[#ecd5b7] hover:text-[#ffffff] md:text-base" onClick={closeMenu}>
            <ShinyText text="Contact" disabled={false} speed={3} className="custom-class fabril-fatface text-xl md:text-lg" />
          </div>
        </div>
      </div>
    </nav>
  );
}