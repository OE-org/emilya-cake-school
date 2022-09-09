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
        <div className="hero__video-wrapper">
          <video
            className="hero__video"
            src="/images/emilya.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
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
      <section className="map container">
        <iframe
          title="This is a unique title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.801216765636!2d49.9553048672103!3d40.37833655024583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030632f309fbe1b%3A0x9fd5312412a0e59a!2sAmal!5e0!3m2!1saz!2s!4v1662734476615!5m2!1saz!2s"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default Home;
