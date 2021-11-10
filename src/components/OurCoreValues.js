import React from "react";
import image1 from "../img/integrity.png";
import image2 from "../img/professionalism.svg";
import image3 from "../img/teamwork.svg";
import image4 from "../img/innovation.svg";
import image5 from "../img/excellent.svg";
import image6 from "../img/accountability.svg";

function OurCoreValues() {
  return (
    <>
      <div className="our-values-page">
        <div className="container">
          <div className="our-core-values">
            <div className="our-core-values__text">
              <h1>Our Core Values</h1>
            </div>
          </div>
          <div className="col-3">
            <div className="col-3__card card1">
              <div>
                <h1>Integrity</h1>
                <p>
                  At Whitewaters, we always pursue to do what is right for our
                  clients, community and profession. Ethics, fairness, honesty
                  and integrity remains the cornerstone of our practice.
                </p>
              </div>
              <div>
                <img src={image1} alt="integrity" className="image image1" />
              </div>
            </div>
            <div className="col-3__card card2">
              <div>
                <h1>Professionalism</h1>
                <p>
                  Whitewaters Engineering Limited invest in staff who are of
                  refined relevant academic and professional qualifications,
                  knowledge and experience in the power and energy sector as it
                  is our duty to perform to the highest standards of
                  professionalism as dictated by the local and International
                  professional code of ethics.
                </p>
              </div>
              <div>
                <img
                  src={image2}
                  alt="professionalism"
                  className="image image2"
                />
              </div>
            </div>
            <div className="col-3__card card3">
              <div>
                <h1>Teamwork</h1>
                <p>
                  Our teamwork culture avails us the privilege of having
                  competent professionals who always come together with workable
                  approach and advice to deliver optimum solutions to our
                  numerous client problems and quires.
                </p>
              </div>
              <div>
                <img src={image3} alt="teamwork" className=" image image3" />
              </div>
            </div>
            <div className="col-3__card card4">
              <div>
                <h1>Innovation</h1>
                <p>
                  We thrive on creativity and ingenuity which makes us to stand
                  out in our service delivery as power and energy is the bedrock
                  of industrialization and being a dynamic field of endeavor and
                  the sector being on a fast paced technological climate,
                  innovative ideas, concepts, and these processes are very
                  essential to the continued success and growth of Whitewaters
                  Engineering Limited.
                </p>
              </div>
              <div>
                <img src={image4} alt="innovation" className=" image image4" />
              </div>
            </div>
            <div className="col-3__card card5">
              <div>
                <h1>Excellence</h1>
                <p>
                  Our drive for professional excellence ensures that our clients
                  receive the finest quality of service as we pursue to provide
                  impeccable execution and delivery of our products and
                  services.
                </p>
              </div>
              <div>
                <img src={image5} alt="excellence" className=" image image5" />
              </div>
            </div>
            <div className="col-3__card card6">
              <div>
                <h1>Accountability</h1>
                <p>
                  At the core of accountability is reliability and personal
                  responsibility. We value the ability of our team and company
                  to honor our commitment to clients and each other. We take
                  ownership of our work and promptly refine any erring to the
                  greatest extent possible.
                </p>
              </div>
              <div>
                <img
                  src={image6}
                  alt="accountability"
                  className="image image6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCoreValues;
