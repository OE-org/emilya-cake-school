import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { companiesImg } from "../data";

const CompaniesSection = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      centeredSlides={true}
      loop={true}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false,
      // }}
      modules={[Autoplay]}
    >
      {companiesImg.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <img
              className="about__carousel-img"
              src={item.img}
              alt={item.alt}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CompaniesSection;
