const { init } = require('../serverless.js');

exports.handler = init({
	appDir: '_app',
	assets: new Set([
		'.DS_Store',
		'demo.png',
		'hero.png',
		'logos/blackbird.png',
		'logos/ibm.png',
		'websites/nicholas-adamou-desktop.png',
		'websites/nicholas-adamou-mobile.png',
		'websites/vineyard-vines-sales-desktop.png',
		'websites/wifi-card-desktop.png'
	]),
	mimeTypes: { '.png': 'image/png' },
	_: {
		entry: {
			file: 'immutable/start-27f43772.js',
			imports: [
				'immutable/start-27f43772.js',
				'immutable/chunks/index-4432b0ee.js',
				'immutable/chunks/preload-helper-19022909.js'
			],
			stylesheets: []
		},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: '',
				pattern: /^\/$/,
				names: [],
				types: [],
				path: '/',
				shadow: null,
				a: [0, 2],
				b: [1]
			}
		],
		matchers: async () => {
			return {};
		}
	}
});
