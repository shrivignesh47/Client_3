import React from 'react'
import Navbar from './Navbar'
import '../Styles/Home.css'
import logo from '../Assets/taj.png'
// import { CarouselWithIndicatorsExample } from './carouselimg'
import Car from './Carousel1'
export default function Homepage() {
  return (
    <div className='homecontainer' style={{backgroundColor:'#D2AC47' , height:'100vh' , width:'100vw'}}>
    <Navbar/>
    <div  className='carousel-right1'style={{marginLeft:'10vh' , height:'0vh'}}>
    <div className="carousel-right" style={{
      flex: '1 1 60%', 
      height: '90.9vh', 
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
    
    <h1 className="text-[#D2AC47] font-serif text-[11px] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[17px] font-bold leading-relaxed tracking-wide">
    At Hotel Taj, we craft exceptional meals blending tradition and innovation, using only the finest ingredients. Whether it’s a family meal, casual outing, or grand celebration, our elegant ambiance and impeccable service make every moment unforgettable. Indulge in aromatic Indian delicacies and global cuisines, thoughtfully prepared to delight your taste buds. Make your events truly special with our catering services!
    </h1>
    </div>  
    </div>
    </div>
  )
}
