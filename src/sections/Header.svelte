<script>
	import { getContext } from 'svelte';

	import Icon from 'svelte-awesome';
	import { faBars } from '@fortawesome/free-solid-svg-icons';

	let isSidebarOpen = getContext('isSidebarOpen');

	const onToggle = () => {
		$isSidebarOpen = !$isSidebarOpen;
	}
</script>

<div>
	<a
		href="/"
		aria-hidden="true"
		rel="noopener noreferrer"
	>
		<h1>Nicholas Adamou</h1>
	</a>

	<button
		on:click={onToggle}
	>
		<Icon
			data={faBars}
			scale="1.25"
		/>
	</button>
</div>

<style lang="scss">
	button {
		display: none;

		@media screen and (max-width: 430px) {
			display: block;

			position: absolute;
			top: 0;
			right: 2rem;
		}

		:global(svg) {
			fill: var(--primary);

			cursor: pointer;
		}
	}

	div {
		display: flex;
		justify-content: flex-start;
		gap: 16px;

		width: 100%;

		a {
			text-decoration: none;

			color: var(--primary);

			h1 {
				margin: 0;

				font-size: var(--fz-lg);
				font-weight: 900;
				text-transform: uppercase;

				@media screen and (max-width: 430px) {
					margin-left: 1rem;
				}
			}
		}
	}
</style>
