function invert_hamburger_colors() {
	if ($(window).width() <= 380) {
		$(window).scroll(function() {
			var toggle = $(".hamburger-inner");
			var aes = $(".advanced-electrical-services");
			var bphong = $(".bphong");

			if (aes.is(":in-viewport(50)") || bphong.is(":in-viewport(50)")) {
				toggle.addClass("background-invert");
			} else {
				toggle.removeClass("background-invert");
			}
		});
	}
}
