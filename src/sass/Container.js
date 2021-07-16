import styled from 'styled-components';

import { device, until } from 'utilities/mixins';

const Container = styled.div`
	margin: 5rem 46rem;

	${until(
		'2560px',
		() => `
			margin: 1rem 32rem;
		`
	)}

	${until(
		device.MacbookAir(),
		() => `
			margin: 1rem 10rem;
		`
	)}

	${until(
		device.iPadProLandscape(),
		() => `
			width: 100%;
			max-width: 100%;

			margin: 1rem 0;
		`
	)}

	${until(
		device.iPhone12(),
		() => `
			margin: 0;
		`
	)}
`;

export default Container;
