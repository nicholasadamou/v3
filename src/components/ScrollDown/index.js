import React from 'react';

import styled from 'styled-components';

import {device, until} from 'utilities/mixins';

const Container = styled.div`
	display: block;

	position: absolute;
	left: 0;
	right: 0;
	bottom: 20px;

	text-align: center;

	& > * {
		display: inline-block;

		color: var(--white);
		line-height: 18px;
		font-size: 13px;
		font-weight: normal;
		letter-spacing: 2px;
	}

	@keyframes ani-mouse {
		0% {
			opacity: 1;
			top: 29%;
		}
		15% {
			opacity: 1;
			top: 50%;
		}
		50% {
			opacity: 0;
			top: 50%;
		}
		100% {
			opacity: 0;
			top: 29%;
		}
	}
`;

const Mouse = styled.span`
	display: block;

	position: relative;

	width: 35px;
	height: 55px;

	margin: 0 auto 20px;

	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;

	border: 3px solid white;
	border-radius: 23px;

	${until(
		device.iPhone12(),
		() => `
			width: 25px;
			height: 45px;

			margin-bottom: 5px;
		`
	)}

	& > * {
		display: block;

		position: absolute;
		top: 29%;
		left: 50%;

		width: 8px;
		height: 8px;

		margin: -4px 0 0 -4px;

		background: white;

		border-radius: 50%;

		animation: ani-mouse 2.5s linear infinite;

		${until(
			device.iPhone12(),
			() => `
			width: 4px;
			height: 4px;

			margin: -2px 0 0 -2px;
		`
		)}
	}
`;

const ScrollDown = (props) => (
	<Container id="scroll-down">
		<Mouse>
			<span />
		</Mouse>
		<p>Scroll down</p>
	</Container>
)

export default ScrollDown;
