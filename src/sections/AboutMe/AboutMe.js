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
    font-size: 2.3rem;

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

			font-size: 1.7rem;
			text-align: center;
		`,
    )}

    span {
      color: var(--title);
    }
  }

  p {
    margin: 0 8rem 5px;

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
      Currently, I am an IBM software engineer. I primarily focus on the front-end and back-end of cloud-native applications. Recently I graduated Summa Cum Laude from{' '}
			<a
        className="cornell"
        href="https://www.cornellcollege.edu/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        Cornell College
      </a>{' '}
			where I earned my degree in Computer Science. I have always been a highly organized and goal-driven individual who is a problem solver by nature. Using my skills as a software engineer to improve the lives of others by developing fun and intuitive applications are why I love programming.
    </p>
  </Container>
);

export default AboutMe;
