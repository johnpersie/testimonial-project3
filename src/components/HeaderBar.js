import React from "react";
import logo from "../img/WhitewatersEngineeringLimited.jpeg";

const HeaderBar = () => {
  return (
    <div className="header">
      <div className="header__imgdiv">
        <img className="header__logo" src={logo} alt="" />
      </div>
      {/* <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">about us</a>
        </li>
        <li>
          <a href="/#">contact</a>
        </li>
      </ul> */}
    </div>
  );
};

export default HeaderBar;
