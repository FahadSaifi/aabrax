import React from "react";
import Hero from "../components/Hero";
import Homeabout from "../components/Homeabout";
import Homeproducts from "../components/Homeproducts";
import Homeservices from "../components/Homeservices";
import Homewhychoose from "../components/Homewhychoose";

const Home = () => {
  return (
    <>
      <Hero />
      <Homeabout />
      <Homeproducts />
      <Homeservices/>
      <Homewhychoose />
    </>
  );
};

export default Home;
