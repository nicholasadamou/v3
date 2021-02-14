import styled from 'styled-components';

import {device, until} from '../utilities/mixins';

const PageWrapper = styled.div`
	zoom: 125%;

	${until(
	device.iPad(),
	() => `
			zoom: 100%;
		`,
)}
`;

export default PageWrapper;
