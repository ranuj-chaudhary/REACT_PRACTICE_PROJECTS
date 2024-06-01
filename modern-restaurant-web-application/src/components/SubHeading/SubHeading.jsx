import React from "react";
import "./subheading.css";

const SubHeading = ({ title = null, imageUrl = null }) => {
  return (
    <div className="gericht__subheading__title">
      {title && <h2 className="headtext__cormorant">{title}</h2>}
      {imageUrl && <img src={imageUrl} alt="" />}
    </div>
  );
};

const MinSubHeading = ({ minSubHeading = null, imageUrl = null }) => {
  return (
    <div className="gericht__minSubHeading">
      {minSubHeading && <p>{minSubHeading}</p>}
      {imageUrl && <img src={imageUrl} alt="" />}
    </div>
  );
};

export default { SubHeading, MinSubHeading };
