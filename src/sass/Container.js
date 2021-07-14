import styled from 'styled-components';

import { device, until } from 'utilities/mixins';

const Container = styled.div`
	margin: 5rem 20rem;

	${until(
		device.MacbookAir(),
		() => `
			margin: 5rem 10rem;
		`
	)}

	${until(
		device.iPadProLandscape(),
		() => `
			width: 100%;
			max-width: 100%;

			margin: 2rem 0;
		`
	)}
`;

export default Container;
