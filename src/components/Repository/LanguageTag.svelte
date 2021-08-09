<script>
	import Icon from 'svelte-awesome';

	import languages from "./languages";

	export let language;
</script>

<span>
	<Icon data={languages[language].icon} scale="1.25" />
	<aside>{languages[language].text}</aside>
</span>

<style lang="scss">
	span {
		display: flex;
		align-items: center;
		gap: 5px;

		padding: 5px;

		margin-left: -5px;

		color: var(--theme-colors-text);

		:global(svg) {
			color: var(--theme-colors-text);
		}

		aside {
			font-size: var(--fz-sm);
		}
	}
</style>
