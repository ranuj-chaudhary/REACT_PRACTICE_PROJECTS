import "./header.css";
import photo from "../../assets/people.png";
import headerImage from "../../assets/ai.png";
import LazyLoad from "react-lazy-load";
const Header = ({ isSelected }) => {
  return (
    <div
      className={`gpt3__header section__padding`}
      ref={isSelected}
      id="hero__section"
    >
      <div className="gpt3__header__content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button" className="btn">Get Started</button>
        </div>
        <div className="gpt3__header__people">
          <img src={photo} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header__image">
        <LazyLoad offset={100} className="LazyLoad">
          <img
            src={headerImage}
            alt="A artificial intelligence fictional face."
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Header;
