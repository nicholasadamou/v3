<script>
	import Icon from 'svelte-awesome';
	import { faStackOverflow, faStackExchange, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import { scrollto } from "svelte-scrollto";

	import config from '$config';

	import BuyMeACoffee from "$components/BuyMeACoffee.svelte";

	const { title } = config;

	const { stackexchange, github, codepen, linkedin} = config.socialMedia;
	const { stackoverflow } = stackexchange;
</script>

<footer>
	<div>
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
				href="#work"
				use:scrollto={'#work'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
			>
				Work
			</a>
			<a
				href="#websites"
				use:scrollto={'#websites'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
			>
				Websites
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

		<span id="buy-me-a-coffee">
			<BuyMeACoffee />
		</span>

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
		<p>
			Source code available on{' '}
			<a
				href={`${github.url}/${config.name}`}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link github"
			>
				GitHub</a>.
		</p>
		<p>&copy; 1997 - {new Date().getFullYear()} {title}. All Rights Reserved.</p>
	</div>
</footer>

<style lang="scss">
	footer {
	  margin: 1rem 0 0;

	  background-color: var(--background-contrast);

		*::selection {
			background: var(--background);
			color: var(--text);
		}

		#buy-me-a-coffee {
			margin-bottom: -5px;
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
				color: var(--text-contrast);
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
