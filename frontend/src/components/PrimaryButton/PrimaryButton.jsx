import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ text, href = "#" }) => {
  return (
    <a href={href} className="primary-button">
      {text}
    </a>
  );
};

export default PrimaryButton;