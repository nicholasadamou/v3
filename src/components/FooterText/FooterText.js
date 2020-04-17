import React from "react";

import styled from "styled-components";

const Container = styled.p`
  margin-top: 2rem;

  font-size: 1rem;

  a {
    text-decoration: underline;

    &.linkedin {
      color: var(--linkedin);
    }

    &.github {
      color: var(--github);
    }

    &.codepen {
      color: var(--codepen);
    }

    &:hover {
      color: #a6a6a6;
    }
  }
`;

const FooterText = (content, linkBody, link, linkClassName) => (
  <Container>
    {content}
    <a
      href={link}
      target="_blank"
      aria-hidden="true"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      {linkBody}
    </a>
  </Container>
);

export default FooterText;
