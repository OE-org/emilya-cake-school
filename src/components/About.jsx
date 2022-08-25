import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { aboutCarouselImgs } from "../data";

const About = () => {
  return (
    <div className="container">
      <div className="about__wrapper">
        <div className="about__info">
          <div className="about__info-wrapper">
            <h2 className="about__info-title">
              <span>Emilya Ismayova</span> kimdir?
            </h2>
            <p className="about__info-desc">
              <strong>Ad:</strong> Emilya Ismayilova
            </p>
            <p className="about__info-desc">
              <strong>Doğum ili:</strong> 1990 ci il 16 iyun Borçalı mahalının
              Marneuli rayonu
            </p>
            <p className="about__info-desc">
              <strong>Orta təhsil:</strong> 1996-ci ildə Bakı şəhəri Xətai
              rayonu 204 nömrəli orta məktəbdə oxumağa başlamışdır
            </p>
            <p className="about__info-desc">
              <strong>Təhsili:</strong> 2008 ci ildə Azərbaycan Dövlət İqtisad
              Universitetinin Biznesin təşkili ve idarəedilmesi fakultəsinə
              qəbul olmuş və 2012 ci ildə universiteti yüksək balla bitirərək
              Diplom əldə etmişdir !
            </p>
            <h4 className="about__info-subtitle">Həyatı və Biznesi haqqında</h4>
            <p className="about__info-subdesc">
              2012 ci ildən etibarən öz biznesini quraraq, 2012-2013 cü illərdə
              hal hazırda da fəaliyyət göstərən Cake Baku Şirniyyat evinin təsis
              etmişdir!
            </p>
            <p className="about__info-subdesc">
              Fəaliyyətə başladığı illərdən həmdə şirniyyat evinə kadrlar
              hazırlayaraq öz şəxsi biznesini dahada genişləndirmişdir.
            </p>
            <p className="about__info-subdesc">
              Tələbələrin və təlabatin çoxluğundan qərara gələrək hal hazırda da
              fəaliyyət göstərən Cake School adlı kulinariya məktəbini təsis
              etmişdir!
            </p>
            <p className="about__info-subdesc">
              Bununla yanaşı Catering Baku adlı keytring şirkətinin təsisçi
              Direktoru Emilya İsmayilova ailəlidir və 2 övlad anasıdır !
            </p>
          </div>
        </div>
        <div className="about__carousel">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {aboutCarouselImgs.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <img src={item.img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;