import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useAboutHeroSlider = () => {
    new Swiper('.hero__slider', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.hero__slider-button-next',
            prevEl: '.hero__slider-button-prev',
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 82,
            },
            993: {
                slidesPerView: 'auto',
                spaceBetween: 32,
            },
        },
    });
};

export const useAboutTeamSlider = () => {
    new Swiper('.our-team__slider', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.our-team__slider-button-next',
            prevEl: '.our-team__slider-button-prev',
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 112,
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    });
};
