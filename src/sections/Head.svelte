<script>
	import { onMount } from 'svelte';

	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';

	import config from '$config';

	import { variables } from '$lib/variables';

	let pathname;

	onMount(() => {
		pathname = window.location.pathname;
	});

	export let title = undefined;
	export let description = undefined;
	export let image = undefined;

	const {
		siteUrl,
		image: defaultImage,
		title: defaultTitle,
		description: defaultDescription,
		twitterUsername
	} = config;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`
	};

	const favicon = (icon) =>
		`
	<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
		<text y=%22.9em%22 font-size=%2290%22>
			${icon}
		</text>
	</svg>
	`.trim();
</script>

<svelte:head>
	<title>{seo.title}</title>

	<meta name="description" content={seo.description} />
	<meta name="image" content={seo.image} />

	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:url" content={seo.siteUrl} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={twitterUsername} />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />

	<link rel="icon" href={`data:image/svg+xml,${favicon('👨🏼‍💻')}`} />

	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;700;900&display=swap"
		rel="stylesheet"
	/>

	<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="nicholasadamou" data-color="#FFDD00" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" ></script>

	<GoogleAnalytics properties={[variables.GOOGLE_TRACKING_ID]} />
</svelte:head>
