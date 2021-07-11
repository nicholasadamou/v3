import styled from 'styled-components';

import { until } from '../utilities/mixins';

const PageWrapper = styled.div`
  zoom: 100%;

  ${until(
    '1200px',
    () => `
			zoom: 100%;
		`
  )}
`;

export default PageWrapper;
