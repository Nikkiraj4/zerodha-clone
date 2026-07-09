import React from "react";
import "./OpenAccount.css";

import PrimaryButton from "../PrimaryButton/PrimaryButton";

const OpenAccount = () => {
  return (
    <section className="open-account">
      <div className="open-account-container">

        <h2>Open a Zerodha account</h2>

        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
          and F&amp;O trades.
        </p>

        <PrimaryButton
          text="Sign up for free"
          href="#"
        />

      </div>
    </section>
  );
};

export default OpenAccount;