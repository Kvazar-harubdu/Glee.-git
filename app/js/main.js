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
      control: '.filter__btn'
    }
  });


  $('.partners__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

})