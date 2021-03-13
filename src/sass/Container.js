import styled from 'styled-components';

import { device, until } from '../utilities/mixins';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10rem auto 0;

  max-width: 970px;

  background: white;

  border-radius: 32px;

  ${until(
    device.iPad(),
    () => `
			border-radius: 0;
		`
  )}

  section {
    text-align: center;
    color: var(--copy);
  }
`;

export default Container;
