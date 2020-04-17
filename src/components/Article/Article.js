import React from "react";

import styled from "styled-components";

import { device, until } from "../../utilities/mixins";

const Container = styled.article`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;

  width: 90%;
  max-width: 100%;

  margin: 10px auto;

  overflow: hidden;

  font-size: var(--copy-size);

  ${until(
    device.iPhone(),
    () => `
		display: block;
		-webkit-box-flex: 0;
		flex: none;

		width: 100%;
		max-width: 100%;
	`
  )}

  span[role="img"] {
    margin-right: 5px;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Article = (title, desc, link, emoji, emojiLabel) => (
  <Container>
    <div>
      <span role="img" aria-label={emojiLabel}>
        ️️️{emoji}
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
    <p>{desc}</p>
  </Container>
);

export default Article;
