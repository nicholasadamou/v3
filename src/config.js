import packageJSON from '../package.json';

const config = {
	name: packageJSON.name,
	siteUrl: 'https://nicholasadamou.com',
	image: '/og.png', // Path to your image you placed in the 'static' folder
	title: 'Nicholas Adamou',
	description:
		'Nicholas Adamou is a performance-driven full-stack software engineer. Currently, he is focused on building accessible, human-centered products at IBM.',
	author: 'Nicholas Adamou',
	twitterUsername: '@nicholasadamou',
	email: 'nicholasadamouemail@gmail.com',

	socialMedia: {
		github: {
			name: 'GitHub',
			url: 'https://github.com/nicholasadamou',
			username: 'nicholasadamou'
		},
		codepen: {
			name: 'CodePen',
			url: 'https://codepen.io/nicholasadamou'
		},
		linkedin: {
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/nicholas-adamou'
		},
		stackexchange: {
			name: 'Stack Exchange',
			url: 'https://stackexchange.com/users/6884358/nicholas-adamou',
			stackoverflow: {
				name: 'Stack Overflow',
				url: 'https://stackoverflow.com/users/5290011/nicholas-adamou'
			}
		}
	},

	projects: [
		{
			name: 'minipwner',
			language: 'shell'
		},
		{
			name: 'plex-s3fs',
			language: 'shell'
		},
		{
			name: 'serverless-react-browsers',
			language: 'react'
		},
		{
			name: 'down-to-network',
			language: 'react'
		},
		{
			name: 'isitup',
			language: 'gulp'
		},
		{
			name: 'cf-detect',
			language: 'gulp'
		},
		{
			name: 'humblescraper',
			language: 'python'
		},
		{
			name: 'react-iframe',
			language: 'react'
		},
		{
			name: 'storage',
			language: 'react'
		},
		{
			name: 'multipartfile-uploader-demo',
			language: 'java'
		},
		{
			name: 'krios-github-bot',
			language: 'node'
		}
	]
};

export default config;
