(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/三叶青图像识别项目/【2】模型训练准备.md?vue&type=template&id=43c358b1
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('hr'), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("【2】模型训练准备")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("构建完图像分类数据集后，就要开始训练我们的模型了，深度学习模型训练需要大量计算资源，也就是GPU。\n可以在本地机器上使用GPU（如果有的话），或者在云服务上租用GPU资源。此外，还有专门为深度学习训练提供的服务，如Google的Colab和Kaggle。")]), _vm._v(" "), _c('p', [_vm._v("本文将简单介绍一下如何使用kaggle上的GPU资源。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、kaggle账户创建"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、kaggle账户创建"
    }
  }, [_vm._v("#")]), _vm._v(" 一、kaggle账户创建")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("注册完kaggle账号后，为了使用GPU资源，还要进行手机号验证")])]), _vm._v(" "), _c('p', [_vm._v("推荐文章")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://blog.csdn.net/jiabiao1602/article/details/139370991",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://blog.csdn.net/jiabiao1602/article/details/139370991"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://blog.csdn.net/weixin_51288849/article/details/130164188",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://blog.csdn.net/weixin_51288849/article/details/130164188"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、创建kaggle项目"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、创建kaggle项目"
    }
  }, [_vm._v("#")]), _vm._v(" 二、创建kaggle项目")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("由于考虑到kaggle云平台GPU使用时间的限制，我创建了一个kaggle项目让团队成员加入进来，登录他们的账号进行训练。")])]), _vm._v(" "), _c('p', [_vm._v("参考文章：\n"), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/137529760",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("如何在kaggle中发布一个项目以便管理"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、使用"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、使用"
    }
  }, [_vm._v("#")]), _vm._v(" 三、使用")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将图像数据上传到kaggle项目中")])]), _vm._v(" "), _c('p', [_vm._v("相关notebook代码,请参见：\nkaggle_train.ipynb\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/78098bc53a9d412fa9b1cbc76c05889f.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("准备好了模型训练的资源，将数据上传到了kaggle平台，编写了相关代码。")]), _vm._v(" "), _c('p', [_vm._v("2024/6/12")]), _vm._v(" "), _c('p', [_vm._v("共赏金尊沈绿蚁，莫辞醉，此花不与群花比")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【2】模型训练准备.md?vue&type=template&id=43c358b1

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【2】模型训练准备.md

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

/* harmony default export */ var _2_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);