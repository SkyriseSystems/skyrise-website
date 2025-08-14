<<<<<<< HEAD
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:d8e93d794a0c014d1977ae0d55ef853c3b807305250b6279fef58cc7beabef51
size 2206
>>>>>>> origin/main
