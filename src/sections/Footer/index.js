/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import moment from 'moment';

import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SkeletonText} from 'carbon-components-react';

import {device, until} from 'utilities/mixins';

import useGitHub from 'hooks/useGitHub';

const Container = styled.footer`
	display: grid !important;
	place-content: center;

	height: 20vh;

	text-align: center;

	background-color: var(--black);

	${until(
		device.Desktop(),
		() => `
			height: 25vh;
		`
	)}

	${until(
		device.MacbookAir(),
		() => `
			height: 30vh;
		`
	)}

	span > a {
		line-height: 2;
	}

	.footer--loading {
		width: 100%;
		height: 20px;

		margin: 0 auto;

		${until(
			'956px',
			() => `
			width: 45%;
		`
		)}

		${until(
			device.iPhone12(),
			() => `
			width: 80%;
		`
		)}
	}

	.footer--loading > div {
		margin: 0 80px;

		.bx--skeleton__text {
			width: 100% !important;
		}
	}

	div:first-child {
		--size: 100px;

		width: var(--size);
		height: var(--size);
		min-width: var(--size);
		min-height: var(--size);

		margin: 0 auto 20px;

		cursor: inherit;

		opacity: 0.25;

		${until(
			device.iPhone12(),
			() => `
				margin-bottom: 10px;
			`
		)}
	}

	p {
		margin-bottom: 0.5rem;

		font-size: 0.95rem;

		color: var(--white);

		${until(
			device.iPhone12(),
			() => `
				font-size: 1rem;
			`
		)}

		&:last-child {
			margin-bottom: 0;
		}

		& > div {
			display: inline;
		}

		.link {
			color: var(--white);

			&:hover {
				color: var(--light-grey);
			}
		}

		.github {
			color: var(--white);
		}

		.netlify {
			color: var(--netlify);
		}
	}
`;

const SocialMedia = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;

	margin-bottom: 10px;

	a {
		font-size: 18px;

		color: var(--white);

		&:hover {
			color: var(--white);
		}
	}

	svg {
		font-size: 24px;
	}
`;

const Footer = (props) => {
	const repository = useGitHub('nicholasadamou', 'nicholasadamou.com');

	const {commit, updated_at} = repository;

	return (
		<Container>
			<SocialMedia>
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
					className="link linkedin"
				>
					<FontAwesomeIcon icon={['fab', 'linkedin']}/>
				</a>
			</SocialMedia>
			<p>
				Handcrafted with{' '}
				<FontAwesomeIcon icon={['fas', 'heart']} style={{color: 'red'}}/> by
				myself. Copyright &copy; {moment(Date.now()).year()}.
			</p>
			<p>
				Source code available on{' '}
				<a
					href="https://github.com/nicholasadamou/nicholasadamou.com"
					target="_blank"
					aria-hidden="true"
					rel="noopener noreferrer"
					className="link github"
				>
					GitHub
				</a>
				.
			</p>
			<p>
				Proudly hosted on{' '}
				<a
					href="https://www.netlify.com/"
					target="_blank"
					aria-hidden="true"
					rel="noopener noreferrer"
					className="link netlify"
				>
					Netlify
				</a>
				.
			</p>
			{JSON.stringify(repository) === '{}' ? (
				<div className="footer--loading">
					<SkeletonText heading={false} lineCount={1} paragraph width="100%"/>
				</div>
			) : (
				<p>
					Last updated{' '}
					<a
						href={commit.html_url}
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						className="link"
					>
						{moment(new Date(updated_at)).fromNow()}
					</a>
					.
				</p>
			)}
		</Container>
	);
};

export default Footer;
