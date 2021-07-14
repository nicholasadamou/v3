import * as React from 'react';

import styled from 'styled-components';

import {findImageByName} from 'utilities/utilities';

const Container = styled.div`
	display: grid;

	position: relative;

	height: ${props => props.height};
	width: 100vw;

	background: linear-gradient(135deg, var(--black) 0%, var(--blue) 100%);

	overflow: hidden;

	#specks {
		height: 100%;
		width: 100%;

		z-index: 999;
	}

	.speck {
		position: absolute;

		height: 4px;
		width: 4px;

		background-image: url(${(props) =>
			findImageByName('speck.png', props.dust).images.fallback.src});
		background-size: cover;

		border-radius: 10px;

		z-index: 99;

		opacity: 0;
	}

	.img {
		position: absolute;
		top: -8500px;
		left: -8000px;

		height: 20000px;
		width: 20000px;

		animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
		animation-name: float;
		animation-iteration-count: infinite;
	}

	#img-1 {
		opacity: 0.25;

		background-image: url(${(props) =>
			findImageByName('dust1.jpg', props.dust).images.fallback.src});
		background-repeat: repeat;

		animation-duration: 600s;
	}

	#img-2 {
		opacity: 0.2;

		background-image: url(${(props) =>
			findImageByName('dust2.jpg', props.dust).images.fallback.src});
		background-repeat: repeat;

		animation-duration: 450s;
	}

	#img-3 {
		opacity: 0.15;

		background-image: url(${(props) =>
			findImageByName('dust3.jpg', props.dust).images.fallback.src});
		background-repeat: repeat;

		animation-duration: 350s;
	}

	@keyframes twinkle {
		0% {
			transform: translate(0px, 0px);
		}
		30% {
			opacity: 0;
		}
		50% {
			opacity: 0.75;
		}
		70% {
			opacity: 0;
		}
		100% {
			transform: translate(175px, 100px);
		}
	}

	@keyframes float {
		0% {
			transform: translate(0px, 0px);
		}
		100% {
			transform: translate(8000px, 4000px);
		}
	}
`;

const Content = styled.div`
	z-index: 9999;
`;

const twinkle = (id, duration) => {
	const top = `${(Math.floor(Math.random() * 85))}%`;
	const left = `${(Math.floor(Math.random() * 85))}%`;

	const specks = document.querySelector('#specks');
	let speck = document.querySelector(`#speck${id}`)

	if (speck !== null) {
		speck.remove();
	}

	speck = document.createElement('div')
	speck.className = 'speck';
	speck.id = `speck${id}`;
	speck.style.top = top;
	speck.style.left = left;
	speck.style.animationDuration = `${duration}s`;
	speck.style.animationTimingFunction =
		'cubic-bezier(0.250, 0.250, 0.750, 0.750)';
	speck.style.animationName = 'twinkle';

	specks.appendChild(speck);
}

const twinkleLoop = (i) => {
	const speed = 400;

	let duration = Math.random() * 5 + 3;

	duration -= (495 - speed) / 100;
	duration = Math.floor(duration);

	twinkle(i, duration);

	setTimeout(() => {
		twinkleLoop(i);
	}, duration * 1000);
}

const Dust = (props) => {
	const { dust, height, numberOfSpecks } = props;

	React.useEffect(() => {
		for (let i = 1; i < (numberOfSpecks || 6); i += 1) {
			twinkleLoop(i);
		}
	}, []);

	return (
		<Container dust={dust} height={height}>
			<div id="specks"/>
			<div className="img" id="img-1"/>
			<div className="img" id="img-2"/>
			<div className="img" id="img-3"/>

			<Content>
				{props.children}
			</Content>
		</Container>
	);
};

export default Dust;
