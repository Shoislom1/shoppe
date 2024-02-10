import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Header.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Header() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: 'url("/img3.jpg")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: 'url("/img2.jpg")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: 'url("/img.jpg")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        </SwiperSlide>
      </Swiper>
    </>
  );
}
