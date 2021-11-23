import React from "react";
import logo from "../img/WhitewatersEngineeringLimited.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="header-logo">
            <img className="header-logo__img" src={logo} alt="" />
            <p className="header-logo__text">Whitewaters Engineering Limited</p>
          </div>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                {/* <a href="Home">Home</a> */}
                <Link to="/" className="nav__home">
                  Home
                </Link>
              </li>
              <li>
                {/* <a href="About-Us">About Us</a> */}
                <Link to="/about-us" className="nav__about">
                  About Us
                </Link>
              </li>
              <li>
                {/* <a href="Services">Services</a> */}
                <Link to="/our-services" className="nav__services">
                  Our Services
                </Link>
              </li>
              <li>
                {/* <a href="Contact">Contact</a> */}
                <Link to="/contact-us" className="nav__contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
