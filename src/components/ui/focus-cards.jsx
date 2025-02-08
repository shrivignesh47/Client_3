import React, { useState } from "react";
import { cn } from "../../lib/utils";

// Import all images manually
import img1 from "../../Assets/menu/hotel_taj_menu_page-0001.jpg";
import img2 from "../../Assets/menu/hotel_taj_menu_page-0002.jpg";
import img3 from "../../Assets/menu/hotel_taj_menu_page-0003.jpg";
import img4 from "../../Assets/menu/hotel_taj_menu_page-0004.jpg";
import img5 from "../../Assets/menu/hotel_taj_menu_page-0005.jpg";
import img6 from "../../Assets/menu/hotel_taj_menu_page-0006.jpg";
import img7 from "../../Assets/menu/hotel_taj_menu_page-0007.jpg";
import img8 from "../../Assets/menu/hotel_taj_menu_page-0008.jpg";

// Image data array
const menuCards = [
  { src: img1, title: "Menu Page 1" },
  { src: img2, title: "Menu Page 2" },
  { src: img3, title: "Menu Page 3" },
  { src: img4, title: "Menu Page 4" },
  { src: img5, title: "Menu Page 5" },
  { src: img6, title: "Menu Page 6" },
  { src: img7, title: "Menu Page 7" },
  { src: img8, title: "Menu Page 8" }
];

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0 w-full h-full"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {menuCards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  );
}
