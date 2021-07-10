/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';
import Experience from 'components/Experience';
import Repository from 'components/Repository';

import { device, until } from 'utilities/mixins';
import { findImageByName } from 'utilities/utilities';

import Projects from 'sass/Projects';

import './index.scss';

const Container = styled.section`
  padding: 0 25px;

  ${until(
    device.iPhone(),
    () => `
		padding: 0 16px;
	`
  )};

  .experiences {
    ${until(
      device.iPhone(),
      () => `
		.react-masonry-column {
			width: 100% !important;
		}
	`
    )};

    .experience {
      padding-bottom: 10px;

      &:last-child {
        padding-bottom: 0;
      }

      ${until(
        device.iPhone(),
        () => `
				padding-bottom: 0;
			`
      )};
    }
  }

  .reviews {
    width: 95%;

    ${until(
      device.iPhone(),
      () => `
		width: 100%;

		.react-masonry-column {
			width: 100% !important;
		}
	`
    )};

    blockquote {
      padding: 10px;

      ${until(
        device.iPhone(),
        () => `
			padding: 0;
		`
      )};
    }
  }
`;

const Work = (props) => (
  <Container>
    <h2 className="title">Work Experience</h2>
    <p className="subtitle">
      Please read my{' '}
      <a
        href="https://drive.google.com/file/d/1p819Jx1v50zcBD_DnCo0paoiSnqBXw41/view?usp=sharing"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
        id="resume"
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

    <h2 className="title" style={{ fontSize: '1.6rem' }}>
      Projects
    </h2>
    <p className="subtitle" style={{ fontSize: '1.125rem' }}>
      Various projects that I've open sourced while working at these companies.
    </p>

    <Projects>
      {Repository('nicholasadamou', 'down-to-network', 'react')}
      {Repository('nicholasadamou', 'firebase-react-starter-kit', 'react')}
      {Repository('nicholasadamou', 'watson-chatbot', 'angular')}
      {Repository('nicholasadamou', 'react-iframe', 'react')}
      {Repository('nicholasadamou', 'node-cache', 'node')}
      {Repository('nicholasadamou', 'storage', 'react')}
      {Repository('nicholasadamou', 'krios-github-bot', 'node')}
      {Repository('nicholasadamou', 'toasty', 'react')}
      {Repository('nicholasadamou', 'jwt-spring-security-demo', 'java')}
    </Projects>
  </Container>
);

export default Work;
