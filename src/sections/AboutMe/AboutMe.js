import React from "react";

import Avatar from "../../sass/Avatar";

import WaveEmoji from "../../components/WaveEmoji/WaveEmoji";

import styled from "styled-components";

import { device, until } from "../../utilities/mixins";

import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.section`
  text-align: center;

  padding-bottom: 20px;

  ${until(
    device.iPhone(),
    () => `
		width: 100%;
	`
  )}

  h1 {
    font-size: 2.5rem;

    margin-top: 20px;

    color: #37474f;

    ${until(
      device.iPadPro(),
      () => `
			font-size: 2.3rem;
		`
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
		`
    )}

    span {
      color: var(--red);
    }
  }

  p {
    margin: 0 5rem 20px;

    text-align: center;

    &:last-child {
      margin: 0;
    }

    ${until(
      device.iPad(),
      () => `
			margin: 0 2rem 20px;
		`
    )}

    ${until(
      device.iPhone(),
      () => `
			margin: 0 auto;

			padding: 10px 25px;

			text-align: center;
		`
    )}

		a {
      display: inline-block;

      position: relative;

      text-decoration: none;

      color: var(--black);

      -webkit-transition: color 200ms;

      transition: color 200ms;

      &:before {
        content: "";

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
        &:before {
          background-color: var(--cornell);
        }

        &:hover {
          color: var(--cornell);
        }
      }

      &.blackbird {
        &:before {
          background-color: var(--blackbird);
        }

        &:hover {
          color: var(--blackbird);
        }
      }

      &.mack-media-group {
        &:before {
          background-color: var(--mack-media-group);
        }

        &:hover {
          color: var(--mack-media-group);
        }
      }

      &.ibm {
        &:before {
          background-color: var(--ibm);
        }

        &:hover {
          color: var(--ibm);
        }
      }
    }
  }
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  place-items: center;

  margin: 0 100px;

  ${until(
    device.iPhone(),
    () => `
		grid-template-columns: 1fr;

		margin: 0 20px;
	`
  )}

  a {
    display: inline-block;

    width: 100%;
    height: 50px;

    text-align: center;
    font-size: 16px;

    border: 2px solid;

    line-height: 3;
    text-decoration: none;

    -webkit-transition: all 150ms ease-in-out;

    transition: all 150ms ease-in-out;

    ${until(
      device.iPad(),
      () => `
			width: 100%;
		`
    )}
  }
`;

const AboutMe = () => (
  <Container id="about-me">
    <Avatar />

    <h1 className="title">
      Hi, <WaveEmoji />! I'm <span>Nicholas Adamou</span>
    </h1>

    <p>
      I am currently a Computer Science student at{" "}
      <a
        className="cornell"
        href="https://www.cornellcollege.edu/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        Cornell College
      </a>{" "}
      and a future 👀🐝Ⓜ️ Software Engineer. My mission is to learn as much as I
      can about different areas of the computer. I absolutely love programming.
      The mere ability to write a few lines of code and have something unique
      and interesting come up on the screen fascinates me each and every day!
    </p>

    <p>
      Because of my interest in computers, I've had the unique opportunity to
      intern and work for a few software engineering companies such as{" "}
      <a
        className="blackbird"
        href="https://flyblackbird.com"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        Blackbird
      </a>
      ,{" "}
      <a
        className="mack-media-group"
        href="https://mackmediagroup.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        Mack Media Group
      </a>
      , and{" "}
      <a
        className="ibm"
        href="https://ibm.com/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
      >
        IBM
      </a>{" "}
      where I met and networked with many great and vastly talented engineers.
    </p>

    <p>
      At all three of those companies, I leveraged cutting-edge JavaScript
      technologies such as React, React Native, Graph QL, Apollo, React Redux,
      Amazon AWS and more to construct applications driven to excel each
      company's bottom-line.
    </p>

    <Social>
      <a
        href="https://drive.google.com/file/d/1p819Jx1v50zcBD_DnCo0paoiSnqBXw41/view?usp=sharing"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        id="resume"
      >
        Read My Resume
      </a>
      <a
        href="https://linkedin.com/in/nicholas-adamou/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        id="linkedin"
      >
        Connect with Me on <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
      <a
        href="https://twitter.com/NicholasAdamou"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        id="twitter"
      >
        Follow Me on <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>
      <a
        href="https://www.instagram.com/nicholasadamou/"
        target="_blank"
        aria-hidden="true"
        rel="noopener noreferrer"
        id="instagram"
      >
        Follow Me on <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
    </Social>
  </Container>
);

export default AboutMe;
