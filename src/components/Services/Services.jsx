import React from "react";
import "./Services.css";
import Parallex from "react-rellax";

const Services = () => {
  return (
    <div>
      <div className="services">
        <h1>See what the hype is about</h1>
        <div className="services__container">
          <Parallex speed={1}>
            <div className="services__card">
              <h2>Experience Bliss</h2>
              <p>Luxury service on you doorstep.</p>
              <button>Get Started</button>
            </div>
          </Parallex>
          <div className="services__card">
            <h2>Are you Ready?</h2>
            <p>Take the leap</p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
