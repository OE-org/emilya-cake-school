import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { cakeBakuImgs } from "../data";

const CakeBakuSection = () => {
  return (
    <div className="cake-baku">
      <div className="container">
        <div className="cake-baku__wrapper">
          <div className="cake-baku__slider">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {cakeBakuImgs.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <img
                      className="cake-baku__slider-item"
                      src={item.img}
                      alt={item.alt}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="cake-baku__info">
            <h3 className="cake-baku__info-title">
              Cake Baku
              <img src="/divider-line.svg" alt="" />
            </h3>
            <p className="cake-baku__info-desc">
              Özəl günlərinizin tort və şirniyyatlarını bizə əmanət edin. Cake
              Baku ən dadlı və keyfiyyətli ərzaqlardan hazırlananan tort və
              şirniyyatları məhz sizin üçün hazırlayır. İllərin təcrübəsi imkan
              verirki müştəri istəyini dərhal anlayaraq sizə xəyal etdiyiniz
              detalları tortunuza və şirniyyatınıza əks etdirək.
            </p>
            <button>Ətraflı</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeBakuSection;
