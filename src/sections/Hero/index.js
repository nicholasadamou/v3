import * as React from 'react';

import styled from 'styled-components';

import NavigationContext from "contexts/NavigationContext";

import Dust from 'components/Dust';
import Header from 'components/Header';
import Wave from 'components/Wave';

import Overlay from 'sass/Overlay';

import {device, until} from 'utilities/mixins';

const Container = styled.div`
	margin: 0 2rem;

	color: var(--white);
`;

const Jumbotron = styled.div`
	display: flex;
	flex-direction: column;

	margin-left: 5rem;

	${until(
		device.iPadProLandscape(),
		() => `
			margin-left: 2rem;
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
		font-size: 5rem;
		font-weight: 800;

		${until(
			device.MacbookAir(),
			() => `
			font-size: 3.6rem;
		`
		)}

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
		font-size: 2.25rem;
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
			device.iPhone(),
			() => `
			margin-top: 10px;

			font-size: 1.5rem;
			font-weight: medium;
			line-height: 2;

			width: 100%;
		`
		)}
	}
`;

const Hero = (props) => {
	const {dust} = props;

	const { toggleNavigation } = React.useContext(NavigationContext);

	return (
		<Dust dust={dust} height="100vh">
			<>
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
					<Overlay id="overlay" onClick={() => toggleNavigation()} />
				</Container>
				<Wave/>
			</>
		</Dust>
	)
}

export default Hero;
