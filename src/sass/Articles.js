import styled from 'styled-components';

import {device, until} from '../utilities/mixins';

const Articles = styled.div`
	display: -webkit-box;
	display: flex;
	flex-wrap: wrap;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	flex-direction: row;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;

	text-align: left;

	overflow: hidden;

	margin: auto 2rem 20px;

	${until(
		device.iPad(),
		() => `
		margin: auto 0 20px;
	`,
	)}
`;

export default Articles;
