import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import CountUp from "react-countup";

const CakeBakuSection = () => {
  const [focus, setFocus] = useState(false);
  return (
    <section className="cake-baku">
      <div className="container">
        <div className="cake-baku__wrapper">
          <div
            id="alt-image"
            className="cake-baku__picture"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
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
              data-aos="flip-right"
              data-aos-duration="2000"
              data-aos-anchor="#alt-image"
              data-aos-offset="100"
              className="cake-baku__img-alt"
              src="/images/cake-baku/cake-2.jpg"
              alt="CAKE 3"
            />
          </div>
          <div
            className="cake-baku__info"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h3 className="cake-baku__info-title">
              Cake Baku
              <img src="/images/divider-line.svg" alt="" />
            </h3>
            <p className="cake-baku__info-desc">
              Özəl günlərinizin tort və şirniyyatlarını bizə həvalə edin. Cake
              Baku ən dadlı və keyfiyyətli ərzaqlardan hazırlananan tort və
              şirniyyatları məhz sizin üçün hazırlayır. İllərin təcrübəsi imkan
              verirki müştəri istəyini dərhal anlayaraq sizə xəyal etdiyiniz
              detalları tortunuza və şirniyyatınıza əks etdirək.
            </p>
            <div className="cake-baku__stats">
              {/* <span className="cake-baku__stats-icon"></span> */}
              <span className="cake-baku__stats-num">
                <Waypoint onEnter={() => setFocus(true)}>
                  <div>
                    <i className="fa-solid fa-plus"></i>
                    {focus && (
                      <CountUp
                        end={1000}
                        start={0}
                        duration={2}
                        className={"randomClass"}
                      />
                    )}
                  </div>
                </Waypoint>
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
