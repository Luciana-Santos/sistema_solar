<<<<<<< Updated upstream
/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={591:(t,e,n)=>{var o=n(8).default;function r(){"use strict";t.exports=r=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function h(t,e,n,o){var r=e&&e.prototype instanceof v?e:v,i=Object.create(r.prototype),a=new A(o||[]);return i._invoke=function(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return{value:void 0,done:!0}}for(n.method=r,n.arg=i;;){var a=n.delegate;if(a){var s=M(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var c=d(t,e,n);if("normal"===c.type){if(o=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f={};function v(){}function p(){}function m(){}var y={};l(y,s,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(S([])));b&&b!==n&&i.call(b,s)&&(y=b);var w=m.prototype=v.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(r,a,s,c){var u=d(t[r],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==o(h)&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var r;this._invoke=function(t,o){function i(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(i,i):i()}}function M(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,M(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=m,l(w,"constructor",m),l(m,"constructor",p),p.displayName=l(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},L(E.prototype),l(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new E(h(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(w),l(w,u,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=S,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var s=i.call(r,"catchLoc"),c=i.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&i.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;k(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,n)=>{var o=n(591)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}var r=function(){function e(n){t(this,e),this.accordionList=document.querySelectorAll(n),this.activeClass="ativo"}return o(e,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}},{key:"addAccordionEvent",value:function(){var t=this;this.accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}]),e}();function i(t,e,n,o,r,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){i(a,o,r,s,c,"next",t)}function c(t){i(a,o,r,s,c,"throw",t)}s(void 0)}))}}var s=n(757),c=n.n(s),u=function(){function e(n,o,r){t(this,e),this.numeros=document.querySelectorAll(n),this.observerTarget=document.querySelector(o),this.observerClass=r,this.handleMutation=this.handleMutation.bind(this)}return o(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addMutationObserver",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=Math.floor(e/120),o=0,r=setInterval((function(){o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())}}]),e}(),l=function(){function e(n,o,r){t(this,e),this.abrirBtn=document.querySelector(n),this.fecharBtn=document.querySelector(o),this.containerModal=document.querySelector(r),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}return o(e,[{key:"toggleModal",value:function(){this.containerModal.classList.toggle("ativo")}},{key:"eventToggleModal",value:function(t){t.preventDefault(),this.toggleModal()}},{key:"cliqueForaModal",value:function(t){t.preventDefault(),t.target===this.containerModal&&this.toggleModal()}},{key:"addModalEvent",value:function(){this.abrirBtn.addEventListener("click",this.eventToggleModal),this.fecharBtn.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}},{key:"init",value:function(){return this.abrirBtn&&this.fecharBtn&&this.containerModal&&this.addModalEvent(),this}}]),e}();function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var d=function(){function e(n){var o,r;t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.6*window.innerHeight,this.checkDistance=(o=this.checkDistance.bind(this),50,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];r&&clearTimeout(r),r=setTimeout((function(){o.apply(void 0,e),r=null}),50)})}return o(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowMetade)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}(),f=function(){function e(n){t(this,e),this.linksInternos=document.querySelectorAll(n)}return o(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=this.getAttribute("href"),n=document.querySelector(e).offsetTop-60;window.scrollTo({top:n,behavior:"smooth"})}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}(),v=function(){function e(n,o){t(this,e),this.planetas=document.querySelectorAll(n),this.planetasDesc=document.querySelectorAll(o),this.ativo="ativo"}return o(e,[{key:"ativarTab",value:function(t){var e=this;this.planetasDesc.forEach((function(t){t.classList.remove(e.ativo)}));var n=this.planetasDesc[t].dataset.anime;this.planetasDesc[t].classList.add(this.ativo,n)}},{key:"addTabNavEvent",value:function(){var t=this;this.planetas.forEach((function(e,n){e.addEventListener("click",(function(){return t.ativarTab(n)}))}))}},{key:"init",value:function(){return this.planetas.length&&this.planetasDesc.length&&(this.ativarTab(0),this.addTabNavEvent()),this}}]),e}(),p=function(){function e(n){t(this,e),this.tootips=document.querySelectorAll(n),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}return o(e,[{key:"onMouseMove",value:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),t.pageX+240>window.innerWidth?this.tooltipBox.style.left="".concat(t.pageX-180,"px"):this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},{key:"onMouseLeave",value:function(t){var e=t.currentTarget;this.tooltipBox.remove(),e.removeEventListener("mouseleave",this.onMouseLeave),e.removeEventListener("mousemove",this.onMouseMove)}},{key:"criarTooltipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.tooltipBox=e}},{key:"onMouseOver",value:function(t){var e=t.currentTarget;this.criarTooltipBox(e),e.addEventListener("mousemove",this.onMouseMove),e.addEventListener("mouseleave",this.onMouseLeave)}},{key:"addTooltipsEvent",value:function(){var t=this;this.tootips.forEach((function(e){e.addEventListener("mouseover",t.onMouseOver)}))}},{key:"init",value:function(){return this.tootips.length&&this.addTooltipsEvent(),this}}]),e}();function m(t,e,n){var o=document.documentElement,r="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){o.removeEventListener(t,i)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){return o.addEventListener(t,i)}))})),t.setAttribute(r,""))}var y,g,b=function(){function e(n,o){t(this,e),this.dropdownMenus=document.querySelectorAll(n),this.activeClass="ativo",this.events=void 0===o?["touchstart","click"]:o,this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}return o(e,[{key:"activeDropdownMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),m(n,this.events,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropdownMenusEvent",value:function(){var t=this;this.dropdownMenus.forEach((function(e){t.events.forEach((function(n){e.addEventListener(n,t.activeDropdownMenu)}))}))}},{key:"init",value:function(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}]),e}(),w=function(){function e(n,o,r){t(this,e),this.menuBtn=document.querySelector('[data-menu="btn"]'),this.menuList=document.querySelector('[data-menu="list"]'),this.activeClass="ativo",this.events=void 0===r?["touchstart","click"]:r,this.openMenu=this.openMenu.bind(this)}return o(e,[{key:"openMenu",value:function(){var t=this;this.menuList.classList.add(this.activeClass),this.menuBtn.classList.add(this.activeClass),m(this.menuList,this.events,(function(){t.menuList.classList.remove(t.activeClass),t.menuBtn.classList.remove(t.activeClass)}))}},{key:"addMenuMobileEvents",value:function(){var t=this;this.events.forEach((function(e){t.menuBtn.addEventListener(e,t.openMenu)}))}},{key:"init",value:function(){return this.menuBtn&&this.menuList&&this.addMenuMobileEvents(),this}}]),e}(),L=function(){function e(n,o){t(this,e),this.funcionamento=document.querySelector(n),this.activeClass=o}return o(e,[{key:"dadosFuncionamento",value:function(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}},{key:"dadosAgora",value:function(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}},{key:"estaAberto",value:function(){var t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}},{key:"ativaAberto",value:function(){this.estaAberto()&&this.funcionamento.classList.add(this.activeClass)}},{key:"init",value:function(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}]),e}();new f('[data-menu="suave"] a[href^="#"]').init(),new r('[data-anime="accordion"] dt').init(),new v('[data-tab="menu"] li','[data-tab="content"] section').init(),new l('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new l('[data-imagem="abrir"]','[data-imagem="fechar"]','[data-imagem="container"]').init(("https://api.nasa.gov/planetary/apod?api_key=uzJcucGC2ANpgzcKtUPE7eRXBvbxUPan52hQm7sx",'[data-imagem="img"]',y=document.querySelector('[data-imagem="img"]'),g=document.querySelector('[data-imagem="titulo"]'),void(y&&fetch("https://api.nasa.gov/planetary/apod?api_key=uzJcucGC2ANpgzcKtUPE7eRXBvbxUPan52hQm7sx").then((function(t){return t.json()})).then((function(t){y.src=t.url,g.innerText=t.title})).catch((function(t){y.src="/dist/assets/img/404.jpg",console.log(t)}))))),new p("[data-tooltip]").init(),new d('[data-anime="scroll"]').init(),new b("[data-dropdown]").init(),new w('[data-menu="btn"]','[data-menu="list"]').init(),new L("[data-semana]","aberto").init(),function(t,e){var n=document.querySelector(".numeros__wrapper");function o(t){var e,o,r=(e=t,(o=document.createElement("div")).classList.add("numero-data"),o.innerHTML="<h2>".concat(e.label,"<span data-numero>").concat(e.total,"</span></h2>"),o);n.appendChild(r)}function r(){new u("[data-numero]",".numeros","ativo").init()}function i(){return(i=a(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.forEach((function(t){return o(t)})),r(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}("./dados.json")})()})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/app/js/modules/accordion.js":
/*!*****************************************!*\
  !*** ./src/app/js/modules/accordion.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Accordion = /*#__PURE__*/function () {
  function Accordion(list) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Accordion);

    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Accordion, [{
    key: "toggleAccordion",
    value: function toggleAccordion(item) {
      item.classList.toggle(this.activeClass);
      item.nextElementSibling.classList.toggle(this.activeClass);
    } // adiciona o evento nos itens da lista

  }, {
    key: "addAccordionEvent",
    value: function addAccordionEvent() {
      var _this = this;

      this.accordionList.forEach(function (item) {
        item.addEventListener('click', function () {
          return _this.toggleAccordion(item);
        });
      });
    } // inicia a função

  }, {
    key: "init",
    value: function init() {
      if (this.accordionList.length) {
        // ativa o primeiro item
        this.toggleAccordion(this.accordionList[0]);
        this.addAccordionEvent();
      }

      return this;
    }
  }]);

  return Accordion;
}();



/***/ }),

/***/ "./src/app/js/modules/animaNumeros.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/animaNumeros.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnimaNumeros)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var AnimaNumeros = /*#__PURE__*/function () {
  function AnimaNumeros(numeros, observerTarget, observerClass) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimaNumeros);

    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass; // bind o this do callback ao this da mutação

    this.handleMutation = this.handleMutation.bind(this);
  } // recebe um elemento do dom com um numero em seu texto
  // incrementa a partir de zero até o numero final


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimaNumeros, [{
    key: "animaNumeros",
    value: // ativa incrementarNumero para cada numero selecionado do dom
    function animaNumeros() {
      var _this = this;

      this.numeros.forEach(function (numero) {
        _this.constructor.incrementarNumero(numero);
      });
    } // função que acontence quando a mutação ocorre

  }, {
    key: "handleMutation",
    value: function handleMutation(mutation) {
      if (mutation[0].target.classList.contains(this.observerClass)) {
        this.observer.disconnect();
        this.animaNumeros();
      }
    } // adiciona o MutationObserver para vefirificar
    // quando a classe 'ativo' é adicionada
    // ao elemento target

  }, {
    key: "addMutationObserver",
    value: function addMutationObserver() {
      this.observer = new MutationObserver(this.handleMutation);
      this.observer.observe(this.observerTarget, {
        attributes: true
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.numeros.length && this.observerTarget) {
        this.addMutationObserver();
      }

      return this;
    }
  }], [{
    key: "incrementarNumero",
    value: function incrementarNumero(numero) {
      var total = +numero.innerText;
      var incremento = Math.floor(total / 120);
      var start = 0;
      var timer = setInterval(function () {
        start += incremento;
        numero.innerText = start;

        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    }
  }]);

  return AnimaNumeros;
}();



/***/ }),

/***/ "./src/app/js/modules/debounce.js":
/*!****************************************!*\
  !*** ./src/app/js/modules/debounce.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(callback, delay) {
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(void 0, args);
      timer = null;
    }, delay);
  };
}

/***/ }),

/***/ "./src/app/js/modules/dropdownMenu.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/dropdownMenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _outsideClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideClick */ "./src/app/js/modules/outsideClick.js");




var DropdownMenu = /*#__PURE__*/function () {
  function DropdownMenu(dropdownMenus, events) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DropdownMenu);

    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'ativo'; // define touchstart e clique como argumento padrão
    // de events caso não seja definido na função

    if (events === undefined) this.events = ['touchstart', 'click'];else this.events = events;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  } // ativa o dropdown menu e adiciona a função
  // que observa o clique fora dele


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DropdownMenu, [{
    key: "activeDropdownMenu",
    value: function activeDropdownMenu(event) {
      var _this = this;

      event.preventDefault();
      var element = event.currentTarget;
      element.classList.add(this.activeClass);
      (0,_outsideClick__WEBPACK_IMPORTED_MODULE_2__["default"])(element, this.events, function () {
        element.classList.remove(_this.activeClass);
      });
    } // adiciona os eventos ao dropdown menu

  }, {
    key: "addDropdownMenusEvent",
    value: function addDropdownMenusEvent() {
      var _this2 = this;

      this.dropdownMenus.forEach(function (menu) {
        _this2.events.forEach(function (userEvent) {
          menu.addEventListener(userEvent, _this2.activeDropdownMenu);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.dropdownMenus.length) {
        this.addDropdownMenusEvent();
      }

      return this;
    }
  }]);

  return DropdownMenu;
}();



/***/ }),

/***/ "./src/app/js/modules/fetchNumeros.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/fetchNumeros.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchNumeros)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animaNumeros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animaNumeros */ "./src/app/js/modules/animaNumeros.js");



function fetchNumeros(url, target) {
  // cria a div contendendo as informações
  function criarDiv(num) {
    var div = document.createElement('div');
    div.classList.add('numero-data');
    div.innerHTML = "<h2>".concat(num.label, "<span data-numero>").concat(num.total, "</span></h2>");
    return div;
  } // preeche cada numero no dom


  var wrapper = document.querySelector(target);

  function preencherNumeros(numero) {
    var divNumero = criarDiv(numero);
    wrapper.appendChild(divNumero);
  } // anima os numeros de cada dado


  function animaDataNumeros() {
    var animaNumeros = new _animaNumeros__WEBPACK_IMPORTED_MODULE_2__["default"]('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  } // faz o fetch dos animais atravez de um arquivo json


  function criarDados() {
    return _criarDados.apply(this, arguments);
  }

  function _criarDados() {
    _criarDados = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var numResponse, numJson;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(url);

            case 3:
              numResponse = _context.sent;
              _context.next = 6;
              return numResponse.json();

            case 6:
              numJson = _context.sent;
              // após transformar em json, ativa as funções
              // para preecher e animar os dados
              numJson.forEach(function (numero) {
                return preencherNumeros(numero);
              });
              animaDataNumeros();
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));
    return _criarDados.apply(this, arguments);
  }

  return criarDados();
}

/***/ }),

/***/ "./src/app/js/modules/funcionamento.js":
/*!*********************************************!*\
  !*** ./src/app/js/modules/funcionamento.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Funcionamento)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Funcionamento = /*#__PURE__*/function () {
  function Funcionamento(funcionamento, activeClass) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Funcionamento);

    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Funcionamento, [{
    key: "dadosFuncionamento",
    value: function dadosFuncionamento() {
      this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
      this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    }
  }, {
    key: "dadosAgora",
    value: function dadosAgora() {
      this.dataAgora = new Date();
      this.diaAgora = this.dataAgora.getDay();
      this.horarioAgora = this.dataAgora.getUTCHours() - 3;
    }
  }, {
    key: "estaAberto",
    value: function estaAberto() {
      var semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
      var horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
      return semanaAberto && horarioAberto;
    }
  }, {
    key: "ativaAberto",
    value: function ativaAberto() {
      if (this.estaAberto()) {
        this.funcionamento.classList.add(this.activeClass);
      }
    }
  }, {
    key: "init",
    value: function init() {
      if (this.funcionamento) {
        this.dadosFuncionamento();
        this.dadosAgora();
        this.ativaAberto();
      }

      return this;
    }
  }]);

  return Funcionamento;
}();



/***/ }),

/***/ "./src/app/js/modules/imagemDia.js":
/*!*****************************************!*\
  !*** ./src/app/js/modules/imagemDia.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchImagemDia)
/* harmony export */ });
function fetchImagemDia(url, target) {
  var imagem = document.querySelector(target);
  var imgF0F = '/dist/assets/img/404.jpg';

  if (imagem) {
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (img) {
      imagem.src = img.url;
    })["catch"](function (error) {
      imagem.src = imgF0F;
      console.log(error);
    });
  }
}

/***/ }),

/***/ "./src/app/js/modules/menuMobile.js":
/*!******************************************!*\
  !*** ./src/app/js/modules/menuMobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuMobile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _outsideClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideClick */ "./src/app/js/modules/outsideClick.js");




var MenuMobile = /*#__PURE__*/function () {
  function MenuMobile(menuBtn, menuList, events) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuMobile);

    this.menuBtn = document.querySelector('[data-menu="btn"]');
    this.menuList = document.querySelector('[data-menu="list"]');
    this.activeClass = 'ativo'; // define touchstart e clique como argumento padrão
    // de events caso não seja definido na função

    if (events === undefined) this.events = ['touchstart', 'click'];else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuMobile, [{
    key: "openMenu",
    value: function openMenu() {
      var _this = this;

      this.menuList.classList.add(this.activeClass);
      this.menuBtn.classList.add(this.activeClass);
      (0,_outsideClick__WEBPACK_IMPORTED_MODULE_2__["default"])(this.menuList, this.events, function () {
        _this.menuList.classList.remove(_this.activeClass);

        _this.menuBtn.classList.remove(_this.activeClass);
      });
    }
  }, {
    key: "addMenuMobileEvents",
    value: function addMenuMobileEvents() {
      var _this2 = this;

      this.events.forEach(function (userEvent) {
        _this2.menuBtn.addEventListener(userEvent, _this2.openMenu);
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.menuBtn && this.menuList) {
        this.addMenuMobileEvents();
      }

      return this;
    }
  }]);

  return MenuMobile;
}();



/***/ }),

/***/ "./src/app/js/modules/modal.js":
/*!*************************************!*\
  !*** ./src/app/js/modules/modal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Modal = /*#__PURE__*/function () {
  function Modal(abrirBtn, fecharBtn, containerModal) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Modal);

    this.abrirBtn = document.querySelector(abrirBtn);
    this.fecharBtn = document.querySelector(fecharBtn);
    this.containerModal = document.querySelector(containerModal); // bind this ao callback
    // para fazer referência
    // ao objeto da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  } // abre ou fecha o modal


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Modal, [{
    key: "toggleModal",
    value: function toggleModal() {
      this.containerModal.classList.toggle('ativo');
    }
  }, {
    key: "eventToggleModal",
    value: function eventToggleModal(event) {
      event.preventDefault();
      this.toggleModal();
    }
  }, {
    key: "cliqueForaModal",
    value: function cliqueForaModal(event) {
      event.preventDefault();

      if (event.target === this.containerModal) {
        this.toggleModal();
      }
    } // adiciona os eventos aos elementos do modal

  }, {
    key: "addModalEvent",
    value: function addModalEvent() {
      this.abrirBtn.addEventListener('click', this.eventToggleModal);
      this.fecharBtn.addEventListener('click', this.eventToggleModal);
      this.containerModal.addEventListener('click', this.cliqueForaModal);
    }
  }, {
    key: "init",
    value: function init() {
      if (this.abrirBtn && this.fecharBtn && this.containerModal) {
        this.addModalEvent();
      }

      return this;
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./src/app/js/modules/outsideClick.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/outsideClick.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/app/js/modules/scrollAnima.js":
/*!*******************************************!*\
  !*** ./src/app/js/modules/scrollAnima.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollAnima)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce */ "./src/app/js/modules/debounce.js");





var ScrollAnima = /*#__PURE__*/function () {
  function ScrollAnima(sections) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScrollAnima);

    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = (0,_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(this.checkDistance.bind(this), 50);
  } // pega a distancia de cada item em relação
  // ao topo do site


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ScrollAnima, [{
    key: "getDistance",
    value: function getDistance() {
      var _this = this;

      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.sections).map(function (section) {
        var offset = section.offsetTop;
        return {
          element: section,
          offset: Math.floor(offset - _this.windowMetade)
        };
      });
    } // verifica a distancia em cada objeto
    // em relação ao scroll do site

  }, {
    key: "checkDistance",
    value: function checkDistance() {
      this.distance.forEach(function (item) {
        if (window.pageYOffset > item.offset) {
          item.element.classList.add('ativo');
        } else if (item.element.classList.contains('ativo')) {
          item.element.classList.remove('ativo');
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.sections.length) {
        this.getDistance();
        this.checkDistance();
        window.addEventListener('scroll', this.checkDistance);
      }

      return this;
    } // remove o event de scroll

  }, {
    key: "stop",
    value: function stop() {
      window.removeEventListener('scroll', this.checkDistance);
    }
  }]);

  return ScrollAnima;
}();



/***/ }),

/***/ "./src/app/js/modules/scrollSuave.js":
/*!*******************************************!*\
  !*** ./src/app/js/modules/scrollSuave.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollSuave)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var ScrollSuave = /*#__PURE__*/function () {
  function ScrollSuave(links) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSuave);

    this.linksInternos = document.querySelectorAll(links);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSuave, [{
    key: "scrollToSection",
    value: function scrollToSection(e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var section = document.querySelector(href);
      var sectionTop = section.offsetTop - 60;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }, {
    key: "addLinkEvent",
    value: function addLinkEvent() {
      var _this = this;

      this.linksInternos.forEach(function (link) {
        link.addEventListener('click', _this.scrollToSection);
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.linksInternos.length) {
        this.addLinkEvent();
      }

      return this;
    }
  }]);

  return ScrollSuave;
}();



/***/ }),

/***/ "./src/app/js/modules/tabNav.js":
/*!**************************************!*\
  !*** ./src/app/js/modules/tabNav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTabNav)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var initTabNav = /*#__PURE__*/function () {
  function initTabNav(menu, content) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, initTabNav);

    this.planetas = document.querySelectorAll(menu);
    this.planetasDesc = document.querySelectorAll(content);
    this.ativo = 'ativo';
  } // ativa a tab de acordo com o index


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(initTabNav, [{
    key: "ativarTab",
    value: function ativarTab(index) {
      var _this = this;

      this.planetasDesc.forEach(function (section) {
        section.classList.remove(_this.ativo);
      });
      var direcao = this.planetasDesc[index].dataset.anime;
      this.planetasDesc[index].classList.add(this.ativo, direcao);
    } // adiciona os eventos aos tabs

  }, {
    key: "addTabNavEvent",
    value: function addTabNavEvent() {
      var _this2 = this;

      this.planetas.forEach(function (menuItem, index) {
        menuItem.addEventListener('click', function () {
          return _this2.ativarTab(index);
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.planetas.length && this.planetasDesc.length) {
        // ativar primeiro item
        this.ativarTab(0);
        this.addTabNavEvent();
      }

      return this;
    }
  }]);

  return initTabNav;
}();



/***/ }),

/***/ "./src/app/js/modules/tooltip.js":
/*!***************************************!*\
  !*** ./src/app/js/modules/tooltip.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Tooltip = /*#__PURE__*/function () {
  function Tooltip(tooltips) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tooltip);

    this.tootips = document.querySelectorAll(tooltips); // bind do objeto da classe aos callbacks

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  } // move a tooltip com base em seus estilos
  // de acordo com a posição do mouse


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tooltip, [{
    key: "onMouseMove",
    value: function onMouseMove(event) {
      this.tooltipBox.style.top = "".concat(event.pageY + 20, "px");

      if (event.pageX + 240 > window.innerWidth) {
        this.tooltipBox.style.left = "".concat(event.pageX - 180, "px");
      } else {
        this.tooltipBox.style.left = "".concat(event.pageX + 20, "px");
      }
    } // remove a tooltip e os eventos de mouseMove e mouseLeave

  }, {
    key: "onMouseLeave",
    value: function onMouseLeave(_ref) {
      var currentTarget = _ref.currentTarget;
      this.tooltipBox.remove();
      currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      currentTarget.removeEventListener('mousemove', this.onMouseMove);
    } // cria box da tooltip e coloca no body

  }, {
    key: "criarTooltipBox",
    value: function criarTooltipBox(element) {
      var tooltipBox = document.createElement('div');
      var text = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      this.tooltipBox = tooltipBox;
    } // cria a tooltip e os eventos de mouseMove e mouseLeave
    // ao target

  }, {
    key: "onMouseOver",
    value: function onMouseOver(_ref2) {
      var currentTarget = _ref2.currentTarget;
      // cria a tooltipbox e a coloca em uma propriedade
      this.criarTooltipBox(currentTarget);
      currentTarget.addEventListener('mousemove', this.onMouseMove);
      currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    } // adiciona os eventos de mouseOver a cada tooltip que existir

  }, {
    key: "addTooltipsEvent",
    value: function addTooltipsEvent() {
      var _this = this;

      this.tootips.forEach(function (item) {
        item.addEventListener('mouseover', _this.onMouseOver);
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.tootips.length) {
        this.addTooltipsEvent();
      }

      return this;
    }
  }]);

  return Tooltip;
}();



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/app/js/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion */ "./src/app/js/modules/accordion.js");
/* harmony import */ var _modules_fetchNumeros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchNumeros */ "./src/app/js/modules/fetchNumeros.js");
/* harmony import */ var _modules_imagemDia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/imagemDia */ "./src/app/js/modules/imagemDia.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/app/js/modules/modal.js");
/* harmony import */ var _modules_scrollAnima__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollAnima */ "./src/app/js/modules/scrollAnima.js");
/* harmony import */ var _modules_scrollSuave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scrollSuave */ "./src/app/js/modules/scrollSuave.js");
/* harmony import */ var _modules_tabNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabNav */ "./src/app/js/modules/tabNav.js");
/* harmony import */ var _modules_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/tooltip */ "./src/app/js/modules/tooltip.js");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./src/app/js/modules/dropdownMenu.js");
/* harmony import */ var _modules_menuMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menuMobile */ "./src/app/js/modules/menuMobile.js");
/* harmony import */ var _modules_funcionamento__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/funcionamento */ "./src/app/js/modules/funcionamento.js");











var scrollSuave = new _modules_scrollSuave__WEBPACK_IMPORTED_MODULE_5__["default"]('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
var accordion = new _modules_accordion__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-anime="accordion"] dt');
accordion.init();
var tabNav = new _modules_tabNav__WEBPACK_IMPORTED_MODULE_6__["default"]('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();
var modal = new _modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"]('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();
var imagemDia = new _modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"]('[data-imagem="abrir"]', '[data-imagem="fechar"]', '[data-imagem="container"]');
imagemDia.init((0,_modules_imagemDia__WEBPACK_IMPORTED_MODULE_2__["default"])('https://api.nasa.gov/planetary/apod?api_key=uzJcucGC2ANpgzcKtUPE7eRXBvbxUPan52hQm7sx', '[data-imagem="img"]'));
var tooltip = new _modules_tooltip__WEBPACK_IMPORTED_MODULE_7__["default"]('[data-tooltip]');
tooltip.init();
var scrollAnima = new _modules_scrollAnima__WEBPACK_IMPORTED_MODULE_4__["default"]('[data-anime="scroll"]');
scrollAnima.init();
var dropdownMenu = new _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_8__["default"]('[data-dropdown]');
dropdownMenu.init();
var menuMobile = new _modules_menuMobile__WEBPACK_IMPORTED_MODULE_9__["default"]('[data-menu="btn"]', '[data-menu="list"]');
menuMobile.init();
var funcionamento = new _modules_funcionamento__WEBPACK_IMPORTED_MODULE_10__["default"]('[data-semana]', 'aberto');
funcionamento.init();
(0,_modules_fetchNumeros__WEBPACK_IMPORTED_MODULE_1__["default"])('./dados.json', '.numeros__wrapper');
})();

/******/ })()
;
>>>>>>> Stashed changes
//# sourceMappingURL=index.js.map