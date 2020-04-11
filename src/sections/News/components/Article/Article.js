import React from "react";

import "./index.scss";

const Article = (title, desc, link) => (
  <article>
    <div className="top">
      <span role="img" aria-label="newspaper-roll" className="emoji">
        ️️️🗞️️
      </span>
      <a
        href={link}
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        {title}
      </a>
    </div>
    <p className="desc">{desc}</p>
  </article>
);

export default Article;
