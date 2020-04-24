import styled from "styled-components";

import { device, until } from "../utilities/mixins";

const Awards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  place-content: center;

  margin: 0 5rem;

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;
		grid-gap: initial;

		margin: 0;
	`
  )}
`;

export default Awards;
