import React from "react";

import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './index.scss';

const Button = styled.a`
	--container_size: 56px;
	--size: 26px;

	display: inline-block;

	position: relative;

	width: var(--container_size);
	height: var(--container_size);

	padding: 6px 0;

	border-radius: 100%;

	font-size: var(--size);
	text-decoration: none;
	line-height: 1.9;
	text-align: center;

	cursor: pointer;

	transition: all 86ms ease-out;

	.svg-inline--fa {
		vertical-align: 0;

		width: var(--size);
		height: var(--size);
	}
`;

const SocialMediaButton = (props) => {
	const { href, icon } = props;

	return (
		<Button
			href={href}
			target="_blank"
			aria-hidden="true"
			title={icon}
			aria-label={`${icon}-social-media-button`}
			rel="noopener noreferrer"
			className={`social-media-button-${icon}`}
			{...props}
		>
			<FontAwesomeIcon icon={['fab', icon]} />
		</Button>
	)
}

export default SocialMediaButton;
