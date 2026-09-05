import '../assets/scss/main.scss';

// components
import {useTheme} from './components/theme';
import {useBurger} from './components/burger';
import {useInsightSlider} from './components/home/slider';
import {useTestimonialsSlider} from './components/home/slider';
import {useFooterMenu} from './components/footer-menu';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useFooterMenu();
