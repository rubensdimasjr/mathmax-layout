import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BoxSection from "../components/BoxSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BoxSection />
    </>
  );
};

export default Home;
