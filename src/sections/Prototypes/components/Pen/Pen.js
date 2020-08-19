import React from "react";

import styled from "styled-components";

import { device, until } from "../../../../utilities/mixins";

const Container = styled.div`
  margin: 10px 20px;

  ${until(
    device.iPhone(),
    () => `
		margin: 10px 0;

		padding: 0 20px;

		width: 100%;
		max-width: 100%;
	`
  )}

  p {
    font-size: var(--copy-size);
  }
`;

const Top = styled.div`
  margin-bottom: 10px;

  a {
    margin-left: 5px;

    padding: 5px;

    background: var(--grey);

    border-radius: 5px;

    font-size: 1rem;
    color: var(--link);
    text-decoration: underline;

    -webkit-transition: color 0.25ms ease-in-out;

    transition: color 0.25ms ease-in-out;

    &:hover {
      color: var(--light-grey);
    }
  }
`;

const Pen = (title, desc, link, emoji, label) => (
  <Container>
    <Top>
      <span role="img" aria-label={label}>
        {emoji}
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
    </Top>
    <p>{desc}</p>
  </Container>
);

export default Pen;
