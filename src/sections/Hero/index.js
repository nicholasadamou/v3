import * as React from 'react';

import styled from 'styled-components';

import NavigationContext from "contexts/NavigationContext";

import Header from 'components/Header';
import MobileNavigation from "components/MobileNavigation";
import ScrollDown from 'components/ScrollDown';

import Overlay from 'sass/Overlay';

import {device, until} from 'utilities/mixins';

const Background = styled.div`
	position: relative;

	background-color: var(--black);
`;

const Container = styled.div`
	display: grid;

	height: 85vh;

	margin: 0 2rem;

	color: var(--white);

	${until(
		device.iPhone12(),
		() => `
			margin: 0 1rem;
		`
	)}
`;

const Jumbotron = styled.div`
	display: flex;
	flex-direction: column;
	place-content: center;

	margin-left: 4rem;

	overflow: hidden;

	${until(
		device.Desktop(),
		() => `
			margin-left: 2.5rem;
		`
	)}

	${until(
		device.iPadProLandscape(),
		() => `
			margin-left: 1rem;
		`
	)}

	${until(
		device.iPadPro(),
		() => `
			margin-left: 0;
		`
	)}

	${until(
		device.iPhone12(),
		() => `
			margin-bottom: 10%;
		`
	)}

	h1 {
		font-family: var(--primary);
		font-size: 5rem;
		font-weight: 900;

		${until(
			device.MacbookAir(),
			() => `
			font-size: 3.6rem;
		`
		)}

		${until(
			device.iPhone12(),
			() => `
			margin-top: 3rem;

			font-size: 3.5rem;
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
		font-size: 2.5rem;
		font-weight: normal;
		line-height: 2;

		margin-top: 10px;

		${until(
			device.MacbookAir(),
			() => `
			font-size: 1.75rem;
		`
		)}

		${until(
			device.iPadPro(),
			() => `
			width: 90%;

			br {
				display: none;
			}
		`
		)}

		${until(
			device.iPhone12(),
			() => `
			margin-top: 10px;

			font-size: 1.5rem;
			font-weight: medium;
			line-height: 2;
		`
		)}
	}
`;

const Hero = (props) => {
	const { toggleNavigation } = React.useContext(NavigationContext);

	return (
		<Background>
			<Container>
				<Header />
				<Jumbotron>
					<h1><span>Full Stack</span> Software Engineer.</h1>
					<h2>
						I focus on the front-end & back-end of{' '}
						<br />
						cloud native applications.
					</h2>
				</Jumbotron>
				<ScrollDown />
			</Container>
			<MobileNavigation/>
			<Overlay id="overlay" onClick={() => toggleNavigation()} />
		</Background>
	)
}

export default Hero;
