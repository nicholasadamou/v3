import styled from "styled-components";

import { device, until } from "../../utilities/mixins";

const Reviews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  margin: 2rem 5rem 2rem;

  ${until(
    device.iPad(),
    () => `
		margin: 2rem 2rem 2rem;
	`
  )}

  ${until(
    device.iPhone(),
    () => `
		display: block;

		margin: 0;

		div:first-child > blockquote {
    	margin-top: 0;
  	}
	`
  )}
`;

export default Reviews;
