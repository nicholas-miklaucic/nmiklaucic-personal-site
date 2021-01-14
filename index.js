// from Bulma website for running the navbar

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").on("click", function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

proj_carousel = bulmaCarousel.attach("#proj-carousel", {
  navigation: true,
  infinite: true,
})[0]

$('#proj-hero-body').on('click', function () {
  var ind = proj_carousel.state.index;
  const URLS = [
    "https://github.com/nicholas-miklaucic/scarlet",
    "https://github.com/nicholas-miklaucic/fractran-lib-rs"
  ];
  if (ind < URLS.length) {
    window.open(URLS[ind])
  }
});

var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['home', 'research', 'projects', 'blog', 'contact'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 900,
	autoScrolling: false,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	// normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,

	//Custom selectors
	sectionSelector: '.fp-section',
	slideSelector: '.fp-slide',

	lazyLoading: false,
  allowScrolling: true,

  onLeave: function(origin, dest, _) {
    var anchor = dest.anchor;
    $("a.navbar-item").removeClass("is-active");
    $("a[data-menuanchor="+anchor+"]").addClass("is-active");
  }
});
