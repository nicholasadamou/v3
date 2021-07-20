import { createGlobalStyle } from 'styled-components';

import { device, until } from 'utilities/mixins';

const GlobalStyles = createGlobalStyle`
	:root {
		--white: #fafafa;
		--black: #212121;
		--light-grey: #ccc;
		--grey: #f5f5f5;
		--yellow: #ffd602;
		--blue: #5496FF;

		--github: #161514;
		--codepen: #1e1f26;
		--linkedin: #0077b5;
		--netlify: #15837d;

		--scrollbar: var(--black);
		--scrollbar-bg: var(--white);

		--primary: "Roboto Slab";
		--secondary: "Inter";

		--highlight: var(--blue);
		--selection: var(--white);

		--copy: var(--black);
		--copy-size: 1rem;

		--loading: var(--white);
		--background: var(--white);
	}

	#linkedin {
		color: var(--linkedin);
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	*::selection {
		background: var(--highlight);
		color: var(--selection);
	}

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
		color: var(--copy);

		-webkit-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;

		line-height: 1.6;

		background: var(--white);

		overflow-x: hidden;
	}

	section {
		width: 100%;
	}

	hr {
		margin: 10px auto;

		width: 90%;
		height: 5px;

		border-radius: 10px;

		background: var(--white);
	}

	.bx--skeleton__text {
		height: 0.75rem;
	}

	h1,
	h2,
	h3 {
		font-family: var(--primary);
		line-height: 1.1;
	}

	h1 {
		font-size: 3rem;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 700;

		${until(
      device.iPad(),
      () => `
	  	font-size: 4rem;
	  `
  	  )}

		${until(
      device.iPhone12(),
      () => `
			font-size: 1.7rem;
		`
		)}
	}

	h3 {
		font-size: 2rem;
		font-weight: 700;

		${until(
      device.iPhone12(),
      () => `
			font-size: 1.5rem;
		`
		)}
	}

	p, blockquote, q, span, em, strong, aside {
		font-family: var(--secondary);
		font-size: var(--copy-size);
	}

	p {
		color: var(--copy);

		line-height: 1.6;

		${until(
      device.iPhone12(),
      () => `
			font-size: var(--copy-size);
		`
    	)}
	}

	.link {
		text-decoration: underline;
		color: var(--blue);

		&:hover {
			color: darken(var(--light-grey), 15);
		}
	}
`;

export default GlobalStyles;
