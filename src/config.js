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
	resume: 'https://drive.google.com/file/d/1p819Jx1v50zcBD_DnCo0paoiSnqBXw41/view?usp=sharing',

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
				"Leads the software development team for IBM's cloud-native ledger software. Works on cross-functional teams to enhance the accounting software. Leverages modern technologies to bring a new modern face to IBM's ledger application. Integrated Apache POI to dynamically handle Excel document generation and parsing. Incorporated IBM Watson to construct a full stack chatbot application to handle user queries. Utilized Box and Java Spring Boot to stream video/image content to chatbot. Incorporated JWT authentication for meaningful user context. Implemented system for dynamically handling toast-style notifications. Led performance improvements initiative which led to an overall performance gain of ~60%. Acts as a software librarian for IBM's departmental software handling production deployments."
		},
		{
			image: 'ibm.png',
			company: 'IBM',
			title: 'Associate Software Engineer',
			duration: 'June 2019 - May 2021',
			location: 'Southbury, CT',
			description:
				"Works on cross-functional teams to enhance IBM's ledger and departmental software. Developed various key front-end and back-end services. Integrated IBM Carbon Design system (React) as base design system for IBM's ledger software. Constructed documentation surrounding each of the ledger's micro-service's API utilizing Swagger. Utilized IBM SSO, JWT, and React Redux to securely authenticate users. Integrated dynamic session timeout handling for user sessions. Utilized cron jobs, Hibernate, and Java Spring Boot to automate the clean-up of user PI data within IBM's departmental software."
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
