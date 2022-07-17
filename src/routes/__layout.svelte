<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	import Head from '$sections/Head.svelte';

	const queryClient = new QueryClient();
</script>

<Head />

<QueryClientProvider client={queryClient}>
	<!-- This is where the page will be rendered -->
	<slot />
</QueryClientProvider>

<style global lang="scss">
	@import '../styles/global.scss';
</style>
