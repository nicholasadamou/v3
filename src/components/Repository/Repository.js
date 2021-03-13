/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

import { SkeletonText } from 'carbon-components-react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

import { device, until } from 'utilities/mixins';

import useGitHub, { round } from 'hooks/useGithub';

import languages from './languages';

const Container = styled.article`
  margin: 10px 10px;

  font-size: var(--copy-size);

  ${until(
    '1200px',
    () => `
			margin: 10px 10px;
		`
  )}
  ${until(
    '932px',
    () => `
			margin: 10px 5px;
		`
  )}
  ${until(
    device.iPhone(),
    () => `
		width: 100%;
    max-width: 100%;

    margin: 10px 0;

		padding: 0 20px;
	`
  )}
	.MuiCircularProgress-root {
    width: 10px !important;
    height: 10px !important;

    circle {
      stroke: var(--loading);
    }
  }

  a {
    text-decoration: none;
    color: var(--link);
  }

  div {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    align-items: center;

    margin-bottom: 10px;

    span > div {
      display: inline-block;

      margin: 0;
    }

    div {
      display: inline-block;

      margin: 0;

      width: 100%;
    }

    span[aria-label='git'] {
      margin-right: 5px;

      color: var(--light-black);
    }

    svg[data-prefix='fas'] {
      -webkit-transition: all 0.25s ease-in-out;
      transition: all 0.25s ease-in-out;

      &:hover {
        -webkit-transform: scale(1.25);
        transform: scale(1.25);
      }
    }

    span[role='img'] {
      margin-left: 10px;

      &:first-child {
        margin-left: 0;
      }
    }

    ${until(
      device.iPad(),
      () => `
			span[aria-label='language'] {
				display: none;
			}
			`
    )}

    a {
      color: var(--link);
      font-size: var(--copy-size);
      text-decoration: none;

      -webkit-transition: color 0.25ms ease-in-out;

      transition: color 0.25ms ease-in-out;

      &:hover {
        color: var(--light-grey);
      }

      span {
        padding: 5px;

        background: var(--grey);
        border-radius: 5px;

        &[role='img'] {
          display: flex;
          flex-direction: row;
          align-items: center;

          line-height: 1;

          margin-left: 10px;

          &:first-child {
            margin-left: 10px;
          }

          svg {
            margin-right: 4px;
          }
        }

        &[aria-label='title'] {
          color: var(--link);

          text-decoration: underline;

          &:hover {
            color: var(--light-grey);
          }
        }

        &[aria-label='star'],
        &[aria-label='branch'] {
          font-weight: normal;
        }

        &[aria-label='star'] {
          color: var(--star);
        }

        &[aria-label='branch'] {
          color: var(--light-black);
        }
      }
    }
  }
`;

const LanguageIcon = styled.span`
  display: flex;
  align-items: center;

  padding: 5px;

  margin-left: -5px;

  svg[data-prefix='fas']:hover {
    transform: scale(1) !important;
  }

  span {
    margin-left: 5px;

    font-size: 0.8rem;
  }
`;

const LanguageTag = (language) => (
  <LanguageIcon>
    {languages[language].icon}
    <span>{languages[language].text}</span>
  </LanguageIcon>
);

const Repository = (user = 'nicholasadamou', repositoryName, language) => {
  const repository = useGitHub(user, repositoryName);

  if (JSON.stringify(repository) === '{}') return <SkeletonRepository />;

  const { id, name, description, link, stars, forks } = repository;

  return (
    <Container key={id}>
      <div>
        <span role="img" aria-label="git">
          <FontAwesomeIcon icon={['fab', 'git-alt']} />
        </span>
        <a
          href={link}
          target="_blank"
          aria-hidden="true"
          rel="noopener noreferrer"
          className="link"
        >
          <span aria-label="title">{name}</span>
        </a>
        {stars !== 0 && (
          <a
            href={`${link}/stargazers`}
            target="_blank"
            aria-hidden="true"
            aria-label={`${name} github stars`}
            title="star"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="star">
              <FontAwesomeIcon icon={['fas', 'star']} /> {round(stars)}
            </span>
          </a>
        )}
        {forks !== 0 && (
          <a
            href={`${link}/fork`}
            target="_blank"
            aria-hidden="true"
            aria-label={`fork ${name} on github`}
            title="fork"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="branch">
              <FontAwesomeIcon icon={['fas', 'code-branch']} /> {round(forks)}
            </span>
          </a>
        )}
        <span role="img" aria-label="language">
          {LanguageTag(language !== undefined ? language : repository.language)}
        </span>
      </div>
      <p>{description}</p>
    </Container>
  );
};

const SkeletonRepository = (id) => (
  <Container key={id}>
    <div>
      <span role="img" aria-label="git">
        <FontAwesomeIcon icon={['fab', 'git-alt']} />
      </span>
      <span aria-label="title">
        <CircularProgress />
      </span>
      <a
        href="#"
        target="_blank"
        aria-hidden="true"
        aria-label="github stars"
        title="star"
        rel="noopener noreferrer"
      >
        <span role="img" aria-label="star">
          <FontAwesomeIcon icon={['fas', 'star']} /> <CircularProgress />
        </span>
      </a>
      <a
        href="#"
        target="_blank"
        aria-hidden="true"
        aria-label="fork on github"
        title="fork"
        rel="noopener noreferrer"
      >
        <span role="img" aria-label="branch">
          <FontAwesomeIcon icon={['fas', 'code-branch']} /> <CircularProgress />
        </span>
      </a>
      <span role="img" aria-label="language">
        <CircularProgress />
      </span>
    </div>
    <div>
      <SkeletonText heading={false} lineCount={2} paragraph width="100%" />
    </div>
  </Container>
);

export default Repository;
