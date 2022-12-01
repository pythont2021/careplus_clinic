console.log("connected");

$(document).ready(() => {
  // appointment form
  $(".book-apt-btn").click(() => {
    console.log("button clicked");
    $("#model-container").css("transform", "translate(-50%, -50%) scale(1)");
  });
  $(".close").click(() => {
    console.log("button clicked");
    $("#model-container").css("transform", "translate(-50%, -50%) scale(0)");
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
        // loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
