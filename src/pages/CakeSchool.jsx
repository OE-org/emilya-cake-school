import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { HiLibrary } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { SiCakephp } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { FaMapMarkerAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import FsLightbox from "fslightbox-react";
import { BsArrowsFullscreen } from "react-icons/bs";

import { masterclassCarousel, reviews, cakeschoolGallery } from "../data";
import { useGlobalContext } from "../context";
import { Loader } from "../components";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const CakeSchool = () => {
  const [loadPage, setLoadPage] = useState(false);
  const { toggler, slide, showSlide } = useGlobalContext();

  useEffect(() => {
    setLoadPage(true);
    setTimeout(() => {
      setLoadPage(false);
    }, 1000);
  }, []);

  return (
    <>
      {loadPage ? (
        <Loader />
      ) : (
        <section className="cakeschool">
          <section className="cakeschool__hero">
            <h2
              className="cakeschool__hero-title"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Kurslarımız
            </h2>
          </section>
          <section className="cakeschool__courses container">
            <div className="cakeschool__courses-inner">
              <div
                className="cakeschool__course"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img
                  className="cakeschool__course-img"
                  src="/images/cake-school/school-42.jpg"
                  alt="master chef"
                />
                <div className="cakeschool__course-info">
                  <h4 className="cakeschool__course-title">Aşbazlıq</h4>
                  <p className="cakeschool__course-desc">
                    Peşəkar şefləri tərəfindən keçirilən aşbazlıq kursları
                  </p>
                </div>
              </div>
              <div
                className="cakeschool__course"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  className="cakeschool__course-img"
                  src="/images/cake-school/caramel-2.jpg"
                  alt="master chef"
                />
                <div className="cakeschool__course-info">
                  <h4 className="cakeschool__course-title">Qənnadçılıq</h4>
                  <p className="cakeschool__course-desc">
                    Müasir dünya standlarına uyğun qənnadçılıq kursları
                  </p>
                </div>
              </div>
              <div
                className="cakeschool__course"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img
                  className="cakeschool__course-img"
                  src="/images/cake-school/caramel-3.jpg"
                  alt="master chef"
                />
                <div className="cakeschool__course-info">
                  <h4 className="cakeschool__course-title">Master Class</h4>
                  <p className="cakeschool__course-desc">
                    Tez tez yenilənən müasir mətbəx master class kursları
                  </p>
                </div>
              </div>
            </div>
            <div
              className="cakeschool__courses-info"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <FaQuoteLeft className="cakeschool__courses-icon--left" />
              <p>
                Cake School Emilya İsmayilova tərəfindən təsis edilmiş
                Azərbaycanın ilk Kulinariya məktəbidir. Məktəbimizdə irqindən,
                yaşından və cinsindən asılı olmayaraq hər kəs təhsil ala bilər.
                Aşpazlıq və Qənnadçılığın bütün sahələri üzrə dərslər və
                masterklaslar ölkənin ən peşəkar şefləri tərəfindən keçirilir.
                Kurslara həm peşəkarlar, həm də yeni başlayanlar qoşula bilər.
                Kursu bitirənlərə sertifikat və diplom verilir. Biz sizə bu
                sahədə öz karyeranızı qurmağa və iş tapmağa böyül dəstək oluruq.
              </p>
              <p className="cakeschool__courses-info--bold">
                Sizdə kursumuza yazılaraq yeni bacarıqlara sahiblənmək
                istəyirsinizsə elə indi bizimlə əlaqə qurun.
              </p>
              <p className="cakeschool__courses-info--bold">
                Master Class-lardan xəbərdar olmaq üçün instaqram kanalmıza
                abunə olub izləyin
              </p>
              <FaQuoteRight className="cakeschool__courses-icon--right" />
            </div>
          </section>
          <div className="cakeschool__masterclass">
            <div className="cakeschool__advantages-header">
              <h3
                className="cakeschool__advantages-title"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Master Klasslar
              </h3>
            </div>
            <Swiper
              className="container"
              spaceBetween={50}
              slidesPerView={3}
              breakpoints={breakpoints}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {masterclassCarousel.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className="masterclass__course"
                      data-aos="zoom-in"
                      data-aos-duration="2000"
                    >
                      <img
                        className="masterclass__course-img"
                        src={item.img}
                        alt={item.title}
                      />
                      <div className="masterclass__course-info">
                        <h4 className="masterclass__course-title">
                          {item.title}
                        </h4>
                        <p className="cakeschool__course-desc">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <section className="cakeschool__advantages">
            <div className="cakeschool__advantages-header">
              <h3
                className="cakeschool__advantages-title"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Üstünlüklərimiz
              </h3>
            </div>
            <div className="cakeschool__advantages-items container">
              <div
                className="cakeschool__advantages-item"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <HiLibrary />
                <h4 className="advantages__item-title">Peşəkar Şərait</h4>
                <p className="advantages__item-desc">
                  İşıqlı və geniş məktəbimizdə tələbələrimiz üçün hər bir
                  peşəkar şərait yaradılmışdır.
                </p>
              </div>
              <div
                className="cakeschool__advantages-item"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <MdSchool />
                <h4 className="advantages__item-title">Müəllimlər</h4>
                <p className="advantages__item-desc">
                  Dərslər tanınmış xarici və yerli aşbaz və qənnadşılıq ustaları
                  - Şeflər tərəfindən keçirilir.
                </p>
              </div>
              <div
                className="cakeschool__advantages-item"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <SiCakephp />
                <h4 className="advantages__item-title">Praktiki təcrübə</h4>
                <p className="advantages__item-desc">
                  Bütün tələbələr müəllimlərlə birlikdə yerli və xarici mətbəx
                  yemak və şirniyyatlarını hazirlayaraq real təcrübə
                  qazanacaqlar.
                </p>
              </div>
              <div
                className="cakeschool__advantages-item"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <TbCertificate />
                <h4 className="advantages__item-title">Sertifikat</h4>
                <p className="advantages__item-desc">
                  Kursun uğurla bitirmiş tələbələrə sertifikat təqdim olunur.
                </p>
              </div>
              <div
                className="cakeschool__advantages-item"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <FaMapMarkerAlt />
                <h4 className="advantages__item-title">Ünvan</h4>
                <p className="advantages__item-desc">
                  Xətai Rayonu, Ukrayna dairəsi, Nəsrəddin Tusi 56/71 (Amal
                  mtk).
                </p>
              </div>
              <div
                className="cakeschool__advantages-item"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <GiForkKnifeSpoon />
                <h4 className="advantages__item-title">Müasir avadanlıq</h4>
                <p className="advantages__item-desc">
                  Kulinariya məktəbimizin bütün müasir avadanlıqlarla təhciz
                  olunmuşdur.
                </p>
              </div>
            </div>
          </section>
          <section className="cakeschool__testimonials">
            <div
              className="cakeschool__testimonials-inner"
              data-aos="flip-down"
              data-aos-duration="2000"
            >
              <h3 className="cakeschool__testimonials-title">
                Tələbəlrəimizin dedikləri
              </h3>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
              >
                {reviews.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="testimonials__item">
                        <img
                          className="testimonials__item-img"
                          src={item.img}
                          alt={item.author}
                        />
                        <div className="testimonials__item-info">
                          <p className="testimonials__item-desc">{item.desc}</p>
                          <h4 className="testimonials__item-author">
                            {item.author}
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
          <section className="catering-page__gallery">
            <div className="container">
              <div className="catering-page__gallery-inner">
                {cakeschoolGallery.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => showSlide(item.id)}
                      className="catering-page__gallery-item"
                      data-aos="fade-up"
                      data-aos-duration="2000"
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
              sources={cakeschoolGallery.map((item) => item.img)}
            />
          </section>
        </section>
      )}
    </>
  );
};

export default CakeSchool;
