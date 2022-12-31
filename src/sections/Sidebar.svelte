<script>
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import Icon from 'svelte-awesome';
	import { faTimes, faHashtag, faArrowUpRightFromSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
	import { faStackOverflow, faStackExchange, faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import { scrollto } from "svelte-scrollto";

	import config from '$config';
	const { email } = config;

	import BuyMeACoffee from "$components/BuyMeACoffee.svelte";
	import GitHubSponsors from "$components/GitHubSponsors.svelte";

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
		<div>
<!--			<button-->
<!--				on:click={onToggle}-->
<!--			>-->
<!--				<Icon-->
<!--					data={faTimes}-->
<!--					scale="1.25"-->
<!--				/>-->
<!--			</button>-->

			<a
				href="#top"
				use:scrollto={'#top'}
				aria-hidden="true"
				rel="noopener noreferrer"
			>
				<h3>Nicholas Adamou</h3>
			</a>
		</div>

		<section>
			<p class="section-title">
				Sections
			</p>
			<a
				href="#websites"
				use:scrollto={'#websites'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
			>
				<Icon
					data={faHashtag}
				/>
				<span>Websites</span>
			</a>
			<a
				href="#projects"
				use:scrollto={'#projects'}
				aria-hidden="true"
				rel="noopener noreferrer"
				class="link"
			>
				<Icon
					data={faHashtag}
				/>
				<span>Projects</span>
			</a>
		</section>

		<section>
			<p class="section-title">
				Online
			</p>
			<a
				href={stackoverflow.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="social"
			>
				<Icon
					data={faStackOverflow}
					scale="1.25"
				/>
				<span>StackOverflow</span>
				<span class="icon">
					<Icon
						data={faArrowUpRightFromSquare}
					/>
				</span>
			</a>
			<a
				href={stackexchange.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="social"
			>
				<Icon
					data={faStackExchange}
				/>
				<span>StackExchange</span>
				<span class="icon">
					<Icon
						data={faArrowUpRightFromSquare}
					/>
				</span>
			</a>
			<a
				href={github.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="social"
			>
				<Icon
					data={faGithub}
				/>
				<span>GitHub</span>
				<span class="icon">
					<Icon
						data={faArrowUpRightFromSquare}
					/>
				</span>
			</a>
			<a
				href={codepen.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="social"
			>
				<Icon
					data={faCodepen}
				/>
				<span>CodePen</span>
				<span class="icon">
					<Icon
						data={faArrowUpRightFromSquare}
					/>
				</span>
			</a>
			<a
				href={linkedin.url}
				target="_blank"
				aria-hidden="true"
				rel="noopener noreferrer"
				class="social"
			>
				<Icon
					data={faLinkedin}
				/>
				<span>LinkedIn</span>
				<span class="icon">
					<Icon
						data={faArrowUpRightFromSquare}
					/>
				</span>
			</a>
		</section>

		<section id="donate">
			<p class="section-title">
				Donate
			</p>

			<BuyMeACoffee />
			<GitHubSponsors />
		</section>

		<a
			href={`mailto:${email}?subject=Hello`}
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
		>
			<Icon
				data="{faPaperPlane}"
			/>
			<span>
				Contact Me
			</span>
		</a>
	</nav>
{/if}

<style lang="scss">
	nav {
		position: fixed;
		top: 0;
		left: 0;

		width: 12rem;
		height: 100%;

		padding: 10px 20px 30px;

		background-color: var(--background-contrast);

		z-index: 9999;

		color: white;

		p {
			font-size: .875rem;
			line-height: 1.25rem;
			color: white;
		}

		a[href^="mailto:"] {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;

			position: absolute;
			bottom: 50px;
			right: 14px;

			width: 80%;

			padding: 10px;

			border-radius: 5px;

			background-color: #262626;

			text-decoration: none;

			font-size: .875rem;
			line-height: 1.25rem;
			color: white;

			transition: all .2s ease-in-out;

			&:hover {
				background-color: lighten(#262626, 10%);
			}
		}

		div {
			display: flex;
			align-items: center;
			gap: 10px;

			padding: 10px 0;
			margin-bottom: 25px;

			a {
				text-decoration: none;

				color: white;

				h3 {
					margin-top: 1rem;
				}
			}
		}

		section {
			display: flex;
			flex-direction: column;
			gap: 10px;

			margin-bottom: 2rem;

			&#donate {
				gap: 5px;

				.section-title {
					margin-bottom: 0.75rem;
				}
			}

			.section-title {
				font-size: 13px;
			}

			.social, .link {
				text-decoration: none;
			}

			a {
				display: flex;
				align-items: center;
				gap: 10px;

				width: 100%;

				position: relative;

				border-radius: 5px;

				padding: 10px;
				margin: 0 0 0 -10px;

				text-decoration: underline;

				font-size: .875rem;
				line-height: 1.25rem;
				color: var(--text-contrast);

				&:hover {
					background-color: lighten(#262626, 10%);
				}

				.icon {
					position: absolute;
					right: 16px;
				}
			}
		}
	}
</style>
