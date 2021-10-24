import React from "react";
import logo from "../img/vasiti-logo.png";

const HeaderBar = () => {
  return (
    <div className="header">
      <div className="header__imgdiv">
        <img className="header__img" src={logo} alt="" />
      </div>
      {/* <div className="header__links-container"> */}
      <ul>
        <li>
          <a href="/#">about us</a>
        </li>
        <li>
          <a href="/#">stories</a>
        </li>
        <li>
          <a href="/#">contact</a>
        </li>
        <li>
          <a href="/#">login</a>
        </li>
        <li>
          <a className="sign-up" href="/#" style={{ color: "white" }}>
            sign up
          </a>
        </li>
      </ul>
      {/* </div> */}
    </div>
  );
};

export default HeaderBar;
