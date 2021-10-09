$(document).ready(function () {
  const hotelSwiper = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,  
    simulateTouch: true,

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
    simulateTouch: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
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

  const map = $('.map');
    if (!map.attr('data-load')) {
    map.mouseenter(() => {
    map.attr('data-load', true);
    map.replaceWith(`<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5676522.168545385!2d-82.22684935246507!3d24.845122340293962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfd2f9e85f1f29b7!2sHilton%20Miami%20Downtown!5e0!3m2!1sru!2sru!4v1607509293969!5m2!1sru!2sru" aria-hidden="false" tabindex="0"></iframe>`);
     });
       map.click(() => {
    map.attr('data-load', true);
    map.replaceWith(`<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5676522.168545385!2d-82.22684935246507!3d24.845122340293962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfd2f9e85f1f29b7!2sHilton%20Miami%20Downtown!5e0!3m2!1sru!2sru!4v1607509293969!5m2!1sru!2sru" aria-hidden="false" tabindex="0"></iframe>`);
    });
  }

});