// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/productData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.products = void 0;
var products = exports.products = [{
  id: 1,
  name: "Зволожуючий крем для обличчя",
  description: "Для щоденного догляду, підходить для всіх типів шкіри.",
  price: 249
}, {
  id: 2,
  name: "Тональний крем Light Skin",
  description: "Легка текстура, вирівнює тон обличчя.",
  price: 319
}, {
  id: 3,
  name: "Маска для волосся Keratin Boost",
  description: "Відновлення структури волосся після фарбування.",
  price: 199
}, {
  id: 4,
  name: "Гель для вмивання Aloe Clean",
  description: "Очищення і зволоження з екстрактом алое.",
  price: 149
}, {
  id: 5,
  name: "Гіалуронова сироватка",
  description: "Інтенсивне зволоження та пружність шкіри.",
  price: 359
}, {
  id: 6,
  name: "Шампунь для об'єму Volume Pro",
  description: "Надає об'єм тонкому волоссю.",
  price: 179
}, {
  id: 7,
  name: "Бальзам для губ з маслом ши",
  description: "Живлення та захист від тріщин.",
  price: 89
}, {
  id: 8,
  name: "Патчі під очі з колагеном",
  description: "Зменшують темні кола та набряки.",
  price: 129
}, {
  id: 9,
  name: "Матуюча пудра Stay Matte",
  description: "Контроль блиску на цілий день.",
  price: 199
}, {
  id: 10,
  name: "Кондиціонер для волосся Smooth Silk",
  description: "Гладкість та блиск з ефектом ламінування.",
  price: 189
}, {
  id: 11,
  name: "Палетка тіней Warm Nudes",
  description: "10 теплих відтінків для денного і вечірнього макіяжу.",
  price: 289
}, {
  id: 12,
  name: "Гель для брів Fix & Hold",
  description: "Закріплення брів на весь день.",
  price: 129
}, {
  id: 13,
  name: "Крем для рук Almond Care",
  description: "Живлення та м’якість на основі мигдалю.",
  price: 89
}, {
  id: 14,
  name: "Міцелярна вода 3в1",
  description: "Зняття макіяжу, очищення і зволоження.",
  price: 159
}, {
  id: 15,
  name: "Помада Velvet Red",
  description: "Насичений колір та зволоження.",
  price: 149
}, {
  id: 16,
  name: "Скраб для тіла Coconut Glow",
  description: "Оновлення шкіри з натуральною кокосовою олією.",
  price: 179
}, {
  id: 17,
  name: "Пензлик для рум’ян",
  description: "М'який ворс, зручна ручка.",
  price: 89
}, {
  id: 18,
  name: "Крем нічний Anti-Age",
  description: "Регенерація та розгладження зморшок.",
  price: 369
}, {
  id: 19,
  name: "BB-крем SPF 15",
  description: "Легке покриття та захист від сонця.",
  price: 219
}, {
  id: 20,
  name: "Олія для кутикули",
  description: "Живлення нігтів і кутикули з вітаміном E.",
  price: 79
}, {
  id: 21,
  name: "Олія для тіла",
  description: "Живлення шкіри з вітаміном E.",
  price: 790
}, {
  id: 22,
  name: "Рум’яна Pink Glow",
  description: "Природний рум’янець та свіжість обличчя.",
  price: 139
}, {
  id: 23,
  name: "Туш для вій Mega Volume",
  description: "Довжина і об’єм без грудочок.",
  price: 169
}, {
  id: 24,
  name: "Гель після гоління для жінок",
  description: "Заспокійливий ефект з ментолом.",
  price: 109
}, {
  id: 25,
  name: "Крем для ніг Mint Care",
  description: "Зняття втоми та живлення.",
  price: 99
}, {
  id: 26,
  name: "Основа під макіяж Primer Silk",
  description: "Вирівнює поверхню шкіри перед макіяжем.",
  price: 199
}, {
  id: 27,
  name: "Сироватка з вітаміном C",
  description: "Освітлення та тонус шкіри.",
  price: 349
}, {
  id: 28,
  name: "Пінка для вмивання Bubble Clean",
  description: "Глибоке очищення без пересушування.",
  price: 139
}, {
  id: 29,
  name: "Спрей-фіксатор макіяжу",
  description: "Закріплення макіяжу на 12 годин.",
  price: 159
}, {
  id: 30,
  name: "Олія для волосся Argan Gold",
  description: "Гладкість, блиск і термозахист.",
  price: 229
}, {
  id: 31,
  name: "Набір масок для обличчя (5 шт)",
  description: "Різні ефекти: зволоження, живлення, очищення.",
  price: 249
}, {
  id: 32,
  name: "Зубна паста White Smile",
  description: "Відбілювання та захист емалі.",
  price: 69
}, {
  id: 33,
  name: "Щітка для обличчя",
  description: "М’яке очищення пор.",
  price: 99
}, {
  id: 34,
  name: "Дезодорант-антиперспірант",
  description: "Захист на 48 годин, без слідів.",
  price: 119
}, {
  id: 35,
  name: "Гель для душу Vanilla Cream",
  description: "Ніжний аромат ванілі та зволоження.",
  price: 149
}, {
  id: 36,
  name: "Масло для тіла Mango Body",
  description: "Живлення сухої шкіри з ароматом манго.",
  price: 179
}, {
  id: 37,
  name: "Маска-плівка для обличчя",
  description: "Очищення пор та зняття забруднень.",
  price: 129
}, {
  id: 38,
  name: "Крем від зморшок 35+",
  description: "Розгладження мімічних ліній.",
  price: 329
}, {
  id: 39,
  name: "Тонік для обличчя Refresh",
  description: "Відновлення pH після очищення.",
  price: 119
}, {
  id: 40,
  name: "Мило-скраб кавове",
  description: "Очищення шкіри з натуральною кавою.",
  price: 79
}, {
  id: 41,
  name: "Пемза для п’ят",
  description: "Видалення огрубілої шкіри стоп.",
  price: 49
}, {
  id: 42,
  name: "Зволожуюча маска для рук",
  description: "Інтенсивний догляд для сухої шкіри рук.",
  price: 99
}, {
  id: 43,
  name: "Тіні з блиском Party Night",
  description: "Яскраві кольори для вечірнього макіяжу.",
  price: 209
}, {
  id: 44,
  name: "Гель для укладки волосся",
  description: "Надійна фіксація без липкості.",
  price: 139
}, {
  id: 45,
  name: "Набір кистей для макіяжу",
  description: "10 штук для різних зон обличчя.",
  price: 299
}, {
  id: 46,
  name: "База під тіні Eye Stay",
  description: "Збереження кольору тіней на весь день.",
  price: 109
}, {
  id: 47,
  name: "Блиск для губ Glossy Shine",
  description: "Легкий блиск з вітаміном Е.",
  price: 119
}, {
  id: 48,
  name: "Сонцезахисний крем SPF 50",
  description: "Максимальний захист шкіри.",
  price: 199
}, {
  id: 49,
  name: "Крем для зони навколо очей",
  description: "Проти набряків і зморшок.",
  price: 169
}, {
  id: 50,
  name: "Нічна маска для губ",
  description: "Глибоке зволоження та відновлення.",
  price: 149
}];
},{}],"src/card.js":[function(require,module,exports) {
"use strict";

var _productData = require("./productData.js");
var productCard = document.querySelector('.product-card');
var params = new URLSearchParams(window.location.search);
var productId = Number(params.get('id'));
var product = _productData.products.find(function (p) {
  return p.id === productId;
});
if (product) {
  productCard.insertAdjacentHTML('beforeend', "\n    <div class=\"product-detail\">\n      <h2>".concat(_productData.products.name, "</h2>\n      <p><strong>\u041E\u043F\u0438\u0441:</strong> ").concat(_productData.products.description, "</p>\n      <p><strong>\u0414\u0435\u0442\u0430\u043B\u0456:</strong> ").concat(_productData.products.details, "</p>\n      <p><strong>\u0426\u0456\u043D\u0430:</strong> ").concat(_productData.products.price, " \u0433\u0440\u043D</p>\n      <button class=\"product__add\">\u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n    </div>\n  "));
} else {
  productCard.textContent = 'Товар не знайдено.';
}
},{"./productData.js":"src/productData.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62695" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/card.js"], null)
//# sourceMappingURL=/card.1b158c65.js.map