import React from 'react';

import styled from 'styled-components';

import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
	display: grid;
	place-content: center;

	height: 100vh;

	.MuiCircularProgress-root {
		width: 50px;
		height: 50px;

		circle {
			stroke: var(--black);
		}
	}
`

const Loading = () => (
	<Container>
		<CircularProgress />
	</Container>
)

export default Loading;
