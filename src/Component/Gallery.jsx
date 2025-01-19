import React, { useState } from 'react';

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
    'https://via.placeholder.com/800x400?text=Image+4',
    'https://via.placeholder.com/800x400?text=Image+5',
    'https://via.placeholder.com/800x400?text=Image+6',
    'https://via.placeholder.com/800x400?text=Image+7',
    'https://via.placeholder.com/800x400?text=Image+8',
    'https://via.placeholder.com/800x400?text=Image+9',
    'https://via.placeholder.com/800x400?text=Image+10',
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      {/* Main Image Carousel */}
      <div className="relative">
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
      <div className="mt-4 flex space-x-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="cursor-pointer relative flex-shrink-0 w-[100px] h-[60px] rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-gray-500"
            />
            {currentIndex === index && (
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
  