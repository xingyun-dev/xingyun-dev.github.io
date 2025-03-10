(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/三叶青图像识别项目/【6】图像分类部署.md?vue&type=template&id=9b0d201a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('hr'), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("【6】图像分类部署")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("包括将训练好的模型部署在本地终端、web端、小程序上、qt界面化。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/7df1300cbe2245368db122452850dbba.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、将pytorch模型转为onnx"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、将pytorch模型转为onnx"
    }
  }, [_vm._v("#")]), _vm._v(" 一、将pytorch模型转为ONNX")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("因为mobilenet模型在GPU上训练得到，要使其在CPU 上进行模型推理，需要确保模型的权重被正确地加载到CPU上。")])]), _vm._v(" "), _c('p', [_vm._v("然后再将获得的在CPU上进行推理的pytorch模型转化为ONNX模型。并可使用Netron可视化模型结构。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、本地终端部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、本地终端部署"
    }
  }, [_vm._v("#")]), _vm._v(" 二、本地终端部署")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-1-onnx-runtime部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-1-onnx-runtime部署"
    }
  }, [_vm._v("#")]), _vm._v(" 2.1. ONNX Runtime部署")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("使用推理引擎ONNX Runtime，读取onnx格式的模型文件，对单张图像、视频进行预测。")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-2-pytorch模型部署-补充"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-2-pytorch模型部署-补充"
    }
  }, [_vm._v("#")]), _vm._v(" 2.2. pytorch模型部署（补充）")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("不将.pth模型文件转化为onnx模型文件，而是直接部署pytorch模型文件")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、使用flask的web网页部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、使用flask的web网页部署"
    }
  }, [_vm._v("#")]), _vm._v(" 三、使用flask的web网页部署")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("flask+bootstrap+jquery+mysql搭建三叶青在线识别网站，使用nginx+gunicorn将网站部署在腾讯云上，配置SSL证书。网站地址：https://www.whtuu.cn")])]), _vm._v(" "), _c('p', [_vm._v("参考我的另外一篇文章："), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139707588",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("使用flask的web网页部署介绍"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "四、微信小程序部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、微信小程序部署"
    }
  }, [_vm._v("#")]), _vm._v(" 四、微信小程序部署")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("利用uniapp+微信开发者工具+flask后端开发了三叶青图像识别微信小程序。")])]), _vm._v(" "), _c('p', [_vm._v("参考我的另外一篇文章："), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139708263",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("微信小程序部署"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "五、使用pyqt界面化部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#五、使用pyqt界面化部署"
    }
  }, [_vm._v("#")]), _vm._v(" 五、使用pyqt界面化部署")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("pyqt+opencv开发的图像识别qt界面\n目前共有五个主要界面：软件介绍界面、省份识别、浙产识别、产地识别界面、以及自定义识别页面。")])]), _vm._v(" "), _c('p', [_vm._v("参考我的另外一篇文章："), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139708598",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("使用pyqt界面化部署"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文主要介绍了如何将pytorch模型转为ONNX模型文件以及如何将图像识别模型部署，包括部署在本地、部署在web网页、小程序、qt界面部署。")]), _vm._v(" "), _c('p', [_vm._v("2024/6/13")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【6】图像分类部署.md?vue&type=template&id=9b0d201a

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【6】图像分类部署.md

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

/* harmony default export */ var _6_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);