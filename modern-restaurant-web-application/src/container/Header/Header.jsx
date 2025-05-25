import { images } from "../../constants/index";
import "./Header.css";
import { Navbar } from "../../components";
const Header = () => {
  const { welcome, spoon } = images;

  return (
    <header className="app__header" role="banner">
      <Navbar />
      <div className="app__header__container flex__center section__padding">
        <section className="app__header__heading">
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
        </section>
        <section className="app__header__image">
          <img
            src={welcome}
            alt="fried fish tuna with fine dining and garninshing with lemon mint"
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
