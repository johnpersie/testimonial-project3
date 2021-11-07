import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__group">
        <div className="footer__links-div">
          <ul className="footer__links-container">
            <li>
              <h4>Company</h4>
            </li>
            <li>
              <a href="/#">About us</a>
            </li>
            <li>
              <a href="/#">Terms of use</a>
            </li>
            <li>
              <a href="/#">Privacy Policy</a>
            </li>
            <li>
              <a href="/#">Press & Media</a>
            </li>
          </ul>
        </div>
        <div className="footer__links-div">
          <ul className="footer__links-container">
            <li>
              <h4>Products</h4>
            </li>
            <li>
              <a href="/#">Marketplace</a>
            </li>
            <li>
              <a href="/#">Magazine</a>
            </li>
            <li>
              <a href="/#">Seller</a>
            </li>
            <li>
              <a href="/#">Wholesale</a>
            </li>
            <li>
              <a href="/#">Services</a>
            </li>
          </ul>
        </div>

        <div className="footer__links-div footer__link-career">
          <ul className="footer__links-container">
            <li>
              <h4>Careers</h4>
            </li>
            <li>
              <a href="/#">Become a campus rep</a>
            </li>
            <li>
              <a href="/#">Become a Vasiti Influencer</a>
            </li>
            <li>
              <a href="/#">Become a Campus writer</a>
            </li>
            <li>
              <a href="/#">Become an Affiliate</a>
            </li>
          </ul>
        </div>

        <div className="footer__links-div">
          <ul className="footer__links-container">
            <li>
              <h4>Get in touch</h4>
            </li>
            <li>
              <a href="/#">Contact us</a>
            </li>
            <li>
              <a href="/#">Partner with us</a>
            </li>
            <li>
              <a href="/#">Advertise with us</a>
            </li>
            <li>
              <a href="/#">Help/FAQs</a>
            </li>
          </ul>
        </div>

        <div className="footer__links-div">
          <ul className="footer__links-container">
            <li>
              <h4>Join our community</h4>
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
            <li>
              <a href="/#">Email Newsletter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
