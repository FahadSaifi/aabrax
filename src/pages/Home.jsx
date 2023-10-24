import React from "react";
import Hero from "../components/Hero";
import Homeabout from "../components/Homeabout";
import Homeproducts from "../components/Homeproducts";
import Homeservices from "../components/Homeservices";
import HomeContactus from "../components/HomeContactus";

const Home = () => {
  return (
    <>
      <Hero />
      <Homeabout />
      <Homeproducts />
      <Homeservices/>
      <HomeContactus/>
    </>
  );
};

export default Home;
