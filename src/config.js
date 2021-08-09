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
      url: 'https://codepen.io/nicholasadamou',
    },
    linkedin: {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nicholas-adamou',
    }
  },

	experiences: [
		{
			image: 'ibm.png',
			company: 'IBM',
			title: 'Senior Software Engineer',
			duration: 'May 2021 - Present',
			location: 'Southbury, CT',
			description: "Leads the software development team for IBM's cloud native ledger software, GLUI-NG. Works with developers, UI/UX designers, PO's, IM's, testers, and users to enhance the journaling software. Leverages modern technologies such as PostgreSQL, GraphQL, Apollo, MQ, Apache POI, Go, and IBM Hybrid Cloud to bring a new modern face to IBM's ledger application."
		},
		{
			image: 'ibm.png',
			company: 'IBM',
			title: 'Software Engineer',
			duration: 'June 2019 - May 2021',
			location: 'Southbury, CT',
			description: "Full-stack software engineer focused primarily on the front-end and back-end of the IBM cloud-native applications GLUI, the single-entry point to IBM’s ledger for all global journal activity and GUDA, the global application for all IBM departmental activities. Works with testers, PO's, IM's, UI/UX designers, and users to enhance IBM's cloud-native journaling and departmental software. Leverages modern front-end technologies, such as React and Angular, and modern back-end technologies such as Go, GraphQL, Node.js and Express, Java RESTful services using Spring, JDBC, and SQL. Utilizes the IBM DB2 and PostgreSQL relational databases, Docker for containerization, Artifactory for encapsulating all Docker images, IBM Hybrid Cloud and k8s for container orchestration and management, along with a host of CI/CD software to provide automated testing and continuous deployment of cloud-native applications."
		},
		{
			image: 'blackbird.png',
			company: 'Blackbird',
			title: 'Software Engineer',
			duration: 'June 2018 - August 2018',
			location: 'San Francisco, CA',
			description: "As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps."
		}
	]
}

export default config;
