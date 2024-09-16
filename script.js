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

        1120: {
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

document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // Get all portfolio items and their images
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const images = Array.from(portfolioItems).map(item => item.querySelector('img').src);

  let currentIndex = 0;

  // Function to open modal and set the current image
  function openModal(index) {
      modal.style.display = 'block';
      modalImg.src = images[index];
      currentIndex = index;
  }

  // Add click event listeners to all portfolio items
  portfolioItems.forEach((item, index) => {
      item.addEventListener('click', function() {
          openModal(index);
      });
  });

  // Close modal when the "close" span is clicked
  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  // Close modal when clicking outside the image
  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });

  // Navigate to previous image
  prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex];
  });

  // Navigate to next image
  nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex];
  });
});
