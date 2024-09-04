const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.slider-btn-next',
        prevEl: '.slider-btn-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    keyboard: true,
    mousewheel: true,
    slidesPerView: 3,
    speed: 1000,
    //   breakpoints: {
    //     320: {
    //       slidesPerView: 1,
    //     },
    //     768: {
    //       slidesPerView: 3,
    //     },
    //     1440: {
    //       slidesPerView: 3,
    //     },
    //   },
});
