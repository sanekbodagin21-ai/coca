import '../assets/scss/pricing.scss';

// components
import {useTheme} from './components/theme';
import {useBurger} from './components/burger';
import {usePriceSwitcher} from './components/pricing/plans';
import {useFooterMenu} from './components/footer-menu';

useTheme();
useBurger();
usePriceSwitcher();
useFooterMenu();