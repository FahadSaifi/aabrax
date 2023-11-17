import React from "react";
import "../assets/styles/Footer.css";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <img
              src={logo}
              alt="logo"
              className="brand-logo"
              onClick={() => navigate("/")}
            />
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
