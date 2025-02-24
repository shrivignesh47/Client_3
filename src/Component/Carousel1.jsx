import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/Swiper.css';
import img3 from '../Assets/posters/p11.png';
import img6 from '../Assets/posters/p10.png';
import img7 from '../Assets/posters/pt9.png';
import img1 from '../Assets/posters/pt8.png';
import img12 from '../Assets/posters/p12.png';
import img4 from '../Assets/posters/p13.png';
import mchicken from '../Assets/posters/pt5.jpg';
import mbeef from '../Assets/posters/pt3.jpg';
import mlemon from '../Assets/posters/pt2.jpg';
import msoup from '../Assets/posters/pt1.jpg';
import mbimg1 from '../Assets/posters/pt4.jpg';
// import mbimg2 from '../Assets/posters/pt6.jpg';

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
    ? [mchicken, mbeef, msoup, mlemon,mbimg1]
    : [img1, img4, img3, img6, img7, img12];

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