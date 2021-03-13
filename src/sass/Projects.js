import styled from 'styled-components';

import { device, until } from '../utilities/mixins';

const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 1rem 0 2rem;

  text-align: left;

  ${until(
    '1200px',
    () => `
		margin: 1rem 0 2rem;
		`
  )}

  ${until(
    device.iPhone(),
    () => `
		display: block;

		margin: 0;

		article {
			padding: 0;
		}
	`
  )}
`;

export default Projects;
