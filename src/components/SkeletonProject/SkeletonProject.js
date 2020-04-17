import React from "react";

import { SkeletonText } from "carbon-components-react";

import CircularProgress from "@material-ui/core/CircularProgress";

import styled from "styled-components";

import { device, until } from "../../utilities/mixins";

const Container = styled.article`
  margin: 10px 20px;

  ${until(
    device.iPhone(),
    () => `
		width: 100%;
    max-width: 100%;

    margin: 20px 0;
	`
  )}
`;

const Top = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  align-items: center;

  margin-bottom: 10px;

  font-size: 1rem;

  span[role="img"] {
    margin-right: 0;
  }

  a {
    margin-left: 5px;

    padding: 5px;

    background: var(--grey);
    border-radius: 5px;

    color: var(--red);
    font-size: var(--copy-size);
    text-decoration: underline;

    -webkit-transition: color 0.25ms ease-in-out;

    transition: color 0.25ms ease-in-out;

    &:hover {
      color: var(--light-grey);
    }
  }
`;

const Description = styled.span`
  font-size: var(--copy-size);
`;

const SkeletonProject = () => (
  <Container>
    <Top>
      <span role="img" aria-label="hourglass">
        ⏳
      </span>
      <span>
        <CircularProgress />
      </span>
    </Top>
    <Description>
      <SkeletonText heading={false} lineCount={2} paragraph width="100%" />
    </Description>
  </Container>
);

export default SkeletonProject;
