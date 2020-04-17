import React from "react";

import "./index.scss";

import styled from "styled-components";

const Emoji = styled.span`
  display: inline-block;

  -webkit-animation-duration: 1.8s;

  animation-duration: 1.8s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: wave;
  animation-name: wave;

  -webkit-transform-origin: 70% 70%;

  transform-origin: 70% 70%;
`;

const WaveEmoji = () => (
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  <Emoji className="wave-emoji" role="img" aria-label="wave">
    👋🏼
  </Emoji>
);

export default WaveEmoji;
