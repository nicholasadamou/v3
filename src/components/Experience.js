/* eslint-disable import/no-unresolved */
import React from 'react';

import styled from 'styled-components';

import {GatsbyImage} from 'gatsby-plugin-image';

import {isMobileOnly} from 'react-device-detect';

import {device, until} from '@utilities/mixins';
import { getImage } from '@utilities/utilities';

const Container = styled.div`
	display: flex;
	align-items: flex-start;

	position: relative;

	width: 80%;
	max-width: 960px;

	padding: 1rem;

	border: 1px solid var(--black);
	border-radius: 10px;

	background-color: var(--white);

	&:after {
		content: '';

		position: absolute;
		top: 10px;
		left: 10px;

		width: 100%;
		height: ${props => props.hasBadges ? '113%' : '100%'};

		border-radius: 10px;

		background-color: var(--black);

		z-index: -1;

		@media screen and (max-width: ${device.Desktop()}) {
			height: ${props => props.hasBadges ? '111%' : '100%'}
		}

		@media screen and (max-width: ${device.iPadPro()}) {
			height: ${props => props.hasBadges ? '110%' : '100%'}
		}

		@media screen and (max-width: ${device.iPhone12()}) {
			left: 5px;

			width: 105%;
			height: ${props => props.hasBadges ? '107%' : '100%'}
		}
	}

	${until(
		device.MacbookAir(),
		() => `
		width: 90%;
	`
	)}

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

	.description {
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

const Badges = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 16px;

	position: absolute !important;
	left: 2rem;
	bottom: -3.25rem;

	${until(
		device.Desktop(),
		() => `
			bottom: -3.1rem;
		`
	)}

	${until(
		device.iPadPro12Landscape(),
		() => `
			bottom: -3rem;
		`
	)}

	${until(
		device.iPadPro(),
		() => `
			bottom: -3.2rem;
		`
	)}

	${until(
		device.iPhone12(),
	() => `
			left: 1.25rem;
			bottom: -3.3rem;

			gap: 10px;
		`
	)}

	${until(
	device.iPhone11(),
	() => `
			bottom: -4rem;
		`
	)}

	h3, small {
		color: var(--white);
	}

	h3 {
		font-size: 1rem;
		font-weight: 200; // Extra Light

		${until(
			device.iPhone12(),
			() => `
				font-size: 0.9rem;
			`
		)}
	}

	small {
		font-weight: 200; // Extra Light

		${until(
			device.iPhone12(),
			() => `
				font-size: 0.75rem;
			`
		)}

		${until(
			device.iPhone12(),
			() => `
				font-size: 0.78rem;
			`
		)}
	}

	.badges {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 16px;

		${until(
			device.iPhone12(),
			() => `
				gap: 10px;
			`
		)}

		${until(
			device.iPhone12(),
			() => `
				gap: 10px;
			`
		)}
	}
`;

const Badge = styled.img`
	width: 100%;
`;

const Experience = ({ company, title, location, duration, description, image, badges = [] }) => {
	const hasBadges = badges.length > 0;

	return (
		<Container className={`experience ${hasBadges && 'has-badges'}`} hasBadges={hasBadges}>
			{typeof image === 'string' ? (
				<Image loading="lazy" src={image} alt={company}/>
			) : (
				<GatsbyImage image={image} alt={company}/>
			)}
			<div className="description">
				<strong>{company}</strong>
				<p>{title}</p>
				<aside>{duration}</aside>
				<aside>{location}</aside>
				<span>{description()}</span>
			</div>
			{(badges.length > 0) && (
				<Badges>
					<div className="badges-heading">
						<h3>Badges & Certifications</h3>
						<small>
							View more on{' '}
							<a
								href="https://www.youracclaim.com/users/nicholas-adamou/badges"
								target="_blank"
								aria-hidden="true"
								rel="noopener noreferrer"
								className="link"
							>
								youracclaim
							</a>
							{'.'}
						</small>
					</div>
					<div className="badges">
						{badges.map((badge, i) => {
							if (isMobileOnly && i > 3) return;

							return (
								typeof badge === 'string' ? (
									<Badge key={i} loading="lazy" src={getImage(badge)} alt={`${company} badge`}/>
								) : (
									<GatsbyImage key={i} image={getImage(badge)} alt={`${company} badge`}/>
								)
							)
						})}
					</div>
				</Badges>
			)}
		</Container>
	)
}

export default Experience;
