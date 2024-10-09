import React from 'react';
// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

// import images
import homeslide1 from '../assets/homeslide1.jpg';
import homeslide2 from '../assets/homeslide2.jpg';
import homeslide3 from '../assets/homeslide3.jpg';
import homeslide4 from '../assets/homeslide4.jpg';
import homeslide5 from '../assets/homeslide5.jpg';
import homeslide6 from '../assets/homeslide6.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  // Add autoplay CSS

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';  // Import Autoplay

const MySwiper = () => {
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
            src= {homeslide1} // Replace with your image URL
            alt="Slide 1"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src= {homeslide2} // Replace with your image URL
            alt="Slide 2"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src= {homeslide3} // Replace with your image URL
            alt="Slide 3"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src= {homeslide4} // Replace with your image URL
            alt="Slide 4"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src= {homeslide5} // Replace with your image URL
            alt="Slide 5"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src={homeslide6} // Replace with your image URL
            alt="Slide 6"
            style={{ width: '100%', height: '550px' }} // Adjust the styling as needed
            className='swiper-image'
          />
        </SwiperSlide>
      </SwiperComponent>
    </>
  );
}

export default MySwiper;
