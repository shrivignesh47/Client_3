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
export default function Homepage() {
  const [currentDish, setCurrentDish] = useState('Beef Briyani');
  const dishNames = ['Beef Briyani', 'Soup', 'Chicken Briyani', 'Lemon Chicken'];

  useEffect(() => {
    let interval;
    const updateDish = () => {
      setCurrentDish((prevDish) => {
        const currentIndex = dishNames.indexOf(prevDish);
        const nextIndex = (currentIndex + 1) % dishNames.length;
        return dishNames[nextIndex];
      });
    };

    interval = setTimeout(() => {
      const currentIndex = dishNames.indexOf(currentDish);

      // If it's the last item, delay 4 seconds, otherwise default 3 seconds
      const delay = currentIndex === dishNames.length - 1 ? 3500 : 2500;
      clearTimeout(interval);
      updateDish();
    }, currentDish === dishNames[dishNames.length - 1] ? 3500 : 2500);

    return () => clearTimeout(interval); // Cleanup interval on unmount
  }, [currentDish]);
  return (
    <div className='homecontainer h-[screen]'>
    <Navbar/>
    <div  className='carousel-right1'style={{marginLeft:'10vh' , height:'0vh'}}>
    <div className="carousel-right" style={{
      flex: '1 1 60%', 
      height: '100vh',
      // backgroundColor:'red',
      overflow: 'hidden', 
      position: 'relative',
      // marginLeft: '10vh',
    }}>
    <Car/>

    <h6 className="fonty">{currentDish}</h6>
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
    
    <h1 className="text-[#D2A260] font-serif text-[11px] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[17px] font-bold leading-relaxed tracking-wide mt-[-3vh]">
    At Hotel Taj, we craft exceptional meals blending tradition and innovation, using only the finest ingredients. Whether it’s a family meal, casual outing, or grand celebration, our elegant ambiance and impeccable service make every moment unforgettable. Indulge in aromatic Indian delicacies and global cuisines, thoughtfully prepared to delight your taste buds. Make your events truly special with our catering services!
    </h1>
    <img className='dpattern h-[25vh] ml-[24vh] mt-[-2vh]' src={dpattern} alt='pattern' />
    </div>  
    </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    <Gallery/>
    <br></br>
    <br></br>
    <br></br>
    <VisionMission/>
    <InstagramEmbed  profileUrl="https://www.instagram.com/hotel_taj_ooty_/"/>
    </div>
  )
}
