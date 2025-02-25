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
      {/* LampContainer Section */}
      <LampContainer className="top-[10vh] sm:top-[15vh] md:top-[-45vh] lg:top-[-65vh] xl:top-[-34.8vh] relative">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center py-4 bg-clip-text text-transparent md:text-7xl font-medium tracking-tight"
        >
        </motion.div>
        <div className="h-50 p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8 lg:space-y-12"
          >
            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center relative"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-[#E6CBA8] stroke-1 stroke-black top-[14vh] sm:top-[10vh] md:top-[25vh] lg:top-[30vh] xl:top-[20vh] relative">
                Our Vision & Mission
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center justify-center text-[#d2a260] top-[20vh] sm:top-[30vh] md:top-[35vh] lg:top-[40vh] xl:top-[30vh] relative">
                <Utensils className="mr-2" aria-label="Utensils Icon" />
                <ShinyText
                  text="Vision"
                  disabled={false}
                  speed={3}
                  className="text-3xl sm:text-3xl"
                />
              </h2>
              <p className="text-[2.5vh] sm:text-[2.9vh] text-[#D2A260] px-4 sm:px-0 top-[25vh] sm:top-[40vh] md:top-[45vh] lg:top-[50vh] xl:top-[35vh] relative">
                To become a cherished dining destination known for delivering unforgettable culinary experiences, where
                every meal brings joy, comfort, and a sense of togetherness, inspiring a love for great food and
                exceptional service.
              </p>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center relative"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center justify-center text-[#D2A260] top-[28vh] sm:top-[40vh] md:top-[45vh] lg:top-[48vh] xl:top-[36vh] relative">
                <Utensils className="mr-2" aria-label="Utensils Icon" />
                <ShinyText
                  text="Mission"
                  disabled={false}
                  speed={3}
                  className="text-3xl sm:text-3xl"
                />
              </h2>
              <p className="text-[2.5vh] sm:text-[2.9vh] text-[#D2A260] px-4 sm:px-0 top-[34vh] sm:top-[40vh] md:top-[45vh] lg:top-[50vh] xl:top-[40vh] relative">
                To delight our guests with a wide range of freshly prepared, high-quality dishes that celebrate flavor and
                tradition. We are committed to providing warm, attentive service, maintaining the highest standards of
                cleanliness, and creating a welcoming atmosphere where every visit feels like a celebration of great food.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </LampContainer>

      <div className="top-[6vh] sm:top-[-1vh] md:top-[-30vh] lg:top-[-50vh] xl:top-[-30vh] p-5 flex flex-wrap justify-center sm:justify-around space-x-4 sm:space-x-8 relative">
      <AnimatedFoodIcon icon={<Pizza size={40} color="#d2a260" />} delay={0.2} />
      <AnimatedFoodIcon icon={<Coffee size={40} color="#d2a260" />} delay={0.4} />
      <AnimatedFoodIcon icon={<IceCream size={40} color="#d2a260" />} delay={0.6} />
      <AnimatedFoodIcon icon={<Salad size={40} color="#d2a260" />} delay={0.8} />
    </div>
    </div>
  );
}