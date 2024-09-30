import { images } from "../../constants/index";
import "./Header.css";

const Header = () => {
  const { welcome, spoon } = images;

  return (
    <div
      className={`app__header section__padding `}
      
    >
      <div className="app__header__container flex__center">
        <div className="app__header__heading">
          <div className="app__header__subheading">
            <p className="p__cormorant">Chase the new Flavour</p>
            <img src={spoon} alt="" />
          </div>
          <h1>The key to fine dining</h1>
          <p className="p__opensans">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus.
          </p>
          <button className="custom__button">Explore Menu</button>
          <div className="app__header_hashtag">
            <span>#Bar</span>
            <span> #Gericht</span>
          </div>
        </div>
        <div className="app__header__image">
          <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
