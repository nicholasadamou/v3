<script>
	import Website from "$components/Website/Website.svelte";
	import Header from "$components/Header.svelte";
</script>

<section
	id="websites"
>
	<Header title="Slices of the Internet">
		Corners of the internet I've handcrafted and built myself.
	</Header>
	<div>
		<Website
				title="Personal Portfolio (latest)"
				link="https://nicholasadamou.com/"
		/>
		<Website
			title="Personal Portfolio (v1)"
			link="https://nicholasadamou-v1.netlify.app/"
		/>
	</div>
	<div>
		<Website
				title="Personal Portfolio (v2)"
				link="https://nicholasadamou-v2.netlify.app/"
		/>
		<Website
			title="WiFi Card"
			link="https://wifi-card.netlify.app"
			noMobile
		/>
	</div>
</section>

<style lang="scss">
	div {
	  display: -webkit-box;
	  -webkit-box-align: center;
	  -webkit-box-pack: center;

	  display: flex;
	  flex-wrap: wrap;
	  align-items: start;
	  justify-content: start;

	  max-width: 900px;
	  margin-bottom: 60px;
	  margin-left: -20px;

	  @media screen and (max-width: 430px) {
		align-items: center;
		justify-content: center;

		margin-left: 0;
		margin-bottom: 0;
	  }
	}
</style>
