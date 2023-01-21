<script>
	import Icon from 'svelte-awesome';
	import { faStackOverflow, faStackExchange, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import { scrollto } from "svelte-scrollto";

	import config from '$config';

	import BuyMeACoffee from "$components/BuyMeACoffee.svelte";
	import GitHubSponsors from "$components/GitHubSponsors.svelte";

	const { title } = config;

	const { stackexchange, github, codepen, linkedin} = config.socialMedia;
	const { stackoverflow } = stackexchange;
</script>

<footer class="mt-[1rem] mb-0 ml-0 mr-0 bg-[var(--background-contrast)]">
	<div class="flex flex-col gap-[10px] w-[960px] mx-auto pt-[8rem] pb-[10rem] pl-0 pr-0">
		<span>
			<a
				href={stackoverflow.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<Icon
					data={faStackOverflow}
					scale="1.2"
				/>
			</a>
			<a
				href={stackexchange.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<Icon
					data={faStackExchange}
					scale="1.2"
				/>
			</a>
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
				href="#websites"
				use:scrollto={'#websites'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="font-light link"
			>
				Websites
			</a>
			<a
				href="#projects"
				use:scrollto={'#projects'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="font-light link"
			>
				Projects
			</a>
		</nav>

		<span class="-mb-5px">
			<BuyMeACoffee />
		</span>

		<span class="-mb-5px">
			<GitHubSponsors />
		</span>

		<p>
			Built using{' '}
			<a
				href="https://kit.svelte.dev/"
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="font-light link svelte"
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
				class="font-light link netlify"
			>
				Netlify</a>.
		</p>
		<p>
			Source code available on{' '}
			<a
				href={`${github.url}/${config.name}`}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="font-light link github"
			>
				GitHub</a>.
		</p>
		<p>&copy; 1997 - {new Date().getFullYear()} {title}. All Rights Reserved.</p>
	</div>
</footer>

<style lang="scss">
	footer {
	  *::selection {
			background: var(--background);
			color: var(--text);
		}

		div {
			@media screen and (max-width: 820px) {
				margin-left: 2rem;
			}

			@media screen and (max-width: 430px) {
				margin-left: 1rem;

				width: 100%;
			}

			span, p, a {
				font-size: var(--fz-sm);
				color: var(--text-contrast);
				font-weight: 100;
			}

			span, nav {
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			nav {
				gap: 10px;
			}

			span {
				gap: 20px;

				:global(svg) {
					fill: var(--text-contrast);

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
