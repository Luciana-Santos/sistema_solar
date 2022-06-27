import Accordion from './modules/accordion';
import initAnimaNumeros from './modules/animaNumeros';
import initDropdownMenu from './modules/dropdownMenu';
import initFetchNumeros from './modules/fetchNumeros';
import initFuncionamento from './modules/funcionamento';
import initMenuMobile from './modules/menuMobile';
import initModal from './modules/modal';
import initScrollAnimation from './modules/scrollAnimation';
import ScrollSuave from './modules/scrollSuave';
import initTabNav from './modules/tabNav';
import initTooltip from './modules/tootip';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initDropdownMenu();
initMenuMobile();
initTabNav();
initAnimaNumeros();
initFetchNumeros();
initScrollAnimation();
initFuncionamento();
initTooltip();
initModal();
