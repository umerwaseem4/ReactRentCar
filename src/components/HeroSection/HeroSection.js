import React from "react";
import "./HeroSection.css";
import heroImage from "../images/undraw_Mobile_pay_re_sjb8.svg";
import Button from "../Button/Button";

const HeroSection = (props) => {
  return (
    <div>
      <div className="main">
        <div className="main__container container">
          <div className="main__content">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>{props.para}.</p>
            <Button path="/" title="Get Started" />
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
