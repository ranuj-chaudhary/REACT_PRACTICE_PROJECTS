import React from "react";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
import Article from "../../components/article/Article";

const blogData = [
  {
    title: `GPT-3 and Open  AI is the future. Let us exlore how it is?`,
    imageUrl: blog1,
    date: `Sep 26, 2021`,
  },
  {
    title: ` GPT-3 and Open  AI is the future. Let us exlore how it is?`,
    imageUrl: blog2,
    date: `Sep 26, 2021`,
  },
  {
    title: `GPT-3 and Open  AI is the future. Let us exlore how it is?`,
    imageUrl: blog3,
    date: `Sep 26, 2021`,
  },
  {
    title: `GPT-3 and Open  AI is the future. Let us exlore how it is?`,
    imageUrl: blog4,
    date: `Sep 26, 2021`,
  },
  {
    title: `GPT-3 and Open  AI is the future. Let us exlore how it is?`,
    imageUrl: blog5,
    date: `Sep 26, 2021`,
  },
];
const Blog = () => {
  return (
    <section className="gpt3__blog section__padding" id="open-ai">
      <div className="gpt3__blog__container">
        <div className="gpt3__blog__heading">
          <h1 className="gradient__text">
            A lot is happening, We are blogging about it.
          </h1>
        </div>
        <div className="gpt3__blog__posts">
          {blogData.map((item, idx) => (
            <Article
              title={item.title}
              imagUrl={item.imageUrl}
              date={item.date}
              gridClass={`item${idx + 1}`}
              key={item.title + idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
