import React from 'react'

import './index.scss'

const Project = repository => {
	const { name, description, id, link, emoji, label } = repository;

	return (
		<article className="project" key={id}>
			<div className="top">
				<span
					className="emoji"
					role="img"
					aria-label={label}
				>
					{emoji}
				</span>
				<a
					href={link}
					target="_blank"
					aria-hidden="true"
					rel="noopener noreferrer"
				>
					<span className="project-title">
						{name.toLowerCase()}
					</span>
				</a>
			</div>
			<div className="bottom">
				<span className="desc">
					{description}
				</span>
			</div>
		</article>
	)
}

export default Project
