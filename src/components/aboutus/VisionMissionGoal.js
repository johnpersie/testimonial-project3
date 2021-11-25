import React from "react";
// import img1 from "../../sass/vision.jpg";
// import img2 from "../../sass/goal.jpg";
// import img3 from "../../sass/mission.jpg";

const VisionMissionGoal = () => {
  return (
    <section className="vmg">
      <div className="vmg__wrapper">
        <div className="vmg__content">
          <div className="image-card card1">
            {/* <img src={img1} alt="" className="vision__content__card--img" /> */}
          </div>
          <h1>Our Vision</h1>
          <p>
            To be a one-stop topnotch power and energy company that shall be
            most preferred by industries/businesses seeking for a better and
            effective guidance on easy access, efficient management and anything
            energy and power.
          </p>
        </div>

        <div className="vmg__content">
          <div className="image-card card2">
            {/* <img src={img2} alt="" className="mission__content__card--img" /> */}
          </div>
          <h1>Our Mission</h1>
          <p>
            To provide first class power and energy solution services targeted
            at promoting industrialization of the nation via easy access to
            power and energy to our every individual client’s achievable dream
            and desire through strong synergism with our sister partners.
          </p>
        </div>

        <div className="vmg__content">
          <div className="image-card card3"></div>
          {/* <img src={img3} alt="" className="goal__content__card--img" /> */}
          <h1>Our Goal</h1>
          <p>
            To create a strong niche in the power and energy industrial sector
            by providing a business ease though our S.M.A.R.T approach for
            prospective and existing power and energy investors as well as
            providing tailored power and energy solution services to various
            industry players and easing the power and energy hurdles they face
            in the most efficient and effective manner
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionGoal;
