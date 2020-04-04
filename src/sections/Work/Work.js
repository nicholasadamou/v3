import React from 'react';

import { isWebpSupported } from 'react-image-webp/dist/utils';

import Product from './components/Product/Product'

import FooterText from "../../components/FooterText/FooterText";

import './index.scss'

const Work = () => (
	<section id="work">
		<h2 className="title">Websites I've Made <span role="img" aria-label="candy">🍫</span></h2>
		<p className="subtitle">A selection of websites that was designed, programmed and delivered by me.</p>

		<div className="products">
			{
				Product(
					"Advanced Electrical Services",
					"https://advanced-electrical-services.netlify.com/",
					isWebpSupported()
					?
						require("../../assets/images/products/advanced-electrical-services_desktop.webp")
					:
						require("../../assets/images/products/advanced-electrical-services_desktop.jpg"),
					isWebpSupported()
					?
						require("../../assets/images/products/advanced-electrical-services_mobile.webp")
					:
						require("../../assets/images/products/advanced-electrical-services_mobile.jpg")
				)
			}
			{
				Product(
					"Cut, Paste, & Copy",
					"https://cut-paste-copy.github.io/",
					isWebpSupported()
					?
						require("../../assets/images/products/cut-paste-copy_desktop.webp")
					:
						require("../../assets/images/products/cut-paste-copy_desktop.jpg"),
					isWebpSupported()
					?
						require("../../assets/images/products/cut-paste-copy_mobile.webp")
					:
						require("../../assets/images/products/cut-paste-copy_mobile.png")
				)
			}
			{
				Product(
					"Nicholas Adamou Personal Website",
					"https://nicholasadamou.com/",
					isWebpSupported()
						?
						require("../../assets/images/products/nicholasadamou_desktop.webp")
						:
						require("../../assets/images/products/nicholasadamou_desktop.png"),
					isWebpSupported()
						?
						require("../../assets/images/products/nicholasadamou_mobile.webp")
						:
						require("../../assets/images/products/nicholasadamou_mobile.png")
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
