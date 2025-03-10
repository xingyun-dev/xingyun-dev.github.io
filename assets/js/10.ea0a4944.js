(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SWUpdatePopup_vue_vue_type_style_index_0_id_fec8b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(430);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SWUpdatePopup_vue_vue_type_style_index_0_id_fec8b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_8_oneOf_1_2_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SWUpdatePopup_vue_vue_type_style_index_0_id_fec8b358_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/plugin-pwa/lib/SWUpdatePopup.vue?vue&type=template&id=fec8b358&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "sw-update-popup"
    }
  }, [_vm._t("default", function () {
    return [_vm.enabled ? _c('div', {
      staticClass: "sw-update-popup"
    }, [_vm._v("\n      " + _vm._s(_vm.message) + "\n\n      "), _c('br'), _vm._v(" "), _c('button', {
      on: {
        "click": _vm.reload
      }
    }, [_vm._v("\n        " + _vm._s(_vm.buttonText) + "\n      ")])]) : _vm._e()];
  }, {
    "reload": _vm.reload,
    "enabled": _vm.enabled,
    "message": _vm.message,
    "buttonText": _vm.buttonText
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-pwa/lib/SWUpdatePopup.vue?vue&type=template&id=fec8b358&scoped=true

// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-pwa/lib/event.js
var lib_event = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@vuepress/core/lib/client/util.js + 2 modules
var util = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-pwa/lib/i18n.js
const popupConfig = {
  '/': {
    message: 'New content is available.',
    buttonText: 'Refresh'
  },
  '/zh/': {
    message: '发现新内容可用',
    buttonText: '刷新'
  },
  '/ru/': {
    message: 'Доступен новый контент.',
    buttonText: 'Обновить'
  },
  '/uk/': {
    message: 'Доступний новий контент.',
    buttonText: 'Оновити'
  },
  '/ja/': {
    message: '新しいコンテンツがあります。',
    buttonText: '更新する'
  },
  '/es/': {
    message: 'Hay nuevo contenido disponible.',
    buttonText: 'Actualizar'
  }
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/plugin-pwa/lib/SWUpdatePopup.vue?vue&type=script&lang=js
/* global SW_UPDATE_POPUP */



/* harmony default export */ var SWUpdatePopupvue_type_script_lang_js = ({
  name: 'SWUpdatePopup',
  data() {
    return {
      rawPopupConfig: {"message":"发现新内容可用","buttonText":"刷新"},
      updateEvent: null
    };
  },
  computed: {
    popupConfig() {
      return Object(util["h" /* normalizeConfig */])(this, this.rawPopupConfig);
    },
    enabled() {
      return Boolean(this.popupConfig && this.updateEvent);
    },
    message() {
      const c = this.popupConfig;
      return c && c.message || popupConfig['/'].message;
    },
    buttonText() {
      const c = this.popupConfig;
      return c && c.buttonText || popupConfig['/'].buttonText;
    }
  },
  created() {
    lib_event["a" /* default */].$on('sw-updated', this.onSWUpdated);
    if ({"message":"发现新内容可用","buttonText":"刷新"} === true) {
      this.rawPopupConfig = popupConfig;
    }
  },
  methods: {
    onSWUpdated(e) {
      this.updateEvent = e;
    },
    reload() {
      if (this.updateEvent) {
        this.updateEvent.skipWaiting().then(() => {
          location.reload(true);
        });
        this.updateEvent = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-pwa/lib/SWUpdatePopup.vue?vue&type=script&lang=js
 /* harmony default export */ var lib_SWUpdatePopupvue_type_script_lang_js = (SWUpdatePopupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vuepress/plugin-pwa/lib/SWUpdatePopup.vue?vue&type=style&index=0&id=fec8b358&prod&scoped=true&lang=css
var SWUpdatePopupvue_type_style_index_0_id_fec8b358_prod_scoped_true_lang_css = __webpack_require__(474);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@vuepress/plugin-pwa/lib/SWUpdatePopup.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lib_SWUpdatePopupvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "fec8b358",
  null
  
)

/* harmony default export */ var SWUpdatePopup = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);