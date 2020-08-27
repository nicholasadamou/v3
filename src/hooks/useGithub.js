import { useState, useEffect } from 'react';

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const useGitHub = (repositoryName) => {
  const [repository, setRepository] = useState({});

  useEffect(() => {
    function fetchRepository() {
      fetch(`https://api.github.com/repos/nicholasadamou/${repositoryName}`, {
			headers: {
				'Authorization': `Basic ${process.env.REACT_APP_GITHUB_TOKEN}`
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
			  } = response;

				fetch(`https://api.github.com/repos/nicholasadamou/${repositoryName}/branches/master`, {
					headers: {
						'Authorization': `Basic ${process.env.REACT_APP_GITHUB_TOKEN}`
					}
				})
				.then(response => response.json())
				.then(data => {
					setRepository({
						name: name.toLowerCase(),
						description,
						link: html_url,
						stars: stargazers_count,
						forks: forks_count,
						lastUpdated: updated_at,
						commit: {
							sha: data['commit'].sha,
							message: data['commit']['commit'].message,
							url: `https://github.com/nicholasadamou/${repositoryName}/commit/${data['commit'].sha}`
						}
					});
				});
        });
    }

    fetchRepository();
  }, [repositoryName]);

  return repository;
};

export default useGitHub;

export { round };
