import React from 'react'
import "../assets/styles/ClientsSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { clientData } from '../data/ClientSlider';

const ClientsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        cssEase: "ease",
        arrows: false,
        autoplaySpeed: 1000
      };
  return (
    <div className="container">
        <div className="clients-logo-slider-wrapper">
        <Slider {...settings}>
            {
                clientData.map((elm)=>{
                    return (
                        <div className="client-logo" key={elm.id}>
                            <img src={elm.img} alt="logos" className="client-logo-img" />
                        </div>
                    )
                })
            }
        </Slider>
        </div>
    </div>
  )
}

export default ClientsSlider