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
			name: 'vineyard-vines-sales',
			language: 'react',
			url: 'https://vineyard-vines-sales.netlify.app/'
		},
		{
			name: 'wifi-card',
			language: 'react',
			url: 'https://wifi-card.netlify.app/'
		},
		{
			name: 'muuvies',
			language: 'react',
			url: 'https://muuvies.netlify.app/'
		},
		{
			name: 'firebase-react-starter-kit',
			language: 'react'
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
			name: 'krios-github-bot',
			language: 'node'
		},
		{
			name: 'toasty',
			language: 'react'
		},
		{
			name: 'jwt-spring-security-demo',
			language: 'java'
		},
		{
			name: 'carbon-sidebar-tabs',
			language: 'react'
		},
		{
			name: 'chunked-file-upload-poc',
			language: 'react'
		}
	]
};

export default config;
