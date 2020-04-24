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

    width: 50px;
    height: 50px;

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

    span {
      margin-top: 5px;
      margin-left: 20px;

      ${until(
        device.iPhone(),
        () => `
				margin-left: 0;
			`
      )}
    }
  }
`;

const AwardListing = (logo, institution, content) => (
  <Container>
    <Media url={logo} alt={institution} size={50} />
    <div>
      <strong>{institution} Awards</strong>
      <span>{content()}</span>
    </div>
  </Container>
);

export default AwardListing;
