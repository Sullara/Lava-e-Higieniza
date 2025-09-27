// Animations

const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver( (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
})

elements.forEach( (element) => myObserver.observe(element));

// Services Slider

var swiper = new Swiper(".swiper", {
    loop: true, 

    grabCursor: true, 

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination", 
        // clickable: true, 
        dynamicBullets: true,
        
    }, 

    breakpoints: {
        // when window width is >= 320px
        400: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        700: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        // when window width is >= 640px
        1000: {
          slidesPerView: 3,
          spaceBetween: 0
        },

        1300: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      }
});