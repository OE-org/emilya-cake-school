import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { companiesImg } from "../data";

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  // when window width is >= 640px
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const CompaniesSection = () => {
  return (
    <section className="companies">
      <Swiper
        className="companies__carousel"
        slidesPerView={4}
        spaceBetween={0}
        // centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay]}
        breakpoints={breakpoints}
      >
        {companiesImg.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                className="companies__carousel-img"
                src={item.img}
                alt={item.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CompaniesSection;
