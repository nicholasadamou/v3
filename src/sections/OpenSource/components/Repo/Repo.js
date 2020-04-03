import React, { useEffect } from 'react';

import './index.scss'

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const Repo = (link, emoji, label) => {
	const [repository, setRepository] = React.useState({});

	const fullName = link.split('/').slice(-2).join('/');

	useEffect(() => {
		async function fetchRepository() {
			await fetch(`https://api.github.com/repos/${fullName}`)
				.then(result => result.json())
				.then(data => {
					setRepository({
						...data
					});
				})
		}

		fetchRepository();
	}, [fullName]);

	const { name, description, stargazers_count, fork_count } = repository;

	return (
		<article className="repo">

			<div className="top">
				<div className="left">
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
						<span className="repo-title">
							{
								name ?
									name.toLowerCase()
									:
									'Loading'
							}
						</span>
					</a>
				</div>
				<div className="right">
					<span
						className="stars"
						role="img"
						aria-label="star"
					>
						<i className="fas fa-star"></i>
						{
							stargazers_count ?
								` ${round(stargazers_count)}`
								:
								` 0`
						}
					</span>
					<span
						className="forks"
						role="img"
						aria-label="branch"
					>
						<i className="fas fa-code-branch"></i>
						{
							fork_count ?
								` ${round(fork_count)}`
								:
								` 0`
						}
					</span>
				</div>
			</div>
			<div className="bottom">
				<span className="desc">
					{
						description ?
							description
							:
							'Loading repository, please wait.'
					}
				</span>
			</div>
		</article>
	)
};

export default Repo
