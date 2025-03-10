(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/三叶青图像识别项目/【4】在测试集上评估模型精度.md?vue&type=template&id=1c8cb0ef
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('hr'), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("【4】在测试集上评估模型精度")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("将训练好的模型应用在测试集上，评估模型的效果")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、评估指标代码"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、评估指标代码"
    }
  }, [_vm._v("#")]), _vm._v(" 一、评估指标代码")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-1-各类别准确率评估指标"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-1-各类别准确率评估指标"
    }
  }, [_vm._v("#")]), _vm._v(" 1.1. 各类别准确率评估指标")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("包括precision,recall,f1-score,support,accuracy,AP,AUC值的表格以及测试集预测结果表格")])]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("predict_")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("num_classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_weight_pth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_leibie"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_path_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("is_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token triple-quoted-string string"
    }
  }, [_vm._v("\"\"\"\n    img: #测试图片路径\n    num_classes : #类别数量：10、5、2\n    model_name ： #模型名称\n    model_weight_pth : #待读取的模型权重的保存路径\n    classes： #索引与标签的字典\n    model_leibie: #模型类别\n    model_path_zheng: #整体模型路径\n    is_zheng: #是否整体模型\n    \"\"\"")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#定义了数据转换的操作。通过transforms.ToTensor()将图像转换为张量，transforms.Normalize()对图像进行归一化处理")]), _vm._v("\n    data_transform "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" transforms"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("Compose"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n         transforms"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("Resize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("256")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n         "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 从图像中心裁切224x224大小的图片")]), _vm._v("\n         transforms"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("CenterCrop"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("224")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n         torchvision"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("transforms"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ToTensor"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("\n         torchvision"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("transforms"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("Normalize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.485")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.456")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.406")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                                     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.229")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.224")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.225")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 有 GPU就用 GPU，没有就用 CPU")]), _vm._v("\n    devices "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("device"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'cuda:0'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("cuda"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("is_available"), _c('span', {
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
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'cpu'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("mode "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'RGBA'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#如果图像是RGBA模式，就将其转换为RGB模式")]), _vm._v("\n        img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("convert"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'RGB'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" data_transform"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#将输入图像应用数据转换操作")]), _vm._v("\n    img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("unsqueeze"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" dim"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#在第0维度上添加一个维度，用于适配网络输入")]), _vm._v("\n    img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("to"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("devices"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 将张量移动到GPU上  ")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" is_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        model "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("load"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("model_path_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("map_location"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("device"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'cpu'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#直接加载整个模型")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        model "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" get_net"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("devices"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("num_classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_leibie"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#实例化的image_classifier")]), _vm._v("\n        model"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("load_state_dict"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("load"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("model_weight_pth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("map_location"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("device"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'cpu'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
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
      "class": "token comment"
    }
  }, [_vm._v("#指定了模型权重文件路径，并加载权重到模型中")]), _vm._v("\n    model"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("eval")]), _c('span', {
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
      "class": "token comment"
    }
  }, [_vm._v("#将模型设置为评估模式，即关闭Dropout和Batch Normalization的随机性")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#将输入图像输入模型中进行推理")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("with")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("no_grad"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n        output "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("squeeze"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("model"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        predict "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("softmax"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("output"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" dim"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 获取每个类别的预测概率")]), _vm._v("\n    class_probs "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
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
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("round")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("prob"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("item"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" prob "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("enumerate")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("predict"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    predict_cla "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("argmax"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("predict"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("cpu"), _c('span', {
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
  }, [_vm._v(".")]), _vm._v("numpy"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    max_prob "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("round")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("predict"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("predict_cla"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("item"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    predicted_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("predict_cla"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" predicted_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" max_prob"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" class_probs\n\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#测试集预测结果、各类别准确率评估指标")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("predict_acc_all")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("labels_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("image_dir"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("num_classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_weight_pth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_leibie"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_path_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("is_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#计算在测试集上的准确率")]), _vm._v("\n        labels_df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("labels_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#假设labels.csv的格式是：ID,labels")]), _vm._v("\n        true_labels "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("row"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'ID'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" row"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'labels'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" _"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" row "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" labels_df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("iterrows"), _c('span', {
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
  }, [_vm._v("}")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 创建一个字典来存储真实标签")]), _vm._v("\n        img_path_lt "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#图片路径")]), _vm._v("\n        predicted_class_topn_lt "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#top_n预测类别")]), _vm._v("\n        top_n "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 初始化 top_n 列表")]), _vm._v("\n        true_class_lt "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#真实类别")]), _vm._v("\n        class_probs_list "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#每个类型的置信度")]), _vm._v("\n        correct_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 初始化计数器")]), _vm._v("\n        total_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n        photo_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#初始化图片计数器")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" time\n        start_time "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" time"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("time"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 开始计时")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 遍历未知图片目录")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#     image_dir = r\"/kaggle/working/my_directory_shi/train_valid_test/test/unknown/\"")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" filename "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" os"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("listdir"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("image_dir"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" filename"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("endswith"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\".png\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 根据你的图片文件类型调整")]), _vm._v("\n                photo_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#图片个数统计")]), _vm._v("\n                base_name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" filename"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("split"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'.'")]), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 移除文件名的后缀以匹配labels.csv中的ID")]), _vm._v("\n                img_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" os"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("join"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("image_dir"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" filename"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                img_path_lt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#存储图片的路径")]), _vm._v("\n                predicted_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" max_prob"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("class_probs "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" predict_"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("Image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("open")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("num_classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_weight_pth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_leibie"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("model_path_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("is_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 预测")]), _vm._v("\n                class_probs_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 对 class_probs 字典进行排序，返回一个列表，列表的每个元素是一个元组，元组的第一个元素是键，第二个元素是值")]), _vm._v("\n                sorted_class_probs "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("sorted")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("items"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" key"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("lambda")]), _vm._v(" x"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" x"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" reverse"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 取前三个元素")]), _vm._v("\n                top3_class_probs "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" sorted_class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#                 print(top3_class_probs)")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 将 top3_class_probs 添加到 predicted_class_topn_lt 列表中")]), _vm._v("\n                predicted_class_topn_lt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("top3_class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                \n                true_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" true_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("get"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("int")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("base_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 获取真实类别，这里使用去除后缀的base_name来查找")]), _vm._v("\n                true_class_lt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("true_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#                 检查 top3_class_probs 是否包含真实类别")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" true_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("item"), _c('span', {
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
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" item "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" top3_class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                    top_n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                    top_n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#                 print(top_n)")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#                 print(f'真实：{true_class}',f\"预测：{predicted_class}\",f\"最大概率：{max_prob}\",f\"所有概率:{class_probs}\")")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" true_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("is")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"警告：找不到ID为")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("base_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("在labels.csv中的标签，跳过此文件。\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("continue")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("predicted_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" true_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 更新计数器")]), _vm._v("\n                    correct_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _vm._v("\n                total_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _vm._v("\n\n        end_time "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" time"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("time"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 结束计时")]), _vm._v("\n        total_time "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" end_time "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" start_time  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 总处理时间")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"总耗时: ")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("total_time"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token format-spec"
    }
  }, [_vm._v(".2f")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("秒\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"测试集图片数: ")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("photo_count"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("张\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"每张图片耗时photo_time：")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("total_time"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("photo_count"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token format-spec"
    }
  }, [_vm._v("2f")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("秒\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        \n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 创建一个字典，其中键是列名，值是数据")]), _vm._v("\n        data "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'img_path'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" img_path_lt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" true_class_lt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top_n预测正确'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" top_n\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n        \n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 使用循环来添加 top-n 预测类别和置信度的列")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" i "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("range")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f'top-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("-predicted-class'")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("item"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
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
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" item "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" predicted_class_topn_lt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n            data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f'top-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("-probs'")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("item"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" item "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" predicted_class_topn_lt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 将每个类别的置信度添加到数据字典中")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" i "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("range")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("num_classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            i_c "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n            data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f'class_")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("i_c"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("_prob'")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" class_probs "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" class_probs_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 创建 DataFrame")]), _vm._v("\n        df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("DataFrame"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 保存为 csv 文件")]), _vm._v("\n        df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("to_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'测试集预测结果.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("False")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# print(df)")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 计算准确率")]), _vm._v("\n        accuracy "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" correct_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" total_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" total_count "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"==============================================\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"预测准确率test_acc：")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("accuracy "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("100")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token format-spec"
    }
  }, [_vm._v(".2f")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("%\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 计算 top_n 预测正确的概率")]), _vm._v("\n        top_n_accuracy "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("sum")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top_n预测正确'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top_n预测正确'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
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
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("100")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"top_n 预测正确的概率是 ")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("top_n_accuracy"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token format-spec"
    }
  }, [_vm._v(".2f")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("%\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"=======================================\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"分类报告与各类别准确率\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("classification_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top-1-predicted-class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" target_names"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("values"), _c('span', {
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
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        report "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" classification_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top-1-predicted-class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" target_names"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("values"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" output_dict"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("del")]), _vm._v(" report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'accuracy'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n        df_report "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("DataFrame"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("transpose"), _c('span', {
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
      "class": "token comment"
    }
  }, [_vm._v("# print(df_report)")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#各类别准确率")]), _vm._v("\n        accuracy_list "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" sanye "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" tqdm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("values"), _c('span', {
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
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            df_temp "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v("sanye"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n            accuracy "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("sum")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df_temp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" df_temp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top-1-predicted-class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df_temp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            accuracy_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("accuracy"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 计算 宏平均准确率 和 加权平均准确率")]), _vm._v("\n        acc_macro "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("mean"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("accuracy_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        acc_weighted "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("sum")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("accuracy_list "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v(" df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("iloc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'support'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        accuracy_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("acc_macro"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        accuracy_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("acc_weighted"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'accuracy'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" accuracy_list\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("to_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别准确率评估指标.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" index_label"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'类别'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("151")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_1-2-混淆矩阵可视化"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-2-混淆矩阵可视化"
    }
  }, [_vm._v("#")]), _vm._v(" 1.2. 混淆矩阵可视化")]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#混淆矩阵")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("cnf_matrix_plotter")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" cmap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("cm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("Blues"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token triple-quoted-string string"
    }
  }, [_vm._v("\"\"\"\n    传入混淆矩阵和标签名称列表，绘制混淆矩阵\n    \"\"\"")]), _vm._v("\n    df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'测试集预测结果.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    cm "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" confusion_matrix"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top-1-predicted-class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("figure"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("figsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imshow"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" interpolation"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'nearest'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" cmap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("cmap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# plt.colorbar() # 色条")]), _vm._v("\n    tick_marks "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("arange"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'混淆矩阵'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("30")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("xlabel"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'预测类别'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("25")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" c"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'r'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ylabel"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'真实类别'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("25")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" c"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'r'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("tick_params"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("labelsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("16")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 设置类别文字大小")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("xticks"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("tick_marks"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" rotation"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("90")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 横轴文字旋转")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("yticks"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("tick_marks"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 写数字")]), _vm._v("\n    threshold "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("max")]), _c('span', {
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
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2.")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" j "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" itertools"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("product"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("range")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("shape"), _c('span', {
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
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("range")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("shape"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("text"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("j"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" cm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" j"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                 horizontalalignment"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"center\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                 color"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"white\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" cm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" j"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" threshold "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"black\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                 fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("12")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("tight_layout"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("savefig"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'混淆矩阵.pdf'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" dpi"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("300")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 保存图像")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("show"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 查看所有配色方案")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# dir(plt.cm)")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" cm\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# df = pd.read_csv('测试集预测结果.csv', encoding='utf-8')")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# cnf_matrix_plotter(df, classes, cmap='Blues')")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("34")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_1-3-真实为a类-但被误判为b类的图像"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-3-真实为a类-但被误判为b类的图像"
    }
  }, [_vm._v("#")]), _vm._v(" 1.3. 真实为A类，但被误判为B类的图像")]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#筛选出测试集中，真实为A类，但被误判为B类的图像")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("get_wrong_predict")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("true_A"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("pred_B"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("is_plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'测试集预测结果.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    wrong_df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v("true_A"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top-1-predicted-class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v("pred_B"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#可视化上表中所有被误判的图像")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" is_plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" idx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" row "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" wrong_df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("iterrows"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n            img_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" row"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'img_path'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n            img_bgr "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imread"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" img_bgr "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("is")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"无法读取图像：")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("img_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                img_rgb "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("cvtColor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img_bgr"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("COLOR_BGR2RGB"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imshow"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img_rgb"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                title_str "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" img_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'\\nTrue:'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" row"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("' Pred:'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" row"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'top-1-predicted-class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n                plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("title_str"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n                plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("show"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" wrong_df\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# df = pd.read_csv('测试集预测结果.csv')")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# wrong_df = get_wrong_predict(df,'YNKM','SXXA',is_plt=True)")]), _vm._v("\n\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("23")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_1-4-pr曲线"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-4-pr曲线"
    }
  }, [_vm._v("#")]), _vm._v(" 1.4. PR曲线")]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#PR曲线")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("get_line_arg")]), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token triple-quoted-string string"
    }
  }, [_vm._v("'''\n    随机产生一种绘图线型\n    '''")]), _vm._v("\n    colors "), _c('span', {
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
      "class": "token string"
    }
  }, [_vm._v("'b'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'g'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'r'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'c'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'m'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'y'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'k'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:blue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:orange'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:green'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:red'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:purple'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:brown'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:pink'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:gray'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:olive'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tab:cyan'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'black'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'indianred'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'brown'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'firebrick'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'maroon'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkred'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'red'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'sienna'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'chocolate'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'yellow'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'olivedrab'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'yellowgreen'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkolivegreen'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'forestgreen'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'limegreen'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkgreen'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'green'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'lime'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'seagreen'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'mediumseagreen'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkslategray'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkslategrey'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'teal'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkcyan'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'dodgerblue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'navy'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkblue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'mediumblue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'blue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'slateblue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkslateblue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'mediumslateblue'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'mediumpurple'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'rebeccapurple'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'blueviolet'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'indigo'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkorchid'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkviolet'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'mediumorchid'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'purple'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'darkmagenta'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'fuchsia'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'magenta'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'orchid'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'mediumvioletred'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'deeppink'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'hotpink'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    markers "), _c('span', {
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
      "class": "token string"
    }
  }, [_vm._v("\".\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\",\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"o\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"v\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"^\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"<\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\">\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"1\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"2\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"3\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"4\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"8\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"s\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"p\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"P\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"*\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"h\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"H\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"+\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"x\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"X\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"D\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"d\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"|\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"_\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("4")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("6")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("7")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("8")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("9")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("11")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    linestyle "), _c('span', {
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
      "class": "token string"
    }
  }, [_vm._v("'--'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'-.'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'-'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    line_arg "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n    line_arg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'color'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" random"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("choice"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("colors"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# line_arg['marker'] = random.choice(markers)")]), _vm._v("\n    line_arg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'linestyle'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" random"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("choice"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("linestyle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    line_arg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'linewidth'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" random"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("randint"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("4")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# line_arg['markersize'] = random.randint(3, 5)")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" line_arg\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#PR曲线")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("plot_PR_curve")]), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("figure"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("figsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("14")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("xlim"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.01")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1.0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ylim"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1.01")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# plt.plot([0, 1], [0, 1],ls=\"--\", c='.3', linewidth=3, label='随机模型')")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("xlabel"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Recall'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ylabel"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Precision'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("rcParams"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'font.size'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("22")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("grid"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"测试集预测结果.csv\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    ap_list "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" each_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" idx_to_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("values"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n        y_test "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("list")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" each_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        y_score "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("list")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'class_{}_prob'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("format")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("each_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        precision"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" recall"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" thresholds "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" precision_recall_curve"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("y_test"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" y_score"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        AP "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" average_precision_score"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("y_test"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" y_score"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" average"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'weighted'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("plot"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("recall"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" precision"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("**")]), _vm._v("get_line_arg"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" label"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("each_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("legend"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        ap_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("AP"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("legend"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("loc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'best'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("12")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("savefig"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别PR曲线.pdf'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" dpi"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("120")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" bbox_inches"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tight'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("show"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    df_report "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别准确率评估指标.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 计算 AP值 的 宏平均 和 加权平均")]), _vm._v("\n    macro_avg_auc "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("mean"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("ap_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    weighted_avg_auc "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("sum")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("ap_list "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v(" df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("iloc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'support'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    ap_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("macro_avg_auc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    ap_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("weighted_avg_auc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'AP'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" ap_list\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# print(df_report)")]), _vm._v("\n    df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("to_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别准确率评估指标.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("False")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("50")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_1-5-roc曲线"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-5-roc曲线"
    }
  }, [_vm._v("#")]), _vm._v(" 1.5. ROC曲线")]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#ROC曲线")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("plot_roc_curve")]), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("figure"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("figsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("14")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("xlim"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.01")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1.0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ylim"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1.01")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("plot"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("ls"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"--\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" c"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'.3'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" linewidth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" label"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'随机模型'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("xlabel"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'False Positive Rate (1 - Specificity)'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ylabel"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'True Positive Rate (Sensitivity)'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("rcParams"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'font.size'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("22")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("grid"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'测试集预测结果.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    auc_list "), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" each_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" idx_to_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("values"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n        y_test "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("list")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'true_class'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" each_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        y_score "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("list")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'class_{}_prob'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("format")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("each_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        fpr"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" tpr"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" threshold "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" roc_curve"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("y_test"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" y_score"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("plot"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("fpr"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" tpr"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("**")]), _vm._v("get_line_arg"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" label"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("each_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("legend"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        auc_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("auc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("fpr"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" tpr"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("legend"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("loc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'best'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("12")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("savefig"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别ROC曲线.pdf'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" dpi"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("120")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" bbox_inches"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tight'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("show"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    df_report "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别准确率评估指标.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 计算 AUC值 的 宏平均 和 加权平均")]), _vm._v("\n    macro_avg_auc "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("mean"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("auc_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    weighted_avg_auc "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("sum")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("auc_list "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v(" df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("iloc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'support'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    auc_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("macro_avg_auc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    auc_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("weighted_avg_auc"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'AUC'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" auc_list\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# print(df_report)")]), _vm._v("\n    df_report"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("to_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别准确率评估指标.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("False")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("34")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_1-6-各类别评估指标柱状图"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-6-各类别评估指标柱状图"
    }
  }, [_vm._v("#")]), _vm._v(" 1.6. 各类别评估指标柱状图")]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#绘制各类别评估指标柱状图")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("plot_bar_chart")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("feature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token triple-quoted-string string"
    }
  }, [_vm._v("\"\"\"\n    绘制各类别评估指标柱状图\n    :param df: DataFrame\n    :param feature: str\n    # feature = 'precision'\n    # feature = 'recall'\n    # feature = 'f1-score'\n    # feature = 'accuracy'\n    # feature = 'AP'\n    # feature = 'AUC'\n    :return:\n    \"\"\"")]), _vm._v("\n    df "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" pd"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read_csv"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别准确率评估指标.csv'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    df_plot "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" df"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("sort_values"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("by"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("feature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" ascending"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("False")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("figure"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("figsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("22")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("7")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    x "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" df_plot"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'类别'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    y "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" df_plot"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("feature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    ax "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("bar"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("x"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" y"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" width"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.6")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" facecolor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'#1f77b4'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" edgecolor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'k'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("bar_label"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("ax"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fmt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'%.2f'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("15")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 置信度数值")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("xticks"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("rotation"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("45")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("tick_params"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("labelsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("15")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# plt.xlabel('类别', fontsize=20)")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ylabel"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("feature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("20")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'评估指标 {}'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("format")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("feature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fontsize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("25")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("savefig"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'各类别评估指标柱状图-{}.pdf'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("format")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("feature"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" dpi"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("120")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" bbox_inches"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'tight'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("show"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# plot_bar_chart('AUC')")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("31")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_1-7-调用函数"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-7-调用函数"
    }
  }, [_vm._v("#")]), _vm._v(" 1.7. 调用函数")]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" __name__ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'__main__'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# # 根据 labels.csv 载入类别和对应 ID")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# idx_to_labels = pd.read_csv(\"D:\\SanYeQing_Project\\wht-sanyeqing\\idx_to_labels.csv\",encoding='utf-8')")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# # 创建一个字典来存储真实标签")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# idx_to_labels = {str(index): row['labels'] for index, row in idx_to_labels.iterrows()}  ")]), _vm._v("\n    random"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("seed"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("124")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#根据json文件获取类别")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" json\n    class_json_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'class_5.json'")]), _vm._v("\n    json_file "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("open")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("class_json_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'rb'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    idx_to_labels "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" json"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("load"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("json_file"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("idx_to_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 测试集预测结果、各类别准确率评估指标")]), _vm._v("\n    predict_acc_all"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("labels_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"D:\\SanYeQing_Project\\sanyeqing_hun_weizhi_finally\\labels_hun_finally.csv\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        image_dir"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"D:\\SanYeQing_Project\\sanyeqing_hun_weizhi_finally\\test_hun_finally\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        num_classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("6")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_weight_pth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("idx_to_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_leibie "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_path_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"D:\\SanYeQing_Project\\wht_sanyeqing_image-Classification\\model_zheng_path\\model_cpu_97.18.pth\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        is_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#混淆矩阵")]), _vm._v("\n    cnf_matrix_plotter"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("idx_to_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" cmap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Blues'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#PR曲线")]), _vm._v("\n    plot_PR_curve"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#ROC曲线")]), _vm._v("\n    plot_roc_curve"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#绘制各类别评估指标柱状图")]), _vm._v("\n    plot_bar_chart"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'AUC'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#筛选出测试集中，真实为A类，但被误判为B类的图像")]), _vm._v("\n    get_wrong_predict"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("true_A"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"浙江省\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("pred_B"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"陕西省\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("is_plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("get_wrong_predict"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("true_A"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"浙江省\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("pred_B"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"非浙江\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("is_plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("False")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n    \n\n    \n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#单张图片的预测概率 (可选看)")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("from")]), _vm._v(" PIL "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" ImageDraw"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("ImageFont\n    \n   \n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" os\n    font_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"C:\\\\Windows\\\\Fonts\\\\simhei.ttf\"")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 要检查的路径")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" os"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("exists"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("font_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"路径存在\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"路径不存在\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 创建一个 ImageFont 对象，设置字体大小")]), _vm._v("\n    font "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" ImageFont"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("truetype"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("font_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" size"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("15")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("show_image")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token triple-quoted-string string"
    }
  }, [_vm._v("\"\"\"展示图像\"\"\"")]), _vm._v("\n        plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imshow"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#  plt.axis('off')  # 不显示坐标轴")]), _vm._v("\n        plt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("show"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 在predict_函数调用之后，添加如下代码来显示图像 ")]), _vm._v("\n    img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" Image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("open")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"D:\\SanYeQing_Project\\sanyeqing_hun_weizhi_finally\\test_hun_finally\\2496.png\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    predicted_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("max_prob"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("sorted_class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" predict_"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" num_classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("6")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_weight_pth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("idx_to_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_leibie "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        model_path_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"D:\\SanYeQing_Project\\wht_sanyeqing_image-Classification\\model_zheng_path\\model_cpu_97.18.pth\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                        is_zheng"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _vm._v("\n                                            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 创建一个 ImageDraw 对象")]), _vm._v("\n    draw "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" ImageDraw"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("Draw"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 定义起始位置")]), _vm._v("\n    start_x "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _vm._v("\n    start_y "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 定义行间距")]), _vm._v("\n    line_spacing "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("15")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 将字典转换为列表")]), _vm._v("\n    sorted_class_probs_list "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("list")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("sorted_class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("items"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 遍历字典，将键和值添加到图像上")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" key"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" value "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" sorted_class_probs_list"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("11")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        key "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" idx_to_labels"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("key"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n        text "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("key"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v(":       ")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("value"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"")])]), _vm._v("\n        draw"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("text"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("start_x"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" start_y"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" text"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" fill"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("100")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("200")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("font"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("font"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        start_y "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+=")]), _vm._v(" line_spacing  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 更新y坐标，以便下一行文本在新的一行")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 显示图像")]), _vm._v("\n    show_image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  \n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"最可能的类别：")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("predicted_class"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f\"最大分类概率：")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("max_prob"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("print")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("sorted_class_probs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("90")]), _c('br')])]), _c('h2', {
    attrs: {
      "id": "二、测试集图像语义特征可视化"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、测试集图像语义特征可视化"
    }
  }, [_vm._v("#")]), _vm._v(" 二、测试集图像语义特征可视化")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("更多信息查看对应文档，这里不再赘述")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/16f9fdac0e1546c9964ca2b05f7b4bfa.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-1-计算测试集图像的语义特征"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-1-计算测试集图像的语义特征"
    }
  }, [_vm._v("#")]), _vm._v(" 2.1. 计算测试集图像的语义特征")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-2-使用t-sne算法进行降维可视化"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-2-使用t-sne算法进行降维可视化"
    }
  }, [_vm._v("#")]), _vm._v(" 2.2. 使用t-SNE算法进行降维可视化")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-3-使用umap算法进行降维可视化"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-3-使用umap算法进行降维可视化"
    }
  }, [_vm._v("#")]), _vm._v(" 2.3. 使用UMAP算法进行降维可视化")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、特征图的展示-补充"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、特征图的展示-补充"
    }
  }, [_vm._v("#")]), _vm._v(" 三、特征图的展示（补充）")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("更多信息查看对应文档，这里不再赘述")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文主要介绍了在测试集上进行模型评估的代码，以及测试集图像语义特征可视化等")]), _vm._v(" "), _c('p', [_vm._v("2024/6/12")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【4】在测试集上评估模型精度.md?vue&type=template&id=1c8cb0ef

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【4】在测试集上评估模型精度.md

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

/* harmony default export */ var _4_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);