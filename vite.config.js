import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['broadcast-channel']
	},
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			// Allows access to package.json
			allow: ['..']
		}
	},
	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$sections: resolve('./src/sections'),
			$hooks: resolve('./src/hooks'),
			$config: resolve('./src/config.js')
		}
	}
};

export default config;
