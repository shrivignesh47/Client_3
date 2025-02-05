import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"; // Core Swiper styles
import "swiper/css/effect-cards"; // Effect-specific styles

// Import required modules
import { EffectCards } from "swiper/modules";

// Import all menu images
import menu1 from "../Assets/menu/hotel_taj_menu_page-0001.jpg";
import menu2 from "../Assets/menu/hotel_taj_menu_page-0002.jpg";
import menu3 from "../Assets/menu/hotel_taj_menu_page-0003.jpg";
import menu4 from "../Assets/menu/hotel_taj_menu_page-0004.jpg";
import menu5 from "../Assets/menu/hotel_taj_menu_page-0005.jpg";
import menu6 from "../Assets/menu/hotel_taj_menu_page-0006.jpg";
import menu7 from "../Assets/menu/hotel_taj_menu_page-0007.jpg";
import menu8 from "../Assets/menu/hotel_taj_menu_page-0008.jpg";

export default function Menu() {
  // Array of menu images
  const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8];

  return (
    <>
      {/* Header Section */}
    
        <h1 className="text-5xl font-bold text-[#352323]">Our Menu</h1>
        <p className="mt-2 text-xl text-[#352323]">
          Explore our delicious offerings
        </p>


      {/* Grid Layout for Swiper and Description */}
      <div className="min-h-screen flex justify-center items-center bg-[#d2a260]">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-full max-w-lg bg-blue-200" // Debugging background
        style={{ height: "500px" }} // Fixed height
      >
        {menuImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Menu Page ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-6">
          {/* Left Column: Swiper Carousel */}
          <div className="flex justify-center items-center border-2 border-red-500"> {/* Debugging border */}
          </div>

          {/* Right Column: Menu Description */}
          <div className="flex flex-col justify-center space-y-4 text-[#352323]">
            <h2 className="text-4xl font-semibold">Delicious Dishes</h2>
            <p className="text-lg">
              Our menu features a wide variety of dishes crafted with love and
              care. From traditional recipes to modern twists, every dish is
              designed to satisfy your taste buds.
            </p>
            <p className="text-lg">
              Whether you're craving spicy curries, flavorful biryanis, or
              decadent desserts, we have something for everyone. Explore our
              menu and discover your next favorite meal!
            </p>
            <button className="mt-4 px-6 py-3 bg-[#352323] text-[#d2a260] font-semibold rounded-full shadow-lg hover:bg-[#291b1b] transition-colors duration-300">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}