<script>
	import Icon from 'svelte-awesome';

	export let icon;
	export let text;
</script>

<div>
	{#if icon}
		<Icon
			data="{icon}"
			style={`fill: var(--theme-colors-text-contrast);`}
			scale="1.25"
		/>
	{/if}

	{#if text}
		<span>{text}</span>
	{/if}

	{#if !icon && !text}
		<slot></slot>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;

		padding: 10px 0;

		height: 5px;
		width: 100vw;

		font-size: var(--fz-xs);

		background-color: var(--theme-colors-background-contrast);
		color: var(--theme-colors-text-contrast);
	}
</style>
