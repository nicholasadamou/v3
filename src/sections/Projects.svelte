<script>
	import Header from '$components/Header.svelte';
	import Repository from '$components/Repository/Repository.svelte';

	import config from '$config';

	const { github } = config.socialMedia;
</script>

<section
	id="projects"
>
	<Header
		title="Some Things I've Built"
	>
	Various projects that I've open sourced while working at these companies.
	</Header>

	<div>
		<Repository
			repositoryName="serverless-react-browsers"
			language="react"
		/>
		<Repository
			repositoryName="down-to-network"
			language="react"
		/>
		<Repository
			repositoryName="isitup"
			language="gulp"
		/>
		<Repository
			repositoryName="cf-detect"
			language="gulp"
		/>
		<Repository
			repositoryName="vineyard-vines-sales"
			demoURL="https://vineyard-vines-sales.netlify.app/"
			language="react"
		/>
		<Repository
			repositoryName="muuvies"
			demoURL="https://muuvies.netlify.app/"
			language="react"
		/>
		<Repository
			repositoryName="firebase-react-starter-kit"
			language="react"
		/>
		<Repository
			repositoryName="react-iframe"
			language="react"
		/>
		<Repository
			repositoryName="storage"
			language="react"
		/>
		<Repository
			repositoryName="krios-github-bot"
			language="node"
		/>
		<Repository
			repositoryName="toasty"
			language="react"
		/>
		<Repository
			repositoryName="jwt-spring-security-demo"
			language="java"
		/>
		<Repository
			repositoryName="carbon-sidebar-tabs"
			language="react"
		/>
	</div>

	<span>More can be found on my
		<a
			href={github.url}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			class="github"
		>
			GitHub</a>.
	</span>
</section>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		width: 80%;
		max-width: 90%;

		margin: 20px 0;
		margin-bottom: 10px;

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
