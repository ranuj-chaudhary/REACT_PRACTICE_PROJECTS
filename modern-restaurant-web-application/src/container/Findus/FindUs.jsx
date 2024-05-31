import React from "react";
import "./FindUs.css";
import { images } from "../../constants/index";
const FindUs = () => {
  const { spoon, findus } = images;
  return (
    <div className="gericht__findus flex__center section__padding">
      <div className="gericht__findus__heading">
        <h5 className="p__cormorant">Contact</h5>
        <img src={spoon} alt="" />
        <h2 className="headtext__cormorant">Find Us</h2>
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG{" "}
        </p>
        <div className="gericht__findus__address-time">
          <h5 className="p__cormorant">Opening Hours</h5>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="gericht__findus__image">
        <img src={findus} alt="" />
      </div>
    </div>
  );
};

export default FindUs;
