$(document).ready(function () {
  const owl = $("#clients-slider");
  owl.owlCarousel({
    items: 1,
    loop: true,
  });

  const prev = $("#sliderPrev");
  prev.click(function () {
    owl.trigger("prev.owl.carousel", [500]);
  });

  const next = $("#sliderNext");
  next.click(function () {
    owl.trigger("next.owl.carousel", [500]);
  });
});

// // Go to the next item
// $('.customNextBtn').click(function() {
//     owl.trigger('next.owl.carousel');
// })
// // Go to the previous item
// $('.customPrevBtn').click(function() {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [300]);
// })
