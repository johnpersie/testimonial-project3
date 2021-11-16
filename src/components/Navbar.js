import React from "react";
import logo from "../img/WhitewatersEngineeringLimited.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__main-container">
        <div className="nav__logo-container">
          <img className="nav__logo" src={logo} alt="" />
          <p className="nav__logo-text">Whitewaters Engineering Limited</p>
        </div>
        <ul>
          <li>
            <a href="/home" className="nav__home">
              Home
            </a>
          </li>
          <li>
            <a href="/about-us" className="nav__about">
              about us
            </a>
          </li>
          <li>
            <a
              href="/our-services"
              className="nav__services"
              target="/our-services"
            >
              our services
            </a>
          </li>
          <li>
            <a href="/contact-us" className="nav__contact">
              contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
