import '../assets/scss/detail.scss';

// components
import {useTheme} from './components/theme';
import {useBurger} from './components/burger';
import {copyLink} from './components/detail/copylink';
import {useFooterMenu} from './components/footer-menu';

useTheme();
useBurger();
copyLink();
useFooterMenu();