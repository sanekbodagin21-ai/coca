export const useFooterMenu = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const footerTitles = document.querySelectorAll('.footer__item-title');

        footerTitles.forEach((title) => {
            title.addEventListener('click', () => {
                const sublist = title.nextElementSibling;

                if (!sublist || !sublist.classList.contains('footer__sublist'))
                    return;

                const isOpen = sublist.classList.contains('is-open');

                footerTitles.forEach((otherTitle) => {
                    if (otherTitle !== title) {
                        otherTitle.classList.remove('is-active');
                        otherTitle.nextElementSibling?.classList.remove(
                            'is-open',
                        );
                    }
                });

                title.classList.toggle('is-active', !isOpen);
                sublist.classList.toggle('is-open', !isOpen);
            });
        });
    });
};
