import React from 'react';
import Navbar from './Navbar';
import '../Styles/Home.css';
import logo from '../Assets/taj.png';
import Car from './Carousel1';
import Gallery from './Gallery';
import VisionMission from './VisonMisson';
import { InstagramEmbed } from './InstagramEmbed';
import dpattern from '../Assets/dpattern.png';
import Menu from './Menu';
import Location from './Location';
import { InfiniteMovingCardsDemo } from './Testimonal';
import Footer from './footer';

export default function Homepage() {
  return (
    <div className="homecontainer h-[600vh]">
      <Navbar />
      {/* Carousel Right Section */}
      <div className="carousel-right1" style={{ height: '0vh' }}>
        <div
          className="carousel-right mr-[-0.0vh] t-1 sm:h-[110vh] h-[100vh]" // Margin applied for mobile view
          style={{
            flex: '1 1 20%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div className="car">
            <Car />
          </div>
        </div>
      </div>

      {/* Main Carousel Section */}
      <div
        className="carousel1 relative flex flex-col items-center justify-center 
                   h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[110vh] w-full md:ml-1 lg:ml-0"
      >
        <img
          className="logo  mt-[-20vh] md:mt-[-30vh] lg:mt-[-10vh] w-[30vh] md:w-[30vh] lg:w-[50vh] lg:mr-[100vh]"
          src={logo}
          alt="logo"
          style={{
            animation: 'fadeIn 1.5s ease-in',
            opacity: 0,
            animationFillMode: 'forwards',
            height: 'auto',
          }}
        />
        <div
          className="carousel-text w-[70%] md:w-[55%] lg:mx-0 lg:mr-[99vh]"
          style={{
            animation: 'fadeIn 1.5s ease-in',
            opacity: 0,
            animationFillMode: 'forwards',
          }}
        >
          <h1 className="fabril-fatface text-[#d2a260] font-serif text-[12px] sm:text-[14px] md:text-[16px] lg:text-[19px] leading-relaxed tracking-wide">
            At Hotel Taj, we craft exceptional meals blending tradition and innovation, using only the finest ingredients. Whether it’s a family meal, casual outing, or grand celebration, our elegant ambiance and impeccable service make every moment unforgettable. Indulge in aromatic Indian delicacies and global cuisines, thoughtfully prepared to delight your taste buds... Make your events truly special with our catering services!
          </h1>
          <img
            className="dpattern h-[20vh] w-[15vh] mx-auto mt-[-1vh] md:mt-[2vh] lg:mt-[3vh]"
            src={dpattern}
            alt="pattern"
            style={{
              width: '100%', // Ensure it's responsive
              maxWidth: '45vh', // Set max width for larger screens
            }}
          />
        </div>
      </div>

      {/* Other Sections */}
      <VisionMission />
      <InstagramEmbed  />
      <Gallery />
      <br></br>
      <br></br>
      <br></br>
      <Menu />
      <InfiniteMovingCardsDemo />
      <Location />
      <Footer/>
    </div>
  );
}