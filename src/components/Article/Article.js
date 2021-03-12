/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

import moment from 'moment';

import { GatsbyImage } from 'gatsby-plugin-image';

import { device, until } from '../../utilities/mixins';

const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  ${until(
    device.iPhone(),
    () => `
			justify-content: center;
			flex-direction: column-reverse;
	`
  )}
  .masthead {
    border-radius: 8px;

    ${until(
      device.iPhone(),
      () => `
			margin-bottom: 10px;
	`
    )}
  }

  .article-details {
    width: 70%;

    ${until(
      device.iPhone(),
      () => `
			width: 100%;
	`
    )}
    .link {
      h4 {
        font-size: 1.1rem;

        margin-bottom: 3px;
      }
    }

    p {
      margin-bottom: 3px;
    }

    small {
      color: var(--light-grey);
    }

    div {
      display: flex;
      align-items: center;

      margin-bottom: 3px;

      img {
        margin-right: 10px;

        width: 15px;
        height: 15px;
      }

      p {
        color: var(--light-grey);
      }
    }
  }
`;

const parseURL = (link = 'https://example.com') => {
  let url = {};

  try {
    url = new URL(link);
  } catch (_) {
    return url;
  }

  return {
    favicon: `https://s2.googleusercontent.com/s2/favicons?domain=${link}`,
    hostname: url.hostname.split('.')[1],
  };
};

const Article = (props) => {
  const { title, description, date, image, link } = props;

  const URL = parseURL(link);

  return (
    <Container>
      <div className="article-details">
        <div>
          <img
            loading="lazy"
            src={URL.favicon}
            alt={`${URL.hostname}'s favicon`}
          />
          <p>{URL.hostname}</p>
        </div>
        <a
          href={link}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
        <small>
          {moment(new Date(date)).fromNow() === 'a year ago' ||
          moment(new Date(date)).fromNow() === '3 months ago'
            ? `${date}`
            : moment(new Date(date)).fromNow()}
        </small>
      </div>
      {image !== undefined ? (
        typeof image === 'string' ? (
          <img
            loading="lazy"
            src={image}
            className="masthead"
            alt="article masthead"
          />
        ) : (
          <GatsbyImage
            image={image}
            className="masthead"
            alt="article masthead"
          />
        )
      ) : (
        <div style={{ width: 200 }} />
      )}
    </Container>
  );
};

export default Article;
