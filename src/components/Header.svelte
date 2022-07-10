<script>
	export let title;
</script>

<header
	id="{$$props.id}"
>
	<h2>{title}</h2>

	<span>
		<slot></slot>
	</span>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		gap: 10px;

		margin-top: 20px;

		@media screen and (max-width: 430px) {
			margin-left: 1rem;
		}

		h2 {
			margin: 0;

			font-size: var(--fz-lg);
			font-weight: 400;
		}

		span {
			font-size: var(--fz-md);

			@media screen and (max-width: 430px) {
				width: 95%;
			}
		}
	}
</style>

