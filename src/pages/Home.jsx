import React from "react";
import { Link } from "react-router-dom";

import About from "../components/About";
import CakeBakuSection from "../components/CakeBakuSection";
import CakeSchoolSection from "../components/CakeSchoolSection";
import CateringSection from "../components/CateringSection";
import CompaniesSection from "../components/CompaniesSection";

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        {/* <div className="hero__video-wrapper">
          <video
            className="hero__video"
            src="/images/emilya.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div> */}
        <div className="hero__wrapper">
          <div className="container">
            <div className="hero__inner">
              <div className="hero__img">
                <img
                  src="/images/about-me/footer-3.png"
                  alt="emilya ismayilova"
                />
              </div>
              <div className="hero__content">
                <h1 className="hero__content-title">
                  Bizim xidmət sahələrimiz
                </h1>
                <div className="hero__content-cards">
                  <Link to="/cake-baku" className="hero__card-wrapper">
                    <div className="hero__card">
                      <img
                        src="/images/services/cake-baku.png"
                        alt="cake baku"
                      />
                      <p>Cake Baku</p>
                    </div>
                  </Link>
                  <Link to="/cake-school" className="hero__card-wrapper">
                    <div className="hero__card">
                      <img
                        src="/images/services/cake-school.png"
                        alt="cake school"
                      />
                      <p>Cake School</p>
                    </div>
                  </Link>
                  <Link to="/catering" className="hero__card-wrapper">
                    <div className="hero__card">
                      <img
                        src="/images/services/catering-baku.png"
                        alt="catering baku"
                      />
                      <p>Catering Baku</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <About />
      </section>
      <CakeBakuSection />
      <CakeSchoolSection />
      <CateringSection />
      <CompaniesSection />
    </main>
  );
};

export default Home;
