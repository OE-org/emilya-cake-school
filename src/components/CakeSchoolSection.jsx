import React from "react";
import { Link } from "react-router-dom";
import { FastCounter } from "react-smooth-counter";

const CakeSchoolSection = () => {
  return (
    <section className="cake-school">
      <div className="container">
        <div className="cake-school__wrapper">
          <div className="cake-school__info">
            <h3 className="cake-school__info-title">
              Cake School
              <img src="/images/divider-line-2.svg" alt="" />
            </h3>
            <p className="cake-school__info-desc">
              Cake School Emilya İsmayilova tərəfindən təsis edilmiş
              Azərbaycanın ilk Kulinariya məktəbidir. Məktəbimizdə irqindən,
              yaşından və cinsindən asılı olmayaraq hər kəs təhsil ala bilər.
              Aşpazlıq və Qənnadçılığın bütün sahələri üzrə dərslər və
              masterklaslar ölkənin ən peşəkar şefləri tərəfindən keçirilir.
              Kurslara həm peşəkarlar, həm də yeni başlayanlar qoşula bilər.
              Kursu bitirənlərə sertifikat və diplom verilir. Biz sizə bu sahədə
              öz karyeranızı qurmağa və iş tapmağa böyül dəstək oluruq.
            </p>
            <div className="cake-school__stats">
              <span className="cake-school__stats-num">
                <i className="fa-solid fa-plus"></i>
                <FastCounter
                  delay={500}
                  startNumber={0}
                  to={125}
                  className={"randomClass"}
                />
              </span>
              <span className="cake-school__stats-desc">Tələbələr</span>
            </div>
            <button className="cake-school__info-btn">
              <Link to="/cake-school">Ətraflı</Link>
            </button>
          </div>
          <div className="cake-school__picture">
            <img
              className="cake-school__img-pattern"
              src="/images/corner-bg-3.svg"
              alt=""
            />
            <img
              className="cake-school__img"
              src="/images/cake-school/school-12.jpg"
              alt="CAKE 3"
            />
            <img
              className="cake-school__img-alt"
              src="/images/cake-school/school-13.jpg"
              alt="CAKE 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CakeSchoolSection;
