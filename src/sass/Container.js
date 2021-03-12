import styled from 'styled-components';

import { device, until } from '../utilities/mixins';

const Container = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
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
