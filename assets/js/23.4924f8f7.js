(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/三叶青图像识别项目/【1】构建图像分类数据集.md?vue&type=template&id=460d6e82
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('hr'), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("【1】构建图像分类数据集")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("主要简述图像采集与整理、可视化采集图像、划分训练集验证集、统计各类别图像数量")]), _vm._v(" "), _c('p', [_vm._v("代码存放库")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、图像采集与整理"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、图像采集与整理"
    }
  }, [_vm._v("#")]), _vm._v(" 一、图像采集与整理")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-1-图像采集"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-1-图像采集"
    }
  }, [_vm._v("#")]), _vm._v(" 1.1. 图像采集")]), _vm._v(" "), _c('p', [_vm._v("三叶青块根图片主要是通过自己拍照来采集的")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("具体信息，请参考【8】相关补充——三叶青实验记录")])]), _vm._v(" "), _c('p', [_vm._v("未知类别照片")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将这些照片充当未知类别，另外还将本地相册中的照片也作为未知类别。（有点建议：或许我要挑选一些与三叶青块根相似的其它药材作为未知类别，这样更能区分出三叶青块根）")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-2-图片数据集的处理"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-2-图片数据集的处理"
    }
  }, [_vm._v("#")]), _vm._v(" 1.2. 图片数据集的处理")]), _vm._v(" "), _c('p', [_vm._v("前面获得了三叶青块根照片和其它任意图片的数据集。\n但是数据集的格式、图片大小并未统一。")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("包括：")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("复制原始图片，生成图片的标签文件")]), _vm._v(" "), _c('li', [_vm._v("根据labels.csv文件整理为labels_2.csv或labels_5.csv或lebels_未知.csv")]), _vm._v(" "), _c('li', [_vm._v("图片压缩为统一尺寸")])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-3-图片数据集的混合"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-3-图片数据集的混合"
    }
  }, [_vm._v("#")]), _vm._v(" 1.3. 图片数据集的混合")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将三叶青的块根照片与未知照片混合")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-4-测试集划分"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-4-测试集划分"
    }
  }, [_vm._v("#")]), _vm._v(" 1.4.测试集划分")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("设置自定义的划分比例，这里为0.2")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、可视化采集图像"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、可视化采集图像"
    }
  }, [_vm._v("#")]), _vm._v(" 二、可视化采集图像")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("随机读取一定数量的图片并可视化")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/af08a8659c834f958f891deccaa0ab91.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、划分训练集验证集"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、划分训练集验证集"
    }
  }, [_vm._v("#")]), _vm._v(" 三、划分训练集验证集")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将之前剩下的图片划分为训练集和验证集，按8：2比例")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/5882c55d3a4a4e52965cdd9bbb7b73f7.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "四、统计各类别图像数量"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、统计各类别图像数量"
    }
  }, [_vm._v("#")]), _vm._v(" 四、统计各类别图像数量")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将各类别图像数量表格可视化为柱状图")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/f4a03962315d4bd49f586187c1ea80f4.png",
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
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文主要介绍了如何构建我的图像分类数据集，数据集的构建是比较重要的，这里数据集图像的获取也不知道合不合格，这一步或许有点问题，考虑再完善。")]), _vm._v(" "), _c('p', [_vm._v("2024/6/12")]), _vm._v(" "), _c('p', [_vm._v("十一年前南渡客，四千里外北归人。")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【1】构建图像分类数据集.md?vue&type=template&id=460d6e82

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【1】构建图像分类数据集.md

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

/* harmony default export */ var _1_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);