/* eslint-disable import/no-unresolved */
import React from 'react';

import styled from 'styled-components';

import {GatsbyImage} from 'gatsby-plugin-image';

import {device, until} from 'utilities/mixins';

const Container = styled.div`
	display: flex;
	align-items: flex-start;

	position: relative;

	width: 80%;

	padding: 1rem;

	border: 1px solid #666666;
	border-radius: 10px;

	background-color: var(--white);

	&:after {
		content: '';

		position: absolute;
		top: 10px;
		left: 10px;

		width: 100%;
		height: 100%;

		border-radius: 10px;

		background-color: var(--black);

		z-index: -1;
	}

	${until(
		device.iPadProVertical(),
		() => `
		display: block;

		margin-bottom: 20px;
		margin-left: 0;
		margin-right: 0;

		padding-bottom: 20px;

		width: 100%;

		text-align: left;
	`
	)}

	${until(
		device.iPhone12(),
		() => `
		margin-bottom: 20px;
		margin-left: -20px;
		margin-right: 0;

		width: 375px;
	`
	)}

	${until(
		device.iPhone11(),
		() => `
		width: 360px;
	`
	)}

	img {
		object-fit: inherit !important;

		border-radius: 5%;
	}

	div {
		display: flex;
		flex-direction: column;

		position: relative;

		margin-left: 1rem;

		width: 100%;

		text-align: left;

		font-size: var(--copy-size);

		${until(
			device.iPhone12(),
			() => `
			margin: 0;
			margin-top: 5px;
		`
		)}
		aside {
			color: #a6a6a6;
		}

		span {
			margin-top: 5px;

			width: 90%;

			line-height: 1.6;

			${until(
				device.iPhone12(),
				() => `
				width: 100%;
		`
			)}
		}
	}
`;

const Image = styled.img`
	margin-top: 5px;

	width: 50px;

	${until(
		device.iPhone12(),
		() => `
		margin: 0;
	`
	)}
`;

const Experience = (company, title, location, duration, description, image) => (
	<Container className="experience">
		{typeof image === 'string' ? (
			<Image loading="lazy" src={image} alt={company}/>
		) : (
			<GatsbyImage image={image} alt={company}/>
		)}
		<div>
			<strong>{company}</strong>
			<p>{title}</p>
			<aside>{duration}</aside>
			<aside>{location}</aside>
			<span>{description()}</span>
		</div>
		{/* <h3 className="title" style={{ fontSize: '1.6rem' }}>
					Badges and Certifications
					</h3>
					<p className="subtitle" style={{ fontSize: '1.125rem' }}>
					More can be found at my{' '}
					<a
						href="https://www.youracclaim.com/users/nicholas-adamou/badges"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						className="link"
					>
						youracclaim
					</a>{' '}
					page.
					</p> */}
	</Container>
);

export default Experience;
