import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../../styles/test.css'


import user1 from '../../images/h1.jpg'; 
import user3 from '../../images/h1.jpg';
import user4 from '../../images/h1.jpg';
import user5 from '../../images/h1.jpg';
import user6 from '../../images/h1.jpg';
import user2 from '../../images/h1.jpg';


import '../../styles/test.css';

const testimonials = [
    {
        img: user1,
        text: "Dr. Abdalmajed's dental clinic provides the most beautiful and comprehensive dental services. The staff is friendly and professional, and the facilities are top-notch. I highly recommend this clinic!",
        name: 'Omar Hamid',
        job: 'Graphic Designer',
    },
    {
        img: user2,
        text: "Dr. Abdalmajed's dental clinic is the best in town! They offer a wide range of services, from routine cleanings to advanced dental procedures. The staff is always friendly and welcoming, and they make you feel at ease during your visit.",
        name: 'Honadi Saki',
        job: 'Product Manager',
    },
    {
        img: user3,
        text: "I am so happy with the dental services I received from Dr. Abdalmajed's clinic. They were professional, efficient, and friendly, and they made sure I was comfortable throughout the entire process. I would definitely recommend this clinic to anyone!",
        name: 'Leen Qaq',
        job: 'Assistant Manager',
    },
    {
        img: user4,
        text: "Dr. Abdalmajed's dental clinic is a true gem. The staff is incredibly friendly and knowledgeable, and they always make me feel welcome. The dental services are top-notch, and I always leave feeling great about my smile",
        name: 'Amro Salah',
        job: 'Web Developer',
    },
    {
        img: user5,
        text: "I was very impressed with the service I received at Dr. Abdalmajed's dental clinic. The staff was friendly and professional, and the facilities were clean and modern. I would definitely recommend this clinic to anyone looking for high-quality dental care.",
        name: 'Shahed Abd',
        job: 'Quality Control',
    },
    {
        img: user6,
        text: "Dr. Abdalmajed's dental clinic is a true gem. The staff is incredibly friendly and knowledgeable, and they always make me feel welcome. The dental services are top-notch, and I always leave feeling great about my smile",
        name: 'Bara’a Hakam',
        job: 'Lawyer',
    }
];
const Testimonials = () => {
    return (
        <section className="testimonial-section">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                loop
                className="testimonial-swiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonial-slide">
                        <img src={testimonial.img} alt={`Review-Slide${index + 1}`} className="testimonial-image" />
                        <div className="testimonial-text">
                            <p>{testimonial.text}</p>
                            <div className="testimonial-details">
                                <span className="testimonial-name">{testimonial.name}</span>
                                <span className="testimonial-job">{testimonial.job}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;