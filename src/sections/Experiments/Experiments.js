import React from 'react';

import Experiment from './components/Experiment/Experiment'

import './index.scss'
import FooterText from "../../components/FooterText/FooterText";

const Experiments = () => (
	<section id="experiments">
		<h2 className="title">Experiments <span role="img" aria-label="test tube">🧪</span></h2>
		<p className="subtitle">Quick prototypes, work-in-progress or abandoned experiments I've done in JavaScript.</p>

		<div className="experiments">
			{
				Experiment(
					"Low Poly Earth",
					"THREE.js implementation of the Earth using only polygons.",
					"https://codepen.io/NicholasAdamou/pen/xQKxgN"
				)
			}
			{
				Experiment(
					"Star Field",
					"A multi-layered star-field constructed using ES6 JavaScript.",
					"https://codepen.io/NicholasAdamou/pen/QZVddm"
				)
			}
			{
				Experiment(
					"Matrix",
					"The matrix text effect implemented using ES6 JavaScript.",
					"https://codepen.io/NicholasAdamou/pen/oaQMZV"
				)
			}
		</div>

		{
			FooterText(
				"More can be found on my ",
				"CodePen",
				"https://codepen.io/NicholasAdamou",
				"codepen"
			)
		}
	</section>
);

export default Experiments
