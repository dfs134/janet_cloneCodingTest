const swiper1 = new Swiper('.swiper1', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
    delay: 2000
    },
}); 

const swiper2 = new Swiper('.swiper2', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 2500
    },
}); 

const swiper3 = new Swiper('.swiper3', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 3000
    },
}); 

const swiper4 = new Swiper('.swiper4', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10, 
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 2500
    },
}); 