import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";
import { Autoplay, Navigation } from "swiper";



const Avigation = () => {

  return (
    <div className={"swipper"}>
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
        modules={[Autoplay, Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className={"fillVideo"}>
          <video autoPlay loop controls muted playsInline  src={"https://www.medicauruguaya.com.uy/videos/medica_abril2022.mp4"}>Slide #1</video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{background: 'blue'}}>
            <img src={"https://www.medicauruguaya.com.uy/imgnoticias/201612/W1901_H460/58.jpg"} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{background: 'yellow'}}>
            <img src={"https://www.medicauruguaya.com.uy/imgnoticias/201706/W1901_H460/120.jpg"}/>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
};
export default Avigation;

