import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero-3.png";
import cakeBaku from "../assets/images/services/cake-baku.png";
import cakeSchool from "../assets/images/services/cake-school.png";
import catering from "../assets/images/services/catering-baku.png";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__img">
            <img src={hero} alt="emilya ismayilova" />
          </div>
          <div className="hero__content">
            <h1>I'm Emilya Ismayilova</h1>
            <div className="hero__content-cards">
              <Link to="/cake-baku" className="hero__card-wrapper">
                <div className="hero__card">
                  <img src={cakeBaku} alt="cake baku" />
                  <p>Cake Baku</p>
                </div>
              </Link>
              <Link to="/cake-school" className="hero__card-wrapper">
                <div className="hero__card">
                  <img src={cakeSchool} alt="cake school" />
                  <p>Cake School</p>
                </div>
              </Link>
              <Link to="/catering" className="hero__card-wrapper">
                <div className="hero__card">
                  <img src={catering} alt="catering baku" />
                  <p>Cake Baku</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
