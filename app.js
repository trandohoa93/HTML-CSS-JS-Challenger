var swiper = new Swiper(".partners-container", {
  slidesPerView: 6,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  on: {
      slideChange: function() {
          document.querySelectorAll('.swiper-slide').forEach(function(slide) {
              slide.classList.remove('swiper-slide-highlighted');
          });
          var centerSlide = this.slides[this.activeIndex+2];
          centerSlide.classList.add('swiper-slide-highlighted');
      }
  },
  navigation: {
      nextEl: ".partners__btn .nextBtn",
      prevEl: ".partners__btn .prevBtn",
  },
  breakpoints: {  
      480: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
      768: {
          slidesPerView: 6, 
          spaceBetween: 50,
      },
  },
});

var swiper2 = new Swiper(".quotes-container", {
  slidesPerView: 3,
  spaceBetween: 150,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
      nextEl: ".quotes__btn .nextBtn",
      prevEl: ".quotes__btn .prevBtn",
  },
  breakpoints: {  
      480: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 50,
      },
  },
});


var swiper3 = new Swiper(".course-container", {
  slidesPerView: 3,
  spaceBetween: 150,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
      nextEl: ".course__btn .nextBtn",
      prevEl: ".course__btn .prevBtn",
  },
  scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
  },
  breakpoints: {  
      480: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 50,
      },
  },
});


window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

const navEl = document.querySelector('.header__navbar-wrapper');
const hambugerEl = document.querySelector('.mobile-menu')
const open = document.querySelector('.fa-bars')
const close = document.querySelector('.fa-x')

let isOpen = false
hambugerEl.addEventListener('click', () => {
  navEl.classList.toggle("nav--open")

  if (!isOpen) {
    open.classList.toggle("btn--hide")
    close.classList.remove("btn--hide")
    isOpen = true
  } else {
    open.classList.remove("btn--hide")
    close.classList.toggle("btn--hide")
    isOpen = false
  }

 
 
})

