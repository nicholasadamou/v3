<script>
	import { useQuery } from '@sveltestack/svelte-query';

	import Icon from 'svelte-awesome';
	import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import { BarLoader } from 'svelte-loading-spinners';

	import { scrollto } from "svelte-scrollto";

	import moment from 'moment';

	import config from '$config';

	import fetchRepository from '$hooks/useGitHub';

	const { title } = config;

	const { github, codepen, linkedin} = config.socialMedia;

	const repository = useQuery(`${github.username}/${config.name}`, () => fetchRepository(github.username, config.name));
</script>

<footer>
	<div>
		<span>
			<a
				href={github.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<Icon
					data={faGithub}
					scale="1.2"
				/>
			</a>
			<a
				href={codepen.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<Icon
					data={faCodepen}
					scale="1.2"
				/>
			</a>
			<a
				href={linkedin.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<Icon
					data={faLinkedin}
					scale="1.2"
				/>
			</a>
		</span>
		<nav>
			<a
				href="#work"
				use:scrollto={'#work'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
			>
				Work
			</a>
			<a
				href="#projects"
				use:scrollto={'#projects'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
			>
				Projects
			</a>
		</nav>
		<p>
			Built using{' '}
			<a
				href="https://kit.svelte.dev/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link svelte"
			>
				SvelteKit</a>.
		</p>
		<p>
			Proudly hosted on{' '}
			<a
				href="https://www.netlify.com/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link netlify"
			>
				Netlify</a>.
		</p>
		{#if $repository.isLoading}
			<BarLoader color="var(--theme-colors-text-contrast)" />
		{:else}
			<p>
				Last updated{' '}
				<a
					href={$repository.data.commit.html_url}
					target="_blank"
					aria-hidden="true"
					rel="noopener noreferrer"
					class="link"
				>
					{moment(new Date($repository.data.updated_at)).fromNow()}</a>.
			</p>
		{/if}
		<p>
			Source code aviailable on{' '}
			<a
				href={`${github.url}/${config.name}`}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link github"
			>
				GitHub</a>.
		</p>
		<p>&copy; 1997 - {moment(Date.now()).year()} {title}. All Rights Reserved.</p>
	</div>
</footer>

<style lang="scss">
	footer {
		margin: 1rem 0;
		margin-bottom: 0;

		background-color: var(--theme-colors-background-contrast);

		*::selection {
			background: var(--theme-colors-background);
			color: var(--theme-colors-text);
		}

		div {
			display: flex;
			flex-direction: column;
			gap: 10px;

			width: 960px;
			margin: 0 auto;

			padding: 8rem 0;

			@media screen and (max-width: 430px) {
				margin-left: 1rem;

				width: 100%;
			}

			span, p, a {
				font-size: var(--fz-sm);
				color: var(--theme-colors-text-contrast);
				font-weight: 100;
			}

			a {
				font-weight: 300;
			}

			span, nav {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 10px;
			}

			span {
				gap: 20px;

				:global(svg) {
					fill: var(--theme-colors-text-contrast);

					cursor: pointer;

					opacity: 0.3;
				}
			}

			p {
				font-weight: 100;
			}
		}
	}
</style>
