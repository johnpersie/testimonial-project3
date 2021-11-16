import React from "react";

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
            <a href="/AboutUs" className="btn btn-content">
              More About Us ⇾
            </a>
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
      {/* <h1>Goal</h1>
      <p>
        We are out to create a strong niche in the power and energy industrial
        sector by providing a business ease though our S.M.A.R.T approach for
        prospective and existing power and energy investors as well as providing
        tailored power and energy solution services to various industry players
        and easing the power and energy hurdles they face in the most efficient
        and effective manner.
      </p>
      <h1>Mission</h1>
      <p>
        We are on a mission to provide first class power and energy solution
        services targeted at promoting industrialization of the nation via easy
        access to power and energy to our every individual client’s achievable
        dream and desire through strong synergism with our sister partners.
      </p>
      <h1>Vision</h1>
      <p>
        Whitewater Engineering Limited vision is to be a one-stop topnotch power
        and energy company that shall be most preferred by industries/businesses
        seeking for a better and effective guidance on easy access, efficient
        management and anything energy and power.
      </p> */}
    </main>
  );
}

export default AboutUs;
