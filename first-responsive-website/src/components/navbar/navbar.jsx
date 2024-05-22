import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../logo.svg'
const navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar_links-container">
          <p>
            <a href="#home">Home</a>
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
        </div>
      </div>
      <div className="gpt3__navbar_container-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
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
            </div>
            <div className="gpt3__navbar-menu-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
