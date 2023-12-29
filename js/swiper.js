var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,   
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
        scale: 0.9,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        1500: {
            slidesPerView: 5,
        },
        1440: {
            slidesPerView: 4,
        },
        1320: {
            slidesPerView: 3.75,
        },
        1024: {
            slidesPerView: 3.25,
        },
        768: {
            slidesPerView: 2.5,
        },
        640: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1.25,
        }
    }
});
var swiper = new Swiper(".mySwiper2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
        1320: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
    }
});
var swiper = new Swiper(".mySwiper3", {
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 1.75,
        },
        576: {
            slidesPerView: 2,
        }
    }
});