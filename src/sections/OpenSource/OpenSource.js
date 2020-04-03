import React from 'react';

import Repo from "./components/Repo/Repo";

import './index.scss'

import FooterText from "../../components/FooterText/FooterText";

const OpenSource = () => (
	<section id="open-source">
		<h2 className="title">Open Source</h2>
		<p className="subtitle">
			I am an{' '}
			<a
				href="http://git-awards.com/users/nicholasadamou"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				className="link"
			>
				avid open-sourcer
			</a>
			{' '}and I have{' '}
			<a
				href="https://github.com/nicholasadamou"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				className="link"
			>
				many repositories
			</a>
			{' '}. Take a <span role="img" aria-label="eyes">👀</span>.
		</p>

		<div className="repositories">
			{
				Repo(
				"set-me-up",
				"https://github.com/nicholasadamou/set-me-up",
				"🛠",
				"hammer and wrench",
				"set-me-up aims to simplify the dull setup and maintenance of Mac OS development environments."
				)
			}
			{
				Repo(
				"set-me-up-blueprint",
				"https://github.com/nicholasadamou/set-me-up-blueprint",
				"🛠",
				"hammer and wrench",
				"A template to manage set-me-up setups."
				)
			}
			{
				Repo(
					"utilities",
					"https://github.com/nicholasadamou/utilities",
					"🛠",
					"hammer and wrench",
					"Custom-made Bash functions & utilities used within set-me-up."
				)
			}
		</div>

		{
			FooterText(
				"More can be found on my ",
				"GitHub",
				"https://github.com/nicholasadamou",
				"github"
			)
		}
	</section>
);

export default OpenSource;
