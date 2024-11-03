
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';

// import 'swiper/swiper-bundle.min.css';


import { useState } from "react";
import './sample.css'


const SampleComponent = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className='appp'>
            <div className="wrapper">
            <Swiper
                // modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                centeredSlides={true}
                slidesPerView={1.15}
                onSwiper={(swiper) => {
                setSwiper(swiper);
                }}
        modules={[EffectCube, Pagination]}
                
            >
                <SwiperSlide>
                <div className="slide">Slide 1</div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide">Slide 2</div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide">Slide 3</div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="slide">Slide 4</div>
                </SwiperSlide>
            </Swiper>
            </div>
    </div>

  );
};

export default SampleComponent;
