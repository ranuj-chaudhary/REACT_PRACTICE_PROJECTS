import React from "react";
import "./footer.css";
import Links from "../../components/links/Links";
import gptLogo from "../../logo.svg";
const linkData = [
  {
    heading: "Links",
    links: [
      {
        label: "Overons",
        url: "#",
      },
      {
        label: "Social Media",
        url: "#",
      },
      {
        label: "Counters",
        url: "#",
      },
      {
        label: "Contact",
        url: "#",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        label: "Gallery",
        url: "#",
      },
      {
        label: "Terms & Conditions",
        url: "#",
      },
      {
        label: "Privacy Policy",
        url: "#",
      },
      {
        label: "Contact",
        url: "#",
      },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      {
        label: "Crechterwoord K12 182 DK Alknjkcb",
        url: "#",
      },
      {
        label: "085-132567",
        url: "#",
      },
      {
        label: "info@payme.net",
        url: "#",
      },
      {
        label: "info@payme.net",
        url: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="gpt3__footer section__padding">
      <div className="gpt3__footer__heading">
        <h6 className="gradient__text">
          Do you want to step in to the future before others
        </h6>
        <button type="button">Request Early Access</button>
      </div>

      <div className="gpt3__footer__Container">
        <div className="gpt3__footer__logo">
          <img
            src={gptLogo}
            alt="gpt text footer logo."
            className="gpt3__footer__logo__image"
          />
          <p>GPT Pvt. Ltd., All Rights Reserved</p>
        </div>
        <div className="gpt3__footer__links">
          {linkData.map((item, idx) => (
            <Links
              title={item.heading}
              linkList={item.links}
              key={item.heading}
            />
          ))}
        </div>
      </div>
      <div className="gpt3__footer__copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
