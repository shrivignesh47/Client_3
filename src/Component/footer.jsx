import React from 'react';
import ShinyText from '../components/ShinyText/ShinyText';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import swiggyLogo from '../Assets/swiggy1.svg';
import zomatoLogo from '../Assets/zomato2.png';
import swiggydeq from '../Assets/delivery.gif';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Hotel Info */}
        <div>
          <h2 className="text-4xl font-bold text-gold-500">
            <ShinyText text="Hotel Taj" disabled={false} speed={3} className="fabril-fatface text-4xl" />
          </h2>
          <p className="text-gray-400 mt-2 text-lg">
            Experience luxury dining with authentic flavors and world-class service.
          </p>
        </div>

        {/* Center Section - Location */}
        <div className="text-center flex flex-col justify-center space-y-2">
          <h3 className="text-xl font-semibold text-gray-200">Located at:</h3>
          <p className="text-gray-400">1235 Main Street, Ooty, Tamil Nadu, India</p>
        </div>

        {/* Right Section - Logos, Delivery GIF, and Contact */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Order on:</h3>
          <div className="flex space-x-5">
            {/* Swiggy Logo */}
            <div className="relative group cursor-pointer">
              <img src={swiggyLogo} alt="Swiggy" className="w-20 transition-transform transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>

            {/* Zomato Logo */}
            <div className="relative group cursor-pointer">
              <img src={zomatoLogo} alt="Zomato" className="w-20 transition-transform transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
          </div>

          {/* Delivery GIF (Online Source) */}
          <div className="text-center mt-4">
            <img 
              src={swiggydeq} 
              alt="Swiggy Delivery Bike" 
              className="w-24 mx-auto" 
            />
          </div>

          {/* Phone Number */}
          <div className="text-gray-400 mt-4 text-center">
            <p>Call us: +91 123 456 7890</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 justify-center">
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-500 transition-all duration-300" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition-all duration-300" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400 transition-all duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 Hotel Taj. All rights reserved.
      </div>
    </footer>
  );
}
