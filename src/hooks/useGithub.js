import {useEffect, useState} from 'react';

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const useGitHub = (user, repositoryName) => {
	const [repository, setRepository] = useState({});

	useEffect(() => {
		function fetchRepository() {
			fetch(`https://api.github.com/repos/${user}/${repositoryName}`, {
				headers: {
					'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
				}
			})
				.then(response => response.json())
				.then((response) => {
					const {
						name,
						description,
						html_url,
						stargazers_count,
						forks_count,
						updated_at,
						language,
					} = response;

					fetch(`https://api.github.com/repos/${user}/${repositoryName}/branches/master`, {
						headers: {
							'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
						}
					})
						.then(response => response.json())
						.then(response => {
							const {
								commit
							} = response;

							fetch(`https://api.github.com/repos/${user}/${repositoryName}/languages`, {
								headers: {
									'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
								}
							})
								.then(response => response.json())
								.then(response => {

									setRepository({
										name: name.toLowerCase(),
										description,
										link: html_url,
										stars: stargazers_count,
										forks: forks_count,
										lastUpdated: updated_at,
										language: language.toLowerCase(),
										languages: response,
										commit: {
											link: commit.html_url
										}
									});
								})
						});
				});
		}

		fetchRepository();
	}, [user, repositoryName]);

	return repository;
};

export default useGitHub;

export {round};
