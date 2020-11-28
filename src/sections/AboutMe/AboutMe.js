import React from 'react';

import Avatar from '../../sass/Avatar';

import WaveEmoji from '../../components/WaveEmoji/WaveEmoji';

import styled from 'styled-components';

import { device, until } from '../../utilities/mixins';

const Container = styled.section`
  text-align: center;

  padding-bottom: 20px;

  ${until(
    device.iPhone(),
    () => `
		width: 100%;
	`,
  )}

  h1 {
    font-size: 2.5rem;

    margin-top: 20px;

    color: var(--title);

    ${until(
      device.iPadPro(),
      () => `
			font-size: 2.3rem;
		`,
    )}

    ${until(
      device.iPhone(),
      () => `
			margin: 0;
			margin-bottom: 0px !important;

			padding-top: 20px;
			padding-bottom: 10px;

			font-size: 1.5rem;
			text-align: center;
		`,
    )}

    span {
      color: var(--title);
    }
  }

  p {
    margin: 0 5rem 20px;

    text-align: center;

    color: var(--copy);

    ${until(
      device.iPad(),
      () => `
			margin: 0 2rem 20px;
		`,
    )}

    ${until(
      device.iPhone(),
      () => `
			margin: 0 auto;

			padding: 10px 25px;

			text-align: center;
		`,
    )}

	a {
      display: inline-block;

      position: relative;

      text-decoration: none;

      color: var(--link);

      font-weight: bolder;

      -webkit-transition: color 200ms;

      transition: color 200ms;

      &:before {
        content: '';

        position: absolute;
        top: 80%;
        left: 0;
        right: 0;

        height: 2px;

        opacity: 1;
        background-color: currentColor;

        -webkit-transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

        transition: all 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }

      &.cornell {
        color: var(--cornell);

        &:before {
          background-color: var(--cornell);
        }
      }

      &.blackbird {
        color: var(--blackbird);

        &:before {
          background-color: var(--blackbird);
        }
      }

      &.mack-media-group {
        color: var(--mack-media-group);

        &:before {
          background-color: var(--mack-media-group);
        }
      }

      &.ibm {
        color: var(--ibm);

        &:before {
          background-color: var(--ibm);
        }
      }
    }
  }
`;

const AboutMe = () => (
  <Container>
    <Avatar />

    <h1 className="title">
      Hi, <WaveEmoji />! I'm <span>Nicholas Adamou</span>
    </h1>

    <p>
      I am currently an IBM Software Engineer and a recent graduate from{' '}
      <a
        className="cornell"
        href="https://www.cornellcollege.edu/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        Cornell College
      </a>{' '}
      where I earned my B.A. in Computer Science with a concentration in
      Software Engineering. I am a highly organized and hard-working individual
      who absolutely loves programming. The mere ability to write a few lines of
      code and have something unique and interesting come up on the screen
      fascinates me each and every day!
    </p>

    <p>
      Because of my interest in computers, I've had the awesome and unique
      opportunity to intern and work for a few software engineering companies
      such as{' '}
      <a
        className="blackbird"
        href="https://flyblackbird.com"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        Blackbird
      </a>
      ,{' '}
      <a
        className="mack-media-group"
        href="https://mackmediagroup.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        Mack Media Group
      </a>
      , and{' '}
      <a
        className="ibm"
        href="https://ibm.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        IBM
      </a>{' '}
      where I met and networked with many great and vastly talented engineers.
    </p>

    <p>
      At all three of those companies, I leveraged cutting-edge JavaScript
      technologies such as React, React Native, Graph QL, Apollo, React Redux,
      Amazon AWS and more to construct applications driven to excel each
      company's bottom-line.
    </p>
  </Container>
);

export default AboutMe;
