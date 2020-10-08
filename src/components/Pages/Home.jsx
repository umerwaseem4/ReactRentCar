import React from "react";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <HeroSection
        title="NEXT GENERATION"
        subTitle="Rent A Car"
        para="Order Now to Boom Journey"
      />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
