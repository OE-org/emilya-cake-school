import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import { cakeBakuImgs } from "../data";

SwiperCore.use([EffectFade]);

const Cakebaku = () => {
  return (
    <section className="cakebaku">
      <Swiper
        className="cakebaku__carousel"
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
      >
        {cakeBakuImgs.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <>
                  <div className="cakebaku__carousel-item">
                    <img
                      className="cakebaku__carousel-img"
                      src={item.img}
                      alt={item.alt}
                    />

                    <div className="container">
                      <div className="cakebaku__carousel-info">
                        <motion.h2
                          className="cakebaku__carousel-title"
                          initial={{ opacity: 1, translateX: "-100px" }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            translateX: isActive ? "0px" : "-100px",
                          }}
                          transition={{
                            delay: 1,
                            x: { duration: 1 },
                            default: { ease: "linear" },
                          }}
                        >
                          {item.title}
                        </motion.h2>
                        <motion.div
                          className="carousel__info-img"
                          initial={{ opacity: 1, translateX: "100px" }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            translateX: isActive ? "0px" : "100px",
                          }}
                          transition={{
                            delay: 1,
                            duration: 2,
                            default: { ease: "linear" },
                          }}
                        >
                          <img src={item.title_img} alt="cake" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div style={{ height: "500px" }}></div>
    </section>
  );
};

export default Cakebaku;
