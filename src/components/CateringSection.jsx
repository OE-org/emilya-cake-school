import React from "react";
import { Link } from "react-router-dom";
import { FastCounter } from "react-smooth-counter";

const CateringSection = () => {
  return (
    <section className="catering">
      <div className="container">
        <div className="catering__wrapper">
          <div className="catering__picture">
            <img
              className="catering__img-pattern"
              src="/images/corner-bg-2.svg"
              alt=""
            />
            <img
              className="catering__img"
              src="/images/catering/catering-46.jpg"
              alt="catering 3"
            />
            <img
              className="catering__img-alt"
              src="/images/catering/catering-2.jpg"
              alt="catering 3"
            />
          </div>
          <div className="catering__info">
            <h3 className="catering__info-title">
              Catering Baku
              <img src="/images/divider-line.svg" alt="" />
            </h3>
            <p className="catering__info-desc">
              Tədbirləriniz bizimlə daha da unudulmaz olacaq. Ləzzətli təamlar,
              gülərüz personal ilə hər zaman xidmətinizdəyik. Furşet təşkili,
              Kofe Breyl, Koorperativ keytrinq, banket təşkili, kokteyl xidməti
              və tədbirlər üçün avadanlıqların icarəsi xidmətlərimiz
              arasındadır.
            </p>
            <div className="catering__stats">
              {/* <span className="cake-baku__stats-icon"></span> */}
              <span className="catering__stats-num">
                <i class="fa-solid fa-plus"></i>
                <FastCounter
                  delay={500}
                  startNumber={0}
                  to={60}
                  className={"randomClass"}
                />
              </span>
              <span className="catering__stats-desc">Tədbirlər</span>
            </div>
            <button className="catering__info-btn">
              <Link to="/cake-baku">Ətraflı</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
