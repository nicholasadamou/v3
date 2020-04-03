import React from 'react';

import Avatar from './components/Avatar/Avatar'

import './index.scss'

const AboutMe = () => (
	<section id="about-me">
		<Avatar />

		<h1 className="title">
			Hi, <span id="wave-emoji" role="img" aria-label="wave">👋🏼</span>! I'm{' '}
			<span>
				Nicholas Adamou
			</span>
		</h1>

		<p>
			I am currently a Computer Science student at{' '}
			<a
				className="cornell"
			   	href="https://www.cornellcollege.edu/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
			Cornell College
			</a>
			{' '}and a future 👀🐝Ⓜ️ Software Engineer. My mission is to learn as much as I can about different areas of the computer. I absolutely love programming. The mere ability to write a few lines of code and have something unique and interesting come up on the screen fascinates me each and every day!
		</p>

		<p>
			Because of my interest in computers, I've had the unique opportunity to intern and work for a few software
			engineering companies such as{' '}
			<a
				className="blackbird"
				href="https://flyblackbird.com"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				Blackbird
			</a>,{' '}
			<a
				className="mack-media-group"
				href="https://mackmediagroup.com/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				Mack Media Group
			</a>, and{' '}
			<a
				className="ibm"
				href="https://ibm.com/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				IBM
			</a> where I met and networked with many great and vastly talented engineers.
		</p>

		<p>
			At all three of those companies, I leveraged cutting-edge JavaScript technologies such as React, React Native, Graph QL, Apollo, React Redux, Amazon AWS and more to construct applications driven to excel each company's bottom-line.
		</p>

		<div
			className="btn-wrapper"
		>
			<a
				className="btn"
				href="https://drive.google.com/file/d/1p819Jx1v50zcBD_DnCo0paoiSnqBXw41/view?usp=sharing"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				id="resume"
			>
				Read My Resume
			</a>
			<a

				className="btn"
				href="https://linkedin.com/in/nicholas-adamou/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				id="linkedin"
			>
				Connect with Me on <i className="fab fa-linkedin" />
			</a>
			<a
				className="btn"
				href="https://twitter.com/NicholasAdamou"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				id="twitter"
			>
				Follow Me on <i className="fab fa-twitter" />
			</a>
		</div>
	</section>
);

export default AboutMe
