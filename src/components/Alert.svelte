<script>
	import Icon from 'svelte-awesome';

	export let icon;
	export let text;
</script>

<div>
	{#if icon}
		<Icon
			data="{icon}"
			style={`fill: var(--text-contrast);`}
			scale="1"
		/>
	{/if}

	{#if text}
		<span>{text}</span>
	{/if}

	{#if !icon && !text}
		<slot></slot>
	{/if}

	<slot></slot>
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;

		padding: 16px 0;

		height: 20px;

		font-size: var(--fz-xs);

		background-color: var(--background-contrast);
		color: var(--text-contrast);

		@media screen and (max-width: 430px) {
			font-size: var(--fz-md);
		}
	}
</style>
