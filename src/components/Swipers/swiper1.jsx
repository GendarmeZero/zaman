import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Imggg from '../../images/h1.jpg'

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './swiper1.css';

import { EffectCube, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='mainSwiper'>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Imggg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imggg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imggg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imggg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imggg} />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
