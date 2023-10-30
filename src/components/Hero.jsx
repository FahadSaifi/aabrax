import React from "react";
import v1 from "../assets/videos/v1.webm";
import "../assets/styles/Homehero.css";

const Hero = () => {
  return (
    <>
      <div className="video-wrapper">
        <video src={v1} autoPlay loop muted className="hero-video"></video>
        <div className="opac-layer"></div>
        <div className="hero-content-wrapper">
          <h1 className="hero-heading">
            Have over 25 years of experience <br /> with excellent reviews.
          </h1>
          <p className="hero-content">
            Streamline your operations and improve efficiency with our
            <br />
            high-quality conveyor systems.
          </p>
          <button className="hero-btn">Learn more</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
