<script>
	import config from '$config';

	const { title } = config;

	const {github} = config.socialMedia;
</script>

<footer>
	<div>
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

		.button {
			margin-bottom: -5px;
		}

		div {
			display: flex;
			flex-direction: column;
			gap: 10px;

			width: 960px;
			margin: 0 auto 0 25rem;

			padding: 10rem 0;

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
