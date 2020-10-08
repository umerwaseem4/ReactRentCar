import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="main__btn">
        <Link to={props.path}>{props.title}</Link>
      </button>
    </div>
  );
};

export default Button;
