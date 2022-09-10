import React from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { motion } from "framer-motion";
import { BsArrowsFullscreen } from "react-icons/bs";

import { cakeBakuImgs, cakeGallery } from "../data";
import { useGlobalContext } from "../context";

const Cakebaku = () => {
  const { toggler, slide, showSlide } = useGlobalContext();
  return (
    <main className="cakebaku">
      <Swiper
        className="cakebaku__carousel"
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        allowTouchMove={false}
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
                            delay: 0.5,
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
                            delay: 0.5,
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
      <section className="cakebaku__info">
        <div className="cakebaku__info-wrapper">
          <h2 className="cakebaku__info-title">Cake Baku</h2>
          <p className="cakebaku__info-desc">
            Özəl günlərinizin tort və şirniyyatlarını bizə əmanət edin. Cake
            Baku ən dadlı və keyfiyyətli ərzaqlardan hazırlananan tort və
            şirniyyatları məhz sizin üçün hazırlayır. İllərin təcrübəsi imkan
            verirki müştəri istəyini dərhal anlayaraq sizə xəyal etdiyiniz
            detalları tortunuza və şirniyyatınıza əks etdirək.
          </p>
        </div>
      </section>
      <section className="cakebaku__gallery">
        <div className="container">
          <div className="cakebaku__gallery-inner">
            {cakeGallery.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => showSlide(item.id)}
                  className="cakebaku__gallery-item"
                >
                  <img src={item.img} alt={item.alt} />
                  <div className="cakebaku__gallery-overlay">
                    <BsArrowsFullscreen />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <FsLightbox
          toggler={toggler}
          slide={slide}
          sources={cakeGallery.map((item) => item.img)}
        />
      </section>
    </main>
  );
};

export default Cakebaku;
