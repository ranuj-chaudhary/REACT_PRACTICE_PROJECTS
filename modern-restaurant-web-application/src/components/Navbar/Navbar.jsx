import React from "react";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { images } from "../../constants/index";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <a href="#">
        <p>Home</p>
      </a>
      <a href="#gallery">
        <p>Gallery</p>
      </a>
      <a href="#footer">
        <p>Contact Us</p>
      </a>
      <a href="#aboutus">
        <p>About Us</p>
      </a>
      <a href="#menu">
        <p>Menu</p>
      </a>
    </>
  );
};

const Navbar = ({ isSticky }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  console.log(isSticky);
  return (
    <div className={`gericht__navbar ${!isSticky ? "sticky__navbar" : ""}`} >
      <div className="gericht__navbar__logo">
        <a href="#">
          <p>Gericht</p>
        </a>
      </div>
      <div className="gericht__navbar__links p__opensans">
        <Menu />
      </div>
      <div className="gericht__navbar__sign p__opensans">
        <div className="gericht__navbar__sign__container">
          <a href="">
            <span>Log In</span>
          </a>
          <span> / </span>
          <a href="">
            <span>Registration</span>
          </a>
        </div>
        <div className="gericht__navbar_sign-book-table">
          <a href="">
            <p>Book Table</p>
          </a>
        </div>
      </div>
      <div className="gericht__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#dcca87"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuLine
            color="#dcca87"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gericht__navbar-menu__links p__opensans">
            <Menu />
            <div className="gericht__navbar-menu__sign p__opensans">
              <div className="gericht__navbar-menu__sign__container">
                <a href="">
                  <span>Log In</span>
                </a>
                <span> / </span>
                <a href="">
                  <span>Registration</span>
                </a>
              </div>
              <div className="gericht__navbar-menu_sign-book-table">
                <a href="">
                  <p>Book Table</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
