import React from "react";
import "../assets/styles/Homehero.css";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="video-wrapper">
        <div className="opac-layer"></div>
        <div className="hero-content-wrapper container">
          <h1 className="hero-heading">
            Have over 25 years of experience <br /> with excellent reviews.
          </h1>
          <p className="hero-content">
            Streamline your operations and improve efficiency with our
            <br />
            high-quality conveyor systems.
          </p>
          <button className="hero-btn" onClick={()=>navigate('/product/1')}>Read more</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
