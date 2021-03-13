import React from 'react';

import styled from 'styled-components';

import { GatsbyImage } from 'gatsby-plugin-image';

import { device, until } from 'utilities/mixins';

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
    object-fit: inherit !important;

    border-radius: 5%;
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
			margin-top: 5px;
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

const Image = styled.img`
  margin-top: 5px;

  width: 50px;

  ${until(
    device.iPhone(),
    () => `
		margin: 0;
	`
  )}
`;

const AwardListing = (image, institution, content) => (
  <Container>
    {typeof image === 'string' ? (
      <Image loading="lazy" src={image} alt={institution} />
    ) : (
      <GatsbyImage image={image} alt={institution} />
    )}
    <div>
      <strong>{institution} Awards</strong>
      <span>{content()}</span>
    </div>
  </Container>
);

export default AwardListing;
