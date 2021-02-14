import WaveEmoji from '../../components/WaveEmoji/WaveEmoji';

import styled from 'styled-components';

import {device, until} from '../../utilities/mixins';

const Container = styled.section`
	position: relative;

	margin-bottom: 2rem;

	width: 75%;

	.title span {
		font-size: 2rem;
	}

	.title:nth-child(2) {
		margin-top: -15px;
		margin-bottom: 30px;
	}

	${until(
		device.iPhone(),
		() => `
		width: 100%;
	`,
	)}
`;

const Form = styled.form`
	position: relative;
	width: 100%;
	margin: 20px auto 0;

	${until(
		device.iPad(),
		() => `
		width: 100%;

		.field.is-horizontal {
			text-align: left;
		}
	`,
	)}
	${until(
		device.iPhone(),
		() => `
		width: 90%;
	`,
	)}
	button, label, input, textarea {
		font-family: var(--secondary);
		color: var(--black);
	}

	label {
		font-weight: 400;
		margin: 0 10px 0 0;

		-webkit-box-flex: 0;

		flex-grow: 0;

		${until(
			device.iPhone(),
			() => `
			margin-right: 0;

			text-align: left;
		`,
		)}
	}

	input,
	textarea {
		background: transparent;
		border: 5px solid var(--black);
		border-radius: 10px;

		-webkit-transition: all 150ms ease-in-out;

		transition: all 150ms ease-in-out;

		&::-webkit-input-placeholder {
			color: var(--black);
		}

		&:-moz-placeholder {
			color: var(--black);
		}

		&::-moz-placeholder {
			color: var(--black);
		}

		&:-ms-input-placeholder {
			color: var(--black);
		}

		&:focus {
			border-color: var(--black);
		}

		&:hover {
			border-color: var(--black);
		}

		${until(
			device.iPhone(),
			() => `
			border-radius: 0;
		`,
		)}
	}

	div[data-name='field'] {
		-webkit-box-pack: end;
		justify-content: flex-end;

		${until(
			device.iPhone(),
			() => `
			-webkit-box-pack: center;
			justify-content: center;

			margin-bottom: 10px;
		`,
		)}
		div[data-name="control"] {
			width: 100%;

			text-align: right;

			${until(
				device.iPhone(),
				() => `
				margin-top: 10px;
			`,
			)}
		}

		button {
			background: var(--black);
			border-radius: 10px;
			border: 5px solid var(--black);
			width: 200px;
			padding: 0;

			color: var(--white);
			font-weight: bold;

			&:hover {
				color: var(--white);
				border: 5px solid var(--black);
				background: var(--black);
			}

			${until(
				device.iPhone(),
				() => `
				width: 100%;

				margin-top: 10px;

				border-radius: 0;
			`,
			)}
		}
	}
`;

const Contact = () => (
	<Container>
		<h2 className="title">
			Want to say "Hi" <WaveEmoji/>?
		</h2>
		<p className="subtitle">
			Contact me via{' '}
			<a
				href="mailto:nicholasadamouemail@gmail.com?subject=Hello"
				aria-hidden="true"
				className="link"
			>
				email
			</a>{' '}
			for business inquiries.
		</p>

		<Form
			action="https://formspree.io/nicholasadamouemail@gmail.com"
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
				<div className="control" data-name="control">
					<button className="button is-link" type="submit">
						Send Message
					</button>
				</div>
			</div>

			<input type="hidden" name="_next" value="/form-success"/>
			<input
				type="hidden"
				name="_subject"
				value="New Submission from nicholasadamou.com/"
			/>
		</Form>
	</Container>
);

export default Contact;
