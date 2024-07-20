import React from "react";
import "./article.css";
import LazyLoad from "react-lazy-load";
const Article = ({ title, imagUrl, date, gridClass }) => {
  return (
    <div className={`gpt3__article ${gridClass}`}>
      <div className="gpt3__article__image">
        <LazyLoad offset={100} className="LazyLoad">
          <img src={imagUrl} alt="" />
        </LazyLoad>
      </div>
      <div className="gpt3__article__heading">
        <div className="gpt3__article_heading-title">
          <p>{date}</p>
          <h5>
            <a href="#home" className="gpt3__links">
              {title}{" "}
            </a>
          </h5>
        </div>
        <p>
          <a href="#home" className="gpt3__links">
            Read Full Article
          </a>
        </p>
      </div>
    </div>
  );
};

export default Article;
