<script>
	import Icon from 'svelte-awesome';

	export let url;
	export let icon;
	export let text;
	export let contrast = false;
	export let fitWidth = false;
</script>

<a
	href="{url}"
	target="_blank"
	aria-hidden="true"
	rel="noopener noreferrer"
	style={`
		${fitWidth ? `width: initial;` : ''}
		color: ${contrast ? "var(--theme-colors-text)" : "var(--theme-colors-text-contrast)"};
		background-color: ${contrast ? "var(--theme-colors-background)" : "var(--theme-colors-background-contrast)"};
	`}
>
	<span>
		<Icon
			data="{icon}"
			style={`fill: ${contrast ? "var(--theme-colors-text)" : "var(--theme-colors-text-contrast)"};`}
			scale="1.25"
		/>
		{text}
	</span>
</a>

<style lang="scss">
	a {
		display: inherit;

		padding: 8px 16px;

		width: fit-content;

		text-decoration: none;

		border-radius: 3px;

		span {
			display: flex;
			gap: 10px;

			font-size: var(--fz-xs);
			line-height: 1.5;
		}
	}
</style>
