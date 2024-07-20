import React, { useState } from "react";

import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../logo.svg";

const NavMenu = ({ customClass }) => {
  return (
    <ul className={customClass}>
      <li>
        <a href="#hero__section">Home</a>
      </li>
      <li>
        <a href="#what-is-gpt">What is Gpt</a>
      </li>
      <li>
        <a href="#open-ai">Open AI</a>
      </li>
      <li>
        <a href="#case-study">Case Study</a>
      </li>
      <li>
        <a href="#library">Library</a>
      </li>
    </ul>
  );
};

const Navbar = ({ inView }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`gpt3__navbar ${!inView ? "sticky__navbar" : ""}`} id="#">
      <div className="gpt3__navbar__container">
        <div className="gpt3__navbar_links-container">
          <div className="gpt3__navbar-links_logo">
            <a href="#hero__section">
              <img src={logo} alt="gpt text logo." />
            </a>
          </div>
          <NavMenu customClass={"gpt3__navbar-links"} />
        </div>
        <div className="gpt3__navbar_container-sign">
          <a href="#home">Sign In</a>
          <a href="#home" className="btn">
            Sign Up
          </a>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <div className="">
              <RiCloseLine
                color="white"
                size="2rem"
                className="gpt3__navbar-menu_close-icon"
                onClick={() => setToggleMenu(false)}
              />
              <RiMenu3Line
                color="white"
                size="2rem"
                className="gpt3__navbar-menu_open-icon"
                onClick={() => setToggleMenu(true)}
              />
            </div>
          ) : (
            <RiMenu3Line
              color="white"
              size="2rem"
              className="gpt3__navbar-menu_menu-icon"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className={`gpt3__navbar-menu_container scale-up-center`}>
              {toggleMenu && (
                <RiCloseLine
                  color="white"
                  size="2rem"
                  className="gpt3__navbar-menu_menu-icon"
                  onClick={() => setToggleMenu(false)}
                />
              )}
              <div className="gpt3__navbar-menu_container-links">
                <NavMenu customClass={"gpt3__navbar-menu-links"} />
              </div>
              <div className="gpt3__navbar-menu-sign">
                <a href="#home">Sign In</a>
                <a href="#home" className="btn">
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
