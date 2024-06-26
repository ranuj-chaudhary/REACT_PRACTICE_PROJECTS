import React from "react";
import "./links.css";

const Links = ({ title, linkList}) => {
  return (
    <div className="gpt3__links" >
      <div className="gpt3__links__title">
        <p>{title}</p>
      </div>
      <div className="gpt3__links__container">
        <ul className="gpt3__links__list">
          {linkList.map((data, idx) => {
            return (
              <>
                <a href={data.url} key={`${idx}${data.label}`}>
                  <li key={data.label + idx}>{data.label}</li>
                </a>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Links;
