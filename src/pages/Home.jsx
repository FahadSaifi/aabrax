import React from "react";
import Hero from "../components/Hero";
import Homeabout from "../components/Homeabout";
import Homeproducts from "../components/Homeproducts";
import Homewhychoose from "../components/Homewhychoose";

const Home = () => {
  return (
    <>
      <Hero />
      <Homeabout />
      <Homeproducts />
      <Homewhychoose />
    </>
  );
};

export default Home;
