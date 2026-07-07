import React from "react";
import "./Pricing.css";

import pricingEquity from "../../assets/images/pricing-equity.svg";
import pricingEquity1 from "../../assets/images/pricing-equity1.svg";
import pricingOtherTrades from "../../assets/images/pricing-other-trades.svg";
import LinkArrow from "../LinkArrow/LinkArrow";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-container">

        {/* Left Content */}
        <div className="pricing-left">
          <h2>Unbeatable pricing</h2>

          <p>
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          

<LinkArrow
    text="See pricing"
    href="#"
/>
        </div>

        {/* Right Content */}
        <div className="pricing-right">
          <div className="pricing-strip">

            <div className="pricing-card">
              <img
                src={pricingEquity}
                alt="Free account opening"
              />

              <p>
                Free account <br />
                opening
              </p>
            </div>

            <div className="pricing-card">
              <img
                src={pricingEquity1}
                alt="Free equity delivery"
              />

              <p>
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>

            <div className="pricing-card">
              <img
                src={pricingOtherTrades}
                alt="₹20 Trades"
              />

              <p>
                Intraday and <br />
                F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;