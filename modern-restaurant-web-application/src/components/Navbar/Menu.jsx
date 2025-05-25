import React from 'react'

const Menu = () => {
  return (
    <ul className="navbar__links p__opensans">
      <li>
        <a href="/">
          <p>Home</p>
        </a>
      </li>
      <li>
        <a href="#gallery">
          <p>Gallery</p>
        </a>
      </li>
      <li>
        <a href="#footer">
          <p>Contact Us</p>
        </a>
      </li>
      <li>
        <a href="#aboutus">
          <p>About Us</p>
        </a>
      </li>
      <li>
        <a href="#menu">
          <p>Menu</p>
        </a>
      </li>
    </ul>
  );
};
export default Menu
