(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_style_index_0_id_8f29db2c_prod_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(429);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_style_index_0_id_8f29db2c_prod_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Badge_vue_vue_type_style_index_0_id_8f29db2c_prod_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuepress-theme-reco/global-components/Badge.vue?vue&type=script&lang=js

/* harmony default export */ var Badgevue_type_script_lang_js = (Object(vue_runtime_esm["c" /* defineComponent */])({
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },
  render(h, {
    props,
    slots
  }) {
    return h('span', {
      class: ['badge', props.type],
      style: {
        verticalAlign: props.vertical
      }
    }, props.text || slots().default);
  }
}));
// CONCATENATED MODULE: ./node_modules/vuepress-theme-reco/global-components/Badge.vue?vue&type=script&lang=js
 /* harmony default export */ var global_components_Badgevue_type_script_lang_js = (Badgevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vuepress-theme-reco/global-components/Badge.vue?vue&type=style&index=0&id=8f29db2c&prod&lang=stylus&scoped=true
var Badgevue_type_style_index_0_id_8f29db2c_prod_lang_stylus_scoped_true = __webpack_require__(473);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/vuepress-theme-reco/global-components/Badge.vue
var render, staticRenderFns





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_components_Badgevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "8f29db2c",
  null
  
)

/* harmony default export */ var Badge = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);