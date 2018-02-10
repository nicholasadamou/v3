$(function() {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  invert_hamburger_colors();
  toggleNav();

  smoothScroll();
  new LazyLoad({ elements_selector: ".lazy" });

  var typed = new Typed('.typed', {
    strings: ["web applications.", "user interfaces.", "corporate websites."],
    loop: true,
    loopCount: Infinity,
    typeSpeed: 80,
    backDelay: 1000,
    backSpeed: 100
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

function invert_hamburger_colors() {
  $(window).scroll(function() {
    function getHex(color) {
      var parts = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      
      delete(parts[0]);
      
      for (var i = 1; i <= 3; ++i) {
          parts[i] = parseInt(parts[i]).toString(16);
          if (parts[i].length == 1) parts[i] = '0' + parts[i];
      }
    
      color = '#' + parts.join('');
    }
    
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

function toggleNav() {
  var hamburger = $(".hamburger");
  var link = $(".nav_link");
  var logo = $(".logo");
  var body = $("body");
  
  hamburger.bind('click', function() {
    hamburger.toggleClass("is-active");
    $('body').toggleClass('nav-open');
    this.blur();
    return false;
  });

  link.bind("click", function() {
    hamburger.removeClass("is-active");
    $('body').removeClass('nav-open');
    this.blur();
  });

  logo.bind("click", function() {
    hamburger.removeClass("is-active");
    $('body').removeClass('nav-open');
    this.blur();
  });

  body.bind("click", function() {
    body.removeClass("nav-open");
    hamburger.removeClass("is-active");
    this.blur();
  });
}