(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.vuepress/components/valine.vue?vue&type=template&id=086441c8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticStyle: {
      "border-top": "2px solid #eaecef",
      "padding-top": "1rem",
      "margin-top": "2rem"
    }
  }, [_c('div', [_c('span', {
    staticClass: "leancloud-visitors",
    attrs: {
      "data-flag-title": "Your Article Title"
    }
  }, [_c('em', {
    staticClass: "post-meta-item-text"
  }, [_vm._v("阅读量： ")]), _vm._v(" "), _c('i', {
    staticClass: "leancloud-visitors-count"
  })])]), _vm._v(" "), _c('h3', [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }), _vm._v("\n    评 论：\n")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "vcomments"
    }
  })]);
}];

// CONCATENATED MODULE: ./.vuepress/components/valine.vue?vue&type=template&id=086441c8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.vuepress/components/valine.vue?vue&type=script&lang=js
/* harmony default export */ var valinevue_type_script_lang_js = ({
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = __webpack_require__(174);
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id = window.location.pathname;
      this.window = window;
      window.AV = __webpack_require__(470);
    }
    new Valine({
      el: '#vcomments',
      appId: '3BbfV6sJrjjWAb1uNchtw2OK-gzGzoHsz',
      // your appId
      appKey: 'qo1C2lZFxgDoLr8CtuyQGCQX',
      // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'mm',
      placeholder: '来都来了，冒个泡再走吧。。'
    });
  }
});
// CONCATENATED MODULE: ./.vuepress/components/valine.vue?vue&type=script&lang=js
 /* harmony default export */ var components_valinevue_type_script_lang_js = (valinevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./.vuepress/components/valine.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_valinevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var valine = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);