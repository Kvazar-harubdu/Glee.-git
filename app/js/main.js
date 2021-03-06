$(function () {

  $('.product-tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__link').removeClass('product-tabs__link--active');
    $(this).addClass('product-tabs__link--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

  $('.product-slider__wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  });


  $('.blog-btn__open').on('click', function () {
    $('.blog-aside').addClass('blog-aside--active');
  });

  $('.blog-btn__close').on('click', function () {
    $('.blog-aside').removeClass('blog-aside--active');
  });

  $('.catalog__open').on('click', function () {
    $('.catalog__filter').addClass('catalog__filter--active');
  });

  $('.catalog__close').on('click', function () {
    $('.catalog__filter').removeClass('catalog__filter--active');
  });

  $('.product__small-slider').slick({
    asNavFor: '.product__big-slider',
    arrows: false,
    focusOnSelect: true,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    responsive: [{
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        infinite: true,
        speed: 500,
        asNavFor: null,
      },
    }]
  });
  $('.product__big-slider').slick({
    asNavFor: '.product__small-slider',
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    fade: true,
  });

  $('.catalog__filter-btn').on('click', function () {
    $('.catalog__filter-btn').removeClass('catalog__filter-btn--active');
    $(this).addClass('catalog__filter-btn--active');
  });

  $('.catalog__filter-btn--list').on('click', function () {
    $('.product-card').addClass('product-card--list');
  });

  $('.catalog__filter-btn--grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
  });

  $('.catalog__filter-btn--list').on('click', function () {
    $('.pagination').addClass('pagination--size');
  });

  $('.catalog__filter-btn--grid').on('click', function () {
    $('pagination').removeClass('pagination--size');
  });

  $('.catalog__filter-btn--list').on('click', function () {
    $('.bread-crumbs__title,.bread-crumbs__link:contains("Product list 1")').html('Product list 2');
  });
  $('.catalog__filter-btn--grid').on('click', function () {
    $('.bread-crumbs__title,.bread-crumbs__link:contains("Product list 2")').html('Product list 1');
  });

  $('.catalog__filter-btn--list').on('click', function () {
    $('.product-card__price:contains("$29.00")').html('23$');
  });
  $('.catalog__filter-btn--grid').on('click', function () {
    $('.product-card__price:contains("23$")').html('$29.00');
  });

  $('.catalog__select, .product__number').styler();

  $('.top-product__stars').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true
  });

  $('.product-card__stars').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    readOnly: true
  });

  $('.filter-prise__input').ionRangeSlider({
    prefix: "$",
    prettify_enabled: true,
    prettify_separator: '.',
    onStart: function (data) {
      $('.filter-prise__symbol--from').text(data.from);
      $('.filter-prise__symbol--to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-prise__symbol--from').text(data.from);
      $('.filter-prise__symbol--to').text(data.to);
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
      control: '.mix-filter__btn'
    }
  });
  var mixer2 = mixitup('.design__inner', {
    selectors: {
      control: '.mix-filter__button'
    }
  });

})