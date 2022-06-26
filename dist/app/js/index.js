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
/* harmony export */   "default": () => (/* binding */ initAccordion)
/* harmony export */ });
function initAccordion() {
  var accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  console.log(accordionList);
  var ativo = 'ativo';

  function ativarAccordion() {
    this.classList.toggle(ativo);
    this.nextElementSibling.classList.toggle(ativo);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(ativo);
    accordionList[0].nextElementSibling.classList.add(ativo);
    accordionList.forEach(function (item) {
      item.addEventListener('click', ativarAccordion);
    });
  }
}

/***/ }),

/***/ "./src/app/js/modules/animaNumeros.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/animaNumeros.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initAnimaNumeros)
/* harmony export */ });
function initAnimaNumeros() {
  function animaNumeros() {
    var numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach(function (numero) {
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
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  var observerTarget = document.querySelector('.numeros');
  var observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {
    attributes: true
  });
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

/***/ "./src/app/js/modules/fetchNumeros.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/fetchNumeros.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initFetchNumeros)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animaNumeros__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animaNumeros */ "./src/app/js/modules/animaNumeros.js");



function initFetchNumeros() {
  function fetchNumeros(_x) {
    return _fetchNumeros.apply(this, arguments);
  }

  function _fetchNumeros() {
    _fetchNumeros = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {
      var numResponse, numJson, wrapper;
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
              wrapper = document.querySelector('.numeros__wrapper');
              numJson.forEach(function (num) {
                var divNumero = createData(num);
                wrapper.appendChild(divNumero);
              });
              (0,_animaNumeros__WEBPACK_IMPORTED_MODULE_2__["default"])();
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));
    return _fetchNumeros.apply(this, arguments);
  }

  function createData(num) {
    var div = document.createElement('div');
    div.classList.add('numero-data');
    div.innerHTML = "<h2>".concat(num.label, "<span data-numero>").concat(num.total, "</span></h2>");
    return div;
  }

  fetchNumeros('./dados.json');
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
/* harmony export */   "default": () => (/* binding */ initFuncionamento)
/* harmony export */ });
function initFuncionamento() {
  var funcionamento = document.querySelector('[data-semana]');
  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  var horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  var dataAgora = new Date();
  var diasAgora = dataAgora.getDay();
  var horarioAgora = dataAgora.getHours();
  var semanaAberto = diasSemana.indexOf(diasAgora) !== -1;
  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
  if (semanaAberto && horarioAberto) funcionamento.classList.add('aberto');
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

/***/ "./src/app/js/modules/modal.js":
/*!*************************************!*\
  !*** ./src/app/js/modules/modal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initModal)
/* harmony export */ });
function initModal() {
  var abrirBtn = document.querySelector('[data-modal="abrir"]');
  var fecharBtn = document.querySelector('[data-menu="fechar"]');
  var containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    event.preventDefault();

    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (abrirBtn && fecharBtn && containerModal) {
    abrirBtn.addEventListener('click', toggleModal);
    fecharBtn.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

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

/***/ "./src/app/js/modules/scrollAnimation.js":
/*!***********************************************!*\
  !*** ./src/app/js/modules/scrollAnimation.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initScrollAnimation)
/* harmony export */ });
function initScrollAnimation() {
  var sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    var windowMetade = window.innerHeight * 0.6;
    sections.forEach(function (section) {
      var sectionTop = section.getBoundingClientRect().top;
      var isSectionVisible = sectionTop - windowMetade < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

/***/ }),

/***/ "./src/app/js/modules/scrollSuave.js":
/*!*******************************************!*\
  !*** ./src/app/js/modules/scrollSuave.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTabNav)
/* harmony export */ });
function initTabNav() {
  var planetas = document.querySelectorAll('[data-tab="menu"] li');
  var planetasDesc = document.querySelectorAll('[data-tab="content"] section');
  var ativo = 'ativo';

  function ativarTab(index) {
    planetasDesc.forEach(function (section) {
      section.classList.remove(ativo);
    });
    var direcao = planetasDesc[index].dataset.anime;
    planetasDesc[index].classList.add('ativo', direcao);
  }

  if (planetas.length === planetasDesc.length) {
    planetasDesc[0].classList.add(ativo);
    planetas.forEach(function (menuItem, index) {
      menuItem.addEventListener('click', function () {
        return ativarTab(index);
      });
    });
  }
}

/***/ }),

/***/ "./src/app/js/modules/tootip.js":
/*!**************************************!*\
  !*** ./src/app/js/modules/tootip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTooltip)
/* harmony export */ });
function initTooltip() {
  var tootips = document.querySelectorAll('[data-tooltip]');
  var onMouseMove = {
    handleEvent: function handleEvent(event) {
      this.tooltipBox.style.top = "".concat(event.pageY + 20, "px");
      this.tooltipBox.style.left = "".concat(event.pageX + 20, "px");
    }
  };
  var onMouseLeave = {
    handleEvent: function handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  };

  function criarTooltipBox(element) {
    var tooltipBox = document.createElement('div');
    var text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    var tooltipBox = criarTooltipBox(this);
    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tootips.forEach(function (item) {
    item.addEventListener('mouseover', onMouseOver);
  });
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
/* harmony import */ var _modules_animaNumeros__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animaNumeros */ "./src/app/js/modules/animaNumeros.js");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./src/app/js/modules/dropdownMenu.js");
/* harmony import */ var _modules_fetchNumeros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/fetchNumeros */ "./src/app/js/modules/fetchNumeros.js");
/* harmony import */ var _modules_funcionamento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/funcionamento */ "./src/app/js/modules/funcionamento.js");
/* harmony import */ var _modules_menuMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menuMobile */ "./src/app/js/modules/menuMobile.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal */ "./src/app/js/modules/modal.js");
/* harmony import */ var _modules_scrollAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scrollAnimation */ "./src/app/js/modules/scrollAnimation.js");
/* harmony import */ var _modules_scrollSuave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scrollSuave */ "./src/app/js/modules/scrollSuave.js");
/* harmony import */ var _modules_tabNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/tabNav */ "./src/app/js/modules/tabNav.js");
/* harmony import */ var _modules_tootip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/tootip */ "./src/app/js/modules/tootip.js");











(0,_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_menuMobile__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_modules_scrollSuave__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_modules_tabNav__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_animaNumeros__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_fetchNumeros__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_scrollAnimation__WEBPACK_IMPORTED_MODULE_7__["default"])();
(0,_modules_funcionamento__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_modules_tootip__WEBPACK_IMPORTED_MODULE_10__["default"])();
(0,_modules_modal__WEBPACK_IMPORTED_MODULE_6__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map