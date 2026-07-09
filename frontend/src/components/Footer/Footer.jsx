import React from "react";
import "./Footer.css";

import logo from "../../assets/images/logo.svg";
import googlePlay from "../../assets/images/google-play-badge.svg";
import appStore from "../../assets/images/app-store-badge.svg";

import {
  footerLinks,
  socialIcons,
  disclaimerParagraphs,
  footerBottomLinks,
} from "../../data/footerData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ========================= */}
        {/* Footer Top */}
        {/* ========================= */}

        <div className="footer-top">

          {/* Brand Section */}
          <div className="footer-brand">
            <img src={logo} alt="Zerodha Logo" />

            <p>© 2010 - 2026, Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>

            {/* Social Icons */}
            <div className="social-icons">
              {socialIcons.map((Icon, index) => (
                <a href="#" key={index}>
                  <Icon />
                </a>
              ))}
            </div>

            {/* Store Buttons */}
            <div className="store-buttons">
              <img src={googlePlay} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>

          {/* Footer Columns */}
          {footerLinks.map((section) => (
            <div className="footer-column" key={section.title}>
              <h3>{section.title}</h3>

              <ul>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ========================= */}
        {/* Disclaimer */}
        {/* ========================= */}

        <div className="footer-disclaimer">
          {disclaimerParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* ========================= */}
        {/* Bottom Links */}
        {/* ========================= */}

        <div className="footer-bottom">
          {footerBottomLinks.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;