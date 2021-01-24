$(function () {

  $('.furniture__slider').slick({
    arrows: false,
    dots: true,
  });

  var mixer1 = mixitup('.gallery__inner', {
    selectors: {
      control: '.filter__btn'
    }
  });
  var mixer2 = mixitup('.design__inner', {
    selectors: {
      control: '.design__btn'
    }
  });


})