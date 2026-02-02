import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/About/About";
import PopularDishes from "../components/Home/PopularDishes";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/Home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <PopularDishes />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
