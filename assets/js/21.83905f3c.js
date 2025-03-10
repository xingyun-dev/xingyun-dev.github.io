(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/vuepress搭建个人文档/项目的目录结构.md?vue&type=template&id=45459bc7
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('div', {
    staticClass: "custom-block tip"
  }, [_c('p', {
    staticClass: "title"
  }), _c('p', [_vm._v("vuepress项目的目录结构")])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "项目结构"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#项目结构"
    }
  }, [_vm._v("#")]), _vm._v(" 项目结构")]), _vm._v(" "), _c('p', [_vm._v("$ tree -L 3 -I \".git|node_modules\" -a --dirs-first")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("xingyun-dev.github.io\n├── .vuepress  // vuepress的配置文件\n│   ├── components\n│   │   ├── Font.vue\n│   │   └── valine.vue\n│   ├── config\n│   │   ├── head.js\n│   │   ├── nav.js\n│   │   ├── plugin.js\n│   │   └── sidebar.js\n│   ├── public\n│   │   ├── css\n│   │   ├── docs_img\n│   │   ├── img\n│   │   └── music\n│   └── config.js\n├── dist // 打包后的文件\n│   ├── assets\n│   │   ├── css\n│   │   ├── fonts\n│   │   ├── img\n│   │   └── js\n│   ├── categories\n│   │   ├── 介绍\n│   │   ├── 留言板\n│   │   ├── 项目\n│   │   └── index.html\n│   ├── css\n│   │   └── style.css\n│   ├── docs\n│   │   ├── guide\n│   │   ├── vuepress搭建个人文档\n│   │   ├── 以flask为后端的博客项目\n│   │   └── 留言板.html\n│   ├── docs_img\n│   │   ├── vuepress-reco主题个人博客搭建\n│   │   ├── vuepress博客部署\n│   │   └── vuepress后续补充\n│   ├── img\n│   │   ├── B.jpg\n│   │   ├── bg.jpg\n│   │   ├── bg2.jpg\n│   │   ├── favicon.ico\n│   │   ├── logo.png\n│   │   ├── 星石传说.jpg\n│   │   ├── 知乎.jpg\n│   │   ├── 背景.jpg\n│   │   └── 花草有情.png\n│   ├── music\n│   │   ├── 冬眠-司南.mp3\n│   │   ├── 左手右手.mp3\n│   │   ├── 烟雨行舟-伦桑.mp3\n│   │   ├── 烟雨行舟-司南.mp3\n│   │   ├── 真英雄.mp3\n│   │   └── 落空-印子月.mp3\n│   ├── tag\n│   │   ├── flask\n│   │   ├── vuepress\n│   │   ├── 介绍\n│   │   ├── 留言板\n│   │   └── index.html\n│   ├── timeline\n│   │   └── index.html\n│   ├── "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("404")]), _vm._v(".html\n│   ├── index.html\n│   └── service-worker.js\n├── docs  //博客文档\n│   ├── guide\n│   │   ├── README.md\n│   │   └── sidebar.js\n│   ├── vuepress搭建个人文档\n│   │   ├── README.md\n│   │   ├── sidebar.js\n│   │   ├── vuepress-reco主题个人博客搭建.md\n│   │   ├── vuepress博客部署.md\n│   │   ├── vuepress后续补充.md\n│   │   └── vuepress常用插件.md\n│   ├── 以flask为后端的博客项目\n│   │   ├── README.md\n│   │   ├── flask项目的部署（五）.md\n│   │   ├── sidebar.js\n│   │   ├── 关于星云小窝这个项目后续的思考（六）.md\n│   │   ├── 星云小窝项目1.0——项目介绍（一）.md\n│   │   ├── 星云小窝项目1.0——项目启动（二 ）.md\n│   │   ├── 星云小窝项目1.0——项目结构（三）.md\n│   │   └── 讨论一些代码实现的逻辑（四）.md\n│   └── 留言板.md\n├── README.md  //首页\n├── deploy.sh //自动部署的脚本\n├── package-lock.json\n└── package.json   //包管理\n\n\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("4")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("5")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("6")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("7")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("8")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("9")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("10")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("11")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("12")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("13")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("14")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("15")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("16")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("17")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("18")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("19")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("20")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("21")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("22")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("23")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("24")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("25")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("26")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("27")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("28")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("29")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("30")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("31")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("32")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("33")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("34")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("35")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("36")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("37")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("38")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("39")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("40")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("41")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("42")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("43")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("44")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("45")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("46")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("47")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("48")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("49")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("50")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("51")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("52")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("53")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("54")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("55")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("56")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("57")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("58")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("59")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("60")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("61")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("62")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("63")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("64")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("65")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("66")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("67")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("68")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("69")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("70")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("71")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("72")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("73")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("74")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("75")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("76")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("77")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("78")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("79")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("80")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("81")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("82")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("83")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("84")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("85")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("86")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("87")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("88")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("89")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("90")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("91")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("92")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("93")]), _c('br')])]), _c('hr'), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/项目的目录结构.md?vue&type=template&id=45459bc7

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/项目的目录结构.md

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var _ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);