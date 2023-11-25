import React from "react";
import Heading from "./Heading";
import "../assets/styles/Map.css";

const Map = () => {
  return (
    <>
      <div className="map-wrapper">
        <div className="container">
          <Heading text={"Get Directions"} />
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.917823052044!2d78.24421667527861!3d28.36133397581396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b47dfaaaaaaab%3A0x96546c14b3026f74!2sAabrax%20Overhead%20Conveyor!5e0!3m2!1sen!2sin!4v1700912841423!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
