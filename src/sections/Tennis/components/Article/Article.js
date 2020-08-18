import React from 'react';

import styled from 'styled-components';

import moment from 'moment';

import { parseURL } from '../../../../utilities/utilities';

import { device, until } from '../../../../utilities/mixins';

const Container = styled.article`
  display: flex;
  align-items: center;

  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  ${until(
    device.iPhone(),
    () => `
			justify-content: center;
			flex-direction: column-reverse;
	`,
  )}

  .masthead {
    width: 150px;

    border-radius: 8px;

    ${until(
      device.iPhone(),
      () => `
			width: 280px;

			margin-bottom: 10px;
	`,
    )}
  }

  .article-details {
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

const Article = (title, description, date, link) => {
  const URL = parseURL(link);

  return (
    <Container>
      <div className="article-details">
        <div>
          <img
            loading="lazy"
            src={URL.favicon}
            alt={`${URL.parts[1]}'s favicon`}
          />
          <p>{URL.parts[1]}</p>
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
    </Container>
  );
};

export default Article;
