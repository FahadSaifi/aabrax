import React from "react";
import homeabout from "../assets/images/homeabout.jpg";
import "../assets/styles/Homeabout.css";

const Homeabout = () => {
  return (
    <>
      <div className="container home-about-wrapper">
        <div className="home-about-wrapper">
          <div className="home-about-left-col">
            <div className="side-border">
              <h5 className="home-about-heading">About Us</h5>
              <h2 className="home-about-second-heading">
                We Offer Quick &<br />
                Powerful Solution
              </h2>
            </div>
            <p className="home-about-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              molestiae praesentium vel nesciunt quos laudantium, iusto eaque
              reprehenderit quibusdam veniam alias, perspiciatis vero quaerat
              aperiam adipisci ducimus hic! Odio itaque non eos! Rerum sequi
              voluptatum debitis nam dignissimos.
            </p>
            <button className="hero-about-btn"> Button</button>
          </div>
          <div className="home-about-right-col">
            <img src={homeabout} alt="about us" className="home-about-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeabout;
