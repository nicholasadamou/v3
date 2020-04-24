import React from "react";

import Repository from "../../../../sass/Repository";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const Repo = (repository) => {
  const { id, name, description, link, stars, forks } = repository;

  return (
    <Repository key={id}>
      <div>
        <a
          href={link}
          target="_blank"
          aria-hidden="true"
          rel="noopener noreferrer"
        >
          <span aria-label="title">{name}</span>
        </a>
        <a
          href={link}
          target="_blank"
          aria-hidden="true"
          aria-label={`${name} github stars`}
          title="star"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="star">
            <FontAwesomeIcon icon={["fas", "star"]} /> {round(stars)}
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
          <span role="img" aria-label="branch">
            <FontAwesomeIcon icon={["fas", "code-branch"]} /> {round(forks)}
          </span>
        </a>
      </div>
      <p>{description}</p>
    </Repository>
  );
};

export default Repo;
