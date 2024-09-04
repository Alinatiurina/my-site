// document.addEventListener('DOMContentLoaded', () => {
//     const list = document.querySelector('.advantages-list');
//     const items = document.querySelectorAll('.advantages-item');
//     const prevBtn = document.querySelector('.prev');
//     const nextBtn = document.querySelector('.next');
//     let currentIndex = 0;
//     const itemsToShow = 3;
//     const totalItems = items.length;
//     let autoplay;

//     // Додаємо копії елементів для безперервної прокрутки
//     const firstClone = items[0].cloneNode(true);
//     const lastClone = items[totalItems - 1].cloneNode(true);

//     list.appendChild(firstClone);
//     list.insertBefore(lastClone, items[0]);

//     // Оновлення позиції слайдера
//     const updateSliderPosition = () => {
//         list.style.transform = `translateX(${-currentIndex * (100 / itemsToShow)}%)`;
//     };

//     // Наступний слайд
//     const nextSlide = () => {
//         if (currentIndex >= totalItems) {
//             currentIndex = 0;
//             list.style.transition = 'none'; // Без анімації для стрибка на початок
//             updateSliderPosition();
//             setTimeout(() => {
//                 list.style.transition = 'transform 0.3s ease-in-out'; // Повертаємо анімацію
//                 currentIndex++;
//                 updateSliderPosition();
//             }, 20);
//         } else {
//             currentIndex++;
//             updateSliderPosition();
//         }
//     };

//     // Попередній слайд
//     const prevSlide = () => {
//         if (currentIndex <= 0) {
//             currentIndex = totalItems;
//             list.style.transition = 'none'; // Без анімації для стрибка в кінець
//             updateSliderPosition();
//             setTimeout(() => {
//                 list.style.transition = 'transform 0.3s ease-in-out'; // Повертаємо анімацію
//                 currentIndex--;
//                 updateSliderPosition();
//             }, 20);
//         } else {
//             currentIndex--;
//             updateSliderPosition();
//         }
//     };

//     // Кнопки управління
//     nextBtn.addEventListener('click', nextSlide);
//     prevBtn.addEventListener('click', prevSlide);

//     // Автоплей
//     const startAutoplay = () => {
//         autoplay = setInterval(nextSlide, 3000);
//     };

//     const stopAutoplay = () => {
//         clearInterval(autoplay);
//     };

//     list.addEventListener('mouseenter', stopAutoplay);
//     list.addEventListener('mouseleave', startAutoplay);

//     startAutoplay();
//     updateSliderPosition();
// });


const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
//   autoplay: {
//      delay: 2500,
//      disableOnInteraction: false,
//     },
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