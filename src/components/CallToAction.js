import React from "react";
import banner from "../img/subscribe-banner 1.png";
const CallToAction = () => {
  return (
    <div className="cta">
      <div className="cta__grid-container">
        <img src={banner} alt="banner" className="cta__banner" />
        <div className="cta__subscribe-container">
          <h2 className="cta__subscribe-heading">
            <span style={{ display: "block" }}>Be a member</span>of our
            community 🎉
          </h2>
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <input
            className="cta__input-email"
            type="email"
            name="email"
            id="email"
            placeholder="enter your email address"
          />
          <input
            className="cta__input-button"
            type="button"
            value="subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
