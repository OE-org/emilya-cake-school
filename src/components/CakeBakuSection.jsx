import React from "react";
import { Link } from "react-router-dom";
import { FastCounter } from "react-smooth-counter";

const CakeBakuSection = () => {
  return (
    <section className="cake-baku">
      <div className="container">
        <div className="cake-baku__wrapper">
          <div className="cake-baku__picture">
            <img
              className="cake-baku__img-pattern"
              src="/images/corner-bg-2.svg"
              alt=""
            />
            <img
              className="cake-baku__img"
              src="/images/cake-baku/cake-3.jpg"
              alt="CAKE 3"
            />
            <img
              className="cake-baku__img-alt"
              src="/images/cake-baku/cake-2.jpg"
              alt="CAKE 3"
            />
          </div>
          <div className="cake-baku__info">
            <h3 className="cake-baku__info-title">
              Cake Baku
              <img src="/images/divider-line.svg" alt="" />
            </h3>
            <p className="cake-baku__info-desc">
              Özəl günlərinizin tort və şirniyyatlarını bizə əmanət edin. Cake
              Baku ən dadlı və keyfiyyətli ərzaqlardan hazırlananan tort və
              şirniyyatları məhz sizin üçün hazırlayır. İllərin təcrübəsi imkan
              verirki müştəri istəyini dərhal anlayaraq sizə xəyal etdiyiniz
              detalları tortunuza və şirniyyatınıza əks etdirək.
            </p>
            <div className="cake-baku__stats">
              {/* <span className="cake-baku__stats-icon"></span> */}
              <span className="cake-baku__stats-num">
                <i className="fa-solid fa-plus"></i>
                <FastCounter
                  delay={500}
                  startNumber={0}
                  to={500}
                  className={"randomClass"}
                />
              </span>
              <span className="cake-baku__stats-desc">Müştəri sayısı</span>
            </div>
            <button className="cake-baku__info-btn">
              <Link to="/cake-baku">Ətraflı</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CakeBakuSection;
