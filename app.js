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
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})