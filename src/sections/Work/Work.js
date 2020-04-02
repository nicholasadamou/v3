import React from 'react';

import Product from './components/Product/Product'

import FooterText from "../../components/FooterText/FooterText";

import './index.scss'

const Work = () => (
	<section id="work">
		<h2 className="title">Websites I've Made <span role="img" aria-label="candy">🍫</span></h2>
		<p className="subtitle">A selection of work that was designed, programmed and delivered by me.</p>

		<div className="products">
			{
				Product(
					"Advanced Electrical Services",
					"https://advanced-electrical-services.netlify.com/",
					require("../../assets/images/products/advanced-electrical-services_desktop.webp"),
					require("../../assets/images/products/advanced-electrical-services_mobile.webp")
				)
			}
			{
				Product(
					"Cut, Paste, & Copy",
					"https://cut-paste-copy.github.io/",
					require("../../assets/images/products/cut-paste-copy_desktop.webp"),
					require("../../assets/images/products/cut-paste-copy_mobile.webp")
				)
			}
		</div>
		{
			FooterText(
				"More can be found on my ",
				"LinkedIn",
				"https://linkedin.com/in/nicholas-adamou/",
				"linkedin"
			)
		}
	</section>
);

export default Work;
