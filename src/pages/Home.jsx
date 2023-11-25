import React from "react";
import Hero from "../components/Hero";
import Homeabout from "../components/Homeabout";
import ProductsCarousel from "../components/ProductsCarousel";
import Homeservices from "../components/Homeservices";
import Homecontact from "../components/Homecontact";
import Map from "../components/Map";
import { useEffect } from "react";
import ClientsSlider from "../components/ClientsSlider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    document.title = "Aabrax | Home";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Homeabout />
      <ProductsCarousel />
      <Homeservices />
      <ClientsSlider />
      <Homecontact />
      <Map />
    </>
  );
};

export default Home;
