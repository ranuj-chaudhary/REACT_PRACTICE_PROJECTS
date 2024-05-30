import React from "react";
import "./Laurels.css";
import { images } from "../../constants/index";
import { data } from "../../constants/index";
const Laurels = () => {
  const { laurels, spoon } = images;
  const { awards } = data;

  return (
    <div className="gericht__laurels section__padding">
      <div className="gericht__laurels__awards">
        <div className="gericht__laurels__heading">
          <p>Awards & recognition</p>
          <img src={spoon} alt="" />
          <h2>Our Laurels</h2>
        </div>
        <div className="gericht__laurels__awards__list">
          {awards.map((award, idx) => {
            return (
              <AwardsItems
                title={award.title}
                subtitle={award.subtitle}
                imgUrl={award.imgUrl}
                key={award.title + idx}
              />
            );
          })}
        </div>
      </div>
      <div className="gericht__laurels__image">
        <img src={laurels} alt="" />
      </div>
    </div>
  );
};

function AwardsItems({ title, subtitle, imgUrl }) {
  return (
    <div className="gericht__laurels__listitem">
      <img src={imgUrl} alt="" />
      <div className="gericht__laurels__listitem__subheading">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
export default Laurels;
