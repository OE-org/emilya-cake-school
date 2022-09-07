import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import { motion } from "framer-motion";
import FsLightbox from "fslightbox-react";
import { BsArrowsFullscreen } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import { cateringCarousel, cateringGallery } from "../data";

const Catering = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(0);

  const showSlide = (slide) => {
    setToggler(!toggler);
    setSlide(slide);
  };
  return (
    <main className="catering-page">
      <Swiper
        className="catering-page__carousel"
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
        {cateringCarousel.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <>
                  <div className="catering-page__carousel-item">
                    <img
                      className="catering-page__carousel-img"
                      src={item.img}
                      alt={item.title}
                    />

                    <div className="container">
                      <div className="catering-page__carousel-info">
                        <motion.h2
                          className="catering-page__carousel-title"
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
      <section className="catering-page__info">
        <div className="catering-page__info-wrapper">
          <h2 className="catering-page__info-title">Catering Baku</h2>
          <p className="catering-page__info-desc">
            Tədbirləriniz bizimlə daha da unudulmaz olacaq. Ləzzətli təamlar,
            gülərüz personal ilə hər zaman xidmətinizdəyik. Furşet təşkili, Kofe
            Breyl, Koorperativ keytrinq, banket təşkili, kokteyl xidməti və
            tədbirlər üçün avadanlıqların icarəsi xidmətlərimiz arasındadır.
          </p>
        </div>
      </section>
      <section className="catering-page__gallery">
        <div className="container">
          <div className="catering-page__gallery-inner">
            {cateringGallery.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => showSlide(item.id)}
                  className="catering-page__gallery-item"
                >
                  <img src={item.img} alt={item.alt} />
                  <div className="catering-page__gallery-overlay">
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
          sources={cateringGallery.map((item) => item.img)}
        />
      </section>
    </main>
  );
};

export default Catering;
