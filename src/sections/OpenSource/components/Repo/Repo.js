import React, { useEffect } from 'react';

import './index.scss'

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const Repo = (title, link, emoji, label, desc) => {
	const [numberOfStars, setNumberOfStars] = React.useState(0);
	const name = link.split('/').slice(-2).join('/');

	useEffect(() => {
		async function fetchStargazerCountFrom() {
			await fetch(`https://api.github.com/repos/${name}`)
				.then(result => result.json())
				.then(data => {
					const { stargazers_count } = data;

					setNumberOfStars(stargazers_count);
				})
		}
		fetchStargazerCountFrom();
	});

	return (
		<article className="repo">
			<a
				href={link}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<div className="top">
					<div className="left">
						<span
							className="emoji"
							role="img"
							aria-label={label}
						>
							{emoji}
						</span>
						<span className="repo-title">
							{title.toLowerCase()}
						</span>
					</div>
					<div className="right">
							<span
								className="stars"
								role="img"
								aria-label="star"
							>
								{`⭐ ${round(numberOfStars)}`}
							</span>
					</div>
				</div>
			</a>
			<div className="bottom">
				<span className="desc">
					{desc}
				</span>
			</div>
		</article>
	)
};

export default Repo
