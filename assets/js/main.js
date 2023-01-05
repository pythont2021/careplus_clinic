console.log("connected");

$(document).ready(() => {
  // appointment form
  $(".book-apt-btn").click(() => {
    $("#book-appointment").addClass("open-popup");
  });
  $(".close").click(() => {
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

  // Footer year 
  var year = new Date().getFullYear()
  $(".copyRight span").text(year)
  // console.log(year)
});

// smtp js

function sendAppointment() {
  var name = document.getElementById("apt-full-name").value;
  var email = document.getElementById("apt-email").value;
  var mobile = document.getElementById("apt-mobile").value;
  var date = document.getElementById("apt-date").value;
  var time = document.getElementById("apt-time").value;
  var message = document.getElementById("apt-message").value;
  var confirmation = document.querySelector(
    'input[name="apt-cnfm"]:checked'
  ).value;

  Email.send({
    SecureToken: "81e3a2bc-8503-4a05-994e-75f5c6bfa553",
    To: "sachinpatilas848@gmail.com", 
    Bcc: "pythont2021@gmail.com",
    From: "notification@beingvin.com",
    Subject: "Careplus New Appointment",
    Body: ` <h2>Patient Details</h2> <br/> 
    Name : ${name} <br/> 
    Email : ${email} <br/> 
    Date : ${date} <br/> 
    Time : ${time} <br/>
    Mobile : ${mobile} <br/> 
    Confirm By: ${confirmation} <br/>
    Message : ${message} <br/>`,
  }).then((message) => {
    // alert(message);
    console.log("form data sent");
    $(".appointment_form").css("display", "none");
    $(".confirmation-box").css("display", "block");
    $(".confirmation-box").append(
      "<div class='cnfm-text'><h1>Thank You!</h1><i class='fa fa-check main-content__checkmark'></i><br/><p>We'll confirm your appointment soon<p></div>"
    );
  });
}

function sendMsg() {
  var name = document.getElementById("contact-name").value;
  var email = document.getElementById("contact-email").value;
  var message = document.getElementById("contact-message").value;

  Email.send({
    SecureToken: "81e3a2bc-8503-4a05-994e-75f5c6bfa553",
    To: "sachinpatilas848@gmail.com", 
    Bcc: "pythont2021@gmail.com",
    From: "notification@beingvin.com",
    Subject: "Careplus Feedback",
    Body: `Name : ${name} <br/> Email : ${email} <br/> Message : ${message}`,
  }).then((message) => alert("Thank You ! \nFor sharing your feedback"));
}