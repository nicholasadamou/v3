import {useState, useEffect} from "react";

import GitHub from "github-api";

const github = new GitHub({
	username: "nicholasadamou",
	token: process.env.REACT_APP_GITHUB_TOKEN,
});

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const useGitHub = (repositoryName) => {
	const [repository, setRepository] = useState({});

	useEffect(() => {
		function fetchRepository() {
			github
				.getRepo(github.__auth.username, repositoryName)
				.getDetails()
				.then((response) => {
					const { name, description, html_url, stargazers_count, forks_count } = response.data;

					setRepository({
						name: name.toLowerCase(),
						description,
						link: html_url,
						stars: stargazers_count,
						forks: forks_count
					});
				});
		}

		fetchRepository();
	}, [repositoryName, repository]);

	return repository;
};

export default useGitHub;

export {
	github,
	round
}
