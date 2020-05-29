import {useState, useEffect} from "react";

import { github } from '../utilities/utilities';

const useGitHub = (repositoryName) => {
	const [repository, setRepository] = useState({});

	useEffect(() => {
		function fetchRepository() {
			github
				.getRepo(github.__auth.username, repositoryName)
				.getDetails()
				.then((response) => {
					const {name, description, html_url} = response.data;

					setRepository({
						name: name.toLowerCase(),
						description,
						link: html_url,
					});
				});
		}

		fetchRepository();
	}, [repositoryName, repository]);

	return repository;
};

export default useGitHub;

