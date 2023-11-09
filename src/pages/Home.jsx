import React from "react";
import Hero from "../components/Hero";
import Homeabout from "../components/Homeabout";
import ProductsCarousel from "../components/ProductsCarousel";
import Homeservices from "../components/Homeservices";
import Homecontact from "../components/Homecontact";
import { useEffect } from "react";
import ClientsSlider from "../components/ClientsSlider";

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
      <ClientsSlider/>
      <Homecontact />
    </>
  );
};

export default Home;
