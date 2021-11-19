import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <main className="container">
      <div className="aboutUs">
        <div className="aboutUs__textbox">
          <h2>Welcome to Whitewaters Engineering Limited</h2>
          <h1>
            We deliver topnotch power services to needy industrialists across
            the nation’s industrial sectors.
          </h1>
          <div className="aboutUs__textbox--content">
            <p>
              Whitewaters Engineering Limited is a Power and Energy solution
              company with the goal of partnering with Nigeria’s industrial
              sector players by providing and being a one stop shop offering
              topnotch services bordering on easy access to affordable,
              renewable, well managed and more durable power void of
              interruptions and epileptics.
            </p>
            <p>
              Whitewaters Engineering Limited is duly registered with the
              corporate affairs commission in accordance with the Governing
              Authority, laws and guidance of the federal republic of Nigeria
              while having valid field experience in energy and power solution
              engagements. Whitewaters Engineering Limited is also licensed by
              the Nigerian Electricity Management Services Agency (NEMSA).
            </p>
            <Link to="/about-us" id="about-us" className="btn btn-content">
              More About Us ⇾
            </Link>
          </div>
        </div>
        <div className="aboutUs__img-container">
          <div className="column-inner">
            <div className="card-image pic1"></div>
            <p>Power Reliability Implementation</p>
          </div>
          <div className="column-inner">
            <div className="card-image pic2"></div>
            <p>Power Equipment Installation</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
