// banner part start
$('.banner-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  prevArrow: '.left',
  nextArrow: '.right',
  pauseOnFocus: false,
  pauseOnHover: false,

});
// banner part end

// service part start
$('.service-slider-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  speed: 1000,
  arrows: true,
  vertical: true,
  centerMode: true,
  centerPadding: "0px",
  initialSlide:1,
  prevArrow: '.up-arrow',
  nextArrow: '.down-arrow',
  pauseOnFocus: false,
  pauseOnHover: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        // vertical: false,
        // centerMode: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // vertical: false,
        // centerMode: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        // vertical: false,
        // centerMode: false,
      }
    },
  ]
});
// service part end

// team part start
$('.img-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  vertical: true,
  centerMode: true,
  centerPadding: "0px",
  initialSlide: 1,
  prevArrow: '.up',
  nextArrow: '.down',
  pauseOnFocus: false,
  pauseOnHover: false,
  asNavFor: '.review-slider',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        vertical: false,
        // centerMode: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        vertical: false,
        // centerMode: false,
      }
    },
  ]

});
$('.review-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  initialSlide: 1,
  vertical: false,
  fade: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  asNavFor: '.img-slider',
});
// team part end

// sponsorship part start
$('.sponsorship-wrapper').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  initialSlide: 2,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
  ]
});
// sponsorship part end

// counter part start
$('.counter').counterUp({
  delay: 9,
  time: 1000
});
// counter part end

// venobox part start
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

new VenoBox({
  selector: '.my-image',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
// venobox part end


// sticky menu start
$(function(){

    // sticky menu start
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    //this is for sticky menu
    if (sticky > 50) {
      $(".menu").addClass("sticky-menu")
    } else {
      $(".menu").removeClass("sticky-menu")
    }
    //this is for sticky menu padding
    if (sticky > 50) {
      $(".navbar-brand").addClass("scroll-logo")
    } else {
      $(".navbar-brand").removeClass("scroll-logo")
    }
  });
  // sticky menu end
});
// sticky menu end

// custom mobile menu-bar start
let mobile_menu = document.getElementById("mobile-menu");
let bars = document.querySelector(".bars");
let line_one = document.querySelector(".line-one");
let line_two = document.querySelector(".line-two");
let line_three = document.querySelector(".line-three");



bars.addEventListener("click", function (){
  mobile_menu.classList.toggle("slide-menu")
  line_one.classList.toggle("close-line1")
  line_two.classList.toggle("close-line2")
  line_three.classList.toggle("close-line3")
})
// custom mobile menu-bar end