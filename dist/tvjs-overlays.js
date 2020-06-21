/*!
 * TVJS Overlays - v0.1.1 - Sun Jun 21 2020
 *     https://github.com/tvjsx/trading-vue-js
 *     Copyright (c) 2020 c451 Code's All Right;
 *     Licensed under the MIT license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("trading-vue-js"));
	else if(typeof define === 'function' && define.amd)
		define(["trading-vue-js"], factory);
	else if(typeof exports === 'object')
		exports["TvjsOverlays"] = factory(require("trading-vue-js"));
	else
		root["TvjsOverlays"] = factory(root["trading-vue-js"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Ichimoku", function() { return /* reexport */ Ichimoku; });
__webpack_require__.d(__webpack_exports__, "LongShortTrades", function() { return /* reexport */ LongShortTrades; });
__webpack_require__.d(__webpack_exports__, "TestOverlay1", function() { return /* reexport */ TestOverlay1; });
__webpack_require__.d(__webpack_exports__, "TestOverlay2", function() { return /* reexport */ TestOverlay2; });

// EXTERNAL MODULE: external "trading-vue-js"
var external_trading_vue_js_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/overlays/Ichimoku/Ichimoku.vue?vue&type=script&lang=js&
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Ichimoku Indicator Overlay. Expected Format: [ <timestamp>, <ConversionLine>, <BaseLine>, <Lead1>, <Lead2>, <Lagging> ]

/* harmony default export */ var Ichimokuvue_type_script_lang_js_ = ({
  name: "Ichimoku",
  mixins: [external_trading_vue_js_["Overlay"]],
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
        author: "Sudeep Batra (www.stoxalpha.com)",
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

        var _iterator = _createForOfIteratorHelper(subdataSenkouSpan),
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

        var _iterator2 = _createForOfIteratorHelper(subdata),
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

        var _iterator3 = _createForOfIteratorHelper(subdata),
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

        var _iterator4 = _createForOfIteratorHelper(subdataSenkouSpan),
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

        var _iterator5 = _createForOfIteratorHelper(subdataSenkouSpan),
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

        var _iterator6 = _createForOfIteratorHelper(subdataChinkou),
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
// CONCATENATED MODULE: ./src/overlays/Ichimoku/Ichimoku.vue?vue&type=script&lang=js&
 /* harmony default export */ var Ichimoku_Ichimokuvue_type_script_lang_js_ = (Ichimokuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/overlays/Ichimoku/Ichimoku.vue
var render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  Ichimoku_Ichimokuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/overlays/Ichimoku/Ichimoku.vue"
/* harmony default export */ var Ichimoku = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/overlays/LongShortTrades/LongShortTrades.vue?vue&type=script&lang=js&
function LongShortTradesvue_type_script_lang_js_createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = LongShortTradesvue_type_script_lang_js_unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function LongShortTradesvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LongShortTradesvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LongShortTradesvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function LongShortTradesvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//Long Short Overlay. Expected Format: [ <timestamp>, <Short:0 Long:1 ShortCover: 2 LongCover:3>, <Price Change>, <Percent Price Change>, <Open Price>, <High Price>, <Low Price>, <Close Price> ]

/* harmony default export */ var LongShortTradesvue_type_script_lang_js_ = ({
  name: 'LongShortTrades',
  mixins: [external_trading_vue_js_["Overlay"]],
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
// CONCATENATED MODULE: ./src/overlays/LongShortTrades/LongShortTrades.vue?vue&type=script&lang=js&
 /* harmony default export */ var LongShortTrades_LongShortTradesvue_type_script_lang_js_ = (LongShortTradesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/LongShortTrades/LongShortTrades.vue
var LongShortTrades_render, LongShortTrades_staticRenderFns




/* normalize component */

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
/* harmony default export */ var LongShortTrades = (LongShortTrades_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/overlays/TestOverlay1/TestOverlay1.vue?vue&type=script&lang=js&
function TestOverlay1vue_type_script_lang_js_createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = TestOverlay1vue_type_script_lang_js_unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function TestOverlay1vue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TestOverlay1vue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TestOverlay1vue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function TestOverlay1vue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Spline renderer. (SMAs, EMAs, TEMAs...
// you know what I mean)
// TODO: make a real spline, not a bunch of lines...
// Adds all necessary stuff for you.

/* harmony default export */ var TestOverlay1vue_type_script_lang_js_ = ({
  name: 'TestOverlay1',
  mixins: [external_trading_vue_js_["Overlay"]],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'Bro2020',
        version: '1.0.0'
      };
    },
    // Here goes your code. You are provided with:
    // { All stuff is reactive }
    // $props.layout -> positions of all chart elements +
    //  some helper functions (see layout_fn.js)
    // $props.interval -> candlestick time interval
    // $props.sub -> current subset of candlestick data
    // $props.data -> your indicator's data subset.
    //  Comes "as is", should have the following format:
    //  [[<timestamp>, ... ], ... ]
    // $props.colors -> colors (see TradingVue.vue)
    // $props.cursor -> current position of crosshair
    // $props.settings -> indicator's custom settings
    //  E.g. colors, line thickness, etc. You define it.
    // $props.num -> indicator's layer number (of All
    // layers in the current grid)
    // $props.id -> indicator's id (e.g. EMA_0)
    // ~
    // Finally, let's make the canvas dirty!
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var i = this.data_index;

      var _iterator = TestOverlay1vue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]);
          var y = layout.$2screen(p[i]);
          ctx.lineTo(x, y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.stroke();
    },
    // For all data with these types overlay will be
    // added to the renderer list. And '$props.data'
    // will have the corresponding values. If you want to
    // redefine the default behviour for a prticular
    // indicator (let's say EMA),
    // just create a new overlay with the same type:
    // e.g. use_for() { return ['EMA'] }.
    use_for: function use_for() {
      return ['TestOverlay1'];
    },
    // Colors for the legend, should have the
    // same dimention as a data point (excl. timestamp)
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
      return this.sett.lineWidth || 2;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    },
    data_index: function data_index() {
      return this.sett.dataIndex || 1;
    }
  },
  data: function data() {
    return {
      COLORS: ['#42b28a', '#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
// CONCATENATED MODULE: ./src/overlays/TestOverlay1/TestOverlay1.vue?vue&type=script&lang=js&
 /* harmony default export */ var TestOverlay1_TestOverlay1vue_type_script_lang_js_ = (TestOverlay1vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/TestOverlay1/TestOverlay1.vue
var TestOverlay1_render, TestOverlay1_staticRenderFns




/* normalize component */

var TestOverlay1_component = normalizeComponent(
  TestOverlay1_TestOverlay1vue_type_script_lang_js_,
  TestOverlay1_render,
  TestOverlay1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TestOverlay1_api; }
TestOverlay1_component.options.__file = "src/overlays/TestOverlay1/TestOverlay1.vue"
/* harmony default export */ var TestOverlay1 = (TestOverlay1_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/overlays/TestOverlay2/TestOverlay2.vue?vue&type=script&lang=js&
function TestOverlay2vue_type_script_lang_js_createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = TestOverlay2vue_type_script_lang_js_unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function TestOverlay2vue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TestOverlay2vue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TestOverlay2vue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function TestOverlay2vue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Spline renderer. (SMAs, EMAs, TEMAs...
// you know what I mean)
// TODO: make a real spline, not a bunch of lines...
// Adds all necessary stuff for you.

/* harmony default export */ var TestOverlay2vue_type_script_lang_js_ = ({
  name: 'TestOverlay2',
  mixins: [external_trading_vue_js_["Overlay"]],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'CyberFist',
        version: '1.0.0'
      };
    },
    // Here goes your code. You are provided with:
    // { All stuff is reactive }
    // $props.layout -> positions of all chart elements +
    //  some helper functions (see layout_fn.js)
    // $props.interval -> candlestick time interval
    // $props.sub -> current subset of candlestick data
    // $props.data -> your indicator's data subset.
    //  Comes "as is", should have the following format:
    //  [[<timestamp>, ... ], ... ]
    // $props.colors -> colors (see TradingVue.vue)
    // $props.cursor -> current position of crosshair
    // $props.settings -> indicator's custom settings
    //  E.g. colors, line thickness, etc. You define it.
    // $props.num -> indicator's layer number (of All
    // layers in the current grid)
    // $props.id -> indicator's id (e.g. EMA_0)
    // ~
    // Finally, let's make the canvas dirty!
    draw: function draw(ctx) {
      ctx.lineWidth = this.line_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var layout = this.$props.layout;
      var i = this.data_index;

      var _iterator = TestOverlay2vue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]);
          var y = layout.$2screen(p[i]);
          ctx.lineTo(x, y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.stroke();
    },
    // For all data with these types overlay will be
    // added to the renderer list. And '$props.data'
    // will have the corresponding values. If you want to
    // redefine the default behviour for a prticular
    // indicator (let's say EMA),
    // just create a new overlay with the same type:
    // e.g. use_for() { return ['EMA'] }.
    use_for: function use_for() {
      return ['TestOverlay2'];
    },
    // Colors for the legend, should have the
    // same dimention as a data point (excl. timestamp)
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
      return this.sett.lineWidth || 5;
    },
    color: function color() {
      var n = this.$props.num % 5;
      return this.sett.color || this.COLORS[n];
    },
    data_index: function data_index() {
      return this.sett.dataIndex || 1;
    }
  },
  data: function data() {
    return {
      COLORS: ['#5691ce', '#612ff9', '#d50b90', '#ff2316']
    };
  }
});
// CONCATENATED MODULE: ./src/overlays/TestOverlay2/TestOverlay2.vue?vue&type=script&lang=js&
 /* harmony default export */ var TestOverlay2_TestOverlay2vue_type_script_lang_js_ = (TestOverlay2vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/TestOverlay2/TestOverlay2.vue
var TestOverlay2_render, TestOverlay2_staticRenderFns




/* normalize component */

var TestOverlay2_component = normalizeComponent(
  TestOverlay2_TestOverlay2vue_type_script_lang_js_,
  TestOverlay2_render,
  TestOverlay2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TestOverlay2_api; }
TestOverlay2_component.options.__file = "src/overlays/TestOverlay2/TestOverlay2.vue"
/* harmony default export */ var TestOverlay2 = (TestOverlay2_component.exports);
// CONCATENATED MODULE: ./src/index_prod.js
// -------- Production overlay index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'




var Pack = {
  Ichimoku: Ichimoku,
  LongShortTrades: LongShortTrades,
  TestOverlay1: TestOverlay1,
  TestOverlay2: TestOverlay2
};

if (typeof window !== 'undefined' && window.Vue) {
  window.TvjsOverlays = Pack;
}

/* harmony default export */ var index_prod = __webpack_exports__["default"] = (Pack);


/***/ })
/******/ ]);
});
//# sourceMappingURL=tvjs-overlays.js.map