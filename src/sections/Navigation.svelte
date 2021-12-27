<script>
	import Icon from 'svelte-awesome';
	import { faBook } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import { scrollto } from "svelte-scrollto";

	import DarkModeToggle from '$components/DarkModeToggle.svelte';
	import Button from '$components/Button.svelte';

	import config from '$config';

	const { github, codepen, linkedin } = config.socialMedia;
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
		<!-- <Button
			url={config.resume}
			icon={faBook}
			text="Resume"
		/> -->
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
		<p> | </p>
		<DarkModeToggle
			class="dark-mode-toggle"
			contrast
		/>
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

			p {
				font-size: var(--fz-sm);
				font-weight: 100;
				color: var(--theme-colors-text);
			}

			:global(.dark-mode-toggle) {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;

				padding: 8px;
				background-color: var(--theme-colors-background-contrast);
				color: var(--theme-colors-text-contrast);
				border-radius: 5px;

				font-size: var(--fz-sm);
				font-weight: 400;
			}
		}
	}
</style>
