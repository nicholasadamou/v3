import React from 'react';

import styled from 'styled-components';

import { device, until } from 'utilities/mixins';

const Container = styled.div`
	${until(
		device.MacbookAir(),
		() => `
			padding-left: 1rem;
		`
	)}

	${until(
		device.iPhone12(),
		() => `
			padding-left: 0;
		`
	)}

	.title {
		margin-top: 25px;
		margin-bottom: 10px !important;

		font-family: var(--primary);
		font-weight: bolder;
		color: ${props => props.theme === 'dark' ? 'var(--white)' : 'var(--copy)'};
		line-height: 1;
	}

	.subtitle {
		margin-top: 0 !important;
		margin-bottom: 50px;

		font-family: var(--secondary);
		color: ${props => props.theme === 'dark' ? 'var(--white)' : 'var(--copy)'};
		line-height: 1.5;

		${until(
			device.iPhone12(),
			() => `
			font-size: 1.15rem;
			margin-bottom: 25px !important;
		`
		)}
	}
`;

const Heading = (props) => {
	const { title, subtitle, theme } = props;

	return (
		<Container theme={theme}>
 			<h3 className="title">{title}</h3>
			{subtitle()}
		</Container>
	)
}

export default Heading;
