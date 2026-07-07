import React from "react";
import "./Education.css";

import educationImage from "../../assets/images/education.svg";
import LinkArrow from "../LinkArrow/LinkArrow";

const Education = () => {
  return (
    <section className="education">
      <div className="education-container">

        {/* Left Side */}
        <div className="education-image">
          <img
            src={educationImage}
            alt="Varsity by Zerodha"
          />
        </div>

        {/* Right Side */}
        <div className="education-content">

          <h2>Free and open market education</h2>

          <p>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <LinkArrow
            text="Varsity"
            href="#"
          />

          <p className="education-spacing">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <LinkArrow
            text="TradingQ&A"
            href="#"
          />

        </div>

      </div>
    </section>
  );
};

export default Education;