import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/styles/a.css";
import { useNavigate } from "react-router-dom";
import { sliderData } from "../data/CarouselData";

const Carousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "ease",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="product-carousel">
      <h2 className="homeproduct-heading">
        <span className="heading">Our Products</span>
      </h2>
      <div className="container">
        <Slider {...settings}>
          {sliderData.map((elm) => {
            return (
              <div className="product-card" key={elm.id}>
                <div className="product-card-img-wrapper">
                  <img
                    src={elm.img}
                    alt="product"
                    className="product-card-img"
                  />
                </div>
                <p className="product-card-description">{elm.prodInfo}</p>
                <button
                  className="product-card-btn"
                  onClick={() => navigate(elm.navigate)}
                >
                  Read More
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
