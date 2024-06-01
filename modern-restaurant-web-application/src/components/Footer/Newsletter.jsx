import React from "react";
import "./Newsletter.css";
import { images } from "../../constants/index";
const Newsletter = () => {
  const { spoon } = images;
  return (
    <div className="gericht__footer__newletter__container flex__center">
      <div className="gericht__footer__newletter-heading">
        <div className="gericht__footer__subheading">
          <h5 className="p__cormorant">Newsletter</h5>
          <img src={spoon} alt="" />
        </div>
        <h2 className="headtext__cormorant">Subscribe to Our Newsletter</h2>
        <p className="p__opensans">And never miss latest Updates!</p>
        <div className="gericht__footer__newletter-input flex__center">
          <input type="text" placeholder="Email Address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
