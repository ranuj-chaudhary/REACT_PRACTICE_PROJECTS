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
    <div className="gericht__special-menu section__menu flex__center">
      <div className="gericht__special-menu__heading">
        <MinSubHeading minSubHeading={`Today’s Special`} imageUrl={spoon} />
        <h2>Today’s Special</h2>
      </div>
      <div className="gericht__special-menu__image">
        <img src={menu} alt="" />
      </div>
      <div className="gericht__special-menu__menu">
        <div className="gericht__special-menu__wine-beer-menu">
          <MenuItem />
        </div>
        <div className="gericht__special-menu__cocktails-menu">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
