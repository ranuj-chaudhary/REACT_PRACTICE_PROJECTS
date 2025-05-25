import React from "react";
import { useState } from "react";
import "./Navbar.css";
import Menu from "./Menu";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`navbar `}>
      <div className="navbar__logo">
        <a href="/">
          <p>Gericht</p>
        </a>
      </div>
      <Menu />
      <NavbarMenu toggleMenu={toggleMenu} onToggle={setToggleMenu} />
      <div className="navbar__sign p__opensans">
        <div className="navbar__sign__container">
          <a href="/">
            <span>Log In</span>
          </a>
          <span> / </span>
          <a href="/">
            <span>Registration</span>
          </a>
        </div>
        <div className="navbar_sign-book-table">
          <a href="/">
            <p>Book Table</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
