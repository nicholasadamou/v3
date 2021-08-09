<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	import { ThemeWrapper } from 'svelte-themer';
	import themes from '$lib/themes';

	import Head from '$sections/Head.svelte';

	const queryClient = new QueryClient();
</script>

<Head />

<QueryClientProvider client={queryClient}>
	<ThemeWrapper themes="{themes}">
		<!-- This is where the page will be rendered -->
		<slot />
	</ThemeWrapper>
</QueryClientProvider>

<style global lang="scss">
	@import '../../node_modules/normalize.css/normalize.css';
	@import '../styles/global.scss';
</style>
