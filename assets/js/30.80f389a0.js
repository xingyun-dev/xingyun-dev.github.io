(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/三叶青图像识别项目/使用flask的web网页部署介绍.md?vue&type=template&id=2833730f
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('hr'), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("使用flask的web网页部署介绍")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("flask+bootstrap+jquery+mysql搭建三叶青在线识别网站，使用nginx+gunicorn将网站部署在腾讯云上，配置SSL证书。网站地址："), _c('a', {
    attrs: {
      "href": "https://www.whtuu.cn",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://www.whtuu.cn"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、网页介绍"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、网页介绍"
    }
  }, [_vm._v("#")]), _vm._v(" 一、网页介绍")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("网页的界面主要包括登录界面、首页、在线识别、历史记录、个人中心、图片库以及其它界面。\n（如果看过我之前的博客，会发现其实这个网站的很多前端页面都是我之前自己搭建的学习网站——星云小窝 的页面，为了快速开发这个网站，我就直接拿了之前的代码并修改了一下。）\n之前自己搭建的学习网站介绍:\n"), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/136622251?spm=1001.2014.3001.5502",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("星云小窝项目1.0——项目介绍（一）"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/b100a88e0a1949408074f2c8bc96ff35.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/70301867b15848e7b4bfaf46a0784b9c.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/b7b5680449a94d1fb802bb37bf8f9bed.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/51246f4bd27a4a8e9b920828a441066c.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/9efe90733d1e488594b92bf711cd17e0.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/288e7863bf7341b68ba444fbf64d74dd.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/253278228ca84436aad35f8f045e4716.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、数据库设计介绍"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、数据库设计介绍"
    }
  }, [_vm._v("#")]), _vm._v(" 二、数据库设计介绍")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("这个网站我就简单的只设计三张表：ecode（验证码存放表）、photos（图片表）、users（用户表）\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/3c6dcf67e76b433ba65e68afea8f2bba.png",
      "alt": "在这里插入图片描述"
    }
  })])]), _vm._v(" "), _c('p', [_vm._v("其中，users表是基础的，用于存放网站的注册用户，存储用户注册的id、邮箱、密码，昵称、头像、身份、创建时间、介绍。\nphotos表，则是存放注册用户提交的图片，\n至于ecode表，则是临时存放邮箱地址以及验证码，用于在手机端小程序中的注册，因为在小程序端没有session，无法像网页一样存储验证码，而小程序上只能通过生成token后，从后端的数据库中获取验证码。故我设计了这一个表格，用于小程序从后端获取验证码，并且定时删除表中的内容。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文主要介绍了使用flask搭建的三叶青在线识别网站，同时也简单介绍了数据库的设计")]), _vm._v(" "), _c('p', [_vm._v("2024/6/12")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/使用flask的web网页部署介绍.md?vue&type=template&id=2833730f

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/使用flask的web网页部署介绍.md

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

/* harmony default export */ var _flask_web_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);