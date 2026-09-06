import '/scss/contact.scss';

// components
import {useTheme} from './components/theme';
import {useBurger} from './components/burger';
import { initMap } from "./components/contact/map";
import {usePhone} from './components/contact/phone';
import {useValidity} from './components/contact/validity';
import {useFooterMenu} from './components/footer-menu';


useTheme();
useBurger();
usePhone();
initMap();
useValidity();
useFooterMenu();
