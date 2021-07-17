import React from 'react';

import styled from 'styled-components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import NavigationContext from "contexts/NavigationContext";

import {device, until} from 'utilities/mixins';

const Container = styled.div`
	#mobile-nav-toggle {
		display: none;

		font-size: 28px;
		color: var(--white);

		cursor: pointer;

		${until(
			device.iPhone12(),
			() => `
				display: block;
			`
		)}
	}

	#mobile-nav {
		display: none;

		${until(
			device.iPhone12(),
			() => `
				padding: 10px 20px;

				list-style-type: none;

				position: absolute;
				bottom: -85vh;
				left: 0;

				border-top-left-radius: 20px;
				border-top-right-radius: 20px;
				border-top: 5px solid var(--white);

				height: 30rem;
				width: 100%;

				background-color: var(--black);

				z-index: 1;

				li {
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 16px;

					padding: 16px 0;

					&:first-child {
						border-bottom: 1px solid var(--white);
					}

					a, svg {
						color: var(--white);
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
`;

const MobileNavigation = (props) => {
	const {isOpen, toggleNavigation} = React.useContext(NavigationContext);

	React.useEffect(() => {
		const mobileNav = document.querySelector('#mobile-nav');
		const overlay = document.querySelector('#overlay');

		if (mobileNav !== null) {
			mobileNav.style.display = isOpen ? 'block' : 'none';
		}

		if (overlay !== null) {
			overlay.style.display = isOpen ? 'block' : 'none';
		}
	}, [isOpen]);

	return (
		<Container>
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
		</Container>
	)
}

export default MobileNavigation;
