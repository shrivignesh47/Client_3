import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Utensils, Pizza, Coffee, IceCream, Salad } from "lucide-react";
import { LampContainer } from "../components/ui/lamp";
import { AnimatedFoodIcon } from "./animated-food-icon";
import ShinyText from "../components/ShinyText/ShinyText";

export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <LampContainer className="lg:mt-[-14vh] h-[100vh] md:mt-[10vh] sm:mt-[-20vh] mt-[10vh]">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-[1vh] text-center py-4 bg-clip-text text-transparent md:text-7xl font-medium tracking-tight"
        >
        </motion.div>
        <div className="h-50 p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8 lg:space-y-12 lg:mt-[50vh] md:mt-[30vh]"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-4xl font-bold text-[#E6CBA8] stroke-1 stroke-black mt-10 md:mt-[30vh]">
                Our Vision & Mission
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center justify-center text-[#d2a260]">
                <Utensils className="mr-2" aria-label="Utensils Icon" />
                <ShinyText
                  text="Vision"
                  disabled={false}
                  speed={3}
                  className="text-xl sm:text-2xl"
                />
              </h2>
              <p className="text-sm sm:text-base text-[#D2A260] px-4 sm:px-0">
                To become a cherished dining destination known for delivering unforgettable culinary experiences, where
                every meal brings joy, comfort, and a sense of togetherness, inspiring a love for great food and
                exceptional service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center justify-center text-[#D2A260]">
                <Utensils className="mr-2" aria-label="Utensils Icon" />
                <ShinyText
                  text="Mission"
                  disabled={false}
                  speed={3}
                  className="text-xl sm:text-2xl"
                />
              </h2>
              <p className="text-sm sm:text-base text-[#D2A260] px-4 sm:px-0">
                To delight our guests with a wide range of freshly prepared, high-quality dishes that celebrate flavor and
                tradition. We are committed to providing warm, attentive service, maintaining the highest standards of
                cleanliness, and creating a welcoming atmosphere where every visit feels like a celebration of great food.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </LampContainer>
      <div className="mt-[-20vh] p-5 flex flex-wrap justify-center sm:justify-around space-x-4 sm:space-x-8 bg-[#121414]">
        <AnimatedFoodIcon icon={<Pizza size={40} color="#d2a260" />} delay={0.2} />
        <AnimatedFoodIcon icon={<Coffee size={40} color="#d2a260" />} delay={0.4} />
        <AnimatedFoodIcon icon={<IceCream size={40} color="#d2a260" />} delay={0.6} />
        <AnimatedFoodIcon icon={<Salad size={40} color="#d2a260" />} delay={0.8} />
      </div>
    </div>
  );
}