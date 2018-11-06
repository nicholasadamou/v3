//=include components/smoothScroll.js
//=include components/toggleNav.js
//=include components/getStars.js

$(function() {
	toggleNav();

	smoothScroll();

	getStars();

	new LazyLoad({ elements_selector: ".lazy" });
});
