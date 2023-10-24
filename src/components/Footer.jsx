import React from 'react';
import '../assets/styles/Footer.css';
import logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
import { FaEnvelope } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-about">
        <img src={logo} alt="logo" className="logo" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, perspiciatis.</p>
        <p>&copy; Copyright</p>
      </div>
      <div className="footer-links">
        <h4>Links</h4>
        <Link to="/" className="nav-links">Home</Link>
        <Link to="/About" className="nav-links">About</Link>
        <Link to="/Solution" className="nav-links">Solutions</Link>
        <Link to="/Product" className="nav-links">Products</Link>
        <Link to="/Contact" className="nav-links">Contact</Link>
      </div>
      <div className="footer-products">
        <h4>Products</h4>
        <Link to="" className="nav-links">I Beam Conveyor</Link>
        <Link to="" className="nav-links">4 Wheel Conveyor</Link>
        <Link to="" className="nav-links">Enclosed Track Conveyor</Link>
        <Link to="" className="nav-links">Garments Conveyor</Link>
        <Link to="" className="nav-links">Heavy Duty Conveyor</Link>
      </div>
      <div className="footer-newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe for latest updates</p>
        <form className="newsletter-form">
          <input type="email" name="email" id="email" placeholder="Enter Your Email" />
          <button><FaEnvelope /></button>
        </form>
      </div>
    </div>
  )
}

export default Footer