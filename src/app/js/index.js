import Accordion from './modules/accordion';
import initAnimaNumeros from './modules/animaNumeros';
import initDropdownMenu from './modules/dropdownMenu';
import initFetchNumeros from './modules/fetchNumeros';
import initFuncionamento from './modules/funcionamento';
import initMenuMobile from './modules/menuMobile';
import Modal from './modules/modal';
import initScrollAnimation from './modules/scrollAnimation';
import ScrollSuave from './modules/scrollSuave';
import TabNav from './modules/tabNav';
import initTooltip from './modules/tootip';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFetchNumeros();
initScrollAnimation();
initFuncionamento();
initTooltip();
