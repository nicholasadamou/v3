<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import rocket from 'svelte-awesome/icons/rocket';

	import Alert from '$components/Alert.svelte';
	import ScrollToTopButton from '$components/ScrollToTopButton.svelte';

	import Header from '$sections/Header.svelte';
	import Navigation from '$sections/Navigation.svelte';
	import Sidebar from '$sections/Sidebar.svelte';
	import Hero from '$sections/Hero.svelte';
	import Websites from '$sections/Websites.svelte';
	import Projects from '$sections/Projects.svelte';
	import Footer from '$sections/Footer.svelte';

	let isSidebarOpen = writable(false);

	setContext('isSidebarOpen', isSidebarOpen);
</script>

<style lang="scss">
	main {
		position: relative;

		margin: 5rem auto 2rem;

		width: 960px;

		text-align: left;

		@media screen and (max-width: 768px) {
			margin-left: 2rem;

			width: 100%;
		}

		@media screen and (max-width: 430px) {
			margin: 2rem 0 0;
		}
	}

	#sponsor-button {
		padding-top: 10px;

		@media screen and (max-width: 430px) {
			padding-top: 0;
		}
	}
</style>

<Alert
	text="Sponsor me on GitHub!"
	icon={rocket}
>
	<iframe
		id="sponsor-button"
		src="https://github.com/sponsors/nicholasadamou/button"
		title="Sponsor nicholasadamou"
		height="35"
		width="116"
		style="border: 0;" />
</Alert>

<main>
	<Header />
	<Navigation />
	<Hero />
	<Websites />
	<Projects />
</main>

<Footer />

<Sidebar />
<ScrollToTopButton />
