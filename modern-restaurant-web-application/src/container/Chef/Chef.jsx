import React from "react";
import "./Chef.css";
import { images } from "../../constants/index";

const Chef = () => {
  const { chef, spoon, sign, quote } = images;
  return (
    <div className="gericht__chef section__padding flex__center">
      <div className="gericht__chef__image">
        <img src={chef} alt="chef smiling image" />
      </div>
      <div className="gericht__chef__content">
        <div className="gericth__chef__subheading">
          <h5>Chef’s Word</h5>
          <img src={spoon} alt="" />
        </div>
        <div className="gericth__chef__title">
          <h2 className="headtext__cormorant">What we believe in</h2>
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          <p>
            <blockquote className="p__opensans">
              <span>
                <img src={quote} alt="quote comma image" />
              </span>
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. lectus eu. Congue iaculis integer curabitur semper sit nunc.
            </blockquote>
          </p>
        </div>
        <div className="gericth__chef__author">
          <h4>Kevin Luo</h4>
          <span>Chef & Founder</span>
          <img  src={sign} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
