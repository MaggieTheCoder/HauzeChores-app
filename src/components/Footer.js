import React from "react";
import "../styles/Footer.css";
import logo from "../logos/Homepage-logo-purple.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Footer</p>
      <img className="app-logo" src={logo} alt="Houze logo" />
    </footer>
  );
};

export default Footer;
