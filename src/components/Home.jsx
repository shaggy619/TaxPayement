import React from "react";
import { useEffect } from "react";
import Hero from "./Hero";
import Services from "./Services";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default Home;
