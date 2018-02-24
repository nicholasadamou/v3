//=include components/smoothScroll.js
//=include components/toggleNav.js
//=include components/hero.js
//=include components/skillBars.js

$(function() {
	hero();
	animate_skill_bars();

	toggleNav();

	smoothScroll();
	new LazyLoad({ elements_selector: ".lazy" });
});
