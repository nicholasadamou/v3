<script>
	import * as animateScroll from 'svelte-scrollto';

	import Icon from 'svelte-awesome';
	import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

	let y;
</script>

<svelte:window bind:scrollY={y} />

<div
	class="scroll-to-top-button"
	style={`display: ${y > 400 ? "flex" : "none"};`}
	on:click={() => animateScroll.scrollToTop()}
>
	<Icon data={faArrowUp} scale="1.25" />
</div>

<style lang="scss">
	.scroll-to-top-button {
		align-items: center;
		justify-content: center;

		position: fixed;
		bottom: 20px;
		right: 20px;

		width: 10px;
		height: 10px;

		padding: 20px;

		z-index: 1000;

		cursor: pointer;

		border-radius: 10px;

		background: #f5f5f5;

		animation: fadeIn 0.3s;
		transition: opacity 0.4s;

		opacity: 0.5;

		@media screen and (max-width: 430px) {
			width: 10px;
			height: 10px;
		}

		:global(svg) {
			fill: #212121;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
</style>
