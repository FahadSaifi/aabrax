import React from "react";
import "../assets/styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/About" className="nav-links">
              About
            </Link>
            <Link to="/Solution" className="nav-links">
              Solutions
            </Link>
            <Link to="/Product" className="nav-links">
              Products
            </Link>
            <Link to="/Contact" className="nav-links">
              Contact
            </Link>
          </div>
          <div className="footer-products">
            <h4>Products</h4>
            <Link to="" className="nav-links">
              I Beam Conveyor
            </Link>
            <Link to="" className="nav-links">
              4 Wheel Conveyor
            </Link>
            <Link to="" className="nav-links">
              Enclosed Track Conveyor
            </Link>
            <Link to="" className="nav-links">
              Garments Conveyor
            </Link>
            <Link to="" className="nav-links">
              Heavy Duty Conveyor
            </Link>
          </div>
          <div className="footer-solutions">
            <h4>Solutions</h4>
            <Link to="" className="nav-links">
              Hello World
            </Link>
            <Link to="" className="nav-links">
              Hello World
            </Link>
            <Link to="" className="nav-links">
              Hello World
            </Link>
            <Link to="" className="nav-links">
              Hello World
            </Link>
            <Link to="" className="nav-links">
              Hello World
            </Link>
          </div>
          <div className="footer-newsletter">
            <h2>Aabrax</h2>
            <p>Subscribe for latest updates</p>
            <form className="newsletter-form">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
