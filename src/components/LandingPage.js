import React from "react";
import img1 from "../img/power4.gif";
import logo from "../img/WhitewatersEngineeringLimited.jpeg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <div className="header__imgdiv">
          <img className="header__img" src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">about us</a>
          </li>
          <li>
            <a href="/#">contact</a>
          </li>
        </ul>
      </div>
      <div className="landing-page__main-container">
        <div className="landing-page__writeup-container">
          <h1 className="landing-page__heading">
            <span style={{ display: "block" }}>Innovation</span> Experience
            Excellence{" "}
          </h1>
          <p className="landing-page__here">
            Power and Energy Consultants and Contractors
          </p>
        </div>
        <div className="landing-page__graphics-container">
          {/* <div className="landing-page__img-container"> */}
          <img
            className="landing-page__testimonial-img-1"
            src={img1}
            alt="testimonial"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
