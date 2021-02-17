import Repository from '../../components/Repository/Repository';

import FooterText from '../../components/FooterText/FooterText';

import styled from 'styled-components';

import {device, until} from '../../utilities/mixins';

const Repositories = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	margin: 1rem calc(25px + 1rem);

	text-align: left;

	${until(
		'956px',
		() => `
		grid-template-columns: 1fr 1fr;

		margin: 2rem;
	`,
	)}

	${until(
		device.iPhone(),
		() => `
		grid-template-columns: 1fr;

		margin: 0;
	`,
	)}
`;

const OpenSource = () => (
	<section>
		<h2 className="title">
			Open Source
		</h2>
		<p className="subtitle">
			I am an{' '}
			<a
				href="http://git-awards.com/users/nicholasadamou"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				className="link"
			>
				avid open-sourcer
			</a>{' '}
			and I have{' '}
			<a
				href="https://github.com/nicholasadamou"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				className="link"
			>
				many repositories
			</a>
			.
		</p>

		<Repositories>
			{Repository('nicholasadamou', 'minipwner')}
			{Repository('nicholasadamou', 'auto-wifi-hotspot')}
			{Repository('nicholasadamou', 'starter-kit', 'gulp')}
			{Repository('nicholasadamou', 'pifi')}
			{Repository('nicholasadamou', 'megalith')}
			{Repository('nicholasadamou', 'set-me-up')}
		</Repositories>

		{FooterText(
			'More can be found on my ',
			'GitHub',
			'https://github.com/nicholasadamou',
			'github',
		)}
	</section>
);

export default OpenSource;
