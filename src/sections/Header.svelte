<script>
	import { getContext } from 'svelte';

	import Icon from 'svelte-awesome';
	import { faBars } from '@fortawesome/free-solid-svg-icons';

	let isSidebarOpen = getContext('isSidebarOpen');

	const onToggle = () => {
		$isSidebarOpen = !$isSidebarOpen;
	}
</script>


<div>
	<h1>Good Morning</h1>

<!--	<img src="/hero.png" alt="hero" />-->

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
</div>
<!--<div>-->
<!--	<a-->
<!--		href="/"-->
<!--		aria-hidden="true"-->
<!--		rel="noopener noreferrer"-->
<!--	>-->
<!--		<h1>Nicholas Adamou</h1>-->
<!--	</a>-->

<!--	<button-->
<!--		on:click={onToggle}-->
<!--	>-->
<!--		<Icon-->
<!--			data={faBars}-->
<!--			scale="1.25"-->
<!--		/>-->
<!--	</button>-->
<!--</div>-->

<style lang="scss">
	div {
		margin-bottom: 25rem;
	}

	h1 {
		font-size: clamp(32px, calc((100vw - 350px) * .1), 64px);
		font-weight: 500;

		margin: 0;
	}

  p {
		font-size: var(--fz-sm);

		color: #707070;

		width: 40%;

		@media screen and (max-width: 430px) {
			width: 100%;
		}

		a {
			text-decoration: underline;
		}
  }

  img {
		margin-bottom: 10px;

		width: 650px;

		@media screen and (max-width: 430px) {
			width: 95%;
		}
  }
	//button {
	//	display: none;
	//
	//	@media screen and (max-width: 430px) {
	//		display: block;
	//
	//		position: absolute;
	//		top: 0;
	//		right: 2rem;
	//	}
	//
	//	:global(svg) {
	//		fill: var(--primary);
	//
	//		cursor: pointer;
	//	}
	//}
	//
	//div {
	//	display: flex;
	//	justify-content: flex-start;
	//	gap: 16px;
	//
	//	width: 100%;
	//
	//	a {
	//		text-decoration: none;
	//
	//		color: var(--primary);
	//
	//		h1 {
	//			margin: 0;
	//
	//			font-size: var(--fz-lg);
	//			font-weight: 900;
	//			text-transform: uppercase;
	//
	//			@media screen and (max-width: 430px) {
	//				margin-left: 1rem;
	//			}
	//		}
	//	}
	//}
</style>
