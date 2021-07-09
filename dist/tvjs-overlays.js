/*!
 * TVJS Overlays - v0.5.0 - Fri Jul 09 2021
 *     https://github.com/tvjsx/trading-vue-js
 *     Copyright (c) 2020 c451 Code's All Right;
 *     Licensed under the MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (!root['trading-vue-js']) {
        root['trading-vue-js'] = root['TradingVueJs']
    }
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("trading-vue-js"));
	else if(typeof define === 'function' && define.amd)
		define(["trading-vue-js"], factory);
	else if(typeof exports === 'object')
		exports["TvjsOverlays"] = factory(require("trading-vue-js"));
	else
		root["TvjsOverlays"] = factory(root["trading-vue-js"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__954__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 954:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__954__;

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ALMA": () => (/* reexport */ ALMA),
  "ATR": () => (/* reexport */ ATR),
  "ATRp": () => (/* reexport */ ATRp),
  "Area51": () => (/* reexport */ Area51),
  "BB": () => (/* reexport */ BB),
  "BBW": () => (/* reexport */ BBW),
  "CCI": () => (/* reexport */ CCI),
  "CMO": () => (/* reexport */ CMO),
  "COG": () => (/* reexport */ COG),
  "DHistogram": () => (/* reexport */ DHistogram),
  "DMI": () => (/* reexport */ DMI),
  "EMA": () => (/* reexport */ EMA),
  "HMA": () => (/* reexport */ HMA),
  "Histogram": () => (/* reexport */ Histogram),
  "Ichi": () => (/* reexport */ Ichi),
  "Ichimoku": () => (/* reexport */ Ichimoku),
  "KC": () => (/* reexport */ KC),
  "KCW": () => (/* reexport */ KCW),
  "LongShortTrades": () => (/* reexport */ LongShortTrades),
  "MACD": () => (/* reexport */ MACD),
  "MFI": () => (/* reexport */ MFI),
  "MOM": () => (/* reexport */ MOM),
  "Markers": () => (/* reexport */ Markers),
  "PlotCross": () => (/* reexport */ PlotCross),
  "ROC": () => (/* reexport */ ROC),
  "RSI": () => (/* reexport */ RSI),
  "Ribbon": () => (/* reexport */ Ribbon),
  "SAR": () => (/* reexport */ SAR),
  "SMA": () => (/* reexport */ SMA),
  "SWMA": () => (/* reexport */ SWMA),
  "Stoch": () => (/* reexport */ Stoch),
  "TSI": () => (/* reexport */ TSI),
  "TradesPlus": () => (/* reexport */ TradesPlus),
  "VWMA": () => (/* reexport */ VWMA),
  "WilliamsR": () => (/* reexport */ WilliamsR),
  "XOhlcBars": () => (/* reexport */ XOhlcBars),
  "default": () => (/* binding */ index_prod)
});

// EXTERNAL MODULE: external "trading-vue-js"
var external_trading_vue_js_ = __webpack_require__(954);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ALMA/ALMA.vue?vue&type=script&lang=js&

/* harmony default export */ const ALMAvue_type_script_lang_js_ = ({
  name: 'ALMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Arnaud Legoux Moving Average',
        preset: {
          name: 'ALMA $length $offset $sigma',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#559de0'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['ALMA'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 10,
            text: 'Length'
          },
          offset: {
            def: 0.9,
            text: 'Offset'
          },
          sigma: {
            def: 5,
            text: 'Sigma'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return alma(close, length, offset, sigma)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/ALMA/ALMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const ALMA_ALMAvue_type_script_lang_js_ = (ALMAvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/overlays/ALMA/ALMA.vue
var render, staticRenderFns
;



/* normalize component */
;
var component = normalizeComponent(
  ALMA_ALMAvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/overlays/ALMA/ALMA.vue"
/* harmony default export */ const ALMA = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ATR/ATR.vue?vue&type=script&lang=js&

/* harmony default export */ const ATRvue_type_script_lang_js_ = ({
  name: 'ATR',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Average True Range',
        preset: {
          name: 'ATR $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#e52468'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['ATR'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 15,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return atr(length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/ATR/ATR.vue?vue&type=script&lang=js&
 /* harmony default export */ const ATR_ATRvue_type_script_lang_js_ = (ATRvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/ATR/ATR.vue
var ATR_render, ATR_staticRenderFns
;



/* normalize component */
;
var ATR_component = normalizeComponent(
  ATR_ATRvue_type_script_lang_js_,
  ATR_render,
  ATR_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ATR_api; }
ATR_component.options.__file = "src/overlays/ATR/ATR.vue"
/* harmony default export */ const ATR = (ATR_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ATRp/ATRp.vue?vue&type=script&lang=js&

/* harmony default export */ const ATRpvue_type_script_lang_js_ = ({
  name: 'ATRp',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Average True Range, %',
        preset: {
          name: 'ATR% $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#f44336'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['ATRp'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 15,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return 100 * atr(length)[0] / close[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/ATRp/ATRp.vue?vue&type=script&lang=js&
 /* harmony default export */ const ATRp_ATRpvue_type_script_lang_js_ = (ATRpvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/ATRp/ATRp.vue
var ATRp_render, ATRp_staticRenderFns
;



/* normalize component */
;
var ATRp_component = normalizeComponent(
  ATRp_ATRpvue_type_script_lang_js_,
  ATRp_render,
  ATRp_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ATRp_api; }
ATRp_component.options.__file = "src/overlays/ATRp/ATRp.vue"
/* harmony default export */ const ATRp = (ATRp_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Area51/Area51.vue?vue&type=script&lang=js&
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const Area51vue_type_script_lang_js_ = ({
  name: 'Area51',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: '👽',
        version: '1.0.0',
        desc: 'Gradient area chart'
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      var data = this.$props.data;
      var grd = ctx.createLinearGradient(0, 0, 0, layout.height);
      grd.addColorStop(0, this.back1);
      grd.addColorStop(1, this.back2); // Line

      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]);
          var y = layout.$2screen(p[1]);
          ctx.lineTo(x, y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.stroke(); // Area

      ctx.fillStyle = grd;
      ctx.beginPath();
      var p0 = (data[0] || [])[0];
      var pN = (data[data.length - 1] || [])[0];
      ctx.lineTo(layout.t2screen(p0), layout.height);

      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var p = _step2.value;

          var _x = layout.t2screen(p[0]);

          var _y = layout.$2screen(p[1]);

          ctx.lineTo(_x, _y);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      ctx.lineTo(layout.t2screen(pN), layout.height);
      ctx.fill();
    },
    use_for: function use_for() {
      return ['Area51'];
    },
    data_colors: function data_colors() {
      return [this.color];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 1.25;
    },
    color: function color() {
      return this.sett.color || '#2fd68f';
    },
    back1: function back1() {
      return this.sett.back1 || this.color + '15';
    },
    back2: function back2() {
      return this.sett.back2 || this.color + '01';
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/overlays/Area51/Area51.vue?vue&type=script&lang=js&
 /* harmony default export */ const Area51_Area51vue_type_script_lang_js_ = (Area51vue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/Area51/Area51.vue
var Area51_render, Area51_staticRenderFns
;



/* normalize component */
;
var Area51_component = normalizeComponent(
  Area51_Area51vue_type_script_lang_js_,
  Area51_render,
  Area51_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Area51_api; }
Area51_component.options.__file = "src/overlays/Area51/Area51.vue"
/* harmony default export */ const Area51 = (Area51_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/BB/BB.vue?vue&type=script&lang=js&

/* harmony default export */ const BBvue_type_script_lang_js_ = ({
  name: 'BB',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Bollinger Bands',
        preset: {
          name: 'BB $length $stddev',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#2cc6c9ab',
            showMid: true,
            backColor: '#2cc6c90a'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['BB'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 21,
            text: 'Length'
          },
          stddev: {
            def: 2,
            text: 'StdDev'
          }
        },
        conf: {
          renderer: 'Channel'
        },
        update: "\n                    let [m, h, l] = bb(close, length, stddev)\n                    return [h[0], m[0], l[0]]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/BB/BB.vue?vue&type=script&lang=js&
 /* harmony default export */ const BB_BBvue_type_script_lang_js_ = (BBvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/BB/BB.vue
var BB_render, BB_staticRenderFns
;



/* normalize component */
;
var BB_component = normalizeComponent(
  BB_BBvue_type_script_lang_js_,
  BB_render,
  BB_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var BB_api; }
BB_component.options.__file = "src/overlays/BB/BB.vue"
/* harmony default export */ const BB = (BB_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/BBW/BBW.vue?vue&type=script&lang=js&

/* harmony default export */ const BBWvue_type_script_lang_js_ = ({
  name: 'BBW',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Bollinger Bands Width',
        preset: {
          name: 'BBW $length $stddev',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#2cc6c9ab'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['BBW'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 21,
            text: 'Length'
          },
          stddev: {
            def: 2,
            text: 'StdDev'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return bbw(close, length, stddev)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/BBW/BBW.vue?vue&type=script&lang=js&
 /* harmony default export */ const BBW_BBWvue_type_script_lang_js_ = (BBWvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/BBW/BBW.vue
var BBW_render, BBW_staticRenderFns
;



/* normalize component */
;
var BBW_component = normalizeComponent(
  BBW_BBWvue_type_script_lang_js_,
  BBW_render,
  BBW_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var BBW_api; }
BBW_component.options.__file = "src/overlays/BBW/BBW.vue"
/* harmony default export */ const BBW = (BBW_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/CCI/CCI.vue?vue&type=script&lang=js&

/* harmony default export */ const CCIvue_type_script_lang_js_ = ({
  name: 'CCI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Commodity Channel Index',
        preset: {
          name: 'CCI $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#e28a3dee',
            backColor: '#e28a3d11',
            bandColor: '#aaaaaa',
            upper: 100,
            lower: -100
          }
        }
      };
    },
    use_for: function use_for() {
      return ['CCI'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 21,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Range'
        },
        update: "return cci(close, length)[0]"
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/CCI/CCI.vue?vue&type=script&lang=js&
 /* harmony default export */ const CCI_CCIvue_type_script_lang_js_ = (CCIvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/CCI/CCI.vue
var CCI_render, CCI_staticRenderFns
;



/* normalize component */
;
var CCI_component = normalizeComponent(
  CCI_CCIvue_type_script_lang_js_,
  CCI_render,
  CCI_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var CCI_api; }
CCI_component.options.__file = "src/overlays/CCI/CCI.vue"
/* harmony default export */ const CCI = (CCI_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/CMO/CMO.vue?vue&type=script&lang=js&

/* harmony default export */ const CMOvue_type_script_lang_js_ = ({
  name: 'CMO',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Chande Momentum Oscillator',
        preset: {
          name: 'CMO $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#559de0'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['CMO'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 10,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "return cmo(close, length)[0]"
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/CMO/CMO.vue?vue&type=script&lang=js&
 /* harmony default export */ const CMO_CMOvue_type_script_lang_js_ = (CMOvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/CMO/CMO.vue
var CMO_render, CMO_staticRenderFns
;



/* normalize component */
;
var CMO_component = normalizeComponent(
  CMO_CMOvue_type_script_lang_js_,
  CMO_render,
  CMO_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var CMO_api; }
CMO_component.options.__file = "src/overlays/CMO/CMO.vue"
/* harmony default export */ const CMO = (CMO_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/COG/COG.vue?vue&type=script&lang=js&

/* harmony default export */ const COGvue_type_script_lang_js_ = ({
  name: 'COG',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Center of Gravity',
        preset: {
          name: 'COG $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#559de0'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['COG'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 10,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "return cog(close, length)[0]"
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/COG/COG.vue?vue&type=script&lang=js&
 /* harmony default export */ const COG_COGvue_type_script_lang_js_ = (COGvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/COG/COG.vue
var COG_render, COG_staticRenderFns
;



/* normalize component */
;
var COG_component = normalizeComponent(
  COG_COGvue_type_script_lang_js_,
  COG_render,
  COG_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var COG_api; }
COG_component.options.__file = "src/overlays/COG/COG.vue"
/* harmony default export */ const COG = (COG_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/DHistogram/DHistogram.vue?vue&type=script&lang=js&
function DHistogramvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = DHistogramvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function DHistogramvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return DHistogramvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return DHistogramvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function DHistogramvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const DHistogramvue_type_script_lang_js_ = ({
  name: "DHistogram",
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: "Acid3croco",
        version: "1.0.0",
        desc: "Double Histogram Plot",
        preset: {
          name: "DHistogram",
          side: "offchart",
          settings: {
            histWidth: 4,
            thresholdSize: 0,
            posColor: "#35a776",
            negColor: "#e54150"
          }
        }
      };
    },
    draw: function draw(ctx) {
      ctx.lineWidth = this.hist_width;
      ctx.strokeStyle = this.color;
      var layout = this.$props.layout;
      var base = layout.$2screen(0) + 0.5;
      var off = this.hist_width % 2 ? 0 : 0.5; // Color changed

      var changed = false;

      var _iterator = DHistogramvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var pos_value = p[1];
          var neg_value = p[2];
          var x = layout.t2screen(p[0]) - off;
          var y1 = layout.$2screen(pos_value) - 0.5;
          var y2 = layout.$2screen(neg_value) - 0.5;

          if (pos_value > this.threshold_size) {
            ctx.strokeStyle = this.pos_color;
            ctx.beginPath();
            ctx.moveTo(x, base);
            ctx.lineTo(x, y1);
            ctx.stroke();
          }

          if (neg_value < -this.threshold_size) {
            ctx.strokeStyle = this.neg_color;
            ctx.beginPath();
            ctx.moveTo(x, base);
            ctx.lineTo(x, y2);
            ctx.stroke();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    use_for: function use_for() {
      return ["DHistogram"];
    },
    legend: function legend(values) {
      var xs = values.slice(1, 3).map(function (x) {
        return x.toFixed(Math.abs(x) > 0.001 ? 4 : 8);
      });
      return [{
        value: xs[0],
        color: this.pos_color
      }, {
        value: xs[1],
        color: this.neg_color
      }];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    hist_width: function hist_width() {
      return this.sett.histWidth || 4;
    },
    threshold_size: function threshold_size() {
      return this.sett.thresholdSize || 0;
    },
    pos_color: function pos_color() {
      return this.sett.posColor || "#35a776";
    },
    neg_color: function neg_color() {
      return this.sett.negColor || "#e54150";
    }
  },
  data: function data() {
    return {};
  }
});
;// CONCATENATED MODULE: ./src/overlays/DHistogram/DHistogram.vue?vue&type=script&lang=js&
 /* harmony default export */ const DHistogram_DHistogramvue_type_script_lang_js_ = (DHistogramvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/DHistogram/DHistogram.vue
var DHistogram_render, DHistogram_staticRenderFns
;



/* normalize component */
;
var DHistogram_component = normalizeComponent(
  DHistogram_DHistogramvue_type_script_lang_js_,
  DHistogram_render,
  DHistogram_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DHistogram_api; }
DHistogram_component.options.__file = "src/overlays/DHistogram/DHistogram.vue"
/* harmony default export */ const DHistogram = (DHistogram_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/DMI/DMI.vue?vue&type=script&lang=js&

/* harmony default export */ const DMIvue_type_script_lang_js_ = ({
  name: 'DMI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Directional Movement Index',
        preset: {
          name: 'DMI $length $smooth',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            colors: ["#ef1360", "#3782f2", "#f48709"]
          }
        }
      };
    },
    use_for: function use_for() {
      return ['DMI'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 15,
            text: 'DI Length'
          },
          smooth: {
            def: 15,
            text: 'ADX Smothing'
          }
        },
        conf: {
          renderer: 'Splines'
        },
        update: "\n                    let [adx, dp, dn] = dmi(length, smooth)\n                    return [adx[0], dp[0], dn[0]]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/DMI/DMI.vue?vue&type=script&lang=js&
 /* harmony default export */ const DMI_DMIvue_type_script_lang_js_ = (DMIvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/DMI/DMI.vue
var DMI_render, DMI_staticRenderFns
;



/* normalize component */
;
var DMI_component = normalizeComponent(
  DMI_DMIvue_type_script_lang_js_,
  DMI_render,
  DMI_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DMI_api; }
DMI_component.options.__file = "src/overlays/DMI/DMI.vue"
/* harmony default export */ const DMI = (DMI_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/EMA/EMA.vue?vue&type=script&lang=js&

/* harmony default export */ const EMAvue_type_script_lang_js_ = ({
  name: 'EMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Exponential Moving Average',
        preset: {
          name: 'EMA $length',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#f7890c'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['EMA'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 12,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return ema(close, length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/EMA/EMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const EMA_EMAvue_type_script_lang_js_ = (EMAvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/EMA/EMA.vue
var EMA_render, EMA_staticRenderFns
;



/* normalize component */
;
var EMA_component = normalizeComponent(
  EMA_EMAvue_type_script_lang_js_,
  EMA_render,
  EMA_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var EMA_api; }
EMA_component.options.__file = "src/overlays/EMA/EMA.vue"
/* harmony default export */ const EMA = (EMA_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/HMA/HMA.vue?vue&type=script&lang=js&

/* harmony default export */ const HMAvue_type_script_lang_js_ = ({
  name: 'HMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Hull Moving Average',
        preset: {
          name: 'HMA $length',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#3af475'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['HMA'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 10,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return hma(close, length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/HMA/HMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const HMA_HMAvue_type_script_lang_js_ = (HMAvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/HMA/HMA.vue
var HMA_render, HMA_staticRenderFns
;



/* normalize component */
;
var HMA_component = normalizeComponent(
  HMA_HMAvue_type_script_lang_js_,
  HMA_render,
  HMA_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var HMA_api; }
HMA_component.options.__file = "src/overlays/HMA/HMA.vue"
/* harmony default export */ const HMA = (HMA_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Histogram/Histogram.vue?vue&type=script&lang=js&
function Histogramvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Histogramvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Histogramvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Histogramvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Histogramvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Histogramvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const Histogramvue_type_script_lang_js_ = ({
  name: 'Histogram',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Histogram plot'
      };
    },
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var base = layout.$2screen(0) + 0.5;
      var off = this.line_width % 2 ? 0 : 0.5; // Color changed

      var changed = false;

      var _iterator = Histogramvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]) - off;
          var y = layout.$2screen(p[1]) - 0.5;
          var _changed = false;

          if (p[2]) {
            if (ctx.strokeStyle !== p[2]) {
              ctx.stroke();
              _changed = true;
            }

            ctx.strokeStyle = p[2];
          } else {
            if (ctx.strokeStyle !== this.color) {
              ctx.stroke();
              _changed = true;
            }

            ctx.strokeStyle = this.color;
          }

          if (_changed) ctx.beginPath();
          ctx.moveTo(x, base);
          ctx.lineTo(x, y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.stroke();
    },
    use_for: function use_for() {
      return ['Histogram'];
    },
    legend: function legend(values) {
      var x = values[1];

      if (typeof x === "number") {
        x = x.toFixed(Math.abs(x) > 0.001 ? 4 : 8);
      }

      return [{
        value: x,
        color: values[2] || this.color
      }];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 2;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    }
  },
  data: function data() {
    return {
      COLORS: ['#888888', '#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
;// CONCATENATED MODULE: ./src/overlays/Histogram/Histogram.vue?vue&type=script&lang=js&
 /* harmony default export */ const Histogram_Histogramvue_type_script_lang_js_ = (Histogramvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/Histogram/Histogram.vue
var Histogram_render, Histogram_staticRenderFns
;



/* normalize component */
;
var Histogram_component = normalizeComponent(
  Histogram_Histogramvue_type_script_lang_js_,
  Histogram_render,
  Histogram_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Histogram_api; }
Histogram_component.options.__file = "src/overlays/Histogram/Histogram.vue"
/* harmony default export */ const Histogram = (Histogram_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Ichi/Ichi.vue?vue&type=script&lang=js&
// Cloud renderer. (Ichimoku)

/* harmony default export */ const Ichivue_type_script_lang_js_ = ({
  name: 'Ichi',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.0',
        desc: 'Ichimoku Cloud based on scripts'
      };
    },
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;

      for (var i = 0; i < this.$props.data.length - 1; i++) {
        var p1 = this.mapp(this.$props.data[i]);
        var p2 = this.mapp(this.$props.data[i + 1]);
        if (!p2) continue;
        if (p1.y1 !== p1.y1) continue; // Fix NaN
        // Background

        ctx.beginPath();
        ctx.fillStyle = p1.y1 < p1.y2 ? this.back1 : this.back2;
        ctx.moveTo(p1.x, p1.y1);
        ctx.lineTo(p2.x + 0.1, p2.y1);
        ctx.lineTo(p2.x + 0.1, p2.y2);
        ctx.lineTo(p1.x, p1.y2);
        ctx.fill(); // Lines

        if (!this.draw_lines) continue;
        ctx.beginPath();
        ctx.strokeStyle = this.color1;
        ctx.moveTo(p1.x, p1.y1);
        ctx.lineTo(p2.x, p2.y1);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = this.color2;
        ctx.moveTo(p1.x, p1.y2);
        ctx.lineTo(p2.x, p2.y2);
        ctx.stroke();
      }
    },
    mapp: function mapp(p) {
      var layout = this.$props.layout;
      return p && {
        x: layout.t2screen(p[0]),
        y1: layout.$2screen(p[1]),
        y2: layout.$2screen(p[2])
      };
    },
    use_for: function use_for() {
      return ['Ichi'];
    },
    data_colors: function data_colors() {
      return [this.color1, this.color2];
    },
    calc: function calc() {
      return {
        props: {
          CP: {
            def: 9,
            text: 'Conversion Line Length'
          },
          BP: {
            def: 26,
            text: 'Base Line Length'
          },
          LSP: {
            def: 52,
            text: 'Lagging Span 2 Length'
          },
          DIZ: {
            def: 26,
            text: 'Displacement'
          },
          baseColor: {
            def: 'brown',
            text: 'Base Line Color'
          },
          conversionColor: {
            def: 'lightblue',
            text: 'Conversion Line Color'
          },
          laggingColor: {
            def: '#66CC66',
            text: 'Lagging Span Color'
          }
        },
        update: "\n                    let donchian = (len, id) => ts(\n                        avg(lowest(low, len)[0], highest(high, len)[0]), id\n                    )\n                    let conversionLine = donchian(CP, 1)\n                    let baseLine = donchian(BP, 2)\n                    let leadLine1 = ts(avg(conversionLine[0], baseLine[0]))\n                    let leadLine2 = donchian(LSP, 3)\n                    let lagging = ts(close[0])\n\n\n                    offset(this, DIZ - 1)\n                    offset(lagging, -DIZ + 1)\n                    onchart([conversionLine, baseLine], 'Base Lines', {\n                        colors: [conversionColor, baseColor]\n                    })\n                    onchart(lagging, 'Lagging Span', {\n                        color: laggingColor\n                    })\n                    return [leadLine1[0], leadLine2[0]]\n                "
      };
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    color1: function color1() {
      return this.sett.color1 || 'lightgreen';
    },
    color2: function color2() {
      return this.sett.color2 || 'orange';
    },
    back1: function back1() {
      return this.sett.back1 || '#79ff9e22';
    },
    back2: function back2() {
      return this.sett.back2 || '#ef535022';
    },
    draw_lines: function draw_lines() {
      return this.sett.drawLines;
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
;// CONCATENATED MODULE: ./src/overlays/Ichi/Ichi.vue?vue&type=script&lang=js&
 /* harmony default export */ const Ichi_Ichivue_type_script_lang_js_ = (Ichivue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/Ichi/Ichi.vue
var Ichi_render, Ichi_staticRenderFns
;



/* normalize component */
;
var Ichi_component = normalizeComponent(
  Ichi_Ichivue_type_script_lang_js_,
  Ichi_render,
  Ichi_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Ichi_api; }
Ichi_component.options.__file = "src/overlays/Ichi/Ichi.vue"
/* harmony default export */ const Ichi = (Ichi_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Ichimoku/Ichimoku.vue?vue&type=script&lang=js&
function Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Ichimokuvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Ichimokuvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Ichimokuvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ichimokuvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Ichimokuvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Ichimoku Indicator Overlay. Expected Format: [ <timestamp>, <ConversionLine>, <BaseLine>, <Lead1>, <Lead2>, <Lagging> ]

/* harmony default export */ const Ichimokuvue_type_script_lang_js_ = ({
  name: "Ichimoku",
  mixins: [external_trading_vue_js_.Overlay],
  data: function data() {
    return {
      ctxTenkan: {},
      ctxKijun: {},
      ctxSenkouSpanA: {},
      ctxSenkouSpanB: {},
      ctxChinkou: {},
      ctxFillKumo: {},
      tenkan: [],
      kijun: [],
      senkouSpanA: [],
      senkouSpanB: [],
      chinkou: [],
      offset: 26,
      tenkanLineWidth: 1,
      kijunLineWidth: 1,
      senkouSpanALineWidth: 1,
      senkouSpanBLineWidth: 1,
      chinkouLineWidth: 1,
      colorTenkan: "#52A634",
      colorKijun: "#52A59D",
      colorSenkouSpanA: "#438625",
      colorSenkouSpanB: "#bd003c",
      colorChinkou: "#BF2A64",
      colorKumoUp: "#063f0f",
      colorKumoDown: "#391c19",
      showTenkan: true,
      showKijun: true,
      showSenkouSpanA: true,
      showSenkouSpanB: true,
      showChinkou: true,
      showFillKumo: true
    };
  },
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    tenkan_color: function tenkan_color() {
      return this.sett['tenkan-color'] || this.colorTenkan;
    },
    kijun_color: function kijun_color() {
      return this.sett['kijun-color'] || this.colorKijun;
    },
    senkou_spanA_color: function senkou_spanA_color() {
      return this.sett['senkou_spanA_color'] || this.colorSenkouSpanA;
    },
    senkou_spanB_color: function senkou_spanB_color() {
      return this.sett['senkou_spanB_color'] || this.colorSenkouSpanB;
    },
    chinkou_color: function chinkou_color() {
      return this.sett['chinkou_color'] || this.colorChinkou;
    },
    kumo_up_color: function kumo_up_color() {
      return this.sett['kumo_up_color'] || this.colorKumoUp;
    },
    kumo_down_color: function kumo_down_color() {
      return this.sett['kumo_down_color'] || this.colorKumoDown;
    },
    tenkan_line_width: function tenkan_line_width() {
      return this.sett['tenkan_line_width'] || this.tenkanLineWidth;
    },
    kijun_line_width: function kijun_line_width() {
      return this.sett['kijun_line_width'] || this.kijunLineWidth;
    },
    senkou_spanA_line_width: function senkou_spanA_line_width() {
      return this.sett['senkou_spanA_line_width'] || this.senkouSpanALineWidth;
    },
    senkou_spanB_line_width: function senkou_spanB_line_width() {
      return this.sett['senkou_spanB_line_width'] || this.senkouSpanBLineWidth;
    },
    chinkou_line_width: function chinkou_line_width() {
      return this.sett['chinkou_line_width'] || this.chinkouLineWidth;
    }
  },
  methods: {
    meta_info: function meta_info() {
      return {
        author: "Sudeep Batra",
        version: "1.0.0"
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      var propsSub = this.$props.sub;
      this.ctxTenkan = ctx;
      this.ctxKijun = ctx;
      this.ctxSenkouSpanA = ctx;
      this.ctxSenkouSpanB = ctx;
      this.ctxChinkou = ctx;
      this.ctxFillKumo = ctx;
      var subdata = this.$props.data.slice(0, propsSub.length);
      var subdataSenkouSpan = this.$props.data.slice(0, propsSub.length + this.offset);
      var subdataChinkou = this.$props.data.slice(0, propsSub.length - this.offset);

      if (this.showFillKumo) {
        this.ctxFillKumo.beginPath();
        var ind = 0;

        var _iterator = Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(subdataSenkouSpan),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var currItem = _step.value;

            if (ind > 1) {
              var p1 = this.map_senkou_span_values(subdataSenkouSpan[ind - 1]);
              var p2 = this.map_senkou_span_values(currItem);
              this.ctxSenkouSpanB.beginPath();
              this.ctxSenkouSpanB.moveTo(p1.x, p1.senkouSpanA);
              this.ctxSenkouSpanB.lineTo(p2.x + 0.1, p2.senkouSpanA);
              this.ctxSenkouSpanB.lineTo(p2.x + 0.1, p2.senkouSpanB);
              this.ctxSenkouSpanB.lineTo(p1.x, p1.senkouSpanB);

              if (p1.senkouSpanA >= p1.senkouSpanB) {
                this.ctxSenkouSpanB.fillStyle = this.kumo_down_color;
              } else {
                this.ctxSenkouSpanB.fillStyle = this.kumo_up_color;
              }

              this.ctxSenkouSpanB.fill();
            }

            ind++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.ctxSenkouSpanB.stroke();
      }

      if (this.showTenkan) {
        this.ctxTenkan.beginPath();

        var _iterator2 = Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(subdata),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var pTenkan = _step2.value;
            this.ctxTenkan.strokeStyle = this.tenkan_color;
            this.ctxTenkan.lineWidth = this.tenkan_line_width;
            this.ctxTenkan.lineTo(layout.t2screen(pTenkan[0]), layout.$2screen(pTenkan[1]));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        this.ctxTenkan.stroke();
      }

      if (this.showKijun) {
        this.ctxKijun.beginPath();

        var _iterator3 = Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(subdata),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var pKijun = _step3.value;
            this.ctxKijun.strokeStyle = this.kijun_color;
            this.ctxKijun.lineWidth = this.kijun_line_width;
            this.ctxKijun.lineTo(layout.t2screen(pKijun[0]), layout.$2screen(pKijun[2]));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        this.ctxKijun.stroke();
      }

      if (this.showSenkouSpanA) {
        this.ctxSenkouSpanA.beginPath();

        var _iterator4 = Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(subdataSenkouSpan),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var pSenkouSpanA = _step4.value;
            this.ctxSenkouSpanA.strokeStyle = this.senkou_spanA_color;
            this.ctxSenkouSpanA.lineWidth = this.senkou_spanA_line_width;
            this.ctxSenkouSpanA.lineTo(layout.t2screen(pSenkouSpanA[0]), layout.$2screen(pSenkouSpanA[3]));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        this.ctxSenkouSpanA.stroke();
      }

      if (this.colorSenkouSpanB) {
        this.ctxSenkouSpanB.beginPath();

        var _iterator5 = Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(subdataSenkouSpan),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var pSenkouSpanB = _step5.value;
            this.ctxSenkouSpanB.strokeStyle = this.senkou_spanB_color;
            this.ctxSenkouSpanB.lineWidth = this.senkou_spanB_line_width;
            this.ctxSenkouSpanB.lineTo(layout.t2screen(pSenkouSpanB[0]), layout.$2screen(pSenkouSpanB[4]));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        this.ctxSenkouSpanB.stroke();
      }

      if (this.showChinkou) {
        this.ctxChinkou.beginPath();

        var _iterator6 = Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(subdataChinkou),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var pChikou = _step6.value;
            this.ctxChinkou.strokeStyle = this.chinkou_color;
            this.ctxChinkou.lineWidth = this.chinkou_line_width;
            this.ctxChinkou.lineTo(layout.t2screen(pChikou[0]), layout.$2screen(pChikou[5]));
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        this.ctxChinkou.stroke();
      }
    },
    map_senkou_span_values: function map_senkou_span_values(p) {
      var layout = this.$props.layout;
      return p && {
        x: layout.t2screen(p[0]),
        senkouSpanA: layout.$2screen(p[3]),
        senkouSpanB: layout.$2screen(p[4])
      };
    },
    use_for: function use_for() {
      return ["Ichimoku"];
    },
    data_colors: function data_colors() {
      var colors = [];
      colors.push(this.tenkan_color);
      colors.push(this.kijun_color);
      colors.push(this.senkou_spanA_color);
      colors.push(this.senkou_spanB_color);
      colors.push(this.chinkou_color);
      return colors;
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/Ichimoku/Ichimoku.vue?vue&type=script&lang=js&
 /* harmony default export */ const Ichimoku_Ichimokuvue_type_script_lang_js_ = (Ichimokuvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/Ichimoku/Ichimoku.vue
var Ichimoku_render, Ichimoku_staticRenderFns
;



/* normalize component */
;
var Ichimoku_component = normalizeComponent(
  Ichimoku_Ichimokuvue_type_script_lang_js_,
  Ichimoku_render,
  Ichimoku_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Ichimoku_api; }
Ichimoku_component.options.__file = "src/overlays/Ichimoku/Ichimoku.vue"
/* harmony default export */ const Ichimoku = (Ichimoku_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/KC/KC.vue?vue&type=script&lang=js&

/* harmony default export */ const KCvue_type_script_lang_js_ = ({
  name: 'KC',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Keltner Channels',
        preset: {
          name: 'KC $length $mult',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#4c8dffab',
            showMid: true,
            backColor: '#4c8dff0a'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['KC'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 20,
            text: 'Length'
          },
          mult: {
            def: 1,
            text: 'Multiplier'
          },
          use_tr: {
            def: true,
            text: 'Use True Range'
          }
        },
        conf: {
          renderer: 'Channel'
        },
        update: "\n                    let [m, h, l] = kc(close, length, mult, use_tr)\n                    return [h[0], m[0], l[0]]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/KC/KC.vue?vue&type=script&lang=js&
 /* harmony default export */ const KC_KCvue_type_script_lang_js_ = (KCvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/KC/KC.vue
var KC_render, KC_staticRenderFns
;



/* normalize component */
;
var KC_component = normalizeComponent(
  KC_KCvue_type_script_lang_js_,
  KC_render,
  KC_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var KC_api; }
KC_component.options.__file = "src/overlays/KC/KC.vue"
/* harmony default export */ const KC = (KC_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/KCW/KCW.vue?vue&type=script&lang=js&

/* harmony default export */ const KCWvue_type_script_lang_js_ = ({
  name: 'KCW',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Keltner Channels Width',
        preset: {
          name: 'KCW $length $mult',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#4c8dffab'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['KCW'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 20,
            text: 'Length'
          },
          mult: {
            def: 1,
            text: 'Multiplier'
          },
          use_tr: {
            def: true,
            text: 'Use True Range'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return kcw(close, length, mult, use_tr)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/KCW/KCW.vue?vue&type=script&lang=js&
 /* harmony default export */ const KCW_KCWvue_type_script_lang_js_ = (KCWvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/KCW/KCW.vue
var KCW_render, KCW_staticRenderFns
;



/* normalize component */
;
var KCW_component = normalizeComponent(
  KCW_KCWvue_type_script_lang_js_,
  KCW_render,
  KCW_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var KCW_api; }
KCW_component.options.__file = "src/overlays/KCW/KCW.vue"
/* harmony default export */ const KCW = (KCW_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/LongShortTrades/LongShortTrades.vue?vue&type=script&lang=js&
function LongShortTradesvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = LongShortTradesvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function LongShortTradesvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LongShortTradesvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LongShortTradesvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function LongShortTradesvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Long Short Overlay. Expected Format: [ <timestamp>, <Short:0 Long:1 ShortCover: 2 LongCover:3>, <Price Change>, <Percent Price Change>, <Open Price>, <High Price>, <Low Price>, <Close Price> ]

/* harmony default export */ const LongShortTradesvue_type_script_lang_js_ = ({
  name: 'LongShortTrades',
  mixins: [external_trading_vue_js_.Overlay],
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    default_font: function default_font() {
      return '12px ' + this.$props.font.split('px').pop();
    },
    currency_symbol: function currency_symbol() {
      return this.sett.currency || '₹';
    },
    long_color: function long_color() {
      return this.sett.longColor || '#63df89';
    },
    short_color: function short_color() {
      return this.sett.shortColor || '#ffd581';
    },
    long_cover_color: function long_cover_color() {
      return this.sett.longCoverColor || '#fc7e2f';
    },
    short_cover_color: function short_cover_color() {
      return this.sett.shortCoverColor || '#ff6bd6';
    },
    label_color: function label_color() {
      return '#4BECF9';
    },
    marker_size: function marker_size() {
      return this.sett.markerSize || 5;
    },
    show_label: function show_label() {
      return this.sett.showLabel !== false;
    },
    new_font: function new_font() {
      return this.sett.font || this.default_font;
    }
  },
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'Sudeep Batra',
        version: '1.0.1'
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'black';

      var _iterator = LongShortTradesvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var tradeTime = p[0];
          var longShortEntryExit = p[1];
          var priceChange = p[2];
          var percentPriceChange = p[3];
          var openPrice = p[4];
          var highPrice = p[5];
          var lowPrice = p[6];
          var closePrice = p[7];
          var x = layout.t2screen(tradeTime);
          var lowPriceY = layout.$2screen(lowPrice);
          var highPriceY = layout.$2screen(highPrice);

          switch (longShortEntryExit) {
            case 0:
              this.filledArrowDownFilledBottom(ctx, x, highPriceY - 25, 5, 5, 3, 20, this.short_color);
              this.draw_label(ctx, x + 30, highPriceY - 35, this.currency_symbol + closePrice);
              break;

            case 1:
              this.filledArrowUpFilledBottom(ctx, x, lowPriceY + 20, 5, 5, 3, 20, this.long_color);
              this.draw_label(ctx, x + 30, lowPriceY + 40, this.currency_symbol + closePrice);
              break;

            case 2:
              this.upTriangle(ctx, x, lowPriceY + 25, 5, 7, this.short_cover_color);

              if (this.show_label && priceChange) {
                this.draw_label(ctx, x, lowPriceY + 50, priceChange + " (" + percentPriceChange + ")");
              }

              break;

            case 3:
              this.downTriangle(ctx, x, highPriceY - 25, 5, 7, this.long_cover_color);

              if (this.show_label && priceChange) {
                this.draw_label(ctx, x, highPriceY - 45, priceChange + " (" + percentPriceChange + ")");
              }

              break;

            default:
              ctx.fillStyle = 'black';
          } // this.simpleArrowUp(ctx, x, z - 25, '#84e5b1')
          // this.simpleArrowDown(ctx, x, z - 25, '#84e5b1')
          // this.filledArrowUp(ctx, x, z - 25, 5, 5, 20, '#84e5b1')
          // this.filledDownArrow(ctx, x, z - 25, 5, 5, 20, '#84e5b1')
          // this.filledArrowUpFilledBottom(ctx, x, z - 25, 5, 5, 3, 20, '#84e5b1')
          // this.filledArrowDownFilledBottom(ctx, x, z - 25, 5, 5, 3, 20, '#84e5b1')
          // this.upTriangle(ctx, x, z-60, 5, 7, '#84e5b1')
          // this.downTriangle(ctx, x, z - 25, 5, 7, '#84e5b1')

        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    draw_label: function draw_label(ctx, x, y, labelText) {
      ctx.fillStyle = this.label_color;
      ctx.font = this.new_font;
      ctx.textAlign = 'center';
      ctx.fillText(labelText, x, y);
    },
    use_for: function use_for() {
      return ['LongShortTrades'];
    },
    legend: function legend(values) {
      switch (values[1]) {
        case 0:
          var pos = 'Short';
          break;

        case 1:
          pos = 'Long';
          break;

        case 2:
          pos = 'Short Cover';
          break;

        case 3:
          pos = 'Long Cover';
          break;

        default:
          pos = 'Unknown';
      }

      return [{
        value: pos
      }, {
        value: values[2].toFixed(4),
        color: this.$props.colors.colorText
      }].concat(values[3] ? [{
        value: values[3]
      }] : []);
    },
    simpleArrowUp: function simpleArrowUp(ctx, x, y, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - 5, y + 5);
      ctx.lineTo(x, y);
      ctx.lineTo(x + 5, y + 5);
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + 15);
      ctx.stroke();
      ctx.closePath();
    },
    simpleArrowDown: function simpleArrowDown(ctx, x, y, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - 5, y - 5);
      ctx.lineTo(x, y);
      ctx.lineTo(x + 5, y - 5);
      ctx.moveTo(x, y);
      ctx.lineTo(x, y - 15);
      ctx.stroke();
      ctx.closePath();
    },
    filledArrowUp: function filledArrowUp(ctx, x, y, width, height, depth, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - width, y + height);
      ctx.lineTo(x, y);
      ctx.lineTo(x + width, y + height);
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + depth);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    filledDownArrow: function filledDownArrow(ctx, x, y, width, height, depth, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - width, y - height);
      ctx.lineTo(x, y);
      ctx.lineTo(x + width, y - height);
      ctx.moveTo(x, y);
      ctx.lineTo(x, y - depth);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    filledArrowUpFilledBottom: function filledArrowUpFilledBottom(ctx, x, y, width, height, bottom, depth, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - width, y + height);
      ctx.lineTo(x, y);
      ctx.lineTo(x + width, y + height);
      ctx.moveTo(x, y);
      ctx.rect(x - bottom / 2, y + height, bottom, depth);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    filledArrowDownFilledBottom: function filledArrowDownFilledBottom(ctx, x, y, width, height, bottom, depth, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - width, y - height);
      ctx.lineTo(x, y);
      ctx.lineTo(x + width, y - height);
      ctx.moveTo(x, y);
      ctx.rect(x - bottom / 2, y - height - depth, bottom, depth);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    upTriangle: function upTriangle(ctx, x, y, width, height, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - width, y + height);
      ctx.lineTo(x, y);
      ctx.lineTo(x + width, y + height);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    downTriangle: function downTriangle(ctx, x, y, width, height, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(x - width, y - height);
      ctx.lineTo(x, y);
      ctx.lineTo(x + width, y - height);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/LongShortTrades/LongShortTrades.vue?vue&type=script&lang=js&
 /* harmony default export */ const LongShortTrades_LongShortTradesvue_type_script_lang_js_ = (LongShortTradesvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/LongShortTrades/LongShortTrades.vue
var LongShortTrades_render, LongShortTrades_staticRenderFns
;



/* normalize component */
;
var LongShortTrades_component = normalizeComponent(
  LongShortTrades_LongShortTradesvue_type_script_lang_js_,
  LongShortTrades_render,
  LongShortTrades_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var LongShortTrades_api; }
LongShortTrades_component.options.__file = "src/overlays/LongShortTrades/LongShortTrades.vue"
/* harmony default export */ const LongShortTrades = (LongShortTrades_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/MACD/MACD.vue?vue&type=script&lang=js&
function MACDvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = MACDvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function MACDvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MACDvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MACDvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function MACDvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// TODO: pass colors from settings to the script
// TODO: hist lines => recangles (like in volbar.js)

/* harmony default export */ const MACDvue_type_script_lang_js_ = ({
  name: 'MACD',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.2',
        desc: 'Moving Average Convergence/Divergence',
        preset: {
          name: 'MACD $fast $slow $smooth',
          side: 'offchart',
          settings: {
            histWidth: 4,
            macdWidth: 1,
            signalWidth: 1,
            defColor: "#42b28a",
            macdColor: "#3782f2",
            signalColor: "#f48709",
            histColors: ["#35a776", "#79e0b3", "#e54150", "#ea969e"]
          }
        }
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout; // HISTOGRAM

      var base = layout.$2screen(0) + 0.5;
      var off = this.hist_width % 2 ? 0 : 0.5;
      ctx.lineWidth = this.hist_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();

      var _iterator = MACDvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]) - off;
          var y = layout.$2screen(p[1]) - 0.5;
          ctx.strokeStyle = this.sett.histColors[p[4]];
          ctx.beginPath();
          ctx.moveTo(x, base);
          ctx.lineTo(x, y);
          ctx.stroke();
        } // MACD LINE

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.beginPath();
      ctx.lineWidth = this.macd_width;
      ctx.strokeStyle = this.macd_color;

      var _iterator2 = MACDvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var p = _step2.value;

          var _x = layout.t2screen(p[0]);

          var _y = layout.$2screen(p[2]);

          ctx.lineTo(_x, _y);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      ctx.stroke(); // SIGNAL LINE

      ctx.beginPath();
      ctx.lineWidth = this.signal_width;
      ctx.strokeStyle = this.signal_color;

      var _iterator3 = MACDvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var p = _step3.value;

          var _x2 = layout.t2screen(p[0]);

          var _y2 = layout.$2screen(p[3]);

          ctx.lineTo(_x2, _y2);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      ctx.stroke();
    },
    use_for: function use_for() {
      return ['MACD'];
    },
    legend: function legend(values) {
      var xs = values.slice(1, 4).map(function (x) {
        return x.toFixed(Math.abs(x) > 0.001 ? 4 : 8);
      });
      return [{
        value: xs[0],
        color: this.hist_colors[values[4]]
      }, {
        value: xs[1],
        color: this.macd_color
      }, {
        value: xs[2],
        color: this.signal_color
      }];
    },
    calc: function calc() {
      return {
        props: {
          fast: {
            def: 12,
            text: 'Fast Length'
          },
          slow: {
            def: 26,
            text: 'Slow Length'
          },
          smooth: {
            def: 9,
            text: 'Signal EMA'
          }
        },
        update: "\n                    let [macd, signal, hist] =\n                        macd(close, fast, slow, smooth)\n\n                    if (hist[0] >= 0) {\n                         var color = 0\n                         if (hist[0] < hist[1]) color = 1\n                    } else {\n                        color = 2\n                        if (hist[0] > hist[1]) color = 3\n                    }\n\n                    return [hist[0], macd[0], signal[0], color]\n                "
      };
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    hist_width: function hist_width() {
      return this.sett.histWidth || 4;
    },
    macd_width: function macd_width() {
      return this.sett.macdWidth || 1;
    },
    signal_width: function signal_width() {
      return this.sett.signalWidth || 1;
    },
    color: function color() {
      return this.sett.defColor || "#42b28a";
    },
    macd_color: function macd_color() {
      return this.sett.macdColor || "#3782f2";
    },
    signal_color: function signal_color() {
      return this.sett.signalColor || "#f48709";
    },
    hist_colors: function hist_colors() {
      return this.sett.histColors;
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/MACD/MACD.vue?vue&type=script&lang=js&
 /* harmony default export */ const MACD_MACDvue_type_script_lang_js_ = (MACDvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/MACD/MACD.vue
var MACD_render, MACD_staticRenderFns
;



/* normalize component */
;
var MACD_component = normalizeComponent(
  MACD_MACDvue_type_script_lang_js_,
  MACD_render,
  MACD_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MACD_api; }
MACD_component.options.__file = "src/overlays/MACD/MACD.vue"
/* harmony default export */ const MACD = (MACD_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/MFI/MFI.vue?vue&type=script&lang=js&

/* harmony default export */ const MFIvue_type_script_lang_js_ = ({
  name: 'MFI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Money Flow Index',
        preset: {
          name: 'MFI $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#85c427ee',
            bandColor: '#aaaaaa',
            backColor: '#85c42711',
            upper: 80,
            lower: 20
          }
        }
      };
    },
    use_for: function use_for() {
      return ['MFI'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 14,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Range'
        },
        update: "\n                    let hlc3 = ts((high[0] + low[0] + close[0]) / 3)\n                    return mfi(hlc3, length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/MFI/MFI.vue?vue&type=script&lang=js&
 /* harmony default export */ const MFI_MFIvue_type_script_lang_js_ = (MFIvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/MFI/MFI.vue
var MFI_render, MFI_staticRenderFns
;



/* normalize component */
;
var MFI_component = normalizeComponent(
  MFI_MFIvue_type_script_lang_js_,
  MFI_render,
  MFI_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MFI_api; }
MFI_component.options.__file = "src/overlays/MFI/MFI.vue"
/* harmony default export */ const MFI = (MFI_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/MOM/MOM.vue?vue&type=script&lang=js&

/* harmony default export */ const MOMvue_type_script_lang_js_ = ({
  name: 'MOM',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Momentum',
        preset: {
          name: 'MOM $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#bcc427ee'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['MOM'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 11,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return mom(close, length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/MOM/MOM.vue?vue&type=script&lang=js&
 /* harmony default export */ const MOM_MOMvue_type_script_lang_js_ = (MOMvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/MOM/MOM.vue
var MOM_render, MOM_staticRenderFns
;



/* normalize component */
;
var MOM_component = normalizeComponent(
  MOM_MOMvue_type_script_lang_js_,
  MOM_render,
  MOM_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var MOM_api; }
MOM_component.options.__file = "src/overlays/MOM/MOM.vue"
/* harmony default export */ const MOM = (MOM_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Markers/Markers.vue?vue&type=script&lang=js&
function Markersvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Markersvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Markersvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Markersvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Markersvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Markersvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const Markersvue_type_script_lang_js_ = ({
  name: 'Markers',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.1',
        desc: 'Interactive markers'
      };
    },
    init: function init() {
      this.mouse.on('mousemove', function () {});
    },
    draw: function draw(ctx) {
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'black';
      document.body.style.cursor = 'auto';
      this.selected = null;

      var _iterator = Markersvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          this.draw_point(ctx, p);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var f = this.data.find(function (x) {
        return x[1].sel;
      });

      if (f) {
        this.draw_point(ctx, f);
      }
    },
    draw_point: function draw_point(ctx, p) {
      var layout = this.$props.layout;
      var stroke = this.colors.back;
      var fill = p[1].color || 'orange';
      var radius = 2;
      var height = p[1].sel ? 20 : 14;
      var width = p[1].sel ? 17 : 13;
      var x = layout.t2screen(p[0]) - width * 0.5;
      var y = layout.$2screen(p[1].$) - (p[1].sel ? 27 : 20); // Collisions

      if (this.mouse.x > x && this.mouse.x < x + width && this.mouse.y > y && this.mouse.y < y + height) {
        document.body.style.cursor = 'pointer';
        this.selected = p;
        stroke = this.colors.text;
      }

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + width * 1 / 2, y + height + height / 5);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.lineWidth = 1;
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.strokeStyle = stroke;
      ctx.fill();
      ctx.stroke();
      ctx.textAlign = 'center';
      ctx.fillStyle = p[1].textColor || this.colors.back;
      ctx.font = "".concat(p[1].sel ? 15 : 11, "px Arial");
      ctx.fillText(p[1].text || '$', x + width / 2, y + height * 0.8);
    },
    use_for: function use_for() {
      return ['Markers'];
    },
    legend: function legend() {
      return [];
    },
    mousedown: function mousedown() {
      this.$emit('marker-selected', this.selected);
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    default_font: function default_font() {
      return '12px ' + this.$props.font.split('px').pop();
    },
    new_font: function new_font() {
      return this.sett.font || this.default_font;
    }
  },
  data: function data() {
    return {
      selected: null
    };
  }
});
;// CONCATENATED MODULE: ./src/overlays/Markers/Markers.vue?vue&type=script&lang=js&
 /* harmony default export */ const Markers_Markersvue_type_script_lang_js_ = (Markersvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/Markers/Markers.vue
var Markers_render, Markers_staticRenderFns
;



/* normalize component */
;
var Markers_component = normalizeComponent(
  Markers_Markersvue_type_script_lang_js_,
  Markers_render,
  Markers_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Markers_api; }
Markers_component.options.__file = "src/overlays/Markers/Markers.vue"
/* harmony default export */ const Markers = (Markers_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/PlotCross/PlotCross.vue?vue&type=script&lang=js&
function PlotCrossvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = PlotCrossvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function PlotCrossvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PlotCrossvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PlotCrossvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function PlotCrossvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const PlotCrossvue_type_script_lang_js_ = ({
  name: 'PlotCross',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Plot line with crosses'
      };
    },
    draw: function draw(ctx) {
      var w = ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var base = layout.$2screen(0) + 0.5;
      var off = this.line_width % 2 ? 0 : 0.5;
      var off2 = this.line_width % 2 ? 0.5 : 1; // Color changed

      var changed = false;

      var _iterator = PlotCrossvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]) - off;
          var y = layout.$2screen(p[1]) - off;
          var _changed = false;

          if (p[2]) {
            if (ctx.strokeStyle !== p[2]) {
              ctx.stroke();
              _changed = true;
            }

            ctx.strokeStyle = p[2];
          } else {
            if (ctx.strokeStyle !== this.color) {
              ctx.stroke();
              _changed = true;
            }

            ctx.strokeStyle = this.color;
          }

          if (_changed) ctx.beginPath();
          ctx.moveTo(x, y - w * 2 + off2);
          ctx.lineTo(x, y + w * 2 - off2);
          ctx.moveTo(x - w * 2 + off2, y);
          ctx.lineTo(x + w * 2 - off2, y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.stroke();
    },
    use_for: function use_for() {
      return ['PlotCross'];
    },
    legend: function legend(values) {
      var x = values[1];

      if (typeof x === "number") {
        x = x.toFixed(Math.abs(x) > 0.001 ? 4 : 8);
      }

      return [{
        value: x,
        color: values[2] || this.color
      }];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 2;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    }
  },
  data: function data() {
    return {
      COLORS: ['#888888', '#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
;// CONCATENATED MODULE: ./src/overlays/PlotCross/PlotCross.vue?vue&type=script&lang=js&
 /* harmony default export */ const PlotCross_PlotCrossvue_type_script_lang_js_ = (PlotCrossvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/PlotCross/PlotCross.vue
var PlotCross_render, PlotCross_staticRenderFns
;



/* normalize component */
;
var PlotCross_component = normalizeComponent(
  PlotCross_PlotCrossvue_type_script_lang_js_,
  PlotCross_render,
  PlotCross_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var PlotCross_api; }
PlotCross_component.options.__file = "src/overlays/PlotCross/PlotCross.vue"
/* harmony default export */ const PlotCross = (PlotCross_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ROC/ROC.vue?vue&type=script&lang=js&

/* harmony default export */ const ROCvue_type_script_lang_js_ = ({
  name: 'ROC',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Rate of Change',
        preset: {
          name: 'ROC $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#279fc4'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['ROC'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 9,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return roc(close, length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/ROC/ROC.vue?vue&type=script&lang=js&
 /* harmony default export */ const ROC_ROCvue_type_script_lang_js_ = (ROCvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/ROC/ROC.vue
var ROC_render, ROC_staticRenderFns
;



/* normalize component */
;
var ROC_component = normalizeComponent(
  ROC_ROCvue_type_script_lang_js_,
  ROC_render,
  ROC_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var ROC_api; }
ROC_component.options.__file = "src/overlays/ROC/ROC.vue"
/* harmony default export */ const ROC = (ROC_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/RSI/RSI.vue?vue&type=script&lang=js&

/* harmony default export */ const RSIvue_type_script_lang_js_ = ({
  name: 'RSI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Relative Strength Index',
        preset: {
          name: 'RSI $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#ec206e',
            bandColor: '#aaa',
            backColor: '#9b9ba316'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['RSI'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 14,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Range'
        },
        update: "return rsi(close, length)[0]"
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/RSI/RSI.vue?vue&type=script&lang=js&
 /* harmony default export */ const RSI_RSIvue_type_script_lang_js_ = (RSIvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/RSI/RSI.vue
var RSI_render, RSI_staticRenderFns
;



/* normalize component */
;
var RSI_component = normalizeComponent(
  RSI_RSIvue_type_script_lang_js_,
  RSI_render,
  RSI_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var RSI_api; }
RSI_component.options.__file = "src/overlays/RSI/RSI.vue"
/* harmony default export */ const RSI = (RSI_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Ribbon/Ribbon.vue?vue&type=script&lang=js&

/* harmony default export */ const Ribbonvue_type_script_lang_js_ = ({
  name: 'Ribbon',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Moving Average Ribbon',
        preset: {
          name: 'EMA x $number',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            colors: ["#3aaaf4ee"]
          }
        }
      };
    },
    use_for: function use_for() {
      return ['Ribbon'];
    },
    calc: function calc() {
      return {
        props: {
          start: {
            def: 10,
            text: 'Start Length'
          },
          number: {
            def: 5,
            text: 'Number of Lines'
          },
          step: {
            def: 10,
            text: 'Length Step'
          }
        },
        conf: {
          renderer: 'Splines'
        },
        update: "\n                    this[0] = []\n                    for (var i = 0; i < number; i++) {\n                        let l = start + i * step\n                        this[0].push(ema(close, l)[0])\n                    }\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/Ribbon/Ribbon.vue?vue&type=script&lang=js&
 /* harmony default export */ const Ribbon_Ribbonvue_type_script_lang_js_ = (Ribbonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/Ribbon/Ribbon.vue
var Ribbon_render, Ribbon_staticRenderFns
;



/* normalize component */
;
var Ribbon_component = normalizeComponent(
  Ribbon_Ribbonvue_type_script_lang_js_,
  Ribbon_render,
  Ribbon_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Ribbon_api; }
Ribbon_component.options.__file = "src/overlays/Ribbon/Ribbon.vue"
/* harmony default export */ const Ribbon = (Ribbon_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/SAR/SAR.vue?vue&type=script&lang=js&

/* harmony default export */ const SARvue_type_script_lang_js_ = ({
  name: 'SAR',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Parabolic SAR',
        preset: {
          name: 'SAR $start $inc $max',
          side: 'onchart',
          settings: {
            lineWidth: 2,
            color: '#35a9c6'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['SAR'];
    },
    calc: function calc() {
      return {
        props: {
          start: {
            def: 0.02,
            text: 'Start'
          },
          inc: {
            def: 0.02,
            text: 'Increment'
          },
          max: {
            def: 0.2,
            text: 'Maximum'
          }
        },
        conf: {
          renderer: 'PlotCross'
        },
        update: "\n                    return sar(start, inc, max)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/SAR/SAR.vue?vue&type=script&lang=js&
 /* harmony default export */ const SAR_SARvue_type_script_lang_js_ = (SARvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/SAR/SAR.vue
var SAR_render, SAR_staticRenderFns
;



/* normalize component */
;
var SAR_component = normalizeComponent(
  SAR_SARvue_type_script_lang_js_,
  SAR_render,
  SAR_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var SAR_api; }
SAR_component.options.__file = "src/overlays/SAR/SAR.vue"
/* harmony default export */ const SAR = (SAR_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/SMA/SMA.vue?vue&type=script&lang=js&

/* harmony default export */ const SMAvue_type_script_lang_js_ = ({
  name: 'SMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Simple Moving Average',
        preset: {
          name: 'SMA $length',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#d1385c'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['SMA'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 25,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return sma(close, length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/SMA/SMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const SMA_SMAvue_type_script_lang_js_ = (SMAvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/SMA/SMA.vue
var SMA_render, SMA_staticRenderFns
;



/* normalize component */
;
var SMA_component = normalizeComponent(
  SMA_SMAvue_type_script_lang_js_,
  SMA_render,
  SMA_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var SMA_api; }
SMA_component.options.__file = "src/overlays/SMA/SMA.vue"
/* harmony default export */ const SMA = (SMA_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/SWMA/SWMA.vue?vue&type=script&lang=js&

/* harmony default export */ const SWMAvue_type_script_lang_js_ = ({
  name: 'SWMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Symmetrically Weighted Moving Average',
        preset: {
          name: 'SWMA',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#e57440'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['SWMA'];
    },
    calc: function calc() {
      return {
        props: {},
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return swma(close)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/SWMA/SWMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const SWMA_SWMAvue_type_script_lang_js_ = (SWMAvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/SWMA/SWMA.vue
var SWMA_render, SWMA_staticRenderFns
;



/* normalize component */
;
var SWMA_component = normalizeComponent(
  SWMA_SWMAvue_type_script_lang_js_,
  SWMA_render,
  SWMA_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var SWMA_api; }
SWMA_component.options.__file = "src/overlays/SWMA/SWMA.vue"
/* harmony default export */ const SWMA = (SWMA_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Stoch/Stoch.vue?vue&type=script&lang=js&
function Stochvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Stochvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function Stochvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Stochvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Stochvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function Stochvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/* harmony default export */ const Stochvue_type_script_lang_js_ = ({
  name: 'Stoch',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Stochastic',
        preset: {
          name: 'Stoch $param_k $param_d $smooth',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            kColor: '#3782f2',
            dColor: '#f48709',
            bandColor: '#ddd',
            backColor: '#381e9c16'
          }
        }
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      var upper = layout.$2screen(this.sett.upper || 80);
      var lower = layout.$2screen(this.sett.lower || 20); // K

      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.k_color;
      ctx.beginPath();

      var _iterator = Stochvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]);
          var y = layout.$2screen(p[1]);
          ctx.lineTo(x, y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.stroke(); // D

      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.d_color;
      ctx.beginPath();

      var _iterator2 = Stochvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var p = _step2.value;

          var _x = layout.t2screen(p[0]);

          var _y = layout.$2screen(p[2]);

          ctx.lineTo(_x, _y);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      ctx.stroke();
      ctx.strokeStyle = this.band_color;
      ctx.setLineDash([5]); // Will be removed after draw()

      ctx.beginPath(); // Fill the area between the bands

      ctx.fillStyle = this.back_color;
      ctx.fillRect(0, upper, layout.width, lower - upper); // Upper band

      ctx.moveTo(0, upper);
      ctx.lineTo(layout.width, upper); // Lower band

      ctx.moveTo(0, lower);
      ctx.lineTo(layout.width, lower);
      ctx.stroke();
    },
    use_for: function use_for() {
      return ['Stoch'];
    },
    data_colors: function data_colors() {
      return [this.color];
    },
    y_range: function y_range(hi, lo) {
      return [Math.max(hi, this.sett.upper || 80), Math.min(lo, this.sett.lower || 20)];
    },
    calc: function calc() {
      return {
        props: {
          param_k: {
            def: 14,
            text: 'K'
          },
          param_d: {
            def: 3,
            text: 'D'
          },
          smooth: {
            def: 3,
            text: 'Smooth'
          }
        },
        update: "\n                    let k = sma(stoch(close, high, low, param_k), smooth)\n                    let d = sma(k, param_d)\n                    return [k[0], d[0]]\n                "
      };
    }
  },
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    line_width: function line_width() {
      return this.sett.lineWidth || 0.75;
    },
    k_color: function k_color() {
      return this.sett.kColor || '#3782f2';
    },
    d_color: function d_color() {
      return this.sett.dColor || '#f48709';
    },
    band_color: function band_color() {
      return this.sett.bandColor || '#ddd';
    },
    back_color: function back_color() {
      return this.sett.backColor || '#381e9c16';
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/Stoch/Stoch.vue?vue&type=script&lang=js&
 /* harmony default export */ const Stoch_Stochvue_type_script_lang_js_ = (Stochvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/Stoch/Stoch.vue
var Stoch_render, Stoch_staticRenderFns
;



/* normalize component */
;
var Stoch_component = normalizeComponent(
  Stoch_Stochvue_type_script_lang_js_,
  Stoch_render,
  Stoch_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Stoch_api; }
Stoch_component.options.__file = "src/overlays/Stoch/Stoch.vue"
/* harmony default export */ const Stoch = (Stoch_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/TSI/TSI.vue?vue&type=script&lang=js&

/* harmony default export */ const TSIvue_type_script_lang_js_ = ({
  name: 'TSI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'True Strength Index',
        preset: {
          name: 'TSI $long $short $signal',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            colors: ["#3bb3e4", "#f7046d"]
          }
        }
      };
    },
    use_for: function use_for() {
      return ['TSI'];
    },
    calc: function calc() {
      return {
        props: {
          "long": {
            def: 25,
            text: 'Long Length'
          },
          "short": {
            def: 13,
            text: 'Short Length'
          },
          signal: {
            def: 13,
            text: 'Signal Length'
          }
        },
        conf: {
          renderer: 'Splines'
        },
        update: "\n                    let val = tsi(close, short, long)\n                    let sig = ema(val, signal)\n                    return [val[0] * 100, sig[0] * 100]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/TSI/TSI.vue?vue&type=script&lang=js&
 /* harmony default export */ const TSI_TSIvue_type_script_lang_js_ = (TSIvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/TSI/TSI.vue
var TSI_render, TSI_staticRenderFns
;



/* normalize component */
;
var TSI_component = normalizeComponent(
  TSI_TSIvue_type_script_lang_js_,
  TSI_render,
  TSI_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TSI_api; }
TSI_component.options.__file = "src/overlays/TSI/TSI.vue"
/* harmony default export */ const TSI = (TSI_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/TradesPlus/TradesPlus.vue?vue&type=script&lang=js&
function TradesPlusvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = TradesPlusvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function TradesPlusvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TradesPlusvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TradesPlusvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function TradesPlusvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var CROSS = "m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853\n84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147\n171.147 171.147 84.853-84.853-171.148-171.148z";
/* harmony default export */ const TradesPlusvue_type_script_lang_js_ = ({
  name: 'TradesPlus',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'C451',
        version: '1.0.1',
        desc: 'Trades overlay with stops'
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout;
      ctx.strokeStyle = 'black';

      var _iterator = TradesPlusvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          ctx.fillStyle = p[1] ? this.buy_color : this.sell_color;
          var x = layout.t2screen(p[0]); // x - Mapping

          var y = layout.$2screen(p[2]); // y - Mapping

          if (p[3] === 'Stop') {
            this.draw_cross(ctx, x, y);
          } else {
            this.draw_circle(ctx, x, y);
          }

          if (this.show_label && p[3] && p[3] !== 'Stop') {
            this.draw_label(ctx, x, y, p);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    draw_label: function draw_label(ctx, x, y, p) {
      ctx.fillStyle = this.label_color;
      ctx.font = this.new_font;
      ctx.textAlign = 'center';
      ctx.fillText(p[3], x, y - 25);
    },
    draw_circle: function draw_circle(ctx, x, y) {
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, this.marker_size + 0.5, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
    },
    draw_cross: function draw_cross(ctx, x, y) {
      ctx.save();
      var p = new Path2D(CROSS);
      ctx.lineWidth = 150;
      ctx.translate(x - 5, y - 5);
      ctx.scale(0.0175, 0.0175);
      ctx.stroke(p);
      ctx.fill(p);
      ctx.scale(1, 1);
      ctx.restore();
    },
    use_for: function use_for() {
      return ['TradesPlus'];
    },
    // Defines legend format (values & colors)
    legend: function legend(values) {
      switch (values[1]) {
        case 0:
          var pos = 'Sell';
          break;

        case 1:
          pos = 'Buy';
          break;

        default:
          pos = 'Unknown';
      }

      return [{
        value: pos
      }, {
        value: values[2].toFixed(4),
        color: this.$props.colors.colorText
      }].concat(values[3] ? [{
        value: values[3]
      }] : []);
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    default_font: function default_font() {
      return '12px ' + this.$props.font.split('px').pop();
    },
    buy_color: function buy_color() {
      return this.sett.buyColor || '#63df89';
    },
    sell_color: function sell_color() {
      return this.sett.sellColor || '#ec4662';
    },
    label_color: function label_color() {
      return this.sett.labelColor || this.colors.text;
    },
    marker_size: function marker_size() {
      return this.sett.markerSize || 5;
    },
    show_label: function show_label() {
      return this.sett.showLabel !== false;
    },
    new_font: function new_font() {
      return this.sett.font || this.default_font;
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/TradesPlus/TradesPlus.vue?vue&type=script&lang=js&
 /* harmony default export */ const TradesPlus_TradesPlusvue_type_script_lang_js_ = (TradesPlusvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/TradesPlus/TradesPlus.vue
var TradesPlus_render, TradesPlus_staticRenderFns
;



/* normalize component */
;
var TradesPlus_component = normalizeComponent(
  TradesPlus_TradesPlusvue_type_script_lang_js_,
  TradesPlus_render,
  TradesPlus_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TradesPlus_api; }
TradesPlus_component.options.__file = "src/overlays/TradesPlus/TradesPlus.vue"
/* harmony default export */ const TradesPlus = (TradesPlus_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/VWMA/VWMA.vue?vue&type=script&lang=js&

/* harmony default export */ const VWMAvue_type_script_lang_js_ = ({
  name: 'VWMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Volume Weighted Moving Average',
        preset: {
          name: 'VWMA $length',
          side: 'onchart',
          settings: {
            lineWidth: 0.75,
            color: '#db0670'
          }
        }
      };
    },
    use_for: function use_for() {
      return ['VWMA'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 20,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Spline'
        },
        update: "\n                    return vwma(close, length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/VWMA/VWMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const VWMA_VWMAvue_type_script_lang_js_ = (VWMAvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/VWMA/VWMA.vue
var VWMA_render, VWMA_staticRenderFns
;



/* normalize component */
;
var VWMA_component = normalizeComponent(
  VWMA_VWMAvue_type_script_lang_js_,
  VWMA_render,
  VWMA_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var VWMA_api; }
VWMA_component.options.__file = "src/overlays/VWMA/VWMA.vue"
/* harmony default export */ const VWMA = (VWMA_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/WilliamsR/WilliamsR.vue?vue&type=script&lang=js&

/* harmony default export */ const WilliamsRvue_type_script_lang_js_ = ({
  name: 'WilliamsR',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Williams %R',
        preset: {
          name: '%R $length',
          side: 'offchart',
          settings: {
            lineWidth: 0.75,
            color: '#0980e8',
            bandColor: '#aaa',
            backColor: '#9b9ba316',
            upper: -20,
            lower: -80
          }
        }
      };
    },
    use_for: function use_for() {
      return ['WilliamsR'];
    },
    calc: function calc() {
      return {
        props: {
          length: {
            def: 14,
            text: 'Length'
          }
        },
        conf: {
          renderer: 'Range'
        },
        update: "\n                    return wpr(length)[0]\n                "
      };
    }
  }
});
;// CONCATENATED MODULE: ./src/overlays/WilliamsR/WilliamsR.vue?vue&type=script&lang=js&
 /* harmony default export */ const WilliamsR_WilliamsRvue_type_script_lang_js_ = (WilliamsRvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/WilliamsR/WilliamsR.vue
var WilliamsR_render, WilliamsR_staticRenderFns
;



/* normalize component */
;
var WilliamsR_component = normalizeComponent(
  WilliamsR_WilliamsRvue_type_script_lang_js_,
  WilliamsR_render,
  WilliamsR_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var WilliamsR_api; }
WilliamsR_component.options.__file = "src/overlays/WilliamsR/WilliamsR.vue"
/* harmony default export */ const WilliamsR = (WilliamsR_component.exports);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function arrayLikeToArray_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray_arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function unsupportedIterableToArray_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray_arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || unsupportedIterableToArray_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
  return Constructor;
}
;// CONCATENATED MODULE: ./src/overlays/XOhlcBars/primitives/xohlcbar.js



// Ohlc object for Ohlcs overlay
var XOhlcBar = /*#__PURE__*/function () {
  function XOhlcBar(overlay, ctx, data) {
    _classCallCheck(this, XOhlcBar);

    this.ctx = ctx;
    this.self = overlay;
    this.style = data.raw[6] || this.self;

    this._draw(data);
  }

  _createClass(XOhlcBar, [{
    key: "_draw",
    value: function _draw(data) {
      var line_width = this.style.lineWidth;
      var hlc_only = this.style.chartType == "HLC";
      var line_width_half = line_width / 2; // Bar color

      var bar_color = data.c <= data.o ? this.style.upBarColor : this.style.downBarColor;
      var width = Math.max(data.w, 1);
      var halfwidth = Math.max(Math.floor(width * 0.5), 1);
      var height = Math.abs(data.o - data.c);
      var max_h = data.c === data.o ? 1 : 2;
      var s = line_width % 2 === 0 ? 0 : 0.5; // Draw the line from low to high and open and close also

      this.ctx.strokeStyle = bar_color;
      this.ctx.lineWidth = line_width;
      this.ctx.beginPath(); // Draw high to low

      this.ctx.moveTo(Math.floor(data.x - line_width_half) + s, Math.floor(data.h));
      this.ctx.lineTo(Math.floor(data.x - line_width_half) + s, Math.floor(data.l));

      if (width > 1) {
        // Draw open notch
        if (hlc_only) {
          // No open price in consideration
          // Draw open notch with close price
          this.ctx.moveTo(Math.floor(data.x - halfwidth - line_width_half - 1), Math.floor(data.c) - s);
          this.ctx.lineTo(Math.floor(data.x - line_width_half), Math.floor(data.c) - s);
        } else {
          // Draw open notch with open price
          this.ctx.moveTo(Math.floor(data.x - halfwidth - line_width_half - 1), Math.floor(data.o) - s);
          this.ctx.lineTo(Math.floor(data.x - line_width_half), Math.floor(data.o) - s);
        } // Draw close notch


        this.ctx.moveTo(Math.floor(data.x - line_width_half), Math.floor(data.c) - s);
        this.ctx.lineTo(Math.floor(data.x + halfwidth - line_width_half + 1), Math.floor(data.c) - s);
      }

      this.ctx.stroke();
    }
  }]);

  return XOhlcBar;
}();


;// CONCATENATED MODULE: ./src/overlays/XOhlcBars/primitives/xvolbar.js



var XVolbar = /*#__PURE__*/function () {
  function XVolbar(overlay, ctx, data, barData, thinVolumeBar) {
    _classCallCheck(this, XVolbar);

    this.ctx = ctx;
    this.$p = overlay.$props;
    this.self = overlay;
    this.style = data.raw[6] || this.self;

    this._draw(data, barData, thinVolumeBar);
  }

  _createClass(XVolbar, [{
    key: "_draw",
    value: function _draw(data, barData, thinVolumeBar) {
      if (thinVolumeBar) {
        // Thin Volume Bar
        var bar_color = data.green ? this.style.upVolBarColor : this.style.downVolBarColor;
        var line_width = this.style.volBarWidth;
        var line_width_half = line_width / 2;
        var y0 = this.$p.layout.height;
        var w = data.x2 - data.x1;
        var h = Math.floor(data.h);
        this.ctx.strokeStyle = bar_color;
        this.ctx.lineWidth = line_width;
        this.ctx.beginPath(); // Draw high to low

        this.ctx.moveTo(Math.floor(barData.x - line_width_half), Math.floor(y0 - h - 0.5));
        this.ctx.lineTo(Math.floor(barData.x - line_width_half), Math.floor(y0 + 0.5));
        this.ctx.stroke();
      } else {
        // Thick Volume Bar
        var _y = this.$p.layout.height;

        var _w = data.x2 - data.x1;

        var _h = Math.floor(data.h);

        this.ctx.fillStyle = data.green ? this.style.upVolBarColor : this.style.downVolBarColor;
        this.ctx.fillRect(Math.floor(data.x1), Math.floor(_y - _h - 0.5), Math.floor(_w), Math.floor(_h + 1));
      }
    }
  }]);

  return XVolbar;
}();


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/XOhlcBars/XOhlcBars.vue?vue&type=script&lang=js&


function XOhlcBarsvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = XOhlcBarsvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function XOhlcBarsvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return XOhlcBarsvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return XOhlcBarsvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function XOhlcBarsvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Renedrer for ohlcbar + volume (optional)
// It can be used as the main chart or an indicator



/* harmony default export */ const XOhlcBarsvue_type_script_lang_js_ = ({
  name: 'XOhlcBars',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'X',
        version: '1.3.0',
        desc: 'Bar Chart'
      };
    },
    init: function init() {//this.price = new Price(this) // TODO:
    },
    draw: function draw(ctx) {
      //console.log("XOhlcBar.draw() called. this.$props.data.length = " + this.$props.data.length)
      // render as main chart:
      if (this.$props.sub === this.$props.data) {
        var cnv = {
          ohlcbars: this.$props.layout.candles,
          volume: this.$props.layout.volume
        }; // Else, as offchart / onchart indicator:
      } else {
        cnv = (0,external_trading_vue_js_.layout_cnv)(this);
      }

      if (this.show_volume) {
        for (var i = 0; i < cnv.volume.length; i++) {
          var volumeData = cnv.volume[i];
          var _barData = cnv.ohlcbars[i];
          new XVolbar(this, ctx, volumeData, _barData);
        }
      }

      var _iterator = XOhlcBarsvue_type_script_lang_js_createForOfIteratorHelper(cnv.ohlcbars),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var barData = _step.value;
          new XOhlcBar(this, ctx, barData);
        } //if (this.price_line) this.price.draw(ctx)  // TODO:

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    use_for: function use_for() {
      return ['XOhlcBars'];
    },
    // When added as offchart overlay
    y_range: function y_range() {
      return [Math.max.apply(Math, _toConsumableArray(this.$props.sub.map(function (x) {
        return x[2];
      }))), Math.min.apply(Math, _toConsumableArray(this.$props.sub.map(function (x) {
        return x[3];
      })))];
    }
  },
  // Define internal setting & constants here
  computed: {
    sett: function sett() {
      return this.$props.settings;
    },
    show_volume: function show_volume() {
      return 'showVolume' in this.sett ? this.sett.showVolume : true;
    },
    price_line: function price_line() {
      return 'priceLine' in this.sett ? this.sett.priceLine : true;
    },
    upVolBarColor: function upVolBarColor() {
      return this.sett.upBarColor || "#23a77655";
    },
    downVolBarColor: function downVolBarColor() {
      return this.sett.downBarColor || "#e5415055";
    },
    volBarWidth: function volBarWidth() {
      return this.sett.barWidth || 2;
    },
    upBarColor: function upBarColor() {
      return this.sett.upBarColor || "#23a776";
    },
    downBarColor: function downBarColor() {
      return this.sett.downBarColor || "#e54150";
    },
    barWidth: function barWidth() {
      return this.sett.barWidth || 1;
    },
    hlcOnly: function hlcOnly() {
      return this.sett.hlcOnly || false;
    },
    lineWidth: function lineWidth() {
      return this.sett.lineWidth || 1;
    }
  },
  data: function data() {
    return {
      price: {}
    };
  }
});
;// CONCATENATED MODULE: ./src/overlays/XOhlcBars/XOhlcBars.vue?vue&type=script&lang=js&
 /* harmony default export */ const XOhlcBars_XOhlcBarsvue_type_script_lang_js_ = (XOhlcBarsvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/overlays/XOhlcBars/XOhlcBars.vue
var XOhlcBars_render, XOhlcBars_staticRenderFns
;



/* normalize component */
;
var XOhlcBars_component = normalizeComponent(
  XOhlcBars_XOhlcBarsvue_type_script_lang_js_,
  XOhlcBars_render,
  XOhlcBars_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var XOhlcBars_api; }
XOhlcBars_component.options.__file = "src/overlays/XOhlcBars/XOhlcBars.vue"
/* harmony default export */ const XOhlcBars = (XOhlcBars_component.exports);
;// CONCATENATED MODULE: ./src/index_prod.js
// -------- Production overlay index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'




































var Pack = {
  ALMA: ALMA,
  ATR: ATR,
  ATRp: ATRp,
  Area51: Area51,
  BB: BB,
  BBW: BBW,
  CCI: CCI,
  CMO: CMO,
  COG: COG,
  DHistogram: DHistogram,
  DMI: DMI,
  EMA: EMA,
  HMA: HMA,
  Histogram: Histogram,
  Ichi: Ichi,
  Ichimoku: Ichimoku,
  KC: KC,
  KCW: KCW,
  LongShortTrades: LongShortTrades,
  MACD: MACD,
  MFI: MFI,
  MOM: MOM,
  Markers: Markers,
  PlotCross: PlotCross,
  ROC: ROC,
  RSI: RSI,
  Ribbon: Ribbon,
  SAR: SAR,
  SMA: SMA,
  SWMA: SWMA,
  Stoch: Stoch,
  TSI: TSI,
  TradesPlus: TradesPlus,
  VWMA: VWMA,
  WilliamsR: WilliamsR,
  XOhlcBars: XOhlcBars
};

if (typeof window !== 'undefined' && window.Vue) {
  window.TvjsOverlays = Pack;
}

/* harmony default export */ const index_prod = (Pack);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});