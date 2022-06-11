import React from "react";
import Hero from "../Hero/Hero";
import Layer1 from "../Layer1/Layer1";
import Layer2 from "../Layer2/Layer2";
import Layer3 from "../Layer3/Layer3";
import Gallery from "../Gallery/Gallerry";
import Admin from "../AdminFault/Fault";
// import Customer from "../CustomerFault/Fault";

const Home = () => {
  return (
    <div>
      <Hero />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Gallery />
      <Admin />
    </div>
  );
};

export default Home;
