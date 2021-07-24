import React from 'react';

import styled from 'styled-components';

import Navigation from '@components/Navigation';
import {MobileNavigationToggle} from '@components/MobileNavigation';

import Logo from '@images/nicholas-adamou.svg';

import {device, until} from '@utilities/mixins';

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

  height:  100px;
	width: 100%;

	#logo {
		width: 150px;

		${until(
			device.iPhone12(),
			() => `
				width: 125px;
			`
		)}
	}
`;

const Header = (props) => (
	<Container>
		<Logo id="logo" />
		<MobileNavigationToggle />
		<Navigation/>
	</Container>
)

export default Header;
