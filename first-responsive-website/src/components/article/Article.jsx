import React from "react";
import "./article.css";
const Article = ({ title, imagUrl, date, gridClass }) => {
  return (
    <div className={`gpt3__article ${gridClass}`}>
      <div className="gpt3__article__image">
        <img src={imagUrl} alt="" />
      </div>
      <div className="gpt3__article__heading">
        <div className="gpt3__article_heading-title">
          <p>{date}</p>
          <a href="#" className="gpt3__links">
            <h3>{title}</h3>
          </a>
        </div>

        <a href="#" className="gpt3__links">
          <p>Read Full Article</p>
        </a>
      </div>
    </div>
  );
};

export default Article;
