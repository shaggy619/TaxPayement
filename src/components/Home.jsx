import React from "react";
import { useEffect } from "react";
import Hero from "./Hero";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Hero />;
};

export default Home;
