import React from "react";

import styled from "styled-components";

import Media from "../Media/Media";

import { device, until } from "../../utilities/mixins";

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  ${until(
    device.iPhone(),
    () => `
		display: block;

		margin-bottom: 20px;

		text-align: left;
	`
  )}

  img {
    margin-top: 5px;

    border-radius: 5%;

    ${until(
      device.iPhone(),
      () => `
			margin: 0;
		`
    )}
  }

  div {
    display: flex;
    flex-direction: column;

    margin-left: 1rem;

    text-align: left;

    font-size: var(--copy-size);

    ${until(
      device.iPhone(),
      () => `
			margin: 0;
		`
    )}

    aside {
      color: #a6a6a6;
    }

    span {
      margin-top: 5px;
    }
  }
`;

const Experience = (company, title, location, duration, description, image) => (
  <Container>
    <Media url={image} alt={company} size={50} />
    <div>
      <strong>{title}</strong>
      <aside>{duration}</aside>
      <aside>{location}</aside>
      <span>{description()}</span>
    </div>
  </Container>
);

export default Experience;
