import React from "react";
import "./SpecialMenu.css";
import SubHeadings from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { data } from "../../constants";
import { MenuItem } from "../../components";

const SpecialMenu = function () {
  const { MinSubHeading } = SubHeadings;
  const { spoon, menu } = images;
  const { wines, cocktails } = data;
  console.log(wines);
  return (
    <div className="gericht__special-menu section__menu section__padding">
      <div className="gericht__special-menu__heading">
        <div className="gericht__special__subheading">
          <p>Menu that fits you palatte</p>
          <img src={spoon} alt="spoon" />
        </div>
        <h2>Today's Special</h2>
      </div>

      <div className="gericht__special-menu__menu">
        <div className="gericht__special-menu__wine-beer-menu">
          <h3>Wine & Beer</h3>
          {wines.map((item, idx) => (
            <MenuItem
              title={item.title}
              price={item.price}
              tags={item.tags}
              key={wines.title}
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
              key={wines.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
