import React from 'react'

import './index.scss'

import FooterText from "../../components/FooterText/FooterText"

const Internships = () => (
	<section id="internships">
		<h2 className="title">Internships</h2>
		<p className="subtitle">Some companies where I've had the privilege to intern at in the past.</p>

		<div className="internships">
			<a
				href="https://ibm.com/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				title="IBM logo"
			>
				<img
					src={
						require("../../assets/images/internships/ibm.png")
					}
					alt="IBM"
				/>
			</a>
			<a
				href="https://flyblackbird.com/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				title="flyblackbird"
			>
				<img
					src={
						require("../../assets/images/internships/blackbird.png")
					}
					alt="flyblackbird"
				/>
			</a>
			<a
				href="https://mackmediagroup.com/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				title="Mack Media Group"
			>
				<img
					src={
						require("../../assets/images/internships/mack-media-group.png")
					}
					alt="Mack Media Group"
				/>
			</a>
		</div>

		{
			FooterText(
				"Read more about them on my ",
				"LinkedIn",
				"https://linkedin.com/in/nicholas-adamou/",
				"linkedin"
			)
		}
	</section>
)

export default Internships
