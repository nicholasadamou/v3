<script>
	export let image;
</script>

<div>
	<img src={image} alt="mobile-device" />
</div>

<style lang="scss">
	div {
		position: absolute;
		right: 0;
		top: 26px;

		width: 32%;
		min-height: 50px;

		border: 2px solid var(--black);
		border-width: 5px 5px 5px 5px;
		border-radius: 10px;

		box-shadow: 1px 1px 20px -5px rgba(var(--black), 0.5);

		&::before { // home button
			content: "";

			position: absolute;
			bottom: 2px;
			left: calc(50% - 16px);

			width: 32px;
			height: 2px;

			background: var(--black);
			border-radius: 5px;
		}

	  &::after { // notch
		content: "";

		position: absolute;
		top: 0;
		left: calc(50% - 20px);

		width: 40px;
		height: 10px;

		background: var(--black);
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;

		@media screen and (max-width: 430px) {
		  left: calc(50% - 25px);

		  width: 50px;
		}
	  }

	  img {
		max-width: 100%;

		border-radius: 10px;
	  }
	}
</style>
