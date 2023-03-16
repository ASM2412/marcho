$(function(){

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.footer-top__title').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle()
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><g><path d="M 0.332031 8.207031 C -0.109375 8.644531 -0.109375 9.359375 0.332031 9.796875 L 5.957031 15.421875 C 6.394531 15.863281 7.109375 15.863281 7.546875 15.421875 C 7.988281 14.984375 7.988281 14.269531 7.546875 13.832031 L 2.71875 9 L 7.542969 4.167969 C 7.984375 3.730469 7.984375 3.015625 7.542969 2.578125 C 7.105469 2.136719 6.390625 2.136719 5.953125 2.578125 L 0.328125 8.203125 Z M 0.332031 8.207031 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><g><path d="M 8.667969 8.207031 C 9.109375 8.644531 9.109375 9.359375 8.667969 9.796875 L 3.042969 15.421875 C 2.605469 15.863281 1.890625 15.863281 1.453125 15.421875 C 1.011719 14.984375 1.011719 14.269531 1.453125 13.832031 L 6.28125 9 L 1.457031 4.167969 C 1.015625 3.730469 1.015625 3.015625 1.457031 2.578125 C 1.894531 2.136719 2.609375 2.136719 3.046875 2.578125 L 8.671875 8.203125 Z M 8.667969 8.207031 "/></g></svg></button>',
    infinite: false,
  });


  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  })
  
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [{
      breakpoint: 1051,
        settings: {
          draggable: true
        }
    }]
  });

  
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.buttom-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });


  $('.select-style, .product-one__item-num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
  })

   $('.top-slider__inner').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
   })

   $(".star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true     
    });


    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    }
    
    function initializeClock(id, endtime) {
      const clock = document.querySelector('.promo__clock');
      const daysSpan = clock.querySelector('.promo__days');
      const hoursSpan = clock.querySelector('.promo__hours');
      const minutesSpan = clock.querySelector('.promo__minutes');
      const secondsSpan = clock.querySelector('.promo__seconds');
    
      function updateClock() {
        const t = getTimeRemaining(endtime);
    
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
    
      updateClock();
      const timeinterval = setInterval(updateClock, 1000);
    }
    
    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);
    
});