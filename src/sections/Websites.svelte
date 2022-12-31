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
			title="Vineyard Vines Sales"
			link="https://vineyard-vines-sales.netlify.app/"
			desktop="websites/vineyard-vines-sales-desktop.png"

			noFetchImage
			noMobile
		/>
		<Website
			title="WiFi Card"
			link="https://wifi-card.netlify.app"
			desktop="websites/wifi-card-desktop.png"

			noFetchImage
			noMobile
		/>
	</div>
	<div style="margin-top: 0">
		<Website
			title="React Code Editor"
			link="https://reactify-editor.netlify.app/"
			desktop="websites/react-code-editor-desktop.png"

			noFetchImage
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
	  margin-top: 30px;
	  margin-left: -20px;

	  @media screen and (max-width: 430px) {
			align-items: center;
			justify-content: center;

			margin-left: 0;
			margin-bottom: 0;
			margin-top: 30px;
	  }
	}
</style>
