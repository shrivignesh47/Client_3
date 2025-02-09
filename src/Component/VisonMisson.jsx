// import React, { useState, useEffect } from "react";
// import { Utensils, Pizza, Coffee, IceCream, Salad } from "lucide-react";
// import { AnimatedFoodIcon } from "./animated-food-icon";
// import "../Styles/vm.css";
// export default function VisionMission() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger visibility after component mounts
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#121414] p-4 overflow-hidden">
//       <div
//         style={{
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? "translateY(0)" : "translateY(20px)",
//           transition: "opacity 0.8s, transform 0.8s",
//         }}
//         className="max-w-4xl mx-auto"
//       >
//         <h1 className=" fabril-fatface text-4xl sm:text-5xl font-bold text-center mb-8 font-playfair text-[#d2a260]">
//           Our Vision & Mission
//         </h1>
//         <div className="space-y-12">
//           <div
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateX(0)" : "translateX(-50px)",
//               transition: "opacity 0.8s 0.2s, transform 0.8s 0.2s",
//             }}
//           >
//             <h2 className="fabril-fatface text-2xl sm:text-3xl font-semibold mb-4 flex items-center justify-center font-playfair text-[#d2a260]">
//               <Utensils className="mr-2" />
//               Vision
//             </h2>
//             <p className="fabril-fatface text-lg sm:text-xl text-[#D2A260] text-center">
//               To become a cherished dining destination known for delivering unforgettable culinary experiences, where
//               every meal brings joy, comfort, and a sense of togetherness, inspiring a love for great food and
//               exceptional service.
//             </p>
//           </div>
//           <div
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateX(0)" : "translateX(50px)",
//               transition: "opacity 0.8s 0.4s, transform 0.8s 0.4s",
//             }}
//           >
//             <h2 className="fabril-fatface text-2xl sm:text-3xl font-semibold mb-4 flex items-center justify-center font-playfair text-[#D2A260]">
//               <Utensils className="mr-2" />
//               Mission
//             </h2>
//             <p className="fabril-fatface text-lg sm:text-xl text-[#D2A260] text-center">
//               To delight our guests with a wide range of freshly prepared, high-quality dishes that celebrate flavor and
//               tradition. We are committed to providing warm, attentive service, maintaining the highest standards of
//               cleanliness, and creating a welcoming atmosphere where every visit feels like a celebration of great food.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12 flex justify-around">
//         <AnimatedFoodIcon icon={<Pizza size={48} color="#121414" />} delay={0.2} />
//         <AnimatedFoodIcon icon={<Coffee size={48} color="#121414" />} delay={0.4} />
//         <AnimatedFoodIcon icon={<IceCream size={48} color="#121414" />} delay={0.6} />
//         <AnimatedFoodIcon icon={<Salad size={48} color="#121414" />} delay={0.8} />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Utensils, Pizza, Coffee, IceCream, Salad } from "lucide-react";
import { LampContainer } from "../components/ui/lamp";
import { AnimatedFoodIcon } from "./animated-food-icon";
import "../Styles/vm.css";
import ShinyText from "../components/ShinyText/ShinyText";

export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <LampContainer >
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-center"
      >
        <h1 className="fabril-fatface text-4xl sm:text-5xl font-bold text-[#E6CBA8] stroke-1 stroke-black font-playfair mt-[30vh]">
          Our Vision & Mission
        </h1>
      </motion.div>

      <div className="min-h-dvw p-4 overflow-hidden mt-[10vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="fabril-fatface text-2xl sm:text-3xl font-semibold mb-4 flex items-center justify-center font-playfair text-[#d2a260]">
              <Utensils className="mr-2" />
              <ShinyText text="Vision" disabled={false} speed={3} className="custom-class fabril-fatface text-3xl" />
            </h2>
            <p className="fabril-fatface text-lg sm:text-xl text-[#D2A260] text-center">
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
          >
            <h2 className="fabril-fatface text-2xl sm:text-3xl font-semibold mb-4 flex items-center justify-center font-playfair text-[#D2A260]">
              <Utensils className="mr-2" />
              <ShinyText text="Misson" disabled={false} speed={3} className="custom-class fabril-fatface text-3xl" />
            </h2>
            <p className="fabril-fatface text-lg sm:text-xl text-[#D2A260] text-center">
              To delight our guests with a wide range of freshly prepared, high-quality dishes that celebrate flavor and
              tradition. We are committed to providing warm, attentive service, maintaining the highest standards of
              cleanliness, and creating a welcoming atmosphere where every visit feels like a celebration of great food.
            </p>
          </motion.div>
        </motion.div>

        {/* Animated Food Icons */}
        <div className="mt-12 flex justify-around">
          <AnimatedFoodIcon icon={<Pizza size={48} color="#121414" />} delay={0.2} />
          <AnimatedFoodIcon icon={<Coffee size={48} color="#121414" />} delay={0.4} />
          <AnimatedFoodIcon icon={<IceCream size={48} color="#121414" />} delay={0.6} />
          <AnimatedFoodIcon icon={<Salad size={48} color="#121414" />} delay={0.8} />
        </div>
      </div>
    </LampContainer>
  );
}
