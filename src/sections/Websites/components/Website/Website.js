import React from 'react';

import './index.scss'

const Website = (title, link, desktop, mobile) => (
	<div className="website">
		<a
			href={link}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
		>
			<div className="browser">
				<img
					src={desktop}
					alt="web-browser"
				/>
			</div>
			<div className="mobile">
				<img
					src={mobile}
					alt="mobile-device"
				/>
			</div>
		</a>
		<h3 className="title">
			{title}
		</h3>
	</div>
);

export default Website;
