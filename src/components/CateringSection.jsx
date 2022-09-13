import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import CountUp from "react-countup";

const CateringSection = () => {
  const [focus, setFocus] = useState(false);
  return (
    <section className="catering">
      <div className="container">
        <div className="catering__wrapper">
          <div
            id="catering"
            className="catering__picture"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              className="catering__img-pattern"
              src="/images/corner-bg-2.svg"
              alt=""
            />
            <img
              className="catering__img"
              src="/images/catering/catering-27.jpg"
              alt="catering 3"
            />
            <img
              data-aos="flip-right"
              data-aos-duration="2000"
              data-aos-anchor="#catering"
              data-aos-offset="200"
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
                <Waypoint onEnter={() => setFocus(true)}>
                  <div>
                    <i className="fa-solid fa-plus"></i>
                    {focus && (
                      <CountUp
                        end={60}
                        start={0}
                        duration={2}
                        className={"randomClass"}
                      />
                    )}
                  </div>
                </Waypoint>
              </span>
              <span className="catering__stats-desc">Tədbirlər</span>
            </div>
            <button className="catering__info-btn">
              <Link to="/catering">Ətraflı</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
