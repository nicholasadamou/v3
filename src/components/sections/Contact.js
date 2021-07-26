/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styled from 'styled-components';

import Heading from '@components/Heading';
import WaveEmoji from '@components/WaveEmoji';

import {device, until} from '@utilities/mixins';

import Section from '@sass/components/Section';
import Container from '@sass/components/Container';

import { email } from '@config';

const Form = styled.form`
	position: relative;

	width: 725px;
	max-width: 725px;

	margin: 0 auto;

	zoom: 130%;
  
  font-size: 1rem;
  line-height: 2;

	${until(
		device.MacbookAir(),
		() => `
		width: 700px;
		max-width: 7000px;

		zoom: 110%;

		.field.is-horizontal {
			text-align: left;
		}
	`
	)}

	${until(
		device.iPad(),
		() => `
		width: 100%;
	`
	)}

	${until(
		device.iPhone12(),
		() => `
		width: 95%;
	`
	)}
	button, label, input, textarea {
		font-family: var(--secondary);
		color: var(--black);
	}

	label {
		font-weight: 700;

		margin: 0 10px 0 0;

		-webkit-box-flex: 0;

		flex-grow: 0;

		${until(
			device.iPhone12(),
			() => `
			margin-right: 0;

			text-align: left;
		`
		)}
	}

	input,
	textarea {
		background-color: var(--white);

		border: 1px solid var(--black);
		border-radius: 10px;

		-webkit-transition: all 150ms ease-in-out;

		transition: all 150ms ease-in-out;

		&::-webkit-input-placeholder {
			color: var(--black);
			font-style: italic;
		}

		&:-moz-placeholder {
			color: var(--black);
			font-style: italic;
		}

		&::-moz-placeholder {
			color: var(--black);
			font-style: italic;
		}

		&:-ms-input-placeholder {
			color: var(--black);
			font-style: italic;
		}

		&:focus {
			border-color: var(--black);
		}

		&:hover {
			border-color: var(--black);
		}
	}

	div[data-name='field'] {
		-webkit-box-pack: end;
		justify-content: flex-end;

		margin-bottom: 1.5rem;

		${until(
			device.iPhone12(),
			() => `
			-webkit-box-pack: center;
			justify-content: center;

			margin-bottom: 1.25rem;
		`
		)}

		div[data-name="control"] {
			position: relative;

			width: 100%;

			text-align: right;

			border-radius: 10px;

			&:after {
				content: '';

				position: absolute;
				top: 5px;
				left: 5px;

				width: 100%;
				height: 100%;

				border-radius: 10px;

				background-color: var(--black);

				z-index: -1;
			}

			${until(
				device.iPhone12(),
				() => `
				margin-top: 10px;
			`
			)}
		}

		button {
			position: relative;

			margin-top: 0.25rem;

			padding: 1.5rem;

			background: var(--white);

			border-radius: 10px;
			border: 1px solid var(--black);

			width: 150px;

			color: var(--black);
			font-weight: bold;

			&:after {
				content: '';

				position: absolute;
				top: 5px;
				left: 3px;

				width: 100%;
				height: 100%;

				border-radius: 10px;

				background-color: var(--black);

				z-index: -1;
			}

			&:hover {
				background: var(--white);

				border: 1px solid var(--black);

				color: var(--black);
			}

			${until(
				device.iPhone12(),
				() => `
				width: 100%;

				margin-top: 10px;
			`
			)}
		}
	}
`;

const Contact = () => (
	<Container
		style={{
			marginTop: '-1rem',
			marginBottom: '-0.5rem'
		}}
	>
		<Section>
			<Heading
				title={() => (
					<h3 className="title">
						Want to say "Hello" <WaveEmoji/>?
					</h3>
				)}
				subtitle={() => (
					<p className="subtitle">
						Whether you have a question or just want to say hi, I will try my best to get back to you!
					</p>
				)}
			/>

			<Form
				action={`https://formspree.io/${email}`}
				method="POST"
			>
				<div className="field is-horizontal" data-name="field">
					<label className="field-label" htmlFor="name">
						Name
					</label>
					<div className="control" data-name="control">
						<input
							className="input"
							type="text"
							name="name"
							placeholder="Your name"
							aria-label="name"
						/>
					</div>
				</div>

				<div className="field is-horizontal" data-name="field">
					<label className="field-label" htmlFor="email">
						Email
					</label>
					<div className="control" data-name="control">
						<input
							className="input"
							type="email"
							name="email"
							placeholder="Your email"
							aria-label="email"
						/>
					</div>
				</div>

				<div className="field is-horizontal" data-name="field">
					<label className="field-label" htmlFor="message">
						Message
					</label>
					<div className="control" data-name="control">
			  <textarea
				  className="textarea"
				  name="message"
				  placeholder="Your message"
				  aria-label="message"
			  />
					</div>
				</div>

				<div className="field is-grouped" data-name="field">
					<button className="button is-link" type="submit">
						Send Message
					</button>
				</div>

				<input type="hidden" name="_next" value="/form-success"/>
				<input
					type="hidden"
					name="_subject"
					value="New Submission from nicholasadamou.com/"
				/>
			</Form>
		</Section>
	</Container>
);

export default Contact;
