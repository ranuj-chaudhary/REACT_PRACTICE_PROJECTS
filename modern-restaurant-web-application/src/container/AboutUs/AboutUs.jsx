import React from "react";
import "./AboutUs.css";
import { images } from "../../constants/index";
import subHeadings from "../../components/SubHeading/SubHeading";
const AboutUs = () => {
  const { SubHeading } = subHeadings;

  const { spoon, G, knife } = images;
  return (
    <section
      className="gericht__aboutus section__padding flex__center"
      id="aboutus"
    >
      <div className="gericht__aboutus__container">
        <div className="gericht__aboutus__title">
          <SubHeading title={"About us"} imageUrl={spoon} />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="gericht__aboutus__history">
          <SubHeading title={"Our History"} imageUrl={spoon} />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
      <div className="gericht__aboutus__background-image">
        <img src={G} alt="" />
      </div>
      <img src={knife} className="gericht__aboutus__knife" alt="" />
    </section>
  );
};

export default AboutUs;
