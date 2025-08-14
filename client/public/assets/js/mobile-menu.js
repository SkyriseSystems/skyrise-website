(function ($) {
  $(document).ready(function () {
    // Initialize other plugins (e.g., Owl Carousel) if needed
    // Example: Owl Carousel for project and testimonial sliders
    $('.project-slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
      },
    });

    $('.tes1-slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 },
      },
    });
  });
})(jQuery);