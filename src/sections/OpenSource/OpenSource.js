import React from "react";

import "./index.scss";

import Repo from "./components/Repo/Repo";
import SkeletonRepo from "./components/SkeletonRepo/SkeletonRepo";

import FooterText from "../../components/FooterText/FooterText";

import styled from "styled-components";

import { github } from "../../utilities/utilities";

import { device, until } from "../../utilities/mixins";

const Repositories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 2rem 1rem 2rem;

  text-align: left;

  ${until(
    device.iPad(),
    () => `
		grid-template-columns: 1fr;
	`
  )}

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;

		margin: 0;
	`
  )}
`;

const MAX_NUMBER_OF_REPOSITORIES = 9;

class OpenSource extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      repositories: new Array(MAX_NUMBER_OF_REPOSITORIES).fill({}),
    };
  }

  componentDidMount() {
    github
      .getUser()
      .listRepos()
      .then((response) => {
        let repositories = response.data.map((repository) => {
          return {
            id: repository.id,
            name: repository.name.toLowerCase(),
            description: repository.description,
            link: repository.html_url,
            stars: repository.stargazers_count,
            forks: repository.forks_count,
          };
        });

        repositories.sort((a, b) => {
          if (a.stars < b.stars) return 1;
          if (a.stars > b.stars) return -1;
          return 0;
        });

        repositories = repositories.slice(0, MAX_NUMBER_OF_REPOSITORIES);

        this.setState({
          isLoading: false,
          repositories,
        });
      });
  }

  render() {
    const { repositories, isLoading } = this.state;

    return (
      <section id="open-source">
        <h2 className="title">
          Open Source <i className="fab fa-git-alt"></i>
        </h2>
        <p className="subtitle">
          I am an{" "}
          <a
            href="http://git-awards.com/users/nicholasadamou"
            target="_blank"
            aria-hidden="true"
            rel="noopener noreferrer"
            className="link"
          >
            avid open-sourcer
          </a>{" "}
          and I have{" "}
          <a
            href="https://github.com/nicholasadamou"
            target="_blank"
            aria-hidden="true"
            rel="noopener noreferrer"
            className="link"
          >
            many repositories
          </a>{" "}
          . Take a{" "}
          <span role="img" aria-label="eyes">
            👀
          </span>
          .
        </p>

        <Repositories>
          {isLoading
            ? repositories.map((current, index) => {
                return SkeletonRepo(index);
              })
            : repositories.map((repository) => {
                return Repo(repository);
              })}
        </Repositories>

        {FooterText(
          "More can be found on my ",
          "GitHub",
          "https://github.com/nicholasadamou",
          "github"
        )}
      </section>
    );
  }
}

export default OpenSource;
