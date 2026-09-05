import '../assets/scss/blog.scss';

// components
import {useTheme} from './components/theme';
import {useBurger} from './components/burger';
import {useBlogHeroSlider} from './components/blog/slider';
import {useBlogArticlesSlider} from './components/blog/slider';
import {useFooterMenu} from './components/footer-menu';

useTheme();
useBurger();
useBlogHeroSlider();
useBlogArticlesSlider();
useFooterMenu();