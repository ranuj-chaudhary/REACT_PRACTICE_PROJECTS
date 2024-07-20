import React from "react";
import "./feature.css";

const Feature = ({title, description}) => {
  return (
    <div className="gpt3__whatgpt3-feature">
      <div className="gpt3__whatgpt3__sub-heading">
        <h4>{title}</h4>
      </div>
      <div className="gpt3__whatgpt3__sub-heading-text">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;

