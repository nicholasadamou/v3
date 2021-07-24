import { createGlobalStyle } from 'styled-components';

import variables from './variables'

import { device, until } from '@utilities/mixins';

const GlobalStyle = createGlobalStyle`
	${variables}

  /* Text selection styles */
	*::selection {
		background: var(--highlight);
		color: var(--selection);
	}

  /* Scrollbar styles */
	::-webkit-scrollbar-track {
		background-color: var(--scrollbar);
	}

	::-webkit-scrollbar {
		width: 10px;
		background-color: var(--scrollbar);
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--scrollbar-bg);
	}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

	* {
		margin: 0;
		padding: 0;
	}

	html {
		overflow: auto;
		height: auto;

		background: none;

		overflow-x: hidden;
	}

	body {
		font-family: var(--secondary);
		color: var(--black);
    font-size: var(--fz-xl);
		line-height: 1.3;

		background: var(--white);

		overflow-x: hidden;

    ${until(
      device.iPhone12(),
      () => `
			font-size: var(--fz-lg);
		`
    )}
  }

  p {
    font-family: var(--secondary);
    font-size: 100%;
  }

	.bx--skeleton__text {
		height: 0.75rem;
	}

	.link {
		text-decoration: underline;
		color: var(--blue);

		&:hover {
			color: darken(var(--light-grey), 15);
		}
	}

  #linkedin {
    color: var(--linkedin);
  }
`;

export default GlobalStyle;
