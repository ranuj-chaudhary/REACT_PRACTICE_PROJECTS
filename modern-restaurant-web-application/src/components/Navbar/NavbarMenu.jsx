import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import Menu from "./Menu";

const NavbarMenu = ({ toggleMenu, onToggle }) => {
  return (
    <div className="navbar-menu">
      {toggleMenu ? (
        <RiCloseLine
          color="#dcca87"
          size={27}
          onClick={() => onToggle(false)}
        />
      ) : (
        <RiMenuLine color="#dcca87" size={27} onClick={() => onToggle(true)} />
      )}
      {toggleMenu && (
        <div className="navbar-menu__links p__opensans">
          <Menu />
          <div className="navbar-menu__sign p__opensans">
            <div className="navbar-menu__sign__container">
              <a href="/">
                <span>Log In</span>
              </a>
              <span> / </span>
              <a href="/">
                <span>Registration</span>
              </a>
            </div>
            <div className="navbar-menu_sign-book-table">
              <a href="/">
                <p>Book Table</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
