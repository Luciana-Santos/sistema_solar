/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/js/modules/dropdownMenu.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/dropdownMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initDropdownMenu)
/* harmony export */ });
/* harmony import */ var _outsideClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick */ "./src/app/js/modules/outsideClick.js");

function initDropdownMenu() {
  function handleClick(event) {
    var _this = this;

    event.preventDefault();
    this.classList.add('ativo');
    (0,_outsideClick__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ['touchstart', 'click'], function () {
      _this.classList.remove('ativo');
    });
  }

  var dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach(function (menu) {
    ['touchstart', 'click'].forEach(function (userEvent) {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}

/***/ }),

/***/ "./src/app/js/modules/menuMobile.js":
/*!******************************************!*\
  !*** ./src/app/js/modules/menuMobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initMenuMobile)
/* harmony export */ });
/* harmony import */ var _outsideClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick */ "./src/app/js/modules/outsideClick.js");

function initMenuMobile() {
  var menuBtn = document.querySelector('[data-menu="btn"]');
  var menuList = document.querySelector('[data-menu="list"]');
  var events = ['click', 'touchstart'];
  var active = 'ativo';

  if (menuBtn) {
    var openMenu = function openMenu() {
      menuList.classList.add(active);
      menuBtn.classList.add(active);
      (0,_outsideClick__WEBPACK_IMPORTED_MODULE_0__["default"])(menuList, events, function () {
        menuList.classList.remove(active);
        menuBtn.classList.remove(active);
      });
    };

    events.forEach(function (userEvent) {
      menuBtn.addEventListener(userEvent, openMenu);
    });
  }
}

/***/ }),

/***/ "./src/app/js/modules/outsideClick.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/outsideClick.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ outsideClick)
/* harmony export */ });
function outsideClick(element, events, callback) {
  var html = document.documentElement;
  var outside = 'data-outside';

  function handleOusideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach(function (userEvent) {
        html.removeEventListener(userEvent, handleOusideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach(function (userEvent) {
      setTimeout(function () {
        return html.addEventListener(userEvent, handleOusideClick);
      });
    });
    element.setAttribute(outside, '');
  }
}

/***/ }),

/***/ "./src/app/js/modules/scrollSuave.js":
/*!*******************************************!*\
  !*** ./src/app/js/modules/scrollSuave.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initScrollSuave)
/* harmony export */ });
function initScrollSuave() {
  var linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    var section = document.querySelector(href);
    var sectionTop = section.offsetTop - 60;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }

  linksInternos.forEach(function (link) {
    link.addEventListener('click', scrollToSection);
  });
}

/***/ }),

/***/ "./src/app/js/modules/tabNav.js":
/*!**************************************!*\
  !*** ./src/app/js/modules/tabNav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTabNav)
/* harmony export */ });
function initTabNav() {
  var planetas = document.querySelectorAll('[data-tab="menu"] li');
  var planetasDesc = document.querySelectorAll('[data-tab="content"] section');
  var ativo = 'ativo';

  if (planetas.length === planetasDesc.length) {
    var ativarTab = function ativarTab(index) {
      planetasDesc.forEach(function (section) {
        section.classList.remove(ativo);
      });
      var direcao = planetasDesc[index].dataset.anime;
      planetasDesc[index].classList.add('ativo', direcao);
    };

    planetasDesc[0].classList.add(ativo);
    planetas.forEach(function (menuItem, index) {
      menuItem.addEventListener('click', function () {
        return ativarTab(index);
      });
    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/app/js/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./src/app/js/modules/dropdownMenu.js");
/* harmony import */ var _modules_menuMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuMobile */ "./src/app/js/modules/menuMobile.js");
/* harmony import */ var _modules_scrollSuave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollSuave */ "./src/app/js/modules/scrollSuave.js");
/* harmony import */ var _modules_tabNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabNav */ "./src/app/js/modules/tabNav.js");




(0,_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_menuMobile__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_scrollSuave__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_tabNav__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map