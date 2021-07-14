import styled from 'styled-components';

import { device, until } from 'utilities/mixins';

const Container = styled.div`
	margin: 0 auto;

	${until(
		device.iPhone(),
		() => `
			width: 100%;
			max-width: 100%;
		`
	)}
`;

export default Container;
