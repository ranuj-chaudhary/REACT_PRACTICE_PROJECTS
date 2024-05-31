import React from "react";
import "./Footer.css";
import { RiInstagramLine, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { images } from "../../constants/index";
import Newsletter from "../../components/Footer/Newsletter";
const Footer = () => {
  const { spoon } = images;
  return (    
    <div className="gericht__footer section__padding ">
      <Newsletter />
      <div className="gericht__footer__links__container">
        <div className="gericht__footer__links">
          <div className="gericht__footer__list">
            <h4>Contact Us</h4>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230 </p>
            <p>+1 212-555-1230</p>
          </div>
          <div className="gericht__footer__list ">
            <h2 className="headtext__cormorant">Gerícht</h2>
            <p>
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <img src={spoon} alt="" />
            <div className="gericht__footer__list__icons">
              <RiInstagramLine color="#fffffF" size={24} />
              <RiFacebookFill color="#ffffff" size={24} />
              <RiTwitterFill color="#fffffF" size={24} />
            </div>
          </div>
          <div className="gericht__footer__list">
            <h4>Working Hours</h4>
            <p>Monday-Friday: </p>
            <p>08:00 am -12:00 am </p>
            <p>Saturday-Sunday:</p>
            <p> 07:00am -11:00 pm </p>
          </div>
        </div>
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
