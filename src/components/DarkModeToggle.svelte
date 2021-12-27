<script>
	import { getContext } from 'svelte'

	import Icon from 'svelte-awesome';
	import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

	let { toggle, theme } = getContext('theme');

	export let contrast = false;
</script>

<button
	class="{$$props.class}"
	on:click="{toggle}"
>
	{#if $theme === "dark"}
		<Icon
			data={faMoon}
			style={`
				fill: ${contrast ? "var(--theme-colors-text-contrast)" : "var(--theme-colors-text)"};
			`}
			scale="1.25"
		/>
		<span>Dark Mode</span>
	{:else if $theme === "light"}
		<Icon
			data={faSun}
			style={`
				fill: ${contrast ? "var(--theme-colors-text-contrast)" : "var(--theme-colors-text)"};
			`}
			scale="1.25"
		/>
		<span>Light Mode</span>
	{/if}
</button>

<style lang="scss">
	span {
		@media screen and (max-width: 430px) {
			display: none;
		}
	}
</style>
