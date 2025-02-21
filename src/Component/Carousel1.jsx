import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/Swiper.css';
import img3 from '../Assets/soup1.png';
import img6 from '../Assets/cbriyani.png';
import img7 from '../Assets/lemon.png';
import img1 from '../Assets/posters/pt8.png';
import img4 from '../Assets/beef.png';
import mchicken from '../Assets/mobile_responsive/mchicken.png';
import mbeef from '../Assets/mobile_responsive/mbeef.png';
import mlemon from '../Assets/mobile_responsive/mlemon.png';
import msoup from '../Assets/mobile_responsive/msoup.png';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Car() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isMobile
    ? [mchicken, mbeef, msoup, mlemon]
    : [img1, img4, img3, img6, img7];

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-0 md:m-[2vh]" // Add margin-top for mobile, remove for larger screens
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Delicious Dish ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}