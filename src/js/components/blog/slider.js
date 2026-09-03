import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useBlogHeroSlider = () => {
    let swiperInstance = null;
    let originalSlides = [];

    const getVisibleSlides = (category) => {
        if (category === 'all') {
            return originalSlides;
        }
        return originalSlides.filter(
            (slide) => slide.dataset.category === category
        );
    };

    const updateButtonsVisibility = (count) => {
        const buttonsContainer = document.querySelector('.hero__slider-buttons');
        if (buttonsContainer) {
            if (count <= 2) {
                buttonsContainer.style.display = 'none';
            } else {
                buttonsContainer.style.display = '';
            }
        }
    };

    const renderSlides = (category) => {
        const wrapper = document.querySelector('.hero__slider-wrapper');
        if (!wrapper || !swiperInstance) return;

        const slidesToShow = getVisibleSlides(category);
        const slidesCount = slidesToShow.length;

        updateButtonsVisibility(slidesCount);

        wrapper.innerHTML = '';

        if (slidesToShow.length === 0) {
            swiperInstance.update();
            return;
        }

        slidesToShow.forEach((slide) => {
            wrapper.appendChild(slide.cloneNode(true));
        });

        swiperInstance.update();
        swiperInstance.slideTo(0, 0);
    };

    const initSwiper = () => {
        const wrapper = document.querySelector('.hero__slider-wrapper');

        if (wrapper) {
            originalSlides = Array.from(
                wrapper.querySelectorAll('.swiper-slide')
            ).map((slide) => slide.cloneNode(true));
        }

        swiperInstance = new Swiper('.hero__slider', {
            slidesPerView: 1,
            spaceBetween: 32,
            centeredSlides: true,
            loop: true,
            modules: [Navigation],
            navigation: {
                nextEl: '.hero__slider-button-next',
                prevEl: '.hero__slider-button-prev',
            },
            breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 42,
                centeredSlides: false,
            },
            993: {
                slidesPerView: 'auto',
                spaceBetween: 32,
                centeredSlides: false,
            },
        },
        });
    };

    const setupFilters = () => {
        const categories = document.querySelectorAll('.hero__categories-button');

        categories.forEach((cat) => {
            cat.addEventListener('click', function () {
                const category = this.dataset.category;

                categories.forEach((c) => {
                    c.classList.remove('hero__categories-button--active');
                });
                
                this.classList.add('hero__categories-button--active');

                renderSlides(category);
            });
        });
    };

    const init = () => {
        initSwiper();
        setupFilters();

        const allCategory = document.querySelector(
            '.hero__categories-button[data-category="all"]'
        );
        if (allCategory) {
            allCategory.classList.add('hero__categories-button--active');
        }
    };

    init();

    return {
        getSwiper: () => swiperInstance,
        renderSlides,
    };
};

export const useBlogArticlesSlider = () => {
    new Swiper('.articles__slider', {
        slidesPerView:1,
        spaceBetween: 32,
        loop: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.slider__button-other--next',
            prevEl: '.slider__button-other--prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            993: {
                slidesPerView: 3,
            },
        },
    });
};