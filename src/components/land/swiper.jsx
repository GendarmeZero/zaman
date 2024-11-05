import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgSwiper from '../../images/about.jpg';
import ImgSwiper1 from '../../images/h.jpg';
import ImgSwiper2 from '../../images/h1.jpg';
import ImgSwiper3 from '../../images/honey-jar02.jpg';

import 'swiper/css';
import 'swiper/css/effect-creative';

import './styles.css';

import { EffectCreative } from 'swiper/modules';

export default function App() {
  return (
    <div>
      <Swiper
        style={{ backgroundColor: "#F5F7FA" }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper2"
      >
        <SwiperSlide><img src={ImgSwiper} alt="Image1" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={ImgSwiper1} alt="Image2" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={ImgSwiper2} alt="Image3" className="swiper-image" /></SwiperSlide>
        <SwiperSlide><img src={ImgSwiper3} alt="Image3" className="swiper-image" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
