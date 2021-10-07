$(document).ready(function () {
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
  
  // скрипт открытия меню в мобильной версии
  var menuButton = document.querySelector(".menu-button");
  
  menuButton.addEventListener("click", function () {
    console.log("click");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  // скипт модального окна
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var closeModalOverlay = $(".modal__overlay--close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalOverlay.on("click", closeModal);

  // функция открытия окна
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $('body').css('overflow', 'hidden');
  };
  
  // функция закрытия окна
  function closeModal(event) {
    $('body').css('overflow', 'auto');
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  // обработка валидации форм
  $('.form').each(function() {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Minimal lenght of name 2 symbol"
      },
      phone: {
        required: "Please input your phone",
        minlength: "An 10-digit number"
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });    
  });

  $(".newsletter-subscribe").validate({
    errorClass: "invalid",
    messages: {
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
    },
  });    
  

  $(document).ready(function(){
    $(".input-phone").click(function(){
    $(this).setCursorPosition(3);
    }).mask("+7(999) 999-9999");
    });

  $('.input-phone').on('click', function() {
    $('.input-phone').attr("placeholder", "+7 (999) 999-9999");
    });
  
  // AOS.init();

  AOS.init({
  disable: function() {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
    }
  });

});