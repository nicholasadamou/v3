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

	experiences: [
		{
			image: 'ibm.png',
			company: 'IBM',
			title: 'Staff Software Engineer',
			duration: 'May 2021 - Present',
			location: 'Southbury, CT',
			description:
				"Leverages modern technologies to bring a new modern face to IBM's ledger application. I lifted and shifted IBM's departmental application's chatbot to the ledger application. Utilized JWT to handle user authentication within the chatbot. I leveraged Box and Java Spring Boot to construct a microservice to stream video/image content to the chatbot. Integrated Apache POI to dynamically handle Excel document generation and parsing for the ledger application's Direct File Import (DFI) feature. Leveraged GoLang and Gin to construct a microservice to handle transferring parsed Excel files to the downstream import job server. I migrated each of the ledger application's environments to IBM's Hybrid Cloud Cirrus platform. I integrated HCL AppScan for static analysis into each of the ledger's microservices' development docker build pipelines on IBM's Hybrid Cloud Cirrus platform. I improved the application's pagination performance by transitioning the application's data table pagination on several key pages from back end to front end pagination based on user research and surveys that concluded how likely our users are to navigate beyond the first page of a data table. Integrated gzip and brotli compression in order to decrease the size of the application's production assets which improved the application overall time to interactive by ~85% on several key pages. Helps interview prospective intern candidates by assessing their depth and breadth of knowledge within the realm of software engineering. Acts as a software librarian for IBM's departmental software handling production deployments."
		},
		{
			image: 'ibm.png',
			company: 'IBM',
			title: 'Associate Software Engineer',
			duration: 'June 2019 - May 2021',
			location: 'Southbury, CT',
			description:
				"Works on cross-functional teams to enhance IBM's ledger and departmental software. Developed various key front-end and back-end services. Utilized Java Spring Boot and JDBC in order to construct a microservice for handling sending user emails based on user activity within the ledger application. Leveraged Swagger in order to construct documentation surrounding each of the ledger's microservice APIs. Integrated dynamic session timeout handling for user sessions based on JWT expiration for the ledger application. Utilized CRON jobs, Hibernate, and Java Spring Boot to automate the clean-up of user-PI data within the departmental software. I worked closely with the departmental application development lead in order to maintain their full-stack Angular and Express IBM Watson-backed chatbot."
		},
		{
			image: 'blackbird.png',
			company: 'Blackbird',
			title: 'Software Engineering Intern',
			duration: 'June 2018 - August 2018',
			location: 'San Francisco, CA',
			description:
				'Worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging React, React Native, React Native Web, GraphQL, and Apollo. Provided Quality Assurance and unit testing on multiple builds of the Blackbird web and mobile apps.'
		}
	],

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
		}
	]
};

export default config;
