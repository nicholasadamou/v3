<script>
	export let image;
</script>

<div>
	<img src={image} alt="web-browser" />
</div>

<style lang="scss">
	div {
	  position: relative;

	  width: 98%;
	  min-height: 50px;

	  border: 0px solid var(--black);
	  border-width: 20px 0 0 0;
	  border-radius: 3px 3px 6px 6px;
	  box-shadow: 1px 1px 20px -5px rgba(var(--black), 0.5);

	  &::before,
	  &::after { // close button
		content: "";

		position: absolute;
		top: -15px;
		left: 8px;

		width: 9px;
		height: 9px;

		z-index: 10;

		background: var(--red);
		border-radius: 50%;
	  }

	  &::after { // expand button
		left: 24px;
		background: var(--green);
	  }

	  img {
		max-width: 100%;

		border-radius: 0 0 6px 6px;
	  }
	}
</style>
