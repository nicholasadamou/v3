/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const github = (URL) =>
  fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
    },
  }).then((response) => response.json());

const useGitHub = (user, repositoryName) => {
  const [repository, setRepository] = useState({});

  useEffect(() => {
    const fetchRepository = async () => {
      const repository = await github(
        `https://api.github.com/repos/${user}/${repositoryName}`
      );
      const commit = await github(
        `https://api.github.com/repos/${user}/${repositoryName}/branches/master`
      );
      const languages = await github(
        `https://api.github.com/repos/${user}/${repositoryName}/languages`
      );

      const {
        name,
        description,
        html_url,
        stargazers_count,
        forks_count,
        updated_at,
        language,
      } = repository;

      setRepository({
        name: name.toLowerCase(),
        description,
        link: html_url,
        stars: stargazers_count,
        forks: forks_count,
        lastUpdated: updated_at,
        language: language.toLowerCase(),
        languages,
        commit: {
          link: commit.html_url,
        },
      });
    };

    fetchRepository();
  }, [user, repositoryName]);

  return repository;
};

export default useGitHub;

export { round };
