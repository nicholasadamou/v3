/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react';

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const github = (URL) =>
  fetch(URL, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }).then((response) => response.json());

const useGitHub = (user, repositoryName) => {
  const [repository, setRepository] = useState({});

  useEffect(() => {
    function fetchRepository() {
      github(`https://api.github.com/repos/${user}/${repositoryName}`).then(
        (response) => {
          const {
            name,
            description,
            html_url,
            stargazers_count,
            forks_count,
            updated_at,
            language,
          } = response;

          github(
            `https://api.github.com/repos/${user}/${repositoryName}/branches/master`
          ).then((response) => {
            const { commit } = response;

            github(
              `https://api.github.com/repos/${user}/${repositoryName}/languages`
            ).then((response) => {
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
                  link: commit.html_url,
                },
              });
            });
          });
        }
      );
    }

    fetchRepository();
  }, [user, repositoryName]);

  return repository;
};

export default useGitHub;

export { round };
