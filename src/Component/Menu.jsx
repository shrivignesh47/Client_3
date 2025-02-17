import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards"; // Effect-specific styles

// Import required modules
import { EffectCards } from "swiper/modules";

// Import styles
import "../Styles/vm.css";

// Import all menu images
import menu1 from "../Assets/menu/hotel_taj_menu_page-0001.jpg";
import menu2 from "../Assets/menu/hotel_taj_menu_page-0002.jpg";
import menu3 from "../Assets/menu/hotel_taj_menu_page-0003.jpg";
import menu4 from "../Assets/menu/hotel_taj_menu_page-0004.jpg";
import menu5 from "../Assets/menu/hotel_taj_menu_page-0005.jpg";
import menu6 from "../Assets/menu/hotel_taj_menu_page-0006.jpg";
import menu7 from "../Assets/menu/hotel_taj_menu_page-0007.jpg";
import menu8 from "../Assets/menu/hotel_taj_menu_page-0008.jpg";

import { TextHoverEffect } from "../components/ui/text-hover-effect";
import ShinyText from "../components/ShinyText/ShinyText";

export default function Menu() {
  // Array of menu images
  const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8];

  return (
    <>
      <div className="text-center mt-8">
        <ShinyText
          text="Our Menu"
          disabled={false}
          speed={3}
          className="custom-class fabril-fatface text-5xl"
        />
        <p className="mt-2 text-xl text-[#d2a260]">
          Explore our delicious offerings
        </p>
      </div>
      <div className="min-h-screen flex justify-center items-center bg-[#121414] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          <div className="flex flex-col justify-center space-y-4 text-[#D2A260]">
            <ShinyText
              text="Delicious Dishes"
              disabled={false}
              speed={3}
              className="custom-class fabril-fatface text-4xl"
            />
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
          </div>
          <div className="flex flex-col items-center">
          <TextHoverEffect text="..Swipe-->.." className="mb-4 ml-auto ml-[10vh]"/>
            <div className="w-full max-w-xs md:max-w-md">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="menuswiper"
                style={{
                  width: "100%",
                  height: "400px",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                {menuImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Menu Page ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
