<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import Alert from '$components/Alert.svelte';
	import ScrollToTopButton from '$components/ScrollToTopButton.svelte';

	import Header from '$sections/Header.svelte';
	import Navigation from '$sections/Navigation.svelte';
	import Sidebar from '$sections/Sidebar.svelte';
	import Hero from '$sections/Hero.svelte';
	import Work from '$sections/Work.svelte';
	import Projects from '$sections/Projects.svelte';
	import Footer from '$sections/Footer.svelte';

	let isSidebarOpen = writable(false);

	setContext('isSidebarOpen', isSidebarOpen);
</script>

<!-- <Alert /> -->

<main>
	<Header />
	<Navigation />
	<Hero />
	<Work />
	<Projects />
</main>

<Footer />

<Sidebar />
<ScrollToTopButton />

<style lang="scss">
	:global(#svelte) {
		overflow-x: hidden;

		zoom: 125%;

		@media screen and (max-width: 1920px) {
			zoom: 110%;
		}

		@media screen and (max-width: 1440px) {
			zoom: 100%;
		}
	}
	main {
		position: relative;

		margin: 5rem auto;
		margin-bottom: 2rem;

		width: 960px;

		text-align: left;

		@media screen and (max-width: 768px) {
			margin-left: 2rem;

			width: 100%;
		}

		@media screen and (max-width: 430px) {
			margin: 0;
			margin-top: 2rem;
		}
	}
</style>
