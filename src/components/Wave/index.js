import * as React from 'react';

import styled from 'styled-components';

import { device, until } from 'utilities/mixins'

import Image from 'images/wave.svg';

const Container = styled.span`
	svg {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;

		width: 100%;

		fill: var(--white);

		transform: rotate(${props => props.flip ? '180deg' : 0});

		z-index: 2;

		${until(
			device.iPhone12(),
			() => `
				left: -10px;
				width: 115%;
			`
		)}
	}
`;

const Wave = (props) => (
	<Container  flip={props.flip}>
		<Image />
	</Container>
)

export default Wave;
