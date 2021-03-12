import React from "react";

import styled from 'styled-components';

import { GatsbyImage } from "gatsby-plugin-image";

import {device, until} from '../../utilities/mixins';

const Container = styled.div`
	display: flex;
	align-items: flex-start;

	width: 95%;

	margin: 0 auto;

	padding-bottom: 20px;

	${until(
		device.iPhone(),
		() => `
		display: block;

		margin-bottom: 20px;
		margin-left: 0;
		margin-right: 0;

		padding-bottom: 0;

		text-align: left;
	`,
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
			device.iPhone(),
			() => `
			margin: 0;
			margin-top: 5px;
		`,
		)}
		aside {
			color: #a6a6a6;
		}

		span {
			margin-top: 5px;

			width: 90%;

			line-height: 1.6;

			${until(
				device.iPhone(),
				() => `
				width: 100%;
		`,
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
	`,
	)}
`;

const Experience = (company, title, location, duration, description, image) => {
	return (
		<Container className="experience">
			{
				typeof image === 'string'
				?
					<Image loading="lazy" src={image} alt={company} />
				:
					<GatsbyImage image={image} alt={company} />
			}
			<div>
				<strong>{company}</strong>
				<em>{title}</em>
				<aside>{duration}</aside>
				<aside>{location}</aside>
				<span>{description()}</span>
			</div>
		</Container>
	)
};

export default Experience;
