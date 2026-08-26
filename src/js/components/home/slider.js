import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const useTestimonialsSlider = () => {
    requestAnimationFrame(() => {
        const slider = document.querySelector('.testimonials__slider');
        if (!slider) return;

        new Swiper(slider, {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 22,
            loop: true,
            navigation: {
                prevEl: '.testimonials__button--prev',
                nextEl: '.testimonials__button--next',
            },
        });
    });
};