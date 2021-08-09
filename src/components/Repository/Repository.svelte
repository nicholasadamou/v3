<script>
	import { useQuery } from '@sveltestack/svelte-query';

	import Icon from 'svelte-awesome';
	import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
	import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

	import config from '$config';

	import fetchRepository, { round } from '$hooks/useGitHub';

	import Skeleton from './Skeleton.svelte';
	import LanguageTag from './LanguageTag.svelte';

	const { github } = config.socialMedia;

	export let user = github.username;
	export let repositoryName;
	export let language;

	const repository = useQuery(`${user}/${repositoryName}`, () => fetchRepository(user, repositoryName));

	//Can only grab using $repository.data.[nameOfProperty] within the template.
</script>

{#if $repository.isLoading}
	<Skeleton />
{:else}
	<!-- <Skeleton /> -->
	<article class="repository">
		<div>
			<span
				role="img"
				aria-label="git"
			>
				<Icon
					data="{faGitAlt}"
					scale="1.2"
				/>
			</span>

			<a
				href={$repository.data.html_url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<span aria-label="title">
					{$repository.data.name}
				</span>
			</a>

			{#if $repository.data.stargazers_count > 0}
				<a
					href={`${$repository.data.html_url}/stargazers`}
					target="_blank"
					aria-hidden="true"
					aria-label="github stargazers_count"
					title="star"
					rel="noopener noreferrer"
				>
					<span
						role="img"
						aria-label="star"
					>
						<Icon
							data="{faStar}"
							scale="1.2"
						/>
						{' '}
						{round($repository.data.stargazers_count)}
					</span>
				</a>
			{/if}

			{#if $repository.data.forks_count > 0}
				<a
					href={`${$repository.data.html_url}/fork`}
					target="_blank"
					aria-hidden="true"
					aria-label="fork on github"
					title="fork"
					rel="noopener noreferrer"
				>
					<span
						role="img"
						aria-label="branch"
					>
						<Icon
							data="{faCodeBranch}"
							scale="1.2"
						/>
						{' '}
						{round($repository.data.forks_count)}
					</span>
				</a>
			{/if}

			<span
				role="img"
				aria-label="language"
			>
				<LanguageTag
					language={language !== undefined ? language : $repository.data.language}
				/>
			</span>
		</div>

		<p>{$repository.data.description}</p>
	</article>
{/if}

<style lang="scss">
	@import './repository.scss';
</style>
