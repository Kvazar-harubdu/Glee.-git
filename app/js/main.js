$(function () {

  $('.filter-products__stars').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true
  });


  $('.filter-prise__input').ionRangeSlider({
    type: "double",
    prefix: "$",

    onStart: function (data) {
      $('.filter-prise__from').text(data.from);
      $('.filter-prise__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-prise__from').text(data.from);
      $('.filter-prise__to').text(data.to);
    },
  });


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
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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