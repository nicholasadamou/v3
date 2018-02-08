$(function() {
  fix_nav_colors();
  toggleNav();
  smoothScroll();
  new LazyLoad({
    elements_selector: ".lazy"
  });
});

// smoothScroll function is applied from the document ready function
function smoothScroll() {
	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
          }, 1000);
      }
		}
	});
}

function fix_nav_colors() {
  $(window).scroll(function() {
    var $toggle = $(".hamburger-inner");
    var $bphong = $("#bphong");
    var $aes = $("#aes");
  
    if ($aes.is(":in-viewport(50)") || $bphong.is(":in-viewport(50)")) {
      $toggle.addClass("background-invert");
    } else {
      $toggle.removeClass("background-invert");
    }
  });
}

function toggleNav() {
  var $hamburger = $(".hamburger");
  var $link = $(".nav_link");
  var $logo = $(".logo");
  var $body = $("body");
  
  $hamburger.bind('click', function() {
    $hamburger.toggleClass("is-active");
    $('body').toggleClass('nav-open');
    this.blur();
    return false;
  });

  $link.bind("click", function() {
    $hamburger.removeClass("is-active");
    $('body').removeClass('nav-open');
    this.blur();
  });

  $logo.bind("click", function() {
    $hamburger.removeClass("is-active");
    $('body').removeClass('nav-open');
    this.blur();
  });

  $body.bind("click", function() {
    $body.removeClass("nav-open");
    $hamburger.removeClass("is-active");
    this.blur();
  });
}