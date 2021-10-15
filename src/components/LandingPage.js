import React from "react";
import img1 from "../img/Testimonial image 1.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__left-container">
        <h1 className="landing-page__heading">
          <span style={{ display: "block" }}>Amazing</span> Experiences from Our
          Wonderful Customers
        </h1>
        <p className="landing-page__here">
          Here is what customers and vendors are saying about us, you can share
          your stories with us too.
        </p>
      </div>
      <div className="landing-page__elipse">
        <img
          className="landing-page__testimonial-img-1"
          src={img1}
          alt="testimonial"
        />
      </div>
    </div>
  );
};

export default LandingPage;
