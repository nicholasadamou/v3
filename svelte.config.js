import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter.
		adapter: adapter()
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors.
	preprocess: preprocess()
};

export default config;
