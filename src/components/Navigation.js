import React from 'react';

import styled from 'styled-components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {device, until} from '@utilities/mixins';

import { resume, socialMedia } from '@config';

const Container = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;

	${until(
		device.iPhone12(),
		() => `
				display: none;
			`
	)}
	a {
		color: var(--white);
	}

	.fa-book-open, span:nth-child(2) {
		font-size: 18px;

		color: var(--blue);
	}

	a {
		margin-left: 10px;

		font-size: 18px;
	}

	svg {
		font-size: 24px;
	}

	#resume {
		display: flex;
		flex-direction: row;
		align-items: center;

		a {
			color: var(--blue);

			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const Navigation = (props) => {
  const { github, codepen, linkedin } = socialMedia;

  return (
    <Container>
		<span id="resume">
			<FontAwesomeIcon icon={['fas', 'book-open']}/>
			<a
        href={resume}
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
				Resume
			</a>
		</span>
      <span>|</span>
      <a
        href={github.url}
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        <FontAwesomeIcon icon={['fab', github.name.toLowerCase()]}/>
      </a>
      <a
        href={codepen.url}
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        <FontAwesomeIcon icon={['fab', codepen.name.toLowerCase()]}/>
      </a>
      <a
        href={linkedin.url}
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        <FontAwesomeIcon icon={['fab', linkedin.name.toLowerCase()]}/>
      </a>
    </Container>
  )
}

export default Navigation;
