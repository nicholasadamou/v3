import React from 'react';

import styled from 'styled-components';

import Navigation from 'components/Navigation';
import MobileNavigation from "components/MobileNavigation";

import Logo from 'images/nicholas-adamou.svg';

import {device, until} from 'utilities/mixins';

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: absolute;
	top: -40px;
	left: 0;

	width: 100%;

	padding: 0 2rem;

	${until(
		device.iPhone12(),
		() => `
				top: -50px;
			`
	)}

	#logo {
		width: 150px;

		${until(
			device.iPhone12(),
			() => `
				width: 125px;

				margin-left: -16px;
			`
		)}
	}
`;

const Header = (props) => (
	<Container>
		<Logo id="logo" />
		<MobileNavigation/>
		<Navigation/>
	</Container>
)

export default Header;
