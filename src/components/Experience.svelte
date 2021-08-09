<script>
	import Lazy from 'svelte-lazy';

	export let image;
	export let company;
	export let title;
	export let duration;
	export let location;
</script>

<div>
	<Lazy height={50}>
		<img src={`/logos/${image}`} alt={company} />
	</Lazy>

	<span>
		<strong>{company}</strong>
		<p>{title}</p>
		<aside>{duration}</aside>
		<aside>{location}</aside>
		<p>
			<slot></slot> <!-- description -->
		</p>
	</span>
</div>

<style lang="scss">
	div {
		position: relative;

		margin: 30px 0;

		width: 60%;

		@media screen and (max-width: 430px) {
			margin-left: 1rem;

			width: 95%;
		}

		img {
			position: absolute;
			top: 5px;
			left: -70px;

			width: 60px;
			height: 60px;

			border-radius: 3px;

			@media screen and (max-width: 1024px) {
				position: static;
			}
		}

		strong, aside, p {
			font-size: var(--fz-md);
		}

		aside, p {
			margin-top: 5px;
		}

		aside {
			margin-top: 5px;

			font-weight: 100;
		}

		p {
			font-weight: 400;

			@media screen and (max-width: 430px) {
				width: 95%;
			}
		}
	}
</style>
