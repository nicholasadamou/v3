$(function() {
	smoothScroll();
	nav();
  window.setInterval(fix_nav_height, 1);
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
          scrollTop: target.offset().top - $("#sticky").height()
          }, 1000);
      }
		}
	});
}

function fix_nav_height() {
    function elementOrParentIsFixed(element) {
      var $element = $(element);
      var $checkElements = $element.add($element.parents());
      var isFixed = false;
      $checkElements.each(function() {
          if ($(this).css("position") === "fixed") {
              isFixed = true;
              return false;
          }
      });
      return isFixed;
    }
    
    var isFixed = elementOrParentIsFixed($("#sticky"));
    if (isFixed) {
      $("#nav").css({
       "top":  $("#sticky").height()
      });
    } else {
      $("#nav").css({
       "top":  $("#sticky").height()
      });
    }
  }

function nav() {
  var $hamburger = $(".hamburger");
  var $nav_link = $(".nav-link");

  $hamburger.bind("click", function() {
    $hamburger.toggleClass("is-active");
    $("#nav").toggleClass("open");
    $("#nav").toggleClass("animated");
    $("#nav").toggleClass("fadeIn");
    $("#sticky").toggleClass("background");
    return false;
  });

  $nav_link.bind("click", function() {
    $("#nav").removeClass("open");
    $hamburger.removeClass("is-active");
    $("#sticky").removeClass("background");
    this.blur();
    return false;
  });

  $(".logo").bind("click", function() {
    $("#nav").removeClass("open");
    $hamburger.removeClass("is-active");
    $("#sticky").removeClass("background");
    this.blur();
    return false;
  });

  var stickyTop = $("#sticky").offset().top;
  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if (windowTop > stickyTop) {
      $("#sticky").css({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        "background-color": "white"
      });
      $(".nav-link").css({
        color: "black"
      });
    } else {
      $("#sticky").css({
        position: "relative",
        width: "100%",
        "background-color": "transparent"
      });
      $(".nav-link").css({
        color: "#212856"
      });
    }
  });
}