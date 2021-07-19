import styled from 'styled-components';

import { device, until } from 'utilities/mixins';

const Container = styled.div`
	margin: 1rem 46rem;

	${until(
		'2560px',
		() => `
			margin: 1rem 30rem;
		`
	)}

	${until(
		'2400px',
		() => `
			margin: 1rem 20rem;
		`
	)}

	${until(
		device.Desktop(),
		() => `
			margin: 1rem 16rem;
		`
	)}


	${until(
		device.MacbookAir(),
		() => `
			margin: 0.5rem 6rem;
    		margin-bottom: 1rem;
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
