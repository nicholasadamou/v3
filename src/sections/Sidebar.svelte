<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import Icon from 'svelte-awesome';
	import { faTimes, faBook } from '@fortawesome/free-solid-svg-icons';
	import { faStackOverflow, faStackExchange, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import { scrollto } from "svelte-scrollto";

	import Button from '$components/Button.svelte';

	import config from '$config';

	import BuyMeACoffee from "$components/BuyMeACoffee.svelte";

	const { stackexchange, github, codepen, linkedin } = config.socialMedia;
	const { stackoverflow } = stackexchange;

	let isSidebarOpen = getContext('isSidebarOpen');

	const onToggle = () => {
		$isSidebarOpen = !$isSidebarOpen;
	}
</script>

{#if $isSidebarOpen}
	<nav
		transition:fly="{{ x: -200 }}"
	>
		<button
			on:click={onToggle}
		>
			<Icon
				data={faTimes}
				scale="1.25"
			/>
		</button>

		<section>
			<a
				href="#work"
				use:scrollto={'#work'}
				aria-hidden="true"
				rel="noopener noreferrer"
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
			>
				Projects
			</a>
		</section>

		<BuyMeACoffee />

		<span>
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
	</nav>
{/if}

<style lang="scss">
	nav {
		position: fixed;
		top: 0;
		left: 0;

		width: 250px;
		height: 100%;

		padding: 70px 30px 30px;

		background-color: var(--theme-colors-background-contrast);

		z-index: 9999;

		section {
			display: flex;
			flex-direction: column;
			gap: 16px;

			margin-bottom: 2rem;

			a {
				text-decoration: underline;

				font-size: var(--fz-md);
				color: var(--theme-colors-text-contrast);
			}
		}

		button {
			position: absolute;
			top: 0;
			right: 0;

			padding: 30px;

			cursor: pointer;

			:global(svg) {
				fill: var(--theme-colors-text-contrast);

				cursor: pointer;
			}
		}

		span {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 16px;

			margin-top: 2rem;
			padding-top: 2rem;

			border-top: 1px solid var(--theme-colors-secondary);

			:global(svg) {
				fill: var(--theme-colors-text-contrast);

				cursor: pointer;
			}
		}
	}
</style>
