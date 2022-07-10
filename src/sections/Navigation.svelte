<script>
	import Icon from 'svelte-awesome';

	import pkg from '@fortawesome/free-brands-svg-icons';

	import { scrollto } from "svelte-scrollto";

	import BuyMeACoffee from "$components/BuyMeACoffee.svelte";

	const { faStackOverflow, faStackExchange, faGithub, faCodepen, faLinkedin } = pkg;

	import config from '$config';

	const { stackexchange, github, codepen, linkedin } = config.socialMedia;
	const { stackoverflow } = stackexchange;
</script>

<div>
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
	<span>
		<BuyMeACoffee />

		<a
			href={stackoverflow.url}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
		>
			<Icon
				data={faStackOverflow}
				scale="1.25"
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
				scale="1.25"
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
				scale="1.25"
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
				scale="1.25"
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
				scale="1.25"
			/>
		</a>
	</span>
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 10px;
		margin-bottom: 20px;

		@media screen and (max-width: 768px) {
			margin-right: 2rem;
		}

		@media screen and (max-width: 430px) {
			display: none;
		}

		a {
			text-decoration: underline;
			line-height: 1;
		}

		nav {
			display: flex;
			gap: 10px;

			a {
				font-size: var(--fz-sm);
				font-weight: 100;
				color: var(--theme-colors-text);
			}
		}

		span {
			display: flex;
			align-items: center;
			gap: 20px;

			:global(svg) {
				fill: var(--theme-colors-primary);

				cursor: pointer;
			}

			//p {
			//	font-size: var(--fz-sm);
			//	font-weight: 100;
			//	color: var(--theme-colors-text);
			//}
			//
			//:global(.dark-mode-toggle) {
			//	display: flex;
			//	align-items: center;
			//	justify-content: center;
			//	gap: 10px;
			//
			//	padding: 8px;
			//	background-color: var(--theme-colors-background-contrast);
			//	color: var(--theme-colors-text-contrast);
			//	border-radius: 5px;
			//
			//	font-size: var(--fz-sm);
			//	font-weight: 400;
			//}
		}
	}
</style>
