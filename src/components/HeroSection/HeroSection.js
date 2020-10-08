import React from "react";
import "./HeroSection.css";
import heroImage from "../images/undraw_order_a_car_3tww.svg";
import Button from "../Button/Button";
import Parallex from "react-rellax";

const HeroSection = (props) => {
  return (
    <div>
      <div className="main">
        <div className="main__container container">
          <div className="main__content">
            <Parallex speed={3}>
              <h1 id="hero_h1">{props.title}</h1>
              <h2>{props.subTitle}</h2>
              <p>{props.para}.</p>
              <Button path="/" title="Get Started" />
            </Parallex>
          </div>
          <div className="main__img--container">
            <img id="main__img" src={heroImage} alt="home_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
