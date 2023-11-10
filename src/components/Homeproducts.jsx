import React from "react";
import "../assets/styles/Homeproducts.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { prodData } from "../data/ProductData";
import Heading from "./Heading";

const Homeproducts = () => {
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };

  const items = prodData.map((elm) => {
    return (
      <div key={elm.id} className="product-card">
        <img src={elm.img} alt="product" className="prod-carousel-img" />
        <p>{elm.content}</p>
      </div>
    );
  });
  return (
    <>
      <div className="container">
       <Heading text={"Our"}/>
        <div className="homeproduct-carousel">
          <AliceCarousel
            mouseTracking
            infinite={true}
            responsive={responsive}
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default Homeproducts;
