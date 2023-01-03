console.log("connected");

$(document).ready(() => {
  // appointment form
  $(".book-apt-btn").click(() => {
    $("#book-appointment").addClass("open-popup");
  });
  $(".close").click(() => {
    console.log("button clicked");
    $("#book-appointment").removeClass("open-popup");
  });

  // Owl Carousel

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
          768: {
            items: 2,
          },
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
        animateOut: "fadeOut",
        // animateIn: 'flipInX',

        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
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

function sendAppointment() {
  var name = document.getElementById("apt-full-name").value;
  var email = document.getElementById("apt-email").value;
  var phone = document.getElementById("apt-phone").value;
  var date = document.getElementById("apt-date").value;
  var morning = document.getElementById("apt-mrng").value;
  var afternon = document.getElementById("apt-aftrn").value;
  var confByEmail = document.getElementById("apt-confm-email").value;
  var confByPhone = document.getElementById("apt-confm-phone").value;

  Email.send({
    SecureToken: "81e3a2bc-8503-4a05-994e-75f5c6bfa553",
    To: "pythont2021@gmail.com",
    From: "notification@beingvin.com",
    Subject: "Careplus",
    Body: `Name : ${name} <br/> 
    Email : ${email} <br/> 
    Date : ${date} <br/> 
    Phone : ${phone} <br/> 
    Morning : ${morning} <br/> 
    Afternon : ${afternon} <br/> 
    Confirm By email : ${confByEmail} <br/> 
    Confirm By phone : ${confByPhone}`,
  }).then((message) => {
    // alert(message);
    console.log("form data sent");
    $(".appointment_form").css("display", "none");
    $("#book-appointment").append( "<h1>sent</h1>" )  
  });
}

function sendMsg() {
  var name = document.getElementById("contact-name").value;
  var email = document.getElementById("contact-email").value;
  var message = document.getElementById("contact-message").value;

  Email.send({
    SecureToken: "81e3a2bc-8503-4a05-994e-75f5c6bfa553",
    To: "pythont2021@gmail.com",
    From: "notification@beingvin.com",
    Subject: "Careplus",
    Body: `Name : ${name} <br/> Email : ${email} <br/> Message : ${message}`,
  }).then((message) => alert(message));
}
