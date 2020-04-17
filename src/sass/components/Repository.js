import styled from "styled-components";

import { device, until } from "../../utilities/mixins";

const Repository = styled.article`
  margin: 10px 20px;

  font-size: var(--copy-size);

  ${until(
    device.iPhone(),
    () => `
		width: 100%;
    max-width: 100%;

    margin: 10px 0;
    padding: 0 20px;
	`
  )}

  a {
    text-decoration: none;
    color: var(--black);
  }

  div {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;

    margin-bottom: 10px;

    span > div {
      display: inline-block;

      margin: 0;
    }

    div {
      display: inline-block;

      margin: 0;

      width: 100%;
    }

    a {
      color: var(--red);
      font-size: var(--copy-size);
      text-decoration: none;

      -webkit-transition: color 0.25ms ease-in-out;

      transition: color 0.25ms ease-in-out;

      &:hover {
        color: var(--light-grey);
      }

      span {
        padding: 5px;

        background: var(--grey);
        border-radius: 5px;

        &[role="img"] {
          margin-left: 10px;
        }

        &[aria-label="title"] {
          color: var(--red);

          text-decoration: underline;

          &:hover {
            color: var(--light-grey);
          }
        }

        &[aria-label="star"] {
          color: var(--star);
        }

        &[aria-label="branch"] {
          color: var(--black);
        }
      }
    }
  }
`;

export default Repository;
