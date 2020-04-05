import React, {useEffect} from 'react';

import Product from './components/Product/Product'

import FooterText from "../../components/FooterText/FooterText";

import './index.scss'

const emphasize = () => {
	const products = document.querySelectorAll('.product');
	const target = Math.floor(Math.random() * products.length);

	products[target].classList.add('is-emphasized');

	for (let i = 0; i < products.length; i++) {
		if (i === target) continue;

		products[i].classList.remove('is-emphasized')
	}
};

const Work = () => {
	useEffect(
		() => {
			setInterval(() => {
				emphasize()
			}, 4000);
		}
	);

	return (
		<section id="work">
			<h2 className="title">Websites I've Made <span role="img" aria-label="candy">🍫</span></h2>
			<p className="subtitle">A selection of websites that was designed, programmed and delivered by me.</p>

			<div className="products">
				{
					Product(
						"Advanced Electrical Services",
						"https://advanced-electrical-services.netlify.com/",
						require('../../assets/images/products/advanced-electrical-services_desktop.png'),
						require('../../assets/images/products/advanced-electrical-services_mobile.png')
					)
				}
				{
					Product(
						"Cut, Paste, & Copy",
						"https://cut-paste-copy.github.io/",
						require('../../assets/images/products/cut-paste-copy_desktop.png'),
						require('../../assets/images/products/cut-paste-copy_mobile.png')
					)
				}
				{
					Product(
						"Nicholas Adamou's Personal Website",
						"https://nicholasadamou.com/",
						require('../../assets/images/products/nicholasadamou_desktop.png'),
						require('../../assets/images/products/nicholasadamou_desktop.png')
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
	)
};

export default Work;
