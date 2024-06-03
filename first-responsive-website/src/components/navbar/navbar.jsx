import React, { useState, useRef, useEffect } from "react";

import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";
const Menu = () => {
  return (
    <>
      <p>
        <a href="#">Home</a>
      </p>
      <p>
        <a href="#what-is-gpt">What is Gpt</a>
      </p>
      <p>
        <a href="#open-ai">Open AI</a>
      </p>
      <p>
        <a href="#case-study">Case Study</a>
      </p>
      <p>
        <a href="#library">Library</a>
      </p>
    </>
  );
};
const Navbar = ({ inView }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`gpt3__navbar ${!inView ? "sticky__navbar" : ""}`} id="#">
      <div className="gpt3__navbar__container">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="gpt3__navbar_links-container">
            <Menu />
          </div>
        </div>
        <div className="gpt3__navbar_container-sign">
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="white"
              size="2rem"
              className="gpt3__navbar-menu_menu-icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="white"
              size="2rem"
              className="gpt3__navbar-menu_menu-icon"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
              </div>
              <div className="gpt3__navbar-menu-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
