export const usePriceSwitcher = () => {
    const switcher = document.querySelector('[data-price="switcher"]');
    const starterPrice = document.querySelector('[data-price="starter"]');
    const popularPrice = document.querySelector('[data-price="popular"]');
    const enterpricePrice = document.querySelector('[data-price="enterprice"]');
    
    const priceList = {
        starter: {
            default: 120,
            withSale: 100,
        },
        popular: {
            default: 1680,
            withSale: 1400,
        },
        enterprice: {
            default: 2520,
            withSale: 2100,
        },
    };

    const setPricesWithSale = () => {
        starterPrice.textContent = priceList.starter.withSale;
        popularPrice.textContent = priceList.popular.withSale;
        enterpricePrice.textContent = priceList.enterprice.withSale;
    };

    const setDefaultPrices = () => {
        starterPrice.textContent = priceList.starter.default;
        popularPrice.textContent = priceList.popular.default;
        enterpricePrice.textContent = priceList.enterprice.default;
    };

    switcher.checked = true;
    setPricesWithSale();

    switcher.addEventListener('click', () => {
        if (switcher.checked) {
            setPricesWithSale();
        } else {
            setDefaultPrices();
        }
    });
};
