<script>
	import Icon from 'svelte-awesome';
	import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
	import { faGitAlt } from '@fortawesome/free-brands-svg-icons';

	import { Circle, BarLoader } from 'svelte-loading-spinners';
</script>

<article class="repository">
	<div>
		<span
			role="img"
			aria-label="git"
		>
			<Icon
				data="{faGitAlt}"
				scale="1.25"
			/>
			<Circle
				color="var(--theme-colors-text)"
				size="10"
			/>
		</span>

		<a
			href="#"
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
					scale="1.25"
				/>
				<Circle
					color="var(--theme-colors-text-contrast)"
					size="10"
				/>
			</span>
		</a>

		<a
			href="#"
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
					scale="1.25"
				/>
				<Circle
					color="var(--theme-colors-text-contrast)"
					size="10"
				/>
			</span>
		</a>

		<span
			role="img"
			aria-label="language"
		>
			<Circle
				color="var(--theme-colors-text)"
				size="10"
			/>
		</span>
	</div>

	<BarLoader color="var(--theme-colors-text)" />
</article>

<style lang="scss">
	@import './repository.scss';
</style>
