const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
   autoHeight: true,
  });
  
$('.parallax-window').parallax({imageSrc: '/img/newsletter-bg.jpg'});
  
var menuButton = document.querySelector(".menu-button");
  
menuButton.addEventListener("click", function () {
  console.log("click");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
  });
  
