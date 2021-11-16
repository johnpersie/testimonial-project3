import React from "react";
import tcn from "../../img/partners-tcn.png";
import eedc from "../../img/partners-eedc.png";
import nerc from "../../img/partners-nerc.png";
import phedc from "../../img/partners-phedc.png";

const Partners = () => {
  return (
    <div className="partners">
      <h1 className="partners__heading">Our Partners</h1>
      <div className="partners__logo-div">
        <img
          className="partners__nerc partners__logo"
          src={nerc}
          alt="nerc logo"
        />
        <img
          className="partners__tcn partners__logo"
          src={tcn}
          alt="tcn logo"
        />
        <img
          className="partners__eedc partners__logo"
          src={eedc}
          alt="eedc logo"
        />
        <img
          className="partners__phedc partners__logo"
          src={phedc}
          alt="phedc logo"
        />
      </div>
    </div>
  );
};

export default Partners;
