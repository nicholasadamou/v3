import React from 'react';

import styled from "styled-components";

import Heading from 'components/Heading';
import Repository from 'components/Repository';

import {device, until} from 'utilities/mixins';

const Container = styled.div`
	background-color: var(--black);

	padding: 3rem;

	${until(
		device.iPadProLandscape(),
		() => `
		padding: 1rem;
	`
	)}

	.heading-container {
		padding-left: calc(10rem - 3rem);

		${until(
			device.iPadProLandscape(),
			() => `
			padding-left: calc(3rem - 1rem);
		`
		)}

		${until(
			device.iPadPro(),
			() => `
			padding: 0;
		`
		)}
	}
`;

const Repositories = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	max-width: 75%;

	margin: 0 auto;

	${until(
		device.iPadPro(),
		() => `
			max-width: 100%;
		`
	)}

	${until(
		device.iPhone(),
		() => `
		display: block;

		margin: 0;

		article {
			padding: 0;

			&:first-child {
				margin-top: 0;
			}
		}
	`
	)}
`;


const Projects = (props) => {
	const theme = "dark";

	return (
		<Container>
			<Heading
				title="Projects"
				subtitle={() => (
					<p className="subtitle">
						Various projects that I've open sourced while working at these companies.
					</p>
				)}
				theme={theme}
			/>

			<Repositories>
				{Repository('nicholasadamou', 'down-to-network', 'react', theme)}
				{Repository('nicholasadamou', 'firebase-react-starter-kit', 'react', theme)}
				{Repository('nicholasadamou', 'watson-chatbot', 'angular', theme)}
				{Repository('nicholasadamou', 'react-iframe', 'react', theme)}
				{Repository('nicholasadamou', 'node-cache', 'node', theme)}
				{Repository('nicholasadamou', 'storage', 'react', theme)}
				{Repository('nicholasadamou', 'krios-github-bot', 'node', theme)}
				{Repository('nicholasadamou', 'toasty', 'react', theme)}
				{Repository('nicholasadamou', 'jwt-spring-security-demo', 'java', theme)}
			</Repositories>
		</Container>
	)
}

export default Projects;
