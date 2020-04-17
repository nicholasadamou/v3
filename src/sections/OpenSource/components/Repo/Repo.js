import React from "react";

import "./index.scss";

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const Repo = (repository) => {
  const {
    id,
    name,
    description,
    link,
    stars,
    forks,
    emoji,
    emojiLabel,
  } = repository;

  return (
    <article className="repo" key={id}>
      <div className="top">
        <div className="left">
          <span className="emoji" role="img" aria-label={emojiLabel}>
            {emoji}
          </span>
          <a
            href={link}
            target="_blank"
            aria-hidden="true"
            rel="noopener noreferrer"
          >
            <span className="repo-title">{name}</span>
          </a>
        </div>
        <div className="right">
          <a
            href={link}
            target="_blank"
            aria-hidden="true"
            aria-label={`${name} github stars`}
            title="star"
            rel="noopener noreferrer"
          >
            <span className="stars" role="img" aria-label="star">
              <i className="fas fa-star"></i> {round(stars)}
            </span>
          </a>
          <a
            href={`${link}/fork`}
            target="_blank"
            aria-hidden="true"
            aria-label={`fork ${name} on github`}
            title="fork"
            rel="noopener noreferrer"
          >
            <span className="forks" role="img" aria-label="branch">
              <i className="fas fa-code-branch"></i> {round(forks)}
            </span>
          </a>
        </div>
      </div>
      <div className="bottom">
        <span className="desc">{description}</span>
      </div>
    </article>
  );
};

export default Repo;
