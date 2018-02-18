//=include components/smoothScroll.js
//=include components/invertHamburgerColors.js
//=include components/toggleNav.js
//=include components/hero.js

$(function() {
    hero();

	invert_hamburger_colors();
	toggleNav();

	smoothScroll();
	new LazyLoad({ elements_selector: ".lazy" });
});
