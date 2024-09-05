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
    slidesPerView: 1,
    speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
      },
});

const btn = document.querySelector(".solid-menu-btn");
const closeBtn = document.querySelector(".mobile-close-btn");
const mob = document.querySelector(".mobile-menu");
const mobLi = document.querySelector('.mobile-menu-nav-list');
const mainDoc = document.querySelector('main');



function mobileMenuOpen() {
 mob.classList.add("is-open") 
}
function mobileMenuClose() {
 mob.classList.remove("is-open") 
}
btn.addEventListener("click", mobileMenuOpen);
closeBtn.addEventListener("click", mobileMenuClose);

mainDoc.addEventListener('click', (e) => {

    if (e.target !== mob) {
        mob.classList.remove("is-open")
        return;
    }
})

mobLi.addEventListener('click', (e) => {
        mob.classList.remove("is-open")
        return;
})