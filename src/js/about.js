import '../assets/scss/about.scss';

// components
import {useTheme} from './components/theme';
import {useBurger} from './components/burger';
import {useAboutHeroSlider} from './components/about/slider';
import {useAboutTeamSlider} from './components/about/slider';

useTheme();
useBurger();
useAboutHeroSlider();
useAboutTeamSlider();