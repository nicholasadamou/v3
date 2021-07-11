import * as React from 'react';

import styled from 'styled-components';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import NavigationContext from "contexts/NavigationContext";

import Dust from 'components/Dust';
import Wave from 'components/Wave';

import {device, until} from 'utilities/mixins'

import Logo from 'images/nicholas-adamou.svg';

import './index.scss';

const Container = styled.div`
	margin: 0 2rem;

	color: var(--white);

	#overlay {
		display: none;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		position: absolute;
		top: -30px;
		left: 0;

		width: 100%;

		padding: 0 2rem;

		${until(
			device.iPhone(),
			() => `
				top: -36px;
			`
		)}
		#logo {
			width: 150px;

			${until(
				device.iPhone(),
				() => `
				width: 150px;
			`
			)}
		}

		#mobile-nav-toggle {
			display: none;

			font-size: 32px;
			color: var(--blue);

			cursor: pointer;

			${until(
				device.iPhone(),
				() => `
				display: block;
			`
			)}
		}

		#mobile-nav {
			display: none;

			${until(
				device.iPhone(),
				() => `
				padding: 20px;

				list-style-type: none;

				position: absolute;
				bottom: -100vh;
				left: 0;

				border-top-left-radius: 20px;
				border-top-right-radius: 20px;
				border-top: 5px solid var(--blue);

				height: 31rem;
				width: 100%;

				background-color: #111122;

				z-index: 1;

				li {
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 16px;

					padding: 16px 0;

					&:first-child {
						border-bottom: 1px solid #3a2139;
					}

					a, svg {
						color: var(--blue);
					}

					svg {
						font-size: 24px;
					}

					a {
						font-size: 18px;

						text-decoration: none;

						&:hover {
							text-decoration: underline;
						}
					}
				}
			`
			)}
		}

		nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 10px;

			${until(
				device.iPhone(),
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
		}
	}
`;

const Jumbotron = styled.div`
	display: grid;
	place-content: center;

	height: 90vh;

	margin-left: -20rem;

	${until(
		device.iPadProLandscape(),
		() => `
			margin-left: -10rem;
		`
	)}
	${until(
		device.iPadPro(),
		() => `
			margin-left: 0;
		`
	)}
	h1 {
		font-family: var(--primary);
		font-size: 3.6rem;
		font-weight: 800;

		${until(
			device.iPhone(),
			() => `
			margin-top: 3rem;

			font-size: 2.75rem;
			line-height: 1.5;

			width: 100%;
		`
		)}
		span {
			font-size: inherit;
			font-weight: inherit;

			color: var(--blue);
		}
	}

	h2 {
		font-family: var(--secondary);
		font-size: 1.75rem;
		font-weight: normal;
		line-height: 2;

		width: 70%;

		margin-top: 10px;

		${until(
			device.iPadPro(),
			() => `
			width: 95%;
		`
		)}

		${until(
			device.iPhone(),
			() => `
			margin-top: 10px;

			font-size: 1.7rem;
			font-weight: medium;
			line-height: 2;

			width: 95%;
		`
		)}
	}
`;

const MobileNavigation = (props) => {
	const {isOpen, toggleNavigation} = React.useContext(NavigationContext);

	const overlay = document.querySelector('#overlay');
	const mobileNav = document.querySelector('#mobile-nav');

	if (mobileNav !== null && overlay !== null) {
		mobileNav.style.display = isOpen ? 'block' : 'none';
		overlay.style.display = isOpen ? 'block' : 'none';
	}

	return (
		<>
			<span id="mobile-nav-toggle" onClick={() => toggleNavigation()}>
				<FontAwesomeIcon icon={['fas', 'bars']}/>
			</span>
			<ul id="mobile-nav">
				<li>
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
				</li>
				<li>
					<FontAwesomeIcon icon={['fab', 'github']}/>
					<a
						href="https://github.com/nicholasadamou"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						className="link"
					>
						GitHub
					</a>
				</li>
				<li>
					<FontAwesomeIcon icon={['fab', 'codepen']}/>
					<a
						href="https://codepen.io/nicholasadamou"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						className="link"
					>
						CodePen
					</a>
				</li>
				<li>
					<FontAwesomeIcon icon={['fab', 'linkedin']}/>
					<a
						href="https://www.linkedin.com/in/nicholas-adamou"
						target="_blank"
						aria-hidden="true"
						rel="noopener noreferrer"
						className="link"
					>
						Linkedin
					</a>
				</li>
			</ul>
		</>
	)
}

const Navigation = (props) => (
	<nav>
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
	</nav>
)

const Header = (props) => (
	<header>
		<Logo id="logo"/>
		<MobileNavigation/>
		<Navigation/>
	</header>
)

const Hero = (props) => {
	const {dust} = props;

	const {toggleNavigation} = React.useContext(NavigationContext);

	return (
		<Dust dust={dust} height="100vh">
			<>
				<Container>
					<Header/>
					<Jumbotron>
						<h1><span>Full Stack</span> Software Engineer.</h1>
						<h2>I focus on the front-end & back-end of cloud native applications.</h2>
					</Jumbotron>
					<div id="overlay" onClick={() => toggleNavigation()}/>
				</Container>
				<Wave/>
			</>
		</Dust>
	)
}

export default Hero;
