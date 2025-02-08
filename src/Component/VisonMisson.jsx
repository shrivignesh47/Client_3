import React, { useState, useEffect } from "react";
import { Utensils, Pizza, Coffee, IceCream, Salad } from "lucide-react";
import { AnimatedFoodIcon } from "./animated-food-icon";
import "../Styles/vm.css";
export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger visibility after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#121414] p-4 overflow-hidden">
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s, transform 0.8s",
        }}
        className="max-w-4xl mx-auto"
      >
        <h1 className=" fabril-fatface text-4xl sm:text-5xl font-bold text-center mb-8 font-playfair text-[#d2a260]">
          Our Vision & Mission
        </h1>
        <div className="space-y-12">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s 0.2s, transform 0.8s 0.2s",
            }}
          >
            <h2 className="fabril-fatface text-2xl sm:text-3xl font-semibold mb-4 flex items-center justify-center font-playfair text-[#d2a260]">
              <Utensils className="mr-2" />
              Vision
            </h2>
            <p className="fabril-fatface text-lg sm:text-xl text-[#D2A260] text-center">
              To become a cherished dining destination known for delivering unforgettable culinary experiences, where
              every meal brings joy, comfort, and a sense of togetherness, inspiring a love for great food and
              exceptional service.
            </p>
          </div>
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.8s 0.4s, transform 0.8s 0.4s",
            }}
          >
            <h2 className="fabril-fatface text-2xl sm:text-3xl font-semibold mb-4 flex items-center justify-center font-playfair text-[#D2A260]">
              <Utensils className="mr-2" />
              Mission
            </h2>
            <p className="fabril-fatface text-lg sm:text-xl text-[#D2A260] text-center">
              To delight our guests with a wide range of freshly prepared, high-quality dishes that celebrate flavor and
              tradition. We are committed to providing warm, attentive service, maintaining the highest standards of
              cleanliness, and creating a welcoming atmosphere where every visit feels like a celebration of great food.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-around">
        <AnimatedFoodIcon icon={<Pizza size={48} color="#121414" />} delay={0.2} />
        <AnimatedFoodIcon icon={<Coffee size={48} color="#121414" />} delay={0.4} />
        <AnimatedFoodIcon icon={<IceCream size={48} color="#121414" />} delay={0.6} />
        <AnimatedFoodIcon icon={<Salad size={48} color="#121414" />} delay={0.8} />
      </div>
    </div>
  );
}