(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/vuepress搭建个人文档/vuepress后续补充.md?vue&type=template&id=676618d7
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
  }), _c('p', [_vm._v("对自己使用vuepress的过程进行一些补充")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("对自己使用vuepress的过程进行一些补充")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、样式修改"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、样式修改"
    }
  }, [_vm._v("#")]), _vm._v(" 一、样式修改")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("在public文件夹下新建一个css文件夹，用来存放修改样式文件，style.css")])]), _vm._v(" "), _c('p', [_vm._v("再在config.js的头部head中引入：")]), _vm._v(" "), _c('div', {
    staticClass: "language-css line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-css"
    }
  }, [_c('code', [_vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("['link',")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("rel")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"stylesheet\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("href")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/css/style.css\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("]"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('blockquote', [_c('p', [_vm._v("文件内容如下：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-css line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-css"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* body {\n    background-image: url('/img/背景.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    background-color: transparent;\n} */")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".content")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("font-size")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("30px\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".hero h1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("color")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("aqua"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 首页标签列表样式 */")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".abstract-item")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("background-color")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" #d3faea3d "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("  \n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("transition")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" all .5s"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".abstract-item:hover")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("transform")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("scale")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("1.02"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("transition")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" all .5s"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 右侧文章标题导航栏 */")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("a.sidebar-link")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("font-size")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 15px "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 时间线样式 */")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".timeline-wrapper .year")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("margin")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 80px 0px 20px "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("font-size")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 27px "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".timeline-wrapper .year-wrapper li")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("padding")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 10px 20px 10px "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("border-bottom")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 2px solid #999da06b "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("background")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" #c1c1e626"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("border-radius")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 5rem"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("margin")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 5px 0px"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("transition")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" all .5s"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".timeline-wrapper .year-wrapper li:hover")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("transform")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("translate")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("50px"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("0"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("transition")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" all .5s"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".timeline-wrapper .year-wrapper li .date")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 43px "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("font-size")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 13px "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".timeline-wrapper .year-wrapper li .date:before")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("top")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 22px "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("border")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 1px solid "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".timeline-wrapper:after")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("background")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" skyblue "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".timeline-wrapper .desc:before, .timeline-wrapper .year:before")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("background")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" cadetblue "), _c('span', {
    pre: true,
    attrs: {
      "class": "token important"
    }
  }, [_vm._v("!important")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("64")]), _c('br')])]), _c('blockquote', [_c('p', [_vm._v("找到要修改的元素的css名称，可以在开发者模式中查看以及调试")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%90%8E%E7%BB%AD%E8%A1%A5%E5%85%85/b9c016b0d810493fbf9775e3b0e3572b.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、首页打字机效果"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、首页打字机效果"
    }
  }, [_vm._v("#")]), _vm._v(" 二、首页打字机效果")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("在  .vuepress目录下新建一个components目录（目录名称是确定的，以便后面直接引入文件）。该目录中的 Vue 组件将会被自动注册为全局组件。\n新建一个vue文件，如Font.vue")])]), _vm._v(" "), _c('p', [_vm._v("更多目录结构信息参考官方文档：\n"), _c('a', {
    attrs: {
      "href": "https://vuepress.vuejs.org/zh/guide/directory-structure.html",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://vuepress.vuejs.org/zh/guide/directory-structure.html"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("Font.vue文件内容如下：")]), _vm._v(" "), _c('div', {
    staticClass: "language-html line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-html"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("style")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token style"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token language-css"
    }
  }, [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".hero .description")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("margin")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 0"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("padding")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 0"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 必须是等宽字体 */")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("font-family")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" monospace"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("position")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" relative"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" fit-content"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".hero .description::after")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("content")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("''")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("display")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" inline"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("position")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" absolute"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 2px"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("height")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 2ch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("top")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 9%"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("background-color")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" #000"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("border-radius")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 2px"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("right")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" -0.5ch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".hero .description.ended::after")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("animation")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 1.1s cursor "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("steps")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" jump-none"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" infinite"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v(".home-blog .hero .description span")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("--delay")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 10s"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("display")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" inline-block"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("overflow")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" hidden"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 0ch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("animation")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 0.1s text-in ease-in-out forwards"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("animation-delay")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("var")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("--delay"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("font-weight")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 600"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token atrule"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token rule"
    }
  }, [_vm._v("@keyframes")]), _vm._v(" text-in")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 0ch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("to")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 必须是等宽字体 */")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 中文2ch，英文1ch */")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 2ch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token atrule"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token rule"
    }
  }, [_vm._v("@keyframes")]), _vm._v(" text-out")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("/* 中文2ch，英文1ch */")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 2ch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("to")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("width")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 0ch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token atrule"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token rule"
    }
  }, [_vm._v("@keyframes")]), _vm._v(" cursor")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("from")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("opacity")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 0"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token selector"
    }
  }, [_vm._v("to")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("opacity")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 1"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    ")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("style")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    \n    \n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("script")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token script"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token language-javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("name")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("''")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("data")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("strs")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'你要忍，忍到春暖花开'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 停顿的位置")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("stop")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// stop: [4, 13] // 可以是数组，多几个位置停顿")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'你要走，走到灯火通明'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'你要看过世界辽阔，再评判是好是坏'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'你要卯足劲变好'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'再旗鼓相当站在不敢想象的人身边'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'你要变成想象中的样子'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'这件事，一步都不能让'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 当前进行到第几行")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("currentIndex")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("spans")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("null")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("el")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("null")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("titleEl")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("null")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("mounted")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" timer "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("setInterval")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=>")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" document"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("querySelector")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'.hero .description'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("titleEl "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" document"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("querySelector")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'.hero  h1'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("titleEl"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("style"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("fontWeight "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'bold'")]), _vm._v("\n            timer "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("clearInterval")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("timer"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("init")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("100")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("init")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("methods")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("init")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("currentIndex "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("strs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("length"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("currentIndex "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" current "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("strs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("currentIndex"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("innerHTML "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" current "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("instanceof")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("Object")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("?")]), _vm._v(" current"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("title "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" current\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("innerHTML "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("textContent"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("replace")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token regex"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token regex-delimiter"
    }
  }, [_vm._v("/")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token regex-source language-regex"
    }
  }, [_vm._v("\\S")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token regex-delimiter"
    }
  }, [_vm._v("/")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token regex-flags"
    }
  }, [_vm._v("g")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'<span>$&</span>'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("let")]), _vm._v(" delay "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("spans "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("...")]), _vm._v("document"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("querySelectorAll")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'.hero .description span'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("spans"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("forEach")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter"
    }
  }, [_vm._v("span"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" i")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=>")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            delay "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.1")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("current"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("hasOwnProperty")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'stop'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("current"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("stop "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("instanceof")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("Array")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("current"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("stop"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("includes")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n                delay "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.3")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("current"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("stop "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n                delay "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.3")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n            span"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("style"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("setProperty")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'--delay'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-string"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("${")]), _vm._v("delay"), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("s")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("addEventListener")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'animationend'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("lastEnd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("lastEnd")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter"
    }
  }, [_vm._v("e")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("e"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("target "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" document"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("querySelector")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'.hero .description span:last-child'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("classList"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'ended'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("setTimeout")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=>")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("removeEventListener")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'animationend'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("lastEnd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("let")]), _vm._v(" delay "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("spans"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("reverse")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("forEach")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter"
    }
  }, [_vm._v("span"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" i")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=>")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("classList"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("remove")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'ended'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                span"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("style"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("width "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'2ch'")]), _vm._v("\n                span"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("style"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("animation "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'0.1s text-out ease-in-out forwards'")]), _vm._v("\n                delay "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.05")]), _vm._v("\n\n                span"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("style"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("animationDelay "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-string"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("${")]), _vm._v("delay"), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation-punctuation punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("s")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token template-punctuation string"
    }
  }, [_vm._v("`")])]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("addEventListener")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'animationend'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("firstEnd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1500")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("firstEnd")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter"
    }
  }, [_vm._v("e")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("e"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("target "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" document"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("querySelector")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'.hero .description span:first-child'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("spans"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("forEach")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter"
    }
  }, [_vm._v("v")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=>")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            v"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("remove")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("el"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("removeEventListener")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'animationend'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("firstEnd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("currentIndex"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("++")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("init")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    ")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    \n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("93")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("94")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("95")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("96")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("97")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("98")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("99")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("100")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("101")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("102")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("103")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("104")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("105")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("106")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("107")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("108")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("109")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("110")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("111")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("112")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("113")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("114")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("115")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("116")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("117")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("118")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("119")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("120")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("121")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("122")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("123")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("124")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("125")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("126")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("127")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("128")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("129")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("130")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("131")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("132")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("133")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("134")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("135")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("136")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("137")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("138")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("139")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("140")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("141")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("142")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("143")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("144")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("145")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("146")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("147")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("148")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("149")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("150")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("151")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("152")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("153")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("154")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("155")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("156")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("157")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("158")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("159")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("160")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("161")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("162")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("163")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("164")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("165")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("166")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("167")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("168")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("169")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("170")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("171")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("172")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("173")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("174")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("175")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("176")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("177")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("178")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("179")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("180")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("181")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("182")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("183")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("184")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("185")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("186")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("187")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("188")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("189")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("190")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("191")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("192")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("193")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("194")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("195")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("196")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("197")]), _c('br')])]), _c('blockquote', [_c('p', [_vm._v("之后就可以直接在首页README.md文件中引入 < Font />")])]), _vm._v(" "), _c('div', {
    staticClass: "language-html line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-html"
    }
  }, [_c('code', [_vm._v("---\nhome: true  #指定该页为首页\nheroText: 星云文档   #居中显示的文本\n\ntagline: 烦死了\n\n\n# heroImage: /hero.png  \n# heroImageStyle: {\n#   maxWidth: '600px',\n#   width: '100%',\n#   display: block,\n#   margin: '9rem auto 2rem',\n#   background: '#fff',\n#   borderRadius: '1rem',\n# }\n\n# 背景图\n# bgImage: '/img/bg2.jpg'\n\nbgImageStyle: {   #背景图片样式\n  height: '400px'\n}\n\n\nisShowTitleInHome: false\nactionText: Guide\nactionLink: /views/other/guide\nfeatures:\n- title: Yesterday\n  details: 开发一款看着开心、写着顺手的 vuepress 博客主题\n- title: Today\n  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上\n- title: Tomorrow\n  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长\n---\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("Font")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("/>")])]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("38")]), _c('br')])]), _c('h2', {
    attrs: {
      "id": "三、valine评论问题"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、valine评论问题"
    }
  }, [_vm._v("#")]), _vm._v(" 三、valine评论问题")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("与直接引入官方 的插件不同，我们可以自己引入valine\n同样，在components中新建一个vue文件: valine.vue")])]), _vm._v(" "), _c('div', {
    staticClass: "language-html line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-html"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("template")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("section")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token special-attr"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("style")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation attr-equals"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token value css language-css"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("border-top")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" 2px solid #eaecef"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("padding-top")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("1rem"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token property"
    }
  }, [_vm._v("margin-top")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("2rem"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("<!-- id 将作为查询条件 -->")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("span")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation attr-equals"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("leancloud-visitors"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("data-flag-title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation attr-equals"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("Your Article Title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("em")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation attr-equals"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("post-meta-item-text"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("阅读量： "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("em")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("i")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("class")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation attr-equals"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("leancloud-visitors-count"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("i")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("span")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("h3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("a")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("href")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation attr-equals"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("javascript:;"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("a")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n        评 论：\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("h3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-name"
    }
  }, [_vm._v("id")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token attr-value"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation attr-equals"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")]), _vm._v("vcomments"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("div")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("section")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("template")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("script")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token script"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token language-javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("default")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("name")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Valine'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function-variable function"
    }
  }, [_vm._v("mounted")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("function")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// require window")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" Valine "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("require")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'valine'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("typeof")]), _vm._v(" window "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'undefined'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        document"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("getElementsByClassName")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'leancloud-visitors'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("id\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" window"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("location"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("pathname\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("this")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("window "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" window\n        window"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token constant"
    }
  }, [_vm._v("AV")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("require")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'leancloud-storage'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("Valine")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("el")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'#vcomments'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("appId")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("''")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// your appId")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("appKey")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("''")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// your appKey")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("notify")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("false")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("verify")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("false")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("path")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" window"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("location"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("pathname"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("visitor")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("true")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("avatar")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'mm'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("placeholder")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'来都来了，冒个泡再走吧。。'")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("script")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("46")]), _c('br')])]), _c('blockquote', [_c('p', [_vm._v("同样在一个指定的README.md文件中引入：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-html line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-html"
    }
  }, [_c('code', [_vm._v("---\ntitle: 留言板\ndate: 2024-01-13\n# sidebar: 'auto'\ncategories:\n - 留言板\ntags:\n - 留言板\npublish: true\n---\n\n::: tip \n欢迎大家在此留下你的足迹，让我们一起交流，共同进步！\n:::\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("<")]), _vm._v("valine")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token tag"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("</")]), _vm._v("valine")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(">")])]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("17")]), _c('br')])]), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/vuepress后续补充.md?vue&type=template&id=676618d7

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/vuepress后续补充.md

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

/* harmony default export */ var vuepress_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);