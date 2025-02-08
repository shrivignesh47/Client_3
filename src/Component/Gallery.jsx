import React, { useState } from 'react';
import img10 from '../Assets/hotel_pics/pic1.jpg';
import img9 from '../Assets/hotel_pics/pic2.jpg';
// import img11 from '../Assets/hotel_pics/pic3.jpg';
import img12 from '../Assets/hotel_pics/pic4.jpg';
import img5 from '../Assets/hotel_pics/pic5.jpg';
import img6 from '../Assets/hotel_pics/pic6.jpg';
import img7 from '../Assets/hotel_pics/pic7.jpg';
import img8 from '../Assets/hotel_pics/pic8.jpg';
import img2 from '../Assets/hotel_pics/pic9.jpg';
import img1 from '../Assets/hotel_pics/pic10.jpg';
import img3 from '../Assets/hotel_pics/pic11.jpg';
import img4 from '../Assets/hotel_pics/pic12.jpg';
import { FocusCards } from '../components/ui/focus-cards';


export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img12];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="max-w-screen-xl mx-auto py-8"
      style={{
        backgroundColor: '#121414 ',
        padding: '20px',
        borderRadius: '15px',
      }}
    >


      {/* Gallery Title */}
      <h2 className="fabril-fatface text-3xl font-bold text-[#d2a260] text-center mb-6">
        Gallery
      </h2>

      {/* Main Image Carousel */}

      <div className="relative border-4 border-gray-700 rounded-lg p-4 bg-[#d2a260]">
        <img
          src={images[currentIndex]}
          alt="Gallery"
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-75 hover:opacity-100 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Image Preview Slider */}
      <div className="mt-4 flex space-x-5 overflow-x-auto pb-1 bg-[#d2a260] p-4 rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer relative flex-shrink-0 w-[100px] h-[60px] rounded-lg overflow-hidden ${
              currentIndex === index
                ? 'border-4 border-[#121414]'
                : 'border-2 border-gray-500'
            }`}
          >
            <img
              src={image}
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
