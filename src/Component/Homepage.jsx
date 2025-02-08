import React , { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../Styles/Home.css'
import logo from '../Assets/taj.png'
// import { CarouselWithIndicatorsExample } from './carouselimg'
import Car from './Carousel1'
import Gallery  from './Gallery'
import VisionMission from './VisonMisson'
import { InstagramEmbed } from './InstagramEmbed'
import dpattern from '../Assets/dpattern.png'
import Menu from './Menu'
import giffy from '../Assets/giffy.gif'
export default function Homepage() {
  return (
    <div className='homecontainer h-[screen]'>
    <Navbar/>
    <div  className='carousel-right1'style={{height:'0vh'}}>
    <div className="carousel-right" style={{
      flex: '1 1 60%', 
      height: '100vh',
      // backgroundColor:'red',
      overflow: 'hidden', 
      position: 'relative',
      // marginLeft: '10vh',
    }}>
    <Car/>
    </div>
    
    </div>
    <div className='carousel1'>
    <img className="logo1 -ml-[-240px]" src={logo} alt="logo"   style={{
      animation: 'fadeIn 1.5s ease-in',
      opacity: 0,
      animationFillMode: 'forwards',
    }}/>
    <div className="carousel-text h-[300px] w-[54vw] ml-[-0.3vh]"  style={{
      animation: 'fadeIn 1.5s ease-in',
      opacity: 0,
      animationFillMode: 'forwards',
    }}>
    
    <h1 className="fabril-fatface text-[#d2a260] font-serif text-[11px] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[17px]  leading-relaxed tracking-wide mt-[-3vh]">
    At Hotel Taj, we craft exceptional meals blending tradition and innovation, using only the finest ingredients. Whether it’s a family meal, casual outing, or grand celebration, our elegant ambiance and impeccable service make every moment unforgettable. Indulge in aromatic Indian delicacies and global cuisines, thoughtfully prepared to delight your taste buds. Make your events truly special with our catering services!
    </h1>
    <img className='dpattern h-[25vh] ml-[24vh] mt-[-2vh]' src={dpattern} alt='pattern' />
  
    </div>  
    </div>
    <br></br>
    <br></br>

    <VisionMission/>
    <Gallery/>
    <br></br>
    <br></br>
    <br></br>
    <InstagramEmbed  profileUrl="https://www.instagram.com/hotel_taj_ooty_/"/>
    <Menu/>
    </div>
  )
}
