import React from 'react';

import './index.scss'

const Experiment = (title, desc, link) => (
	<div className="experiment">
		<a
			href={link}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			className="link"
		>
			{title}
		</a>
		<p>
			{desc}
		</p>
	</div>
);

export default Experiment
