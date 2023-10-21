import React from "react";
import Slider from "react-slick";
import "../assets/styles/Homeproducts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ohc2 from "../assets/images/ohc2.png";

const Homeproducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
        <h2 className="homeproduct-heading">
          <span className="heading">Our Products</span>
        </h2>
        <div className="homeproduct-carousel">
          <Slider {...settings}>
            <div className="product-card">
              <img src={ohc2} alt="product" className="prod-img" />
              <h4 className="prod-card-title">I Beam Coveyor</h4>
              <div className="product-card-content">
                <p className="prod-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus modi asperiores, possimus explicabo tempore
                  culpa? Saepe sequi quasi facere, mollitia iste dolor in
                  necessitatibus odio repellat unde nemo sint nam minus
                  obcaecati magnam! Dolorum temporibus assumenda vel culpa?
                  Illo, nulla!
                </p>
              </div>
            </div>
            <div className="product-card">
              <img src={ohc2} alt="product" className="prod-img" />
              <h4 className="prod-card-title">I Beam Coveyor</h4>
              <div className="product-card-content">
                <p className="prod-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus modi asperiores, possimus explicabo tempore
                  culpa? Saepe sequi quasi facere, mollitia iste dolor in
                  necessitatibus odio repellat unde nemo sint nam minus
                  obcaecati magnam! Dolorum temporibus assumenda vel culpa?
                  Illo, nulla!
                </p>
              </div>
            </div>
            <div className="product-card">
              <img src={ohc2} alt="product" className="prod-img" />
              <h4 className="prod-card-title">I Beam Coveyor</h4>
              <div className="product-card-content">
                <p className="prod-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus modi asperiores, possimus explicabo tempore
                  culpa? Saepe sequi quasi facere, mollitia iste dolor in
                  necessitatibus odio repellat unde nemo sint nam minus
                  obcaecati magnam! Dolorum temporibus assumenda vel culpa?
                  Illo, nulla!
                </p>
              </div>
            </div>
            <div className="product-card">
              <img src={ohc2} alt="product" className="prod-img" />
              <h4 className="prod-card-title">I Beam Coveyor</h4>
              <div className="product-card-content">
                <p className="prod-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus modi asperiores, possimus explicabo tempore
                  culpa? Saepe sequi quasi facere, mollitia iste dolor in
                  necessitatibus odio repellat unde nemo sint nam minus
                  obcaecati magnam! Dolorum temporibus assumenda vel culpa?
                  Illo, nulla!
                </p>
              </div>
            </div>
            <div className="product-card">
              <img src={ohc2} alt="product" className="prod-img" />
              <h4 className="prod-card-title">I Beam Coveyor</h4>
              <div className="product-card-content">
                <p className="prod-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus modi asperiores, possimus explicabo tempore
                  culpa? Saepe sequi quasi facere, mollitia iste dolor in
                  necessitatibus odio repellat unde nemo sint nam minus
                  obcaecati magnam! Dolorum temporibus assumenda vel culpa?
                  Illo, nulla!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Homeproducts;
