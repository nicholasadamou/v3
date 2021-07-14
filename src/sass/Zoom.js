
import styled from 'styled-components';

import { device, until } from 'utilities/mixins';

const Zoom = styled.div`
  zoom: 100%;

  ${until(
	device.MacbookAir(),
	() => `
			zoom: 100%;
		`
	)}
`;

export default Zoom;
