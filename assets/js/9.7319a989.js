(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Font_vue_vue_type_style_index_0_id_15df2223_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Font_vue_vue_type_style_index_0_id_15df2223_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Font_vue_vue_type_style_index_0_id_15df2223_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.vuepress/components/Font.vue?vue&type=template&id=15df2223
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.vuepress/components/Font.vue?vue&type=template&id=15df2223

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.vuepress/components/Font.vue?vue&type=script&lang=js
/* harmony default export */ var Fontvue_type_script_lang_js = ({
  name: '',
  data() {
    return {
      strs: [{
        title: '你要忍，忍到春暖花开',
        // 停顿的位置
        stop: 5
        // stop: [4, 13] // 可以是数组，多几个位置停顿
      }, {
        title: '你要走，走到灯火通明'
      }, {
        title: '你要看过世界辽阔，再评判是好是坏'
      }, {
        title: '你要卯足劲变好'
      }, {
        title: '再旗鼓相当站在不敢想象的人身边'
      }, {
        title: '你要变成想象中的样子'
      }, {
        title: '这件事，一步都不能让'
      }],
      // 当前进行到第几行
      currentIndex: 0,
      spans: null,
      el: null,
      titleEl: null
    };
  },
  mounted() {
    if (!this.el) {
      const timer = setInterval(() => {
        this.el = document.querySelector('.hero .description');
        this.titleEl = document.querySelector('.hero  h1');
        if (this.el) {
          this.titleEl.style.fontWeight = 'bold';
          timer && clearInterval(timer);
          this.init();
        }
      }, 100);
    } else {
      this.init();
    }
  },
  methods: {
    init() {
      if (this.currentIndex == this.strs.length) {
        this.currentIndex = 0;
      }
      const current = this.strs[this.currentIndex];
      this.el.innerHTML = current instanceof Object ? current.title : current;
      this.el.innerHTML = this.el.textContent.replace(/\S/g, '<span>$&</span>');
      let delay = 0;
      this.spans = [...document.querySelectorAll('.hero .description span')];
      this.spans.forEach((span, i) => {
        delay += 0.1;
        if (current.hasOwnProperty('stop')) {
          if (current.stop instanceof Array) {
            if (current.stop.includes(i)) {
              delay += 0.3;
            }
          } else {
            if (current.stop == i) {
              delay += 0.3;
            }
          }
        }
        span.style.setProperty('--delay', `${delay}s`);
      });
      this.el.addEventListener('animationend', this.lastEnd);
    },
    lastEnd(e) {
      if (e.target == document.querySelector('.hero .description span:last-child')) {
        this.el.classList.add('ended');
        setTimeout(() => {
          this.el.removeEventListener('animationend', this.lastEnd);
          let delay = 0;
          this.spans.reverse().forEach((span, i) => {
            this.el.classList.remove('ended');
            span.style.width = '2ch';
            span.style.animation = '0.1s text-out ease-in-out forwards';
            delay += 0.05;

            // 回去停顿功能
            // if (this.strs[this.currentIndex].hasOwnProperty("stop")) {
            //   if (this.strs[this.currentIndex].stop instanceof Array) {
            //     if (
            //       this.strs[this.currentIndex].stop.includes(
            //         this.spans.length - i
            //       )
            //     ) {
            //       delay += 0.3;
            //     }
            //   } else {
            //     if (
            //       this.strs[this.currentIndex].stop ==
            //       this.spans.length - i
            //     ) {
            //       delay += 0.3;
            //     }
            //   }
            // }

            span.style.animationDelay = `${delay}s`;
          });
          this.el.addEventListener('animationend', this.firstEnd);
        }, 1500);
      }
    },
    firstEnd(e) {
      if (e.target == document.querySelector('.hero .description span:first-child')) {
        this.spans.forEach(v => {
          v.remove();
        });
        this.el.removeEventListener('animationend', this.firstEnd);
        this.currentIndex++;
        this.init();
      }
    }
  }
});
// CONCATENATED MODULE: ./.vuepress/components/Font.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Fontvue_type_script_lang_js = (Fontvue_type_script_lang_js); 
// EXTERNAL MODULE: ./.vuepress/components/Font.vue?vue&type=style&index=0&id=15df2223&prod&lang=css
var Fontvue_type_style_index_0_id_15df2223_prod_lang_css = __webpack_require__(469);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./.vuepress/components/Font.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Fontvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Font = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);