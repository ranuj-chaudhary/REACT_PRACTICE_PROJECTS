import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <section className="gpt3__possibility section__padding" id="library">
      <div className="gpt3__possibility__image">
        <img src={possibilityImage} alt="girl waring vr box to see future" />
      </div>
      <div className="gpt3__possibility__content">
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p> Request Early Access to Get Started</p>
      </div>
    </section>
  );
};

export default Possibility;
