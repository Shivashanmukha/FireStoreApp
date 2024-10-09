import React from 'react';
// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

// import images
import aboutswiper from '../assets/aboutswiper.jpg';
import aboutswiper2 from '../assets/aboutswiper2.jpg';
import aboutswiper3 from '../assets/aboutswiper3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  // Add autoplay CSS

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';  // Import Autoplay

const AboutSwiper = () => {
  return (
    <>
      <SwiperComponent
        pagination={true}
        autoplay={{
          delay: 3000, // Delay between slides in ms
          disableOnInteraction: false, // Auto-scroll continues after manual interaction
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        <SwiperSlide>
          <img 
            src={aboutswiper} // Replace with your image URL
            alt="Slide 1"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={aboutswiper2} // Replace with your image URL
            alt="Slide 2"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={aboutswiper3} // Replace with your image URL
            alt="Slide 3"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
      </SwiperComponent>
    </>
  );
}

export default AboutSwiper;