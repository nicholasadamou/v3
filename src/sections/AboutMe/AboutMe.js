/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';

import WaveEmoji from 'components/WaveEmoji/WaveEmoji';
import SocialMediaButton from 'components/SocialMediaButton/SocialMediaButton';

import { device, until } from 'utilities/mixins';
import Avatar from 'sass/Avatar';

const Container = styled.section`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;

  margin-top: 40px;

  padding: 0 50px;

  width: 100%;

  text-align: left !important;

  ${until(
    device.iPadPro(),
    () => `
		width: 100%;

		flex-direction: column;

		margin: 0;

		padding: 0;

		div:first-child {
			margin-top: -100px;
		}
	`
  )}
  h1 {
    --font-size: 2.3rem;

    font-size: var(--font-size);

    margin-top: 20px;

    color: var(--title);

    ${until(
      device.iPadPro(),
      () => `
			margin: 0;
			margin-bottom: 0px !important;

			padding-top: 20px;
			padding-bottom: 10px;

			font-size: 2.3rem;
			text-align: center;
		`
    )}

    span {
      color: var(--title);

      font-size: var(--font-size);
    }
  }

  p {
    width: 90%;

    color: var(--copy);

    ${until(
      device.iPadPro(),
      () => `
			margin: 0 auto;

			padding: 10px 25px;

			width: 100%;

			text-align: left;
		`
    )}

    ${until(
      device.iPhone(),
      () => `
			padding: 10px 16px;
		`
    )}

		a {
      display: inline-block;

      position: relative;

      text-decoration: none;

      color: var(--link);

      font-weight: 800;

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

const Content = styled.div`
  width: 75%;

  ${until(
    device.iPadPro(),
    () => `
			width: 90%;

			.title {
				margin-left: 24px;

				font-size: 2rem;
				text-align: left;
			}
		`
  )}

  ${until(
    device.iPhone(),
    () => `
			width: 100%;

			.title {
				margin-left: 16px;
			}
		`
  )}
`;

const Social = styled.div`
  margin-top: 10px;
  margin-left: -15px;

  ${until(
    device.iPadPro(),
    () => `
			margin-top: -10px;
			margin-left: 10px;
		`
  )}

  ${until(
    device.iPhone(),
    () => `
			margin-top: 0;
			margin-left: 0;
		`
  )}
`;

const AboutMe = (props) => (
  <Container>
    <Avatar image={props.avatar.images.fallback.src} />

    <Content>
      <h1 className="title">
        Hi, <WaveEmoji />! I'm Nicholas Adamou.
      </h1>

      <p>
        Currently, I am an{' '}
        <a
          className="ibm"
          href="https://ibm.com/"
          target="_blank"
          aria-hidden="true"
          rel="noopener noreferrer"
        >
          IBM
        </a>{' '}
        senior software engineer. I primarily focus on the front-end and
        back-end of cloud-native applications. I graduated Summa Cum Laude from{' '}
        <a
          className="cornell"
          href="https://www.cornellcollege.edu/"
          target="_blank"
          aria-hidden="true"
          rel="noopener noreferrer"
        >
          Cornell College
        </a>{' '}
        where I earned my degree in Computer Science. I have always been a
        highly organized and goal-driven individual who is a problem solver by
        nature. I love programming because I can use my skills as a software
        engineer to improve the lives of others by developing fun and intuitive
        applications.
      </p>
      <Social>
        <SocialMediaButton
          href="https://github.com/nicholasadamou"
          icon="github"
        />
        <SocialMediaButton
          href="https://codepen.io/nicholasadamou"
          icon="codepen"
        />
        <SocialMediaButton
          href="https://www.linkedin.com/in/nicholas-adamou"
          icon="linkedin"
        />
      </Social>
    </Content>
  </Container>
);

export default AboutMe;
