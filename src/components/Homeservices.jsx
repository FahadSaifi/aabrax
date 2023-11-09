import React from "react";
import "../assets/styles/Homeservices.css";
import hw1 from "../assets/images/experience.png";
import hw2 from "../assets/images/quality.png";
import hw3 from "../assets/images/tag.png";
const Homeservices = () => {
  return (
    <div className="container">
    <div className="homeservices">
      <h2 className="homeservice-heading">
        <span className="heading">Why Choose Us</span>
      </h2>
      <div className="card-warper">
        <div className="card">
          <img src={hw1} alt="img" className="whychooseimg" />
          <h2>Industry Experience</h2>
          <p>
            With over 25 years of experience in designing and manufacturing
            conveyor systems, we understand the unique needs and challenges of
            different industries.
          </p>
        </div>
        <div className="card">
          <img src={hw2} alt="img" className="whychooseimg" />
          <h2>Quality and Reliability</h2>
          <p>
            Our conveyor systems are built to last, using high-quality materials
            and components, and are rigorously tested to deliver long-lasting
            performance.
          </p>
        </div>
        <div className="card">
          <img src={hw3} alt="img" className="whychooseimg" />
          <h2>Competitive Pricing</h2>
          <p>
            We strive to offer competitive pricing without compromising on
            quality, making our conveyor systems a cost-effective choice for
            your business.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Homeservices;
