import styled from 'styled-components';

import { device, until } from '../utilities/mixins';

const Avatar = styled.div`
  --size: 250px;

  position: relative;

  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);

  border-radius: 50%;

  background-image: url(${(props) => props.image});
  background-size: 150%;
  background-position: center top;
  background-repeat: no-repeat;

  ${until(
    device.iPadPro(),
    () => `
		--size: 200px;
	`
  )}

  ${until(
    device.iPhone(),
    () => `
		--size: 190px;
	`
  )}
`;

export default Avatar;
