import React from 'react';

import styled from 'styled-components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {device, until} from 'utilities/mixins';

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

const Navigation = (props) => (
	<Container>
		<span id="resume">
			<FontAwesomeIcon icon={['fas', 'book-open']}/>
			<a
				href="https://drive.google.com/file/d/1p819Jx1v50zcBD_DnCo0paoiSnqBXw41/view?usp=sharing"
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
			href="https://github.com/nicholasadamou"
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			className="link"
		>
			<FontAwesomeIcon icon={['fab', 'github']}/>
		</a>
		<a
			href="https://codepen.io/nicholasadamou"
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			className="link"
		>
			<FontAwesomeIcon icon={['fab', 'codepen']}/>
		</a>
		<a
			href="https://www.linkedin.com/in/nicholas-adamou"
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			className="link"
		>
			<FontAwesomeIcon icon={['fab', 'linkedin']}/>
		</a>
	</Container>
)

export default Navigation;
