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
        speed: 800,
        cssEase: "ease",
        arrows: false,
        autoplaySpeed: 2000,
        responsive:[
            {
               breakpoint: 1024,
               settings:{
                slidesToShow: 4,
                slidesToScroll: 1,
               }
            },
            {
                breakpoint: 800,
                settings:{
                 slidesToShow: 3,
                 slidesToScroll: 1,
                }
             },
             {
                breakpoint: 600,
                settings:{
                 slidesToShow: 2,
                 slidesToScroll: 1,
                }
             }
        ]
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