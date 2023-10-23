import React from 'react';
import '../assets/styles/Footer.css';
import logo from "../assets/images/logo.png";
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
        <a href="/" className="nav-links">Home</a>
        <a href="/About" className="nav-links">About</a>
        <a href="/Solutions" className="nav-links">Solutions</a>
        <a href="/Products" className="nav-links">Products</a>
        <a href="/Contact" className="nav-links">Contact</a>
      </div>
      <div className="footer-products">
        <h4>Products</h4>
        <a href="/p1" className="nav-links">I Beam Conveyor</a>
        <a href="/p2" className="nav-links">4 Wheel Conveyor</a>
        <a href="/p3" className="nav-links">Enclosed Track Conveyor</a>
        <a href="/p4" className="nav-links">Garments Conveyor</a>
        <a href="/p5" className="nav-links">Heavy Duty Conveyor</a>
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