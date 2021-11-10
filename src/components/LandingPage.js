import React from "react";
import img1 from "../img/power5.jpeg";
import logo from "../img/WhitewatersEngineeringLimited.png";

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
          <div className="landing-page__graphics-container">
            <img
              className="landing-page__testimonial-img-1"
              src={img1}
              alt="testimonial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
