import React from "react";
import Hero from "../components/Hero";
import Homeabout from "../components/Homeabout";
import ProductsCarousel from "../components/ProductsCarousel";
import Homeservices from "../components/Homeservices";
import Homecontact from "../components/Homecontact";
import { useEffect } from "react";

const Home = () => {
  useEffect(()=>{
    document.title = "Aabrax | Home"
  },[])
  return (
    <>
      <Hero />
      <Homeabout />
      <ProductsCarousel />
      <Homeservices />
      <Homecontact />
    </>
  );
};

export default Home;
