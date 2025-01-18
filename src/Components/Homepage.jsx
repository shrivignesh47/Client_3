import React from 'react'
import Navbar from './Navbar'
import '../Styles/Home.css'
import logo from '../Assets/taj.png'
export default function Homepage() {
  return (
    <div className='homecontainer' style={{backgroundColor:'#D2AC47' , height:'100vh' , width:'100vw'}}>
    <Navbar/>
    <div className='carousel'>
    <img  className='logo1' src={logo} alt="logo"/>
    <div className='carousel-text' style={{height:'280px',width:'55vw',backgroundColor:'',marginLeft:'2vh'}}>
    <h1 style={{color:'#D2AC47'}}>At Hotel Taj, we pride ourselves on serving a diverse menu that blends traditional and modern recipes, crafted using the finest ingredients. Whether you're here for a family meal, a casual outing, 
    or a special celebration, we aim to make every visit memorable with our exceptional food, elegant ambiance, and impeccable service.  

    From aromatic Indian delicacies to a variety of global cuisines, our chefs bring passion and creativity to every dish, ensuring a delightful journey for your taste buds.
     We also offer catering services to make your events truly special.</h1>
    </div>
   </div>
    </div>
  )
}
