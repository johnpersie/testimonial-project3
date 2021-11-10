import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer__group">
          <div className="footer__links-div">
            <ul className="footer__links-container">
              <li>
                <h4>Get in touch</h4>
              </li>
              <li>whitewatersengineering@gmail.com</li>
              <li>caniceemeka@gmail.com</li>
              <li>+2348185102553</li>
              <li>+2348038371670</li>
            </ul>
          </div>
          <div className="footer__links-div">
            <ul className="footer__links-container">
              <li>
                <h4>Visit us</h4>
              </li>
              <li>
                Unit 2, TIC, IMT Industrial Center, Independence Layout, Enugu.
              </li>
            </ul>
          </div>

          <div className="footer__links-div">
            <ul className="footer__links-container">
              <li>
                <h4>Follow us</h4>
              </li>
              <li className="footer__media-icons">
                <a href="/#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="/#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li style={{ color: "#25201d" }}>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights">
        <p className="rights__text">
          © 2020 Whitewaters Engineering Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
