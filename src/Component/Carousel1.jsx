 import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';
import img3 from '../Assets/briyani9.png';
import img4 from '../Assets/briyani8.png';
import img6 from '../Assets/briyani6.png';
import img7 from '../Assets/briyani7.png';
import img1 from '../Assets/briyani1.png';
// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Car() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Replace slides with images */}
        <SwiperSlide>
          <img src={img1} alt="Delicious Briyani 1" style={{ width: '70%', height: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Delicious Briyani 3" style={{ width: '70%', height: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Delicious Briyani 5" style={{ width: '70%', height: '80%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Delicious Briyani 6" style={{ width: '70%', height: '80%', objectFit: 'cover' }} />
        </SwiperSlide>

        {/* Autoplay progress circle */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
