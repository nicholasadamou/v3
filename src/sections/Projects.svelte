<script>
	import Header from '$components/Header.svelte';
	import Repository from '$components/Repository/Repository.svelte';

	import config from '$config';

	const {projects} = config;

	const {github} = config.socialMedia;
</script>

<section
		id="projects"
>
	<Header
			title="Some Things I've Built"
	>
		Various projects that I've open sourced in my spare time.
	</Header>

	<div>
		{#each projects as project}
			<Repository
					repositoryName={project.name}
					language={project.language}
					demoURL={project.url || undefined}
			/>
		{/each}
	</div>

	<span>More can be found on my
		<a
				aria-hidden="true"
				class="github"
				href={github.url}
				rel="noopener noreferrer"
				target="_blank"
		>
			GitHub</a>.
	</span>
</section>

<style lang="scss">
  :global(#projects > header) {
		margin-top: -20px;
  }

  div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		width: 80%;
		max-width: 90%;

		margin: 20px 0 10px;

		@media screen and (max-width: 430px) {
			grid-template-columns: repeat(1, 1fr);

			width: 100%;
			max-width: 95%;

			margin-left: 1rem;
		}
  }

  span {
		font-size: var(--fz-md);

		@media screen and (max-width: 430px) {
			margin-left: 1rem;
		}
  }
</style>
