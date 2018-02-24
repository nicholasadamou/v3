//=include components/smoothScroll.js
//=include components/toggleNav.js
//=include components/hero.js

$(function() {
	hero();

	toggleNav();

	smoothScroll();
	new LazyLoad({ elements_selector: ".lazy" });
});
