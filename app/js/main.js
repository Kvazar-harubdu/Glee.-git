$(function () {

  $('.burger-menu').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.burger-menu').toggleClass('burger-menu--open');
  });

  $('.furniture__slider').slick({
    arrows: false,
    dots: true,
  });

  $('.partners__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }]
  });

  var mixer1 = mixitup('.gallery__inner', {
    selectors: {
      control: '.filter__btn'
    }
  });
  var mixer2 = mixitup('.design__inner', {
    selectors: {
      control: '.filter__button'
    }
  });

})