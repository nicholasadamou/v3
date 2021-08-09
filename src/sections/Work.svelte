<script>
	import Header from '$components/Header.svelte';
	import Experience from '$components/Experience.svelte';

	import config from '$config';

	const { experiences } = config;

	const { linkedin } = config.socialMedia;
</script>

<section
	id="work"
>
	<Header
		title="Work Experience"
	>
		<span>
			Please read my
			<a
				href={config.resume}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
			>
				resume
			</a>
			and connect with me on
			<a
				href={linkedin.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
				style={`
					color: var(--linkedin);
				`}
			>
				LinkedIn</a>.
		</span>
	</Header>

	{#each experiences as experience}
		<Experience
			image={experience.image}
			company={experience.company}
			title={experience.title}
			duration={experience.duration}
			location={experience.location}
		>
			{experience.description}
		</Experience>
	{/each}
</section>



