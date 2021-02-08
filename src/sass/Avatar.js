import styled from 'styled-components';

import {device, until} from '../utilities/mixins';

import image from '../assets/images/avatars/nicholas.jpg';

const Avatar = styled.div`
	position: relative;

	margin: -125px auto 0;

	width: 250px;
	height: 250px;

	border-radius: 50%;

	background-image: url(${image});
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;

	${until(
		device.iPhone(),
		() => `
		width: 190px;
		height: 190px;
	`,
	)}
`;

export default Avatar;
