<script>
	import Icon from 'svelte-awesome';

	import pkg from '@fortawesome/free-solid-svg-icons';

	const { faExclamationTriangle } = pkg;
</script>

<section>
	<div>
		<h1>
			<Icon data="{faExclamationTriangle}" scale="2" />
			404 Page Not Found.
		</h1>
		<p>
			Go back to{' '}
			<a
                href="/"
                aria-hidden="true"
                aria-label="go back to nicholasadamou.com"
                title="go back to nicholasadamou.com"
                rel="noopener noreferrer"
				class="link"
			>
                <em>nicholasadamou.com</em></a>?
		</p>
	</div>
</section>

<style lang="scss">
	section {
		height: 100vh;

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;

			height: 100%;

			margin-left: 10rem;

			@media screen and (max-width: 430px) {
				margin-left: 1rem;
			}

			h1 {
				margin: 0;

				font-size: 64px;

				@media screen and (max-width: 430px) {
					font-size: 28px;
				}

				:global(svg) {
					zoom: 2;

					@media screen and (max-width: 430px) {
						zoom: 1;
					}
				}
			}

			p {
				font-size: 24px;
				font-weight: 200;

				@media screen and (max-width: 430px) {
					font-size: 18px;
				}
			}
		}
	}
</style>
