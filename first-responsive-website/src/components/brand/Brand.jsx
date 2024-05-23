import React from "react";
import "./brand.css";
import {
  googleLogo,
  shopifyLogo,
  slackLogo,
  dropBoxLogo,
  atlassianLogo,
} from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brands section__padding">
      <div>
        <img src={googleLogo} alt="google logo" />
      </div>
      <div>
        <img src={slackLogo} alt="slack logo" />
      </div>
      <div>
        <img src={atlassianLogo} alt="atlassian logo" />
      </div>
      <div>
        <img src={dropBoxLogo} alt="dropbox logo" />
      </div>
      <div>
        <img src={shopifyLogo} alt="shopify logo" />
      </div>
    </div>
  );
};

export default Brand;
