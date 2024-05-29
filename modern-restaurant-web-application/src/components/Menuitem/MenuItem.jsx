import React from "react";

import "./MenuItem.css";

const MenuItem = ({ price, tags, title }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem__container">
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
      <div className="app__menuitem__tags">
        <p>{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
