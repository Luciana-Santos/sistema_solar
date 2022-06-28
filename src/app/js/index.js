import Accordion from './modules/accordion';
import initDropdownMenu from './modules/dropdownMenu';
import fetchNumeros from './modules/fetchNumeros';
import initFuncionamento from './modules/funcionamento';
import fetchImagemDia from './modules/imagemDia';
import initMenuMobile from './modules/menuMobile';
import Modal from './modules/modal';
import ScrollAnima from './modules/scrollAnima';
import ScrollSuave from './modules/scrollSuave';
import TabNav from './modules/tabNav';
import Tooltip from './modules/tooltip';

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

const imagemDia = new Modal(
  '[data-imagem="abrir"]',
  '[data-imagem="fechar"]',
  '[data-imagem="container"]',
);
imagemDia.init(
  fetchImagemDia(
    'https://api.nasa.gov/planetary/apod?api_key=uzJcucGC2ANpgzcKtUPE7eRXBvbxUPan52hQm7sx',
    '[data-imagem="img"]',
  ),
);

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchNumeros('./dados.json', '.numeros__wrapper');
