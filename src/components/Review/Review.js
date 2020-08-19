import React from 'react';

import styled from 'styled-components';

import { device, until } from '../../utilities/mixins';

const Container = styled.div`
  text-align: left;

  blockquote {
    font-size: var(--copy-size);
    font-style: italic;

    ${until(
      device.iPhone(),
      () => `
			margin-top: 20px;
		`,
    )}

    article {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-top: 10px;

      font-style: normal;

      img {
        width: 2.2806973457em;
        height: 2.2806973457em;

        border-radius: 1000px;

        ${until(
          device.iPhone(),
          () => `
					width: 3.2473210255em;
          height: 3.2473210255em;
				`,
        )}
      }
    }
  }
`;

const Meta = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-flow: column;

  margin-left: 1em;

  font-size: 0.7901234568em;
`;

const Review = (author, source, quote, image) => (
  <Container>
    <blockquote>
      <q>"{quote}"</q>
      <article>
        <img loading="lazy" src={image} alt="avatar" />
        <Meta>
          <strong>{author}</strong>
          <span>{source}</span>
        </Meta>
      </article>
    </blockquote>
  </Container>
);

export default Review;
