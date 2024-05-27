import React from "react";
import { images } from "../../constants/index";
import "./Header.css";

const Header = () => {
  const { welcome } = images;

  return (
    <div className="app__header section__padding">
      <div className="app__header__container">
        <div className="app__header__heading">
          <p className="p__cormorant">Chase the new Flavour</p>
          <h1 >The key to fine dining</h1>
          <p className="p__opensans">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus.
          </p>
          <button>Explore Menu</button>
        </div>
        <div className="app__header__image">
          <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
