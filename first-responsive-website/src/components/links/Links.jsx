import React from "react";
import "./links.css";

const Links = ({ title, linkList }) => {
  return (
    <div className="gpt3__links">
      <div className="gpt3__links__title">
        <p>{title}</p>
      </div>
      <div className="gpt3__links__container">
        <ul className="gpt3__links__list">
          {linkList.map((data, idx) => {
            if (data.type === "address") {
              return <Address idx={idx} data={data} key={idx} />;
            } else if (data.type === "email") {
              return <Email idx={idx} data={data} key={idx} />;
            } else if (data.type === "telephone") {
              return <Telephone idx={idx} data={data} key={idx} />;
            } else {
              return <Link idx={idx} data={data} key={idx} />;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

function Address({ idx, data }) {
  return (
    <li>
      <address>
        <a href={data.url} key={`${idx}${data.label}`}>
          {data.label}
        </a>
      </address>
    </li>
  );
}

function Email({ idx, data }) {
  return (
    <li>
      <a href={`mailto:${data.label}`} key={`${idx}${data.label}`}>
        {data.label}
      </a>
    </li>
  );
}
function Telephone({ idx, data }) {
  return (
    <li>
      <a href={`tel:${data.label}`} key={`${idx}${data.label}`}>
        {data.label}
      </a>
    </li>
  );
}

function Link({ idx, data }) {
  return (
    <li>
      <a href={data.url} key={`${idx}${data.label}`}>
        {data.label}
      </a>
    </li>
  );
}
export default Links;
