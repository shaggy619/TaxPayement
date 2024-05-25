import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-44 min-h-screen">
      <h2 className="text-center font-poppins">Home Component </h2>
    </div>
  );
};

export default Home;
