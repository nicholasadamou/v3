import React from 'react';

import styled from "styled-components";

import Heading from 'components/Heading';
import Repository from 'components/Repository';

import {device, until} from 'utilities/mixins';

import Section from 'sass/Section';
import Container from 'sass/Container';

const Repositories = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	width: 90%;
	max-width: 90%;

	margin: 0 auto;

	${until(
		device.iPhone12(),
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
		<Section
			style={{
				backgroundColor: 'var(--black)'
			}}
		>
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
		</Section>
	)
}

export default Projects;
