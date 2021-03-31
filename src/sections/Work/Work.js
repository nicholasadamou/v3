/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';
import Experience from 'components/Experience/Experience';
import Repository from 'components/Repository/Repository';
import FooterText from 'components/FooterText/FooterText';

import { device, until } from 'utilities/mixins';
import { findImageByName } from 'utilities/utilities';
import Awards from 'sass/Awards';
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
      'Software Engineer',
      'Southbury, CT',
      'June 2020 - Present',
      () =>
        "Full-stack software engineer focused primarily on the front-end and back-end of the IBM cloud-native applications GLUI, the single-entry point to IBM’s ledger for all global journal activity and GUDA, the global application for all IBM departmental activities. Works with testers, PO's, IM's, UI/UX designers, and users to enhance IBM's cloud-native journaling and departmental software. Leverages modern front-end technologies, such as React and Angular, and modern back-end technologies such as Go, GraphQL, and Java RESTful services using Spring, JDBC, and SQL. Utilizes the IBM DB2 and PostgreSQL relational databases, Docker for containerization, Artifactory for encapsulating all Docker images, IBM Hybrid Cloud and k8s for container orchestration and management, along with a host of CI/CD software to provide automated testing and continuous deployment of cloud-native applications including Travis CI and a slew of other internal IBM CI/CD proprietary software.",
      findImageByName('ibm.png', props.logos)
    )}

    {Experience(
      'IBM',
      'Software Engineering Co-Op',
      'Southbury, CT',
      'August 2019 - June 2020',
      () =>
        'Continued the work I finished as an intern, but now as a Co-Op while I was a student at Cornell College. I participated in weekly stand-up meetings relating to the JIRA stories I was assigned. With each story, I assisted the team remotely with various bug fixes and quality assurance testing of the front-end and back-end of the ledger application.',
      findImageByName('ibm.png', props.logos)
    )}

    {Experience(
      'IBM',
      'Software Engineering Intern',
      'Southbury, CT',
      'May 2019 - August 2019',
      () =>
        "At IBM, I worked and collaborated with a diverse team of developers, UX/UI designers, PO's, IM's, testers, etc. from around the world in order to transition IBM’s global ledger application for all journal activity to a cloud-native solution utilizing React for the front-end, and a variety of technologies for the back-end micro-services, such as SQL, Java Spring, JDBC, k8s for container-orchestration, and Docker for containerization. As a team, we additionally leveraged a host of CI/CD software to develop the application along with Git and GitHub for version control, and Travis for integrated build tests along with a host of other internal IBM CI/CD software.",
      findImageByName('ibm.png', props.logos)
    )}

    {Experience(
      'Blackbird',
      'Software Engineering Intern',
      'San Francisco, CA',
      'June 2018 - August 2018',
      () =>
        'As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging ' +
        'React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps.',
      findImageByName('blackbird.png', props.logos)
    )}

    {Experience(
      'Mack Media Group',
      'Software Engineering Intern',
      'Brookfield, CT',
      'December 2016 - December 2016',
      () =>
        'Leveraged Google AMP pages to develop a user-friendly and responsive homepage for the agency.',
      findImageByName('mack-media-group.png', props.logos)
    )}

    {Experience(
      'Advanced Electrical Services',
      'Freelance Web Developer',
      'New Milford, CT',
      'June 2016 - June 2016',
      () =>
        'Worked closely with the client to develop a new sleek and intuitive homepage for the company. Utilized various web technologies, such as Pug (previously Jade), SASS, and ES6 JavaScript.',
      findImageByName('advanced-electrical-services.png', props.logos)
    )}

    {Experience(
      'Cut, Paste, & Copy',
      'Student Web Developer',
      'New Milford, CT',
      'March 2016 - March 2016',
      () =>
        'Worked with classmates to design and develop a responsive mobile-first homepage for the student-run design agency. Leveraging Jade, SCSS, and ES6 JavaScript.',
      findImageByName('cut-paste-copy.png', props.logos)
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
      {Repository('nicholasadamou', 'mack-media-group-internship-project')}
      {Repository('nicholasadamou', 'advanced-electrical-services', 'html')}
      {Repository('cutpastecopy', 'cutpastecopy.com', 'html')}
    </Projects>

    <h3 className="title" style={{ fontSize: '1.6rem' }}>
      Badges and Certifications
    </h3>
    <p className="subtitle" style={{ fontSize: '1.125rem' }}>
      More can be found at my{' '}
      <a
        href="https://www.youracclaim.com/users/nicholas-adamou/badges"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        className="link"
      >
        youracclaim
      </a>{' '}
      page.
    </p>

    <Awards>
      {Experience(
        'IBM',
        'IBM Developer JumpStart Explorer',
        '',
        '5 February 2021',
        () =>
          'The IBM Developer Jumpstart badge ensures an understanding of key skills and knowledge required by software and hardware developers to apply core practices such as IBM Design Thinking and agile to their work, and have taken steps to build their skills and experiences as developers through a 4 module set of e-Learning.',
        'https://images.youracclaim.com/size/340x340/images/9fa05621-437d-44ba-8ea5-ecd611e5cde5/IBM-Developer-Jumpstart-Explorer.png'
      )}
      {Experience(
        'IBM',
        'IBM Developer JumpStart Practitioner',
        '',
        '25 January 2021',
        () =>
          "The earner has acquired a practical knowledge of IBM Design Thinking, Agile Software development/Project management skills and practical development (coding/designing) skills. They have also demonstrated the ability to use and implement components of IBM's Cloud Computing offerings to solve valid business challenges within IBM. As a Practitioner, the badge earner has demonstrated the ability to to work as a team, with their Stakeholders to deliver well designed solutions to business challenges.",
        'https://images.youracclaim.com/size/680x680/images/a65e1c69-32c0-4b7f-8222-3d3c340f252c/IBM-Developer-Jumpstart-Practitioner.png'
      )}
      {Experience(
        'IBM',
        'Beyond the Basics: Istio and IBM Cloud Kubernetes Service',
        '',
        '19 June 2020',
        () =>
          'The badge earner can install Istio in a cluster, deploy a sample app, and set up the Istio Ingress controller. The individual knows how to use metrics, logging and tracing to observe services. The earner is also able to perform simple traffic management such as A/B tests and canary deployments, secure a service mesh, and enforce policies for microservices.',
        'https://images.youracclaim.com/size/680x680/images/8d34d489-84bf-4861-a4a0-9e9d68318c5c/Beyond%2Bbasics%2Bof%2BIstio%2Bon%2BCloud%2Bv2.png'
      )}
    </Awards>

    {FooterText(
      'Read more about my work experience on my ',
      'LinkedIn',
      'https://linkedin.com/in/nicholas-adamou/',
      'linkedin'
    )}
  </Container>
);

export default Work;
