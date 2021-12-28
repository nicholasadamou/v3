<script>
	import {onMount} from "svelte";

	import Browser from "$components/Website/Browser.svelte";
	import Mobile from "$components/Website/Mobile.svelte";

	import {getImageURL} from "$lib/utilities.js";

	export let title = '';
	export let link = '#';
	export let noMobile = false;

	let desktop = '';
	let mobile = '';

	onMount(async () => {
		const url = new URL(link);

		desktop = getImageURL(url.host);

		if (!noMobile) {
			mobile = getImageURL(url.host, "mobile");
		}
	})
</script>

<div>
	<a
		href={link}
		target="_blank"
		aria-hidden="true"
		rel="noopener noreferrer"
	>
		<Browser image={desktop} />

		{#if !noMobile}
			<Mobile image={mobile} />
		{/if}
	</a>

	<h3>{title}</h3>
</div>

<style lang="scss">
	div {
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-box-direction: normal;
	  -webkit-box-flex: 1;

	  display: flex;
	  flex-direction: column;
	  flex: 1 1 33%;

	  position: relative;

	  width: 33%;
	  max-width: 33%;

	  margin-top: 20px;
	  margin-bottom: 20px;

	  @media screen and (max-width: 430px) {
		-webkit-box-flex: 1;

		flex: 1 1 100%;

		width: 100%;
		max-width: 100%;

		margin-bottom: 80px;
	  }

	  a {
		display: block;

		position: relative;

		margin: 0 20px;

		text-decoration: none;
		color: black;

		&:hover {
		  cursor: pointer;
		}
	  }

	  img {
		width: 100%;
		max-width: 100%;

		display: block;

		image-rendering: optimizeSpeed;
		/* Legal fallback */
		image-rendering: -moz-crisp-edges;
		/* Firefox        */
		image-rendering: -o-crisp-edges;
		/* Opera          */
		image-rendering: -webkit-optimize-contrast;
		/* Safari         */
		image-rendering: optimize-contrast;
		/* CSS3 Proposed  */
		image-rendering: crisp-edges;
		/* CSS4 Proposed  */
		image-rendering: pixelated;
		/* CSS4 Proposed  */
		-ms-interpolation-mode: nearest-neighbor;
		/* IE8+           */
	  }

	  h3 {
		position: absolute;
		top: 0;
		left: 60px;

		padding: 0;
		margin: 0;

		color: var(--white);
		line-height: 20px;
		font-size: 0.7em;
	  }
	}
</style>
