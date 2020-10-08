import React from "react";
import "./HeroSection.css";
import heroImage from "../images/undraw_Mobile_pay_re_sjb8.svg";
import Button from "../Button/Button";
import Text from "../GradientText/Text";

const HeroSection = (props) => {
  return (
    <div>
      <div class="main">
        <div class="main__container container">
          <div class="main__content">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>{props.para}.</p>
            <Button path="/" title="Get Started" />
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
