import React from "react";
import "../assets/styles/Footer.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <img src={logo} alt="logo" className="brand-logo" />
          </div>
          <div className="footer-links">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/About" className="nav-links">
              About
            </Link>
            <Link to="/product/1" className="nav-links">
              Products
            </Link>
            <Link to="/solution/1" className="nav-links">
              Solutions
            </Link>
            <Link to="/Contact" className="nav-links">
              Contact
            </Link>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2023. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
