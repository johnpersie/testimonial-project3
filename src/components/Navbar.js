import React from "react";
import logo from "../img/WhitewatersEngineeringLimited.png";
import { Link } from "react-router-dom";

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
            <Link to="/" className="nav__home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav__about">
              about us
            </Link>
          </li>
          <li>
            <Link to="/our-services" className="nav__services">
              our services
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="nav__contact">
              contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
