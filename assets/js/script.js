$(document).ready(function () {
    // Feature Carousel
    $('.feature_carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      autoplayTimeout: 5000,
      autoplaySpeed: 1600,
      smartSpeed: 1600,
      margin: 20,
      navText: [
        '<span class="custom-nav prev"><i class="fa-solid fa-angle-left"></i></span>',
        '<span class="custom-nav next"><i class="fa-solid fa-angle-right"></i></span>'
      ],
    });
  
    // Menu Toggle + Icon Switch
    $('#menuToggleBtn').on('click', function () {
      $('#mainMenu').slideToggle('');
  
      const $icon = $('#menuIcon');
      if ($icon.hasClass('fa-bars-staggered')) {
        $icon.removeClass('fa-bars-staggered').addClass('fa-xmark');
      } else {
        $icon.removeClass('fa-xmark').addClass('fa-bars-staggered');
      }
    });
});
  