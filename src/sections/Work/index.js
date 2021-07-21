/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

import Heading from 'components/Heading';
import Experience from 'components/Experience';

import {findImageByName} from 'utilities/utilities';
import {device, until} from 'utilities/mixins';

import Section from 'sass/Section';
import Container from 'sass/Container';

const Experiences = styled.div`
	padding: 0 6rem;

	${until(
		device.MacbookAir(),
		() => `
		margin: -1rem auto;
		margin-bottom: 1rem;
		margin-top: 1.5rem;
	`
	)}

	${until(
		device.iPadProVertical(),
		() => `
		padding: 0;
	`
	)}

	${until(
		device.iPhone12(),
		() => `
		margin: 2rem 0;
		margin-bottom: 1rem;
	`
	)}

	.experience:nth-child(even) {
		margin: 2rem 0 2rem auto;

		${until(
			device.iPhone12(),
			() => `
			margin: 2.5rem 0 2.5rem -20px;
		`
		)}
	}

	.has-badges {
		margin-bottom: 5.25rem !important;

		${until(
			device.iPadPro12Landscape(),
			() => `
			margin-bottom: 5rem !important;
		`
		)}

		${until(
			device.iPhone12(),
			() => `
			margin-bottom: 5.25rem !important;
		`
		)}
	}
`;

const Work = (props) => (
	<Section>
		<Container
			style={{
				marginTop: '-1rem',
			}}
		>
			<Heading
				title="Work Experience"
				subtitle={() => (
					<p className="subtitle">
						Please read my{' '}
						<a
							href="https://drive.google.com/file/d/1p819Jx1v50zcBD_DnCo0paoiSnqBXw41/view?usp=sharing"
							target="_blank"
							aria-hidden="true"
							rel="noopener noreferrer"
							className="link"
						>
							resume
						</a>
						{' and connect with me on '}
						<a
							href="https://linkedin.com/in/nicholas-adamou/"
							target="_blank"
							aria-hidden="true"
							rel="noopener noreferrer"
							className="link"
							id="linkedin"
						>
							LinkedIn
						</a>
						.
					</p>
				)}
			/>

			<Experiences>
				<Experience
					company='IBM'
					title='Senior Software Engineer'
					location='Southbury, CT'
					duration='May 2021 - Present'
					description={() => "Leads the software development team for IBM's cloud native ledger software, GLUI-NG. Works with developers, UI/UX designers, PO's, IM's, testers, and users to enhance the journaling software. Leverages modern technologies such as PostgreSQL, GraphQL, Apollo, MQ, Apache POI, Go, and IBM Hybrid Cloud to bring a new modern face to IBM's ledger application."}
					image={findImageByName('ibm.png', props.logos)}
				/>

				<Experience
					company='IBM'
					title='Software Engineer'
					location='Southbury, CT'
					duration='June 2020 - May 2021'
					description={() => "Full-stack software engineer focused primarily on the front-end and back-end of the IBM cloud-native applications GLUI, the single-entry point to IBM’s ledger for all global journal activity and GUDA, the global application for all IBM departmental activities. Works with testers, PO's, IM's, UI/UX designers, and users to enhance IBM's cloud-native journaling and departmental software. Leverages modern front-end technologies, such as React and Angular, and modern back-end technologies such as Go, GraphQL, Node.js and Express, Java RESTful services using Spring, JDBC, and SQL. Utilizes the IBM DB2 and PostgreSQL relational databases, Docker for containerization, Artifactory for encapsulating all Docker images, IBM Hybrid Cloud and k8s for container orchestration and management, along with a host of CI/CD software to provide automated testing and continuous deployment of cloud-native applications."}
					image={findImageByName('ibm.png', props.logos)}
					badges={props.badges}
				/>

				<Experience
					company='IBM'
					title='Software Engineer Co-Op'
					location='Southbury, CT'
					duration='August 2019 - June 2020'
					description={() => "Continued the work I finished as an intern, but now as a Co-Op while I was a student at Cornell College. I participated in weekly stand-up meetings relating to the JIRA stories, I was assigned. With each story, I assisted the team remotely with various bug fixes and quality assurance testing of the front-end and back-end of the ledger application."}
					image={findImageByName('ibm.png', props.logos)}
				/>

				<Experience
					company='IBM'
					title='Software Engineer Intern'
					location='Southbury, CT'
					duration='May 2019 - August 2019'
					description={() => "At IBM, I worked and collaborated with a diverse team of developers, UX/UI designers, PO's, IM's, testers, etc. from around the world in order to transition IBM’s global ledger application for all journal activity to a cloud-native solution utilizing React for the front-end, and a variety of technologies for the back-end micro-services, such as SQL, Java Spring, JDBC, k8s for container-orchestration, and Docker for containerization. As a team, we additionally leveraged a host of CI/CD software to develop the application along with Git and GitHub for version control, and Travis for integrated build tests along with a host of other internal IBM CI/CD software."}
					image={findImageByName('ibm.png', props.logos)}
				/>

				<Experience
					company='Blackbird'
					title='Software Engineer'
					location='San Francisco, CA'
					duration='June 2018 - August 2018'
					description={() =>
						'As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging ' +
						'React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps.'
					}
					image={findImageByName('blackbird.png', props.logos)}
				/>
			</Experiences>
		</Container>
	</Section>
);

export default Work;
