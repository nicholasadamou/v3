import preprocess from 'svelte-preprocess';
import netlify from '@sveltejs/adapter-netlify';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// adding path aliases
		// https://kit.svelte.dev/faq#aliases
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$sections: resolve('./src/sections'),
					$hooks: resolve('./src/hooks'),
					$config: resolve('./src/config.js')
				}
			}
		}
	}
};

export default config;
