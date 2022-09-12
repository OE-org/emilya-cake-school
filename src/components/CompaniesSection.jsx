import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { companiesImg } from "../data";

const breakpoints = {
  // when window width is >= 320px
  0: {
    slidesPerView: 1,
  },
  // when window width is >= 480px
  360: {
    slidesPerView: 2,
  },
  // when window width is >= 640px
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1200: {
    slidesPerView: 5,
  },
};

const CompaniesSection = () => {
  return (
    <section className="companies">
      <h2
        className="companies__title"
        data-aos="zoom-out-up"
        data-aos-duration="2000"
      >
        ƏMƏKDAŞLIQ ETDİYİMİZ ŞİRKƏTLƏR
        <img src="/images/divider-line-2.svg" alt="" />
      </h2>

      <Swiper
        className="companies__carousel"
        slidesPerView={4}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
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
