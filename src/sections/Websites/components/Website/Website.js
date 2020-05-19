import React from "react";

import styled from "styled-components";

import {device, until} from "../../../../utilities/mixins";

const Container = styled.div`
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex: 1 1 33%;

  position: relative;

  width: 33%;
  max-width: 33%;

  margin-top: 40px;
  margin-bottom: 20px;

  &.is-emphasized {
    -webkit-animation: tada;
    animation: tada;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  ${until(
	device.iPhone(),
	() => `
		-webkit-box-flex: 1;
    flex: 1 1 100%;

    width: 100%;
    max-width: 100%;
	`
)}

  a {
    display: block;

    position: relative;

    margin: 0 20px;

    text-decoration: none;
    color: black;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    display: block;

    image-rendering: optimizeSpeed;
    /* Legal fallback */
    image-rendering: -moz-crisp-edges;
    /* Firefox        */
    image-rendering: -o-crisp-edges;
    /* Opera          */
    image-rendering: -webkit-optimize-contrast;
    /* Safari         */
    image-rendering: optimize-contrast;
    /* CSS3 Proposed  */
    image-rendering: crisp-edges;
    /* CSS4 Proposed  */
    image-rendering: pixelated;
    /* CSS4 Proposed  */
    -ms-interpolation-mode: nearest-neighbor;
    /* IE8+           */
  }

  h3 {
    position: absolute;
    top: 0;
    left: 60px;

    padding: 0;
    margin: 0;

    color: var(--white);
    line-height: 20px;
    font-size: 0.7em;
  }
`;

const Browser = styled.div`
  position: relative;

  width: 98%;
  min-height: 50px;

  border: 0px solid var(--black);
  border-width: 20px 0 0 0;
  border-radius: 3px 3px 6px 6px;
  box-shadow: 1px 1px 20px -5px rgba(var(--black), 0.5);

  &::before,
  &::after {
    content: "";

    position: absolute;
    top: -15px;
    left: 8px;

    width: 9px;
    height: 9px;

    z-index: 10;

    background: var(--red);
    border-radius: 50%;
  }

  &::after {
    left: 24px;

    background: var(--green);
  }

  img {
    border-radius: 0 0 6px 6px;
  }
`;

const Mobile = styled.div`
  position: absolute;
  right: 0;
  top: 26px;

  width: 32%;

  min-height: 50px;
  border-radius: 2px;

  border: 2px solid var(--black);
  border-width: 5px 5px 5px 5px;

  box-shadow: 1px 1px 20px -5px rgba(var(--black), 0.5);

  &::before {
    content: "";

    position: absolute;
    bottom: 2px;
    left: calc(50% - 16px);

    width: 32px;
    height: 2px;

    background: var(--black);

    border-radius: 5px;
  }
`;

const Website = (title, link, desktop, mobile) => (
	<Container className="website">
		<a
			href={link}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
		>
			<Browser>
				<img src={desktop} alt="web-browser"/>
			</Browser>
			<Mobile>
				<img src={mobile} alt="mobile-device"/>
			</Mobile>
		</a>
		<h3>{title}</h3>
	</Container>
);

export default Website;
