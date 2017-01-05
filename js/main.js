/*!
 * Main JS
 * (c) 2016 DM Theme
 */

(function($) {
    "use strict"; // Start use strict

    // jQuery for page scrolling feature - jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 150
        }
    })

})(jQuery); // End of use strict

// Typed JS settings
$(function(){
  $("#typed").typed({
      stringsElement: $('#typed-strings'),
      typeSpeed: 40,
      startDelay: 20,
      backSpeed: 30,
      backDelay: 800,
      loop: true,
      cursorChar: "|",
  });
});
// End of Typed JS settings


