import React from "react";
import { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { images } from "../../constants/index";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <a href="#home">
        <p>Home</p>
      </a>
      <a href="#pages">
        <p>Pages</p>
      </a>
      <a href="#footer">
        <p>Contact Us</p>
      </a>
      <a href="#blog">
        <p>Blog</p>
      </a>
      <a href="#landing">
        <p>Landing</p>
      </a>
    </>
  );
};

const Navbar = () => {

  return (
    <div className="app__navbar">
      <div className="app__navbar__logo">
        <a href="">
          <p>Gericht</p>
        </a>
      </div>
      <div className="app__navbar__links">
        <Menu />
      </div>
      <div className="app__navbar__sign">
        <div className="app__navbar__sign__container">
          <a href="">
            <span>Log In</span>
          </a>
          <span> / </span>
          <a href="">
            <span>Registration</span>
          </a>
        </div>
        <div className="app__navbar_sign-book-table">
          <a href="">
            <p>Book Table</p>
          </a>
        </div>
      </div>
      <div className="app__navbar-menu">
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
          <div className="app__navbar-menu__links">
            <Menu />
            <div className="app__navbar-menu__sign">
              <div className="app__navbar-menu__sign__container">
                <a href="">
                  <span>Log In</span>
                </a>
                <span> / </span>
                <a href="">
                  <span>Registration</span>
                </a>
              </div>
              <div className="app__navbar-menu_sign-book-table">
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
