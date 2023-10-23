import React from "react";
import Hero from "../components/Hero";
import Homeabout from "../components/Homeabout";
import Homeproducts from "../components/Homeproducts";
import Homeservices from "../components/Homeservices";

const Home = () => {
  return (
    <>
      <Hero />
      <Homeabout />
      <Homeproducts />
      <Homeservices/>
    </>
  );
};

export default Home;
