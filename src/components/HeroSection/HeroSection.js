import React from "react";
import "./HeroSection.css";
import heroImage from "../images/undraw_Mobile_pay_re_sjb8.svg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div>
      <div class="main">
        <div class="main__container container">
          <div class="main__content">
            <h1>NEXT GENERATION</h1>
            <h2>Rent A Car</h2>
            <p>Luxury on the way.</p>
            <button class="main__btn">
              <Link to="/">Get Started</Link>
            </button>
          </div>
          <div class="main__img--container">
            <img id="main__img" src={heroImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
