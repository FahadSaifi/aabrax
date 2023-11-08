import React from "react";
import homeabout from "../assets/images/homeabout.jpg";
import "../assets/styles/Homeabout.css";
import { useNavigate } from "react-router";

const Homeabout = () => {
  const navigate = useNavigate();
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
              At Aabrax Conveyors, we are dedicated to providing innovative and
              reliable conveyor solutions for a wide range of industries. With
              our expertise in material handling and proven track record of
              delivering exceptional conveyor systems, we are committed to
              simplifying your material handling process and improving your
              operational efficiency.
            </p>
            <button className="hero-about-btn" onClick={()=>navigate('/about')}>Read more</button>
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
