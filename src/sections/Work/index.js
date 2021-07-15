/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

import Heading from 'components/Heading';
import Experience from 'components/Experience';

import { findImageByName } from 'utilities/utilities';
import {device, until} from 'utilities/mixins';

import Section from 'sass/Section';
import Container from 'sass/Container';

import './index.scss';

const Experiences = styled.div`
	padding: 0 4rem;

	${until(
		device.iPadProVertical(),
		() => `
		padding: 0;
	`
	)}

	${until(
		device.iPhone12(),
		() => `
		margin: 4rem 0;
	`
	)}


	.experience:nth-child(even) {
		margin: 36px 0 36px auto;

		${until(
			device.iPadProVertical(),
			() => `
			margin: 36px 0;
		`
		)}

		${until(
			device.iPhone12(),
			() => `
			margin: 36px -20px;
		`
		)}
	}
`;

const Work = (props) => (
	<Section>
	  <Container>
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
			{Experience(
			  'IBM',
			  'Senior Software Engineer',
			  'Southbury, CT',
			  'May 2021 - Present',
			  () =>
				"Leads the software development team for IBM's cloud native ledger software, GLUI-NG. Works with developers, UI/UX designers, PO's, IM's, testers, and users to enhance the journaling software. Leverages modern technologies such as PostgreSQL, GraphQL, Apollo, MQ, Apache POI, Go, and IBM Hybrid Cloud to bring a new modern face to IBM's ledger application.",
			  findImageByName('ibm.png', props.logos)
			)}

			{Experience(
			  'IBM',
			  'Software Engineer',
			  'Southbury, CT',
			  'June 2020 - May 2021',
			  () =>
				"Full-stack software engineer focused primarily on the front-end and back-end of the IBM cloud-native applications GLUI, the single-entry point to IBM’s ledger for all global journal activity and GUDA, the global application for all IBM departmental activities. Works with testers, PO's, IM's, UI/UX designers, and users to enhance IBM's cloud-native journaling and departmental software. Leverages modern front-end technologies, such as React and Angular, and modern back-end technologies such as Go, GraphQL, Node.js and Express, Java RESTful services using Spring, JDBC, and SQL. Utilizes the IBM DB2 and PostgreSQL relational databases, Docker for containerization, Artifactory for encapsulating all Docker images, IBM Hybrid Cloud and k8s for container orchestration and management, along with a host of CI/CD software to provide automated testing and continuous deployment of cloud-native applications.",
			  findImageByName('ibm.png', props.logos)
			)}

			{Experience(
			  'Blackbird',
			  'Software Engineer',
			  'San Francisco, CA',
			  'June 2018 - August 2018',
			  () =>
				'As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging ' +
				'React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps.',
			  findImageByName('blackbird.png', props.logos)
			)}
		  </Experiences>
	  </Container>
	</Section>
);

export default Work;
