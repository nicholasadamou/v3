import React from "react";

import './index.scss'

const Publication = (title, desc, link) => (
	<div className="publication">
		<div className="top">
			<span
				role="img"
				aria-label="pencil"
				className="emoji"
				>
				✏️
			</span>
			<a
				href={link}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				className="link"
			>
				{title}
			</a>
		</div>
		<p className="desc">
			{desc}
		</p>
	</div>
);

export default Publication
