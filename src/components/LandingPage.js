import React from "react";
import logo from "../img/WhitewatersEngineeringLimited.png";
import img1 from "../img/power5.jpeg";
import hex7 from "../img/hex7.webp";
import hex3 from "../img/hex3.jpg";
import hex4 from "../img/hex4.jpg";
import hex6 from "../img/hex6.jpg";
import hex10 from "../img/hex10.jpg";
// import hex8 from "../img/hex8.jpg";
import hex11 from "../img/hex11.jpg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__top-container">
        <div className="header">
          <div className="header__logo-container">
            <img className="header__logo" src={logo} alt="" />
            <p className="header__logo-text">Whitewaters Engineering Limited</p>
          </div>
          <ul>
            <li>
              <a href="/home" className="header__home">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="header__about">
                about us
              </a>
            </li>
            <li>
              <a href="/our-services" className="header__services">
                our services
              </a>
            </li>
            <li>
              <a href="/contact-us" className="header__contact">
                contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="landing-page__main-container">
          <div className="landing-page__writeup-container">
            <h1 className="landing-page__heading">
              Innovation, Experience, Excellence
            </h1>
            <p className="landing-page__here">
              Power and Energy Consultants and Contractors
            </p>
          </div>
          <div className="graphics-container">
            <div className="graphics-container__hexagon graphics-container__hexagon--1">
              <img
                src={hex11}
                alt=""
                className="graphics-container__img graphics-container__img--1"
              />
            </div>
            <div className="graphics-container__hexagon graphics-container__hexagon--2">
              <img
                src={hex7}
                alt=""
                className="graphics-container__img graphics-container__img--2"
              />
            </div>
            <div className="graphics-container__hexagon graphics-container__hexagon--3">
              <img
                src={hex3}
                alt=""
                className="graphics-container__img graphics-container__img--3"
              />
            </div>
            <div className="graphics-container__hexagon graphics-container__hexagon--4">
              <img
                src={hex6}
                alt=""
                className="graphics-container__img graphics-container__img--4"
              />
            </div>
            <div className="graphics-container__hexagon graphics-container__hexagon--5">
              <img
                src={hex4}
                alt=""
                className="graphics-container__img graphics-container__img--5"
              />
            </div>
            <div className="graphics-container__hexagon graphics-container__hexagon--6">
              <img
                src={hex10}
                alt=""
                className="graphics-container__img graphics-container__img--6"
              />
            </div>
            <div className="graphics-container__hexagon graphics-container__hexagon--7">
              <img
                src={img1}
                alt=""
                className="graphics-container__img graphics-container__img--7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
