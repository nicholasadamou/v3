import { variables } from '$lib/variables';

// Round the number like "3.5k" https://stackoverflow.com/a/9461657
const round = (num) => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num);

const github = (URL) =>
	fetch(URL, {
	headers: {
		Authorization: `Bearer ${variables.GITHUB_TOKEN}`,
	},
}).then((response) => response.json());


const fetchRepository = async (user, repositoryName) => {
	const repository = await github(
		`https://api.github.com/repos/${user}/${repositoryName}`
	);
	const latestCommit = await github(
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

	const { commit } = latestCommit;

	return {
		name: name.toLowerCase(),
        description,
        html_url,
        stargazers_count,
        forks_count,
        updated_at,
        language: language.toLowerCase(),
        languages,
        commit,
	}
}

export default fetchRepository;

export { round, github };
