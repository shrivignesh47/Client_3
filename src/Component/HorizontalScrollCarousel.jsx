import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from "../Assets/Gallery/IMG-20250224-WA0027.jpg";
import img2 from "../Assets/Gallery/IMG-20250224-WA0028.jpg";
import img3 from "../Assets/Gallery/IMG-20250224-WA0029.jpg";
import img4 from "../Assets/Gallery/IMG-20250224-WA0031.jpg";
import img5 from "../Assets/Gallery/IMG-20250224-WA0033.jpg";
import img6 from "../Assets/Gallery/IMG-20250224-WA0034.jpg";
import img7 from "../Assets/Gallery/IMG-20250224-WA0035.jpg";
import img8 from "../Assets/Gallery/IMG-20250224-WA0036.jpg";
import img9 from "../Assets/Gallery/IMG-20250224-WA0037.jpg";
import img10 from "../Assets/Gallery/IMG-20250224-WA0038.jpg";
import img11 from "../Assets/Gallery/IMG-20250224-WA0041.jpg";
import img12 from "../Assets/Gallery/IMG-20250224-WA0042.jpg";
import ShinyText from "../components/ShinyText/ShinyText";

const Example = () => {
  return (
    <div className="bg-[#121414] rounded-lg top-[8vh] sm:top-[10vh] md:top-[-140vh] lg:top-[-90vh] xl:top-[-100vh] relative">
      <div className="flex h-48 items-center justify-center mb-[-11vh] z-1000">
        <span className="font-semibold uppercase text-neutral-500 mb-[-20vh]">
          <ShinyText
            text="Dishes"
            disabled={false}
            speed={3}
            className="custom-class fabril-fatface text-2xl sm:text-4xl"
          />
        </span>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Smooth scrolling effect
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]); // Adjust scroll range

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
      whileInView={{ opacity: 1, scale: 1 }} // Animate when in viewport
      viewport={{ once: true }} // Trigger animation only once
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      className="group relative h-[350px] w-[510px] overflow-hidden bg-neutral-200 rounded-lg shadow-lg"
    >
      <img
        src={card.url}
        alt={`Gallery image ${card.id}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-bold">Image {card.id}</p>
      </div>
    </motion.div>
  );
};

const cards = [
  { url: img1, id: 1 },
  { url: img2, id: 2 },
  { url: img3, id: 3 },
  { url: img4, id: 4 },
  { url: img5, id: 5 },
  { url: img6, id: 6 },
  { url: img7, id: 7 },
  { url: img8, id: 8 },
  { url: img9, id: 9 },
  { url: img10, id: 10 },
  { url: img11, id: 11 },
  { url: img12, id: 12 },
];

export default Example;