$(".menu_icon_sec > a").on("click", function () {
  $("body").addClass("active_menu");
});
$(".cross_icon span").on("click", function () {
  $("body").removeClass("active_menu");
});

$(document).ready(function () {
  $(".nav li a + i").on("click", function (e) {
    e.preventDefault();
    $(this).parent().find(">ul").slideToggle(100);
  });
});

$(function () {
  var galleryThumbs = new Swiper(".gallery_thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    direction: "horizontal",
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    navigation: {
      nextEl: ".banner_slider_next",
      prevEl: ".banner_slider_prev",
    },
    breakpoints: {
      480: {
        direction: "vertical",
        slidesPerView: 3,
      },
    },
  });
  var galleryTop = new Swiper(".gallery_top", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    navigation: {
      nextEl: ".banner_slider_next",
      prevEl: ".banner_slider_prev",
    },
  });
  galleryTop.on("slideChangeTransitionStart", function () {
    galleryThumbs.slideTo(galleryTop.activeIndex);
  });
  galleryThumbs.on("transitionStart", function () {
    galleryTop.slideTo(galleryThumbs.activeIndex);
  });
});

var swiper = new Swiper(".areas_slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slider_btn_next",
    prevEl: ".slider_btn_prev",
  },
});

var swiper = new Swiper(".tv_slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".tv_btn_next",
    prevEl: ".tv_btn_prev",
  },
});

var swiper = new Swiper(".nda_slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".nda_slider_btn_next",
    prevEl: ".nda_slider_btn_prev",
  },
});

var swiper = new Swiper(".nda_connect_slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".nda_slider_btn_next1",
    prevEl: ".nda_slider_btn_prev1",
  },
});

var swiper = new Swiper(".deal_slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".nda_slider_btn_next2",
    prevEl: ".nda_slider_btn_prev2",
  },
});

$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();
  if (scroll >= 150) {
    sticky.addClass("fixed_header");
    // $("body").css("", header_height);
  } else {
    sticky.removeClass("fixed_header");
    $("body").css("", "0");
  }
});

// Search open
const search = document.querySelector(".search");
const bar = document.querySelector(".search-bar");
const btn = document.querySelector(".search-btn");
function activate() {
  search.classList.toggle("active");
  bar.value = "";
  setTimeout(() => bar.focus(), 750);
}
btn.addEventListener("click", activate, false);
// Search close

var loader = document.getElementById("page_loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

AOS.init();

$(document).ready(function () {
  $(".h_height").matchHeight();
});
