import React, { useState, useEffect } from "react";

import "./index.scss";

import SkeletonProject from "../SkeletonProject/SkeletonProject";

import GitHub from "github-api";

const github = new GitHub({
  username: "nicholasadamou",
  token: process.env.REACT_APP_GITHUB_TOKEN,
});

const Project = (repositoryName, emoji, emojiLabel) => {
  const [repository, setRepository] = useState({});

  useEffect(() => {
    function fetchRepository() {
      github
        .getRepo("nicholasadamou", repositoryName)
        .getDetails()
        .then((response) => {
          const { name, description, html_url } = response.data;

          setRepository({
            name: name.toLowerCase(),
            description,
            link: html_url,
          });
        });
    }

    fetchRepository();
  }, [repositoryName, repository]);

  if (JSON.stringify(repository) === "{}") return <SkeletonProject />;

  const { name, description, link } = repository;

  return (
    <article className="project">
      <div className="top">
        <span className="emoji" role="img" aria-label={emojiLabel}>
          {emoji}
        </span>
        <a
          href={link}
          target="_blank"
          aria-hidden="true"
          rel="noopener noreferrer"
        >
          <span className="project-title">{name}</span>
        </a>
      </div>
      <div className="bottom">
        <span className="desc">{description}</span>
      </div>
    </article>
  );
};

export default Project;
