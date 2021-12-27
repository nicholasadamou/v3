<script>
	import Lazy from 'svelte-lazy';

	import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

	import Button from '$components/Button.svelte';

	import config from '$config';

	const { email } = config;
</script>

<section>
	<Lazy height={650}>
		<img src="/hero.png" alt="hero-image" />
	</Lazy>

	<p>I’m Nick — a full-stack software engineer and graduate student at{' '}
		<a
			href="https://www.cc.gatech.edu/"
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			class="link gatech"
		>
			Georgia Tech
		</a>
		focused on building accessible, human-centered financial products at
		<a
			href="https://ibm.com/"
			target="_blank"
			aria-hidden="true"
			rel="noopener noreferrer"
			class="link ibm"
		>
		IBM</a>.
	</p>

	<aside>
		<Button
			url={`mailto:${email}?subject=Hello`}
			icon={faPaperPlane}
			text="Get In Touch"
		/>
		<span>
			Whether you have a question or just want to say hi, I will try my best to get back to you!
		</span>
	</aside>
</section>

<style lang="scss">
	section {
		margin-top: 2.5rem;
		margin-bottom: 1rem;

		@media screen and (max-width: 430px) {
			margin-left: 1rem;
		}

		img {
			width: 650px;

			@media screen and (max-width: 430px) {
				width: 95%;
			}
		}

		p {
			margin: 5px 0 1.5rem 0;

			font-size: var(--fz-lg);

			width: 60%;

			@media screen and (max-width: 430px) {
				width: 100%;
			}

			a {
				text-decoration: underline;
			}
		}

		aside {
			width: 300px;

			span {
				display: block;

				margin-top: 10px;

				font-size: var(--fz-xs);
				font-weight: 100;
				line-height: 1.5;
			}
		}
	}
</style>
