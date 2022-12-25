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

		font-size: var(--fz-xs);

		background-color: var(--background-contrast);
		color: var(--text-contrast);
	}
</style>
