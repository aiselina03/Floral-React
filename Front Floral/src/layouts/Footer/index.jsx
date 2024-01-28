import React from "react";
import "./style.scss"
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="search">
          <div className="logoFoot">
            <img
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
              alt=""
            />
          </div>
          <div className="inp">
            <input type="text" placeholder="Your Email" />
            <button>Send</button>
          </div>
        </div>
        <div className="about">
          <h3>About</h3>
          <ul>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className="follow">
          <h3>Follow Us</h3>
        </div>
      </div>
    </>
  );
}

export default Footer;
