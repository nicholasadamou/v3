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
					"Starter-Kit",
					"https://github.com/nicholasadamou/Starter-Kit",
					"💻",
					"laptop",
					"A Front End development Gulp.js based workflow."
				)
			}
			{
				Repo(
				"OnionPi",
				"https://github.com/nicholasadamou/OnionPi",
				"🍆",
				"eggplant",
				"Config:pures your Raspberry Pi as portable WiFi-WiFi Tor proxy."
				)
			}
			{
				Repo(
				"AnyFi",
				"https://github.com/nicholasadamou/AnyFi",
				"🛠",
				"hammer and wrench",
				"Configure your Raspberry Pi as a wireless access point."
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
