import React from "react";
import "./SpecialMenu.css";
import { images } from "../../constants";
import { data } from "../../constants";
import { MenuItem } from "../../components";

const SpecialMenu = function () {
  const { spoon, menu } = images;
  const { wines, cocktails } = data;
  return (
    <div
      className="gericht__special-menu section__menu section__padding"
      id="menu"
    >
      <div className="gericht__special-menu__heading">
        <div className="gericht__special__subheading flex__center">
          <p className="p__cormorant">Menu that fits you palatte</p>
          <img src={spoon} alt="spoon" />
        </div>
        <h2 className="headtext__cormorant">Today's Special</h2>
      </div>

      <div className="gericht__special-menu__menu">
        <div className="gericht__special-menu__wine-beer-menu">
          <h3>Wine & Beer</h3>
          {wines.map((item, idx) => (
            <MenuItem
              title={item.title}
              price={item.price}
              tags={item.tags}
              key={`${item.title}${idx}`}
            />
          ))}
        </div>
        <div className="gericht__special-menu__image">
          <img src={menu} alt="" />
        </div>
        <div className="gericht__special-menu__cocktails-menu">
          <h3>Cocktails</h3>
          {cocktails.map((item, idx) => (
            <MenuItem
              title={item.title}
              price={item.price}
              tags={item.tags}
              key={`${wines.title}${idx}`}
            />
          ))}
        </div>
      </div>
      <div className="gericht__special-menu__button-container">
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
