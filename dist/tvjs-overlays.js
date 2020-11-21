/*!
 * TVJS Overlays - v0.2.3 - Sat Nov 21 2020
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

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ALMA": () => /* reexport */ ALMA,
  "ATR": () => /* reexport */ ATR,
  "ATRp": () => /* reexport */ ATRp,
  "BB": () => /* reexport */ BB,
  "BBW": () => /* reexport */ BBW,
  "CCI": () => /* reexport */ CCI,
  "CMO": () => /* reexport */ CMO,
  "COG": () => /* reexport */ COG,
  "DMI": () => /* reexport */ DMI,
  "EMA": () => /* reexport */ EMA,
  "HMA": () => /* reexport */ HMA,
  "Histogram": () => /* reexport */ Histogram,
  "Ichimoku": () => /* reexport */ Ichimoku,
  "KC": () => /* reexport */ KC,
  "KCW": () => /* reexport */ KCW,
  "LongShortTrades": () => /* reexport */ LongShortTrades,
  "MACD": () => /* reexport */ MACD,
  "MFI": () => /* reexport */ MFI,
  "MOM": () => /* reexport */ MOM,
  "PlotCross": () => /* reexport */ PlotCross,
  "ROC": () => /* reexport */ ROC,
  "RSI": () => /* reexport */ RSI,
  "Ribbon": () => /* reexport */ Ribbon,
  "SAR": () => /* reexport */ SAR,
  "SMA": () => /* reexport */ SMA,
  "SWMA": () => /* reexport */ SWMA,
  "Stoch": () => /* reexport */ Stoch,
  "TSI": () => /* reexport */ TSI,
  "VWMA": () => /* reexport */ VWMA,
  "WilliamsR": () => /* reexport */ WilliamsR,
  "default": () => /* binding */ index_prod
});

// EXTERNAL MODULE: external "trading-vue-js"
var external_trading_vue_js_ = __webpack_require__(954);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ALMA/ALMA.vue?vue&type=script&lang=js&

/* harmony default export */ const ALMAvue_type_script_lang_js_ = ({
  name: 'ALMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Arnaud Legoux Moving Average'
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
// CONCATENATED MODULE: ./src/overlays/ALMA/ALMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const ALMA_ALMAvue_type_script_lang_js_ = (ALMAvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/overlays/ALMA/ALMA.vue
var render, staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ATR/ATR.vue?vue&type=script&lang=js&

/* harmony default export */ const ATRvue_type_script_lang_js_ = ({
  name: 'ATR',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Average True Range'
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
// CONCATENATED MODULE: ./src/overlays/ATR/ATR.vue?vue&type=script&lang=js&
 /* harmony default export */ const ATR_ATRvue_type_script_lang_js_ = (ATRvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/ATR/ATR.vue
var ATR_render, ATR_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ATRp/ATRp.vue?vue&type=script&lang=js&

/* harmony default export */ const ATRpvue_type_script_lang_js_ = ({
  name: 'ATRp',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Average True Range, %'
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
// CONCATENATED MODULE: ./src/overlays/ATRp/ATRp.vue?vue&type=script&lang=js&
 /* harmony default export */ const ATRp_ATRpvue_type_script_lang_js_ = (ATRpvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/ATRp/ATRp.vue
var ATRp_render, ATRp_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/BB/BB.vue?vue&type=script&lang=js&

/* harmony default export */ const BBvue_type_script_lang_js_ = ({
  name: 'BB',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Bollinger Bands'
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
// CONCATENATED MODULE: ./src/overlays/BB/BB.vue?vue&type=script&lang=js&
 /* harmony default export */ const BB_BBvue_type_script_lang_js_ = (BBvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/BB/BB.vue
var BB_render, BB_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/BBW/BBW.vue?vue&type=script&lang=js&

/* harmony default export */ const BBWvue_type_script_lang_js_ = ({
  name: 'BBW',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Bollinger Bands Width'
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
// CONCATENATED MODULE: ./src/overlays/BBW/BBW.vue?vue&type=script&lang=js&
 /* harmony default export */ const BBW_BBWvue_type_script_lang_js_ = (BBWvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/BBW/BBW.vue
var BBW_render, BBW_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/CCI/CCI.vue?vue&type=script&lang=js&

/* harmony default export */ const CCIvue_type_script_lang_js_ = ({
  name: 'CCI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Commodity Channel Index'
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
// CONCATENATED MODULE: ./src/overlays/CCI/CCI.vue?vue&type=script&lang=js&
 /* harmony default export */ const CCI_CCIvue_type_script_lang_js_ = (CCIvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/CCI/CCI.vue
var CCI_render, CCI_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/CMO/CMO.vue?vue&type=script&lang=js&

/* harmony default export */ const CMOvue_type_script_lang_js_ = ({
  name: 'CMO',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Chande Momentum Oscillator'
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
// CONCATENATED MODULE: ./src/overlays/CMO/CMO.vue?vue&type=script&lang=js&
 /* harmony default export */ const CMO_CMOvue_type_script_lang_js_ = (CMOvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/CMO/CMO.vue
var CMO_render, CMO_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/COG/COG.vue?vue&type=script&lang=js&

/* harmony default export */ const COGvue_type_script_lang_js_ = ({
  name: 'COG',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Center of Gravity'
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
// CONCATENATED MODULE: ./src/overlays/COG/COG.vue?vue&type=script&lang=js&
 /* harmony default export */ const COG_COGvue_type_script_lang_js_ = (COGvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/COG/COG.vue
var COG_render, COG_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/DMI/DMI.vue?vue&type=script&lang=js&

/* harmony default export */ const DMIvue_type_script_lang_js_ = ({
  name: 'DMI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Directional Movement Index'
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
// CONCATENATED MODULE: ./src/overlays/DMI/DMI.vue?vue&type=script&lang=js&
 /* harmony default export */ const DMI_DMIvue_type_script_lang_js_ = (DMIvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/DMI/DMI.vue
var DMI_render, DMI_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/EMA/EMA.vue?vue&type=script&lang=js&

/* harmony default export */ const EMAvue_type_script_lang_js_ = ({
  name: 'EMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Exponential Moving Average'
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
// CONCATENATED MODULE: ./src/overlays/EMA/EMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const EMA_EMAvue_type_script_lang_js_ = (EMAvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/EMA/EMA.vue
var EMA_render, EMA_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/HMA/HMA.vue?vue&type=script&lang=js&

/* harmony default export */ const HMAvue_type_script_lang_js_ = ({
  name: 'HMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Hull Moving Average'
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
// CONCATENATED MODULE: ./src/overlays/HMA/HMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const HMA_HMAvue_type_script_lang_js_ = (HMAvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/HMA/HMA.vue
var HMA_render, HMA_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Histogram/Histogram.vue?vue&type=script&lang=js&
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


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

      var _iterator = _createForOfIteratorHelper(this.$props.data),
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
// CONCATENATED MODULE: ./src/overlays/Histogram/Histogram.vue?vue&type=script&lang=js&
 /* harmony default export */ const Histogram_Histogramvue_type_script_lang_js_ = (Histogramvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/Histogram/Histogram.vue
var Histogram_render, Histogram_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Ichimoku/Ichimoku.vue?vue&type=script&lang=js&
function Ichimokuvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Ichimokuvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
// CONCATENATED MODULE: ./src/overlays/Ichimoku/Ichimoku.vue?vue&type=script&lang=js&
 /* harmony default export */ const Ichimoku_Ichimokuvue_type_script_lang_js_ = (Ichimokuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/Ichimoku/Ichimoku.vue
var Ichimoku_render, Ichimoku_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/KC/KC.vue?vue&type=script&lang=js&

/* harmony default export */ const KCvue_type_script_lang_js_ = ({
  name: 'KC',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Keltner Channels'
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
// CONCATENATED MODULE: ./src/overlays/KC/KC.vue?vue&type=script&lang=js&
 /* harmony default export */ const KC_KCvue_type_script_lang_js_ = (KCvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/KC/KC.vue
var KC_render, KC_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/KCW/KCW.vue?vue&type=script&lang=js&

/* harmony default export */ const KCWvue_type_script_lang_js_ = ({
  name: 'KCW',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Keltner Channels Width'
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
// CONCATENATED MODULE: ./src/overlays/KCW/KCW.vue?vue&type=script&lang=js&
 /* harmony default export */ const KCW_KCWvue_type_script_lang_js_ = (KCWvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/KCW/KCW.vue
var KCW_render, KCW_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/LongShortTrades/LongShortTrades.vue?vue&type=script&lang=js&
function LongShortTradesvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = LongShortTradesvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
// CONCATENATED MODULE: ./src/overlays/LongShortTrades/LongShortTrades.vue?vue&type=script&lang=js&
 /* harmony default export */ const LongShortTrades_LongShortTradesvue_type_script_lang_js_ = (LongShortTradesvue_type_script_lang_js_); 
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
/* harmony default export */ const LongShortTrades = (LongShortTrades_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/MACD/MACD.vue?vue&type=script&lang=js&
function MACDvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = MACDvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
        version: '1.0.1',
        desc: 'Moving Average Convergence/Divergence'
      };
    },
    draw: function draw(ctx) {
      var layout = this.$props.layout; // HISTOGRAM

      var base = layout.$2screen(0) + 0.5;
      var off = this.hist_width % 2 ? 0 : 0.5;
      ctx.lineWidth = this.hist_width;
      ctx.strokeStyle = this.color;
      ctx.beginPath(); // Color changed

      var changed = false;

      var _iterator = MACDvue_type_script_lang_js_createForOfIteratorHelper(this.$props.data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var x = layout.t2screen(p[0]) - off;
          var y = layout.$2screen(p[1]) - 0.5;
          var _changed = false;

          if (p[4]) {
            if (ctx.strokeStyle !== p[4]) {
              ctx.stroke();
              _changed = true;
            }

            ctx.strokeStyle = p[4];
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

      ctx.stroke(); // MACD LINE

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
        color: values[4]
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
          },
          histColors: {
            def: [],
            text: 'Colors'
          }
        },
        update: "\n                    let [macd, signal, hist] =\n                        macd(close, fast, slow, smooth)\n\n                    if (hist[0] >= 0) {\n                         var color = histColors[0]\n                         if (hist[0] < hist[1]) color = histColors[1]\n                    } else {\n                        color = histColors[2]\n                        if (hist[0] > hist[1]) color = histColors[3]\n                    }\n\n                    return [hist[0], macd[0], signal[0], color]\n                "
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
// CONCATENATED MODULE: ./src/overlays/MACD/MACD.vue?vue&type=script&lang=js&
 /* harmony default export */ const MACD_MACDvue_type_script_lang_js_ = (MACDvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/MACD/MACD.vue
var MACD_render, MACD_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/MFI/MFI.vue?vue&type=script&lang=js&

/* harmony default export */ const MFIvue_type_script_lang_js_ = ({
  name: 'MFI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Money Flow Index'
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
// CONCATENATED MODULE: ./src/overlays/MFI/MFI.vue?vue&type=script&lang=js&
 /* harmony default export */ const MFI_MFIvue_type_script_lang_js_ = (MFIvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/MFI/MFI.vue
var MFI_render, MFI_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/MOM/MOM.vue?vue&type=script&lang=js&

/* harmony default export */ const MOMvue_type_script_lang_js_ = ({
  name: 'MOM',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Momentum'
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
// CONCATENATED MODULE: ./src/overlays/MOM/MOM.vue?vue&type=script&lang=js&
 /* harmony default export */ const MOM_MOMvue_type_script_lang_js_ = (MOMvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/MOM/MOM.vue
var MOM_render, MOM_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/PlotCross/PlotCross.vue?vue&type=script&lang=js&
function PlotCrossvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = PlotCrossvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
// CONCATENATED MODULE: ./src/overlays/PlotCross/PlotCross.vue?vue&type=script&lang=js&
 /* harmony default export */ const PlotCross_PlotCrossvue_type_script_lang_js_ = (PlotCrossvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/PlotCross/PlotCross.vue
var PlotCross_render, PlotCross_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/ROC/ROC.vue?vue&type=script&lang=js&

/* harmony default export */ const ROCvue_type_script_lang_js_ = ({
  name: 'ROC',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Rate of Change'
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
// CONCATENATED MODULE: ./src/overlays/ROC/ROC.vue?vue&type=script&lang=js&
 /* harmony default export */ const ROC_ROCvue_type_script_lang_js_ = (ROCvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/ROC/ROC.vue
var ROC_render, ROC_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/RSI/RSI.vue?vue&type=script&lang=js&

/* harmony default export */ const RSIvue_type_script_lang_js_ = ({
  name: 'RSI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Relative Strength Index'
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
// CONCATENATED MODULE: ./src/overlays/RSI/RSI.vue?vue&type=script&lang=js&
 /* harmony default export */ const RSI_RSIvue_type_script_lang_js_ = (RSIvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/RSI/RSI.vue
var RSI_render, RSI_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Ribbon/Ribbon.vue?vue&type=script&lang=js&

/* harmony default export */ const Ribbonvue_type_script_lang_js_ = ({
  name: 'Ribbon',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Moving Average Ribbon'
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
// CONCATENATED MODULE: ./src/overlays/Ribbon/Ribbon.vue?vue&type=script&lang=js&
 /* harmony default export */ const Ribbon_Ribbonvue_type_script_lang_js_ = (Ribbonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/Ribbon/Ribbon.vue
var Ribbon_render, Ribbon_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/SAR/SAR.vue?vue&type=script&lang=js&

/* harmony default export */ const SARvue_type_script_lang_js_ = ({
  name: 'SAR',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Parabolic SAR'
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
// CONCATENATED MODULE: ./src/overlays/SAR/SAR.vue?vue&type=script&lang=js&
 /* harmony default export */ const SAR_SARvue_type_script_lang_js_ = (SARvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/SAR/SAR.vue
var SAR_render, SAR_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/SMA/SMA.vue?vue&type=script&lang=js&

/* harmony default export */ const SMAvue_type_script_lang_js_ = ({
  name: 'SMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Simple Moving Average'
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
// CONCATENATED MODULE: ./src/overlays/SMA/SMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const SMA_SMAvue_type_script_lang_js_ = (SMAvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/SMA/SMA.vue
var SMA_render, SMA_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/SWMA/SWMA.vue?vue&type=script&lang=js&

/* harmony default export */ const SWMAvue_type_script_lang_js_ = ({
  name: 'SWMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Symmetrically Weighted Moving Average'
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
// CONCATENATED MODULE: ./src/overlays/SWMA/SWMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const SWMA_SWMAvue_type_script_lang_js_ = (SWMAvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/SWMA/SWMA.vue
var SWMA_render, SWMA_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/Stoch/Stoch.vue?vue&type=script&lang=js&
function Stochvue_type_script_lang_js_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = Stochvue_type_script_lang_js_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
        desc: 'Stochastic'
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
// CONCATENATED MODULE: ./src/overlays/Stoch/Stoch.vue?vue&type=script&lang=js&
 /* harmony default export */ const Stoch_Stochvue_type_script_lang_js_ = (Stochvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/Stoch/Stoch.vue
var Stoch_render, Stoch_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/TSI/TSI.vue?vue&type=script&lang=js&

/* harmony default export */ const TSIvue_type_script_lang_js_ = ({
  name: 'TSI',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'True Strength Index'
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
// CONCATENATED MODULE: ./src/overlays/TSI/TSI.vue?vue&type=script&lang=js&
 /* harmony default export */ const TSI_TSIvue_type_script_lang_js_ = (TSIvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/TSI/TSI.vue
var TSI_render, TSI_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/VWMA/VWMA.vue?vue&type=script&lang=js&

/* harmony default export */ const VWMAvue_type_script_lang_js_ = ({
  name: 'VWMA',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Volume Weighted Moving Average'
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
          renderer: 'Range'
        },
        update: "\n                    return vwma(close, length)[0]\n                "
      };
    }
  }
});
// CONCATENATED MODULE: ./src/overlays/VWMA/VWMA.vue?vue&type=script&lang=js&
 /* harmony default export */ const VWMA_VWMAvue_type_script_lang_js_ = (VWMAvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/VWMA/VWMA.vue
var VWMA_render, VWMA_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/overlays/WilliamsR/WilliamsR.vue?vue&type=script&lang=js&

/* harmony default export */ const WilliamsRvue_type_script_lang_js_ = ({
  name: 'WilliamsR',
  mixins: [external_trading_vue_js_.Overlay],
  methods: {
    meta_info: function meta_info() {
      return {
        author: 'StdSquad',
        version: '1.0.0',
        desc: 'Williams %R'
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
// CONCATENATED MODULE: ./src/overlays/WilliamsR/WilliamsR.vue?vue&type=script&lang=js&
 /* harmony default export */ const WilliamsR_WilliamsRvue_type_script_lang_js_ = (WilliamsRvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/overlays/WilliamsR/WilliamsR.vue
var WilliamsR_render, WilliamsR_staticRenderFns




/* normalize component */

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
// CONCATENATED MODULE: ./src/index_prod.js
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
  BB: BB,
  BBW: BBW,
  CCI: CCI,
  CMO: CMO,
  COG: COG,
  DMI: DMI,
  EMA: EMA,
  HMA: HMA,
  Histogram: Histogram,
  Ichimoku: Ichimoku,
  KC: KC,
  KCW: KCW,
  LongShortTrades: LongShortTrades,
  MACD: MACD,
  MFI: MFI,
  MOM: MOM,
  PlotCross: PlotCross,
  ROC: ROC,
  RSI: RSI,
  Ribbon: Ribbon,
  SAR: SAR,
  SMA: SMA,
  SWMA: SWMA,
  Stoch: Stoch,
  TSI: TSI,
  VWMA: VWMA,
  WilliamsR: WilliamsR
};

if (typeof window !== 'undefined' && window.Vue) {
  window.TvjsOverlays = Pack;
}

/* harmony default export */ const index_prod = (Pack);


/***/ }),

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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(196);
/******/ })()
;
});
//# sourceMappingURL=tvjs-overlays.js.map