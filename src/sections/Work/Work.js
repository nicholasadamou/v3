import React from 'react';

import Experience from '../../components/Experience/Experience';
import Repository from '../../components/Repository/Repository';
import FooterText from '../../components/FooterText/FooterText';

import Awards from '../../sass/Awards';
import Projects from '../../sass/Projects';

import './index.scss';

import styled from 'styled-components';

import { device, until } from '../../utilities/mixins';

const Container = styled.section`
  padding: 0 25px;

  .experiences {
    ${until(
      device.iPhone(),
      () => `
		.react-masonry-column {
			width: 100% !important;
		}
	`,
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
			`,
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
	`,
    )};

    blockquote {
      padding: 10px;

      ${until(
        device.iPhone(),
        () => `
			padding: 0;
  		`,
      )};
    }
  }
`;

const Work = () => (
  <Container>
    <h2 className="title">
      Work Experience{' '}
      <span role="img" aria-label="coder">
        👨🏼‍💻
      </span>
    </h2>
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
			</a>{' and connect with me on '}
			<a
				href="https://linkedin.com/in/nicholas-adamou/"
				target="_blank"
				aria-hidden="true"
        rel="noopener noreferrer"
				className="link"
				id="linkedin"
			>
				LinkedIn
			</a>{'.'}
    </p>

		{Experience(
			'IBM',
			'Software Engineer',
			'Southbury, CT',
			'June 2020 - Present',
			() =>
				'Full-stack software engineer focused primarily on the front-end and back-end of cloud-native applications. Works with testers, PO\'s, IM\'s, UI/UX designers, and users to develop cloud-native software ' +
				'using DB2, k8s, istio, IBM Cloud, Docker, along with Java RESTful services using JDBC and SQL for the back-end, and React and NodeJS for the front-end. Applications are version controlled using GitHub, unit ' +
				'tested using Jenkins and JUnit along with leveraging a host of CI/CD software to provide automated testing and deployment of cloud-native applications including Travis CI, and including a slew of other internal IBM CI/CD proprietary software.',
				require('../../assets/images/logos/ibm.png'),
		)}

		{Experience(
			'IBM',
			'Software Engineering Co-Op',
			'Southbury, CT',
			'August 2019 - June 2020',
			() =>
				'Continued the work I finished as a intern, but now as a Co-Op while I was away at school. I participated in weekly stand-up meetings relating to the JIRA stories I was assigned. With each story, ' +
				'I assisted the team remotely with various bug fixes and quality assurance testing of the front-end and back-end of the application.',
			require('../../assets/images/logos/ibm.png'),
		)}

		{Experience(
			'IBM',
			'Software Engineering Intern',
			'Southbury, CT',
			'May 2019 - August 2019',
			() =>
				"I worked and collaborated with a diverse team of developers, UX/UI designers, PO's, IM's, and testers from around the world in order to develop a web application utilizing React " +
				'for the front-end along with Jenkins for unit testing, and a variety of technologies for the back-end, such as SQL, Java with JDBC, Kubernetes for container-orchestration, Apache Kafka' +
				' for stream-processing of micro-services and Docker for containerization.',
			require('../../assets/images/logos/ibm.png'),
		)}

		{Experience(
			'Blackbird',
			'Software Engineering Intern',
			'San Francisco, CA',
			'June 2018 - August 2018',
			() =>
				'As a software engineer at Blackbird, I worked closely with the CTO and the engineering team to construct custom components for the Blackbird web and mobile apps leveraging ' +
				'React, React Native, React Native Web, GraphQL, Apollo, and ES6 JavaScript. In addition, I provided QA (Quality Assurance) and unit testing on multiple builds of the Blackbird web and mobile apps.',
			require('../../assets/images/logos/blackbird.png'),
		)}

		{Experience(
			'Mack Media Group',
			'Software Engineering Intern',
			'Brookfield, CT',
			'December 2016 - December 2016',
			() =>
				'Leveraged Google AMP pages to develop a user-friendly and responsive homepage for the agency.',
			require('../../assets/images/logos/mack-media-group.png'),
		)}

		{Experience(
			'Advanced Electrical Services',
			'Freelance Web Developer',
			'New Milford, CT',
			'June 2016 - June 2016',
			() =>
				"Worked closely with the client to develop a new sleek and intuitive homepage for the company. Utilized various web technologies, such as Pug (previously Jade), SASS, and ES6 JavaScript.",
			require('../../assets/images/logos/advanced-electrical-services.png'),
		)}

		{Experience(
			'Cut, Paste, & Copy',
			'Student Web Developer',
			'New Milford, CT',
			'March 2016 - March 2016',
			() =>
				"Worked with classmates to design and develop a responsive mobile-first homepage for the student-run design agency. Leveraging Jade, SCSS, and ES6 JavaScript.",
			require('../../assets/images/logos/cut-paste-copy.png'),
		)}

		<h2 className="title" style={{ fontSize: '1.6rem' }}>
      Projects{' '}
			<span role="img" aria-label="toolbox">🧰</span>
    </h2>
    <p className="subtitle" style={{ fontSize: '1.125rem' }}>
      Various projects that I've open sourced while working at these companies.
    </p>

    <Projects>
      {Repository('nicholasadamou', 'down-to-network')}
			{Repository('nicholasadamou', 'firebase-react-starter-kit')}
			{Repository('nicholasadamou', 'watson-chatbot')}
			{Repository('nicholasadamou', 'react-iframe')}
			{Repository('nicholasadamou', 'node-cache')}
      {Repository('nicholasadamou', 'storage')}
			{Repository('nicholasadamou', 'mack-media-group-internship-project')}
			{Repository('nicholasadamou', 'advanced-electrical-services')}
			{Repository('cutpastecopy', 'cutpastecopy.com')}
    </Projects>

    <h3 className="title" style={{ fontSize: '1.6rem' }}>
      Badges and Certifications{' '}
      <span role="img" aria-label="badge">
        🎫
      </span>
    </h3>
    <p className="subtitle" style={{ fontSize: '1.125rem' }}>
      Certifications and badges that I have received at IBM.
      <br />
      More badges can be found at my{' '}
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
        'IBM Developer Jumpstart Practitioner',
        '',
        '26 January 2021',
        () =>
          "The earner has acquired a practical knowledge of IBM Design Thinking, Agile Software development/Project management skills and practical development (coding/designing) skills. They have also demonstrated the ability to use and implement components of IBM's Cloud Computing offerings to solve valid business challenges within IBM. As a Practitioner, the badge earner has demonstrated the ability to to work as a team, with their Stakeholders to deliver well designed solutions to business challenges.",
        'https://images.youracclaim.com/size/680x680/images/a65e1c69-32c0-4b7f-8222-3d3c340f252c/IBM-Developer-Jumpstart-Practitioner.png',
      )}
      {Experience(
        'IBM',
        'Beyond the Basics: Istio and IBM Cloud Kubernetes Service',
        '',
        '19 June 2020',
        () =>
          'The badge earner can install Istio in a cluster, deploy a sample app, and set up the Istio Ingress controller. The individual knows how to use metrics, logging and tracing to observe services. The earner is also able to perform simple traffic management such as A/B tests and canary deployments, secure a service mesh, and enforce policies for microservices.',
        'https://images.youracclaim.com/size/680x680/images/8d34d489-84bf-4861-a4a0-9e9d68318c5c/Beyond%2Bbasics%2Bof%2BIstio%2Bon%2BCloud%2Bv2.png',
      )}
      {Experience(
        'IBM',
        'Getting started with Microservices with Istio and IBM Cloud Kubernetes Service',
        '',
        '19 June 2020',
        () =>
          "The badge earner is able to: describe the 12-factor app principles, list the benefits of cloud native apps and the microservices architecture, describe how microservices are managed with IBM Cloud Container Service and Istio, show how to design microservices and how they communicate, show how a service mesh helps with microservice implementations, describe how Istio can be used to connect, manage, and secure microservices, and describe the logical components of Istio's data and control plane.",
        'https://images.youracclaim.com/size/680x680/images/376369e8-1901-44fa-af45-ce4422818f0c/Itsio%2Band%2BIBM%2BCloud%2BContainer%2BService.png',
      )}
      {Experience(
        'IBM',
        'Containers, K8s and Istio on IBM Cloud',
        '',
        '19 June 2020',
        () =>
          'After completing this learning path, the badge earner understands 12-factor apps and how microservices are managed with the IBM Cloud Kubernetes Service and Istio. The individual understands containers, Kubernetes, and how to deploy containerized apps. The earner can also deploy microservices in a cluster and knows how to connect, manage, and secure those microservices.',
        'https://images.youracclaim.com/size/680x680/images/c848b101-661f-4f3a-bc8f-f9c977a55524/Containers-K8s-istio-IBM%2Bcloud%2Bv2.png',
      )}
    </Awards>

    {FooterText(
      'Read more about my work experience on my ',
      'LinkedIn',
      'https://linkedin.com/in/nicholas-adamou/',
      'linkedin',
    )}
  </Container>
);
export default Work;
