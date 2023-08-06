// SWIPER

const swiperAlbum = new Swiper('.album__swiper', {
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,
  
  breakpoints: {
    1450: {
      spaceBetween: 30,
    },
    992: {
    },
    768: {
    }
  }
});