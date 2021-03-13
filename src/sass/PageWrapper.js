import styled from 'styled-components';

import { until } from '../utilities/mixins';

const PageWrapper = styled.div`
  zoom: 125%;

  ${until(
    '1200px',
    () => `
			zoom: 100%;
		`
  )}
`;

export default PageWrapper;
