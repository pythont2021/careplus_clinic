console.log("connected");

$(document).ready(() => {



  // appointment form
  $(".book-apt-btn").click(() => {
    console.log("button clicked");
    $("#book-appointment").css("transform", "translate(-50%, -50%) scale(1)");
  });
  $(".close").click(() => {
    console.log("button clicked");
    $("#book-appointment").css("transform", "translate(-50%, -50%) scale(0)");
  });

  // Owl Carousel
  // $(".owl-carousel").owlCarousel({
  //   loop: false,
  //   margin: 10,
  //   nav: false,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       // loop: true,
  //       autoplay: true,
  //       autoplayTimeout: 3000,
  //       autoplayHoverPause: true,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });

  $(function () {
    var owl = $(".demo-1"),
      owlOptions = {
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
          },
          768:{
            items: 2,
          }
        },
      };

    if ($(window).width() < 992) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass("off");
    }

    $(window).resize(function () {
      if ($(window).width() < 992) {
        if ($(".owl-carousel").hasClass("off")) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass("off");
        }
      } else {
        if (!$(".owl-carousel").hasClass("off")) {
          owl.addClass("off").trigger("destroy.owl.carousel");
          owl.find(".owl-stage-outer").children(":eq(0)").unwrap();
        }
      }
    });
  });
  $(function () {
    var owl = $(".demo-2"),
      owlOptions = {
        loop: true,
        margin: 10,
        autoplay: true,
        // autoplayTimeout: 2000,
        smartSpeed: 500,
        animateOut: 'fadeOut',
        // animateIn: 'flipInX',
      
        responsive: {
          0: {
            items: 1,
          },
          576:{
            items: 2,
          },
          768:{
            items: 3,
          }
        },
      };

    if ($(window).width() < 992) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass("off");
    }

    $(window).resize(function () {
      if ($(window).width() < 992) {
        if ($(".owl-carousel").hasClass("off")) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass("off");
        } 
      } else {
        if (!$(".owl-carousel").hasClass("off")) {
          owl.addClass("off").trigger("destroy.owl.carousel");
          owl.find(".owl-stage-outer").children(":eq(0)").unwrap();
        }
      }
    });
  });
});
