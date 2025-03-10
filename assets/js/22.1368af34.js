(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/三叶青图像识别项目/README.md?vue&type=template&id=636a1226
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
  }), _c('p', [_vm._v("本系列文章为近期所做三叶青图像识别项目研究而作的研究介绍")])]), _c('hr'), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("三叶青图像识别研究总概")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("本系列文章为近期所做项目研究而作的研究介绍。算是我近期所学的一个总结吧, 同时也希望与各位多多交流学习。")]), _vm._v(" "), _c('p', [_vm._v("文档介绍："), _c('a', {
    attrs: {
      "href": "https://xingyun-dev.github.io/docs/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("星云文档"), _c('OutboundLink')], 1), _vm._v("\n相关代码："), _c('a', {
    attrs: {
      "href": "https://github.com/xingyun-dev/sanyeqing_project",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("github代码存储"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("链接："), _c('a', {
    attrs: {
      "href": "https://pan.baidu.com/s/16-ONjlrGkD3wXFfexYyROA?pwd=rzyy",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("网盘存储"), _c('OutboundLink')], 1), _vm._v("\n提取码：rzyy\n--来自百度网盘超级会员V5的分享")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、整体目录介绍"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、整体目录介绍"
    }
  }, [_vm._v("#")]), _vm._v(" 一、整体目录介绍")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("图像分类部分的研究相关代码和文档目录\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/480a58b5f169407a97668013138eee8d.png",
      "alt": "在这里插入图片描述"
    }
  })])]), _vm._v(" "), _c('p', [_vm._v("【1】构建图像分类数据集  ； 主要存放图像采集与整理、可视化采集图像、划分训练集验证集、统计各类别图像数量")]), _vm._v(" "), _c('p', [_vm._v("【2】模型训练准备   ； 主要介绍在开始训练模型前所做的一些准备，例如训练环境的搭建、安排、记录等")]), _vm._v(" "), _c('p', [_vm._v("【3】迁移学习模型  ；因为基于本人也是初次尝试做深度学习的实验，没有什么能力去优化模型结构和调整模型，故为了省时间直接采用迁移学习，其中我尝试了许多模型，也隐约有点训练模型的体会")]), _vm._v(" "), _c('p', [_vm._v("【4】在测试集上评估模型精度   ； 训练得到模型后，为了查看模型的泛化能力，故在测试集上通过各种评估指标评估模型的精度")]), _vm._v(" "), _c('p', [_vm._v("【5】可解释性分析、显著性分析  ；存放训练后模型可解释性分析、显著性分析的相关代码（暂无）")]), _vm._v(" "), _c('p', [_vm._v("【6】图像分类部署   ；  存放将模型部署的方法的相关文档：本地部署、web部署、微信小程序部署、qt界面化部署。")]), _vm._v(" "), _c('p', [_vm._v("【7】树莓派图像分类部署   ；  存放用树莓派将模型部署的教程以及相关的树莓派学习笔记")]), _vm._v(" "), _c('p', [_vm._v("【8】相关补充  ； 存放有关此项目的一些补充，有实验记录、最终产出、后续安排以及SNP相关等")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("kaggle_jupyter")]), _vm._v("  ；  存放一些在kaggle上训练的notebook")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("model_zheng_path")]), _vm._v(" ;   存放训练得到的一些.pth模型文件")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("onnx_path")]), _vm._v("   ； 存放转化得到的onnx模型文件")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("kaggle_train.ipynb")]), _vm._v("  ；  是一个在kaggle上训练模型的notebook")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("README.md")]), _vm._v(" ；  是三叶青图像识别项目研究的简介文档")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、前期安排"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、前期安排"
    }
  }, [_vm._v("#")]), _vm._v(" 二、前期安排")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("参考文章、视频等教程如下：")])]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://space.bilibili.com/1900783/channel/collectiondetail?sid=606800",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("合集·两天搞定人工智能毕业设计之【图像分类】"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://doc.itprojects.cn/0007.zhishi.raspberrypi/02.doc/index.html#/README",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("树莓派快速上手说明"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV1vK411U7Br?p=4&vd_source=e34f9443a7e5ae37b9a8faac238fc132",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Python+树莓派+Linux 快速上手"), _c('OutboundLink')], 1), _vm._v("；")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV16U4y1879Q/?spm_id_from=333.337",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("树莓派教程十分钟玩转系列入门篇"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v(".....\n主要是上面这些，其余更多也不记得了")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、构建图像分类数据集"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、构建图像分类数据集"
    }
  }, [_vm._v("#")]), _vm._v(" 三、构建图像分类数据集")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("【1】构建图像分类数据集  ； 主要存放图像采集与整理、可视化采集图像、划分训练集验证集、统计各类别图像数量")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/2715ae99544943c8a93a1ce735595a65.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("参考我的另一篇文章 "), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139665990",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("【1】构建图像分类数据集"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "四、模型训练准备"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、模型训练准备"
    }
  }, [_vm._v("#")]), _vm._v(" 四、模型训练准备")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("构建完图像分类数据集后，就要开始训练我们的模型了，深度学习模型训练需要大量计算资源，也就是GPU。\n可以在本地机器上使用GPU（如果有的话），或者在云服务上租用GPU资源。此外，还有专门为深度学习训练提供的服务，如Google的Colab和Kaggle。")])]), _vm._v(" "), _c('p', [_vm._v("参考我的另一篇文章 "), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139666026",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("【2】模型训练准备"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "五、迁移学习模型"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#五、迁移学习模型"
    }
  }, [_vm._v("#")]), _vm._v(" 五、迁移学习模型")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("主要简述一下训练代码,主要是运用迁移学习的方法，将预训练模型在自定义的数据集上进行训练。")])]), _vm._v(" "), _c('p', [_vm._v("kaggle上临时发布的竞赛  "), _c('a', {
    attrs: {
      "href": "https://www.kaggle.com/competitions/sanyeqing/data",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://www.kaggle.com/competitions/sanyeqing/data"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("参考我的另一篇文章 "), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139666046",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("【3】迁移学习模型"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "六、在测试集上评估模型精度"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#六、在测试集上评估模型精度"
    }
  }, [_vm._v("#")]), _vm._v(" 六、在测试集上评估模型精度")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将训练好的模型应用在测试集上，评估模型的效果")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/5e598c6c5eb94d5d91d7c1f00f98174f.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("参考我的另一篇文章 "), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139666057",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("【4】在测试集上评估模型精度"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "七、可解释性分析、显著性分析"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#七、可解释性分析、显著性分析"
    }
  }, [_vm._v("#")]), _vm._v(" 七、可解释性分析、显著性分析")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("推荐B站up主同济子豪兄的"), _c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV1JG4y1s74x/?spm_id_from=333.999.0.0",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("合集·两天搞定人工智能毕业设计之【图像分类】"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "八、图像分类部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#八、图像分类部署"
    }
  }, [_vm._v("#")]), _vm._v(" 八、图像分类部署")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("包括将训练好的模型部署在本地终端、web端、小程序上、qt界面化。")])]), _vm._v(" "), _c('p', [_vm._v("参考我的另一篇文章 "), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139666078",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("【6】图像分类部署"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("该文主要介绍了如何将pytorch模型转为ONNX模型文件以及如何将图像识别模型部署，包括部署在本地、部署在web网页、小程序、qt界面部署。\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/6fd5512fcefe4c54b4cf5571552048dd.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "九、树莓派部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#九、树莓派部署"
    }
  }, [_vm._v("#")]), _vm._v(" 九、树莓派部署")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("参考我的另一篇文章"), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139666087",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("【7】树莓派图像分类部署"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('p', [_vm._v("该文主要记录了我学习树莓派时的笔记，包括对树莓派的认识和组装、树莓派的运行和VNC远程连接、摄像头模块的使用、以及最后的使用yolov5来对象棋进行识别等。\n（尝试了以下租用GPU 进行训练，不得不说与之前使用kaggle平台相比，还是氪金玩家比较爽。省去了配置环境的麻烦）\n另外，也是因为目前暂时没有yolo的三叶青标记数据，所以数据是从其它教程中找过来的。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "十、相关补充"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#十、相关补充"
    }
  }, [_vm._v("#")]), _vm._v(" 十、相关补充")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("存放一些有关这个项目研究的补充。")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/34d9d7503c444ddd804ce692db4c8203.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n参考我的另一篇文章 "), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/2301_78630677/article/details/139666097",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("【8】相关补充"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("该文主要介绍了关于进行的这个项目除了步骤方法的一些补充，包括实验记录、有关SNP位点筛选、阶段总结、后续安排等，")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文主要介绍了近期来做的一个项目，这个项目可以说是从寒假就开始准备了，从最开始的SNP位点筛选到后面的图像识别模型训练，再到之后的上传实验结果、答辩等流程，差不多历时四个月吧。期间也是陆陆续续、磕磕碰碰，总之也就是一点一点的做下去。最后虽然还是有不少要继续完善、也就是和我最初预期的结果有所差距，也就是没做完，但怎么说大体的流程还是走下来了（我真棒）。")]), _vm._v(" "), _c('p', [_vm._v("此时在写这个项目笔记的我，回望一下，发现累是真累啊，身累心累。（我当初怎么会想着做这个啊，只能说脑子gg了，哎，哎，哎），但是这个项目进行到现在这个阶段，不管说什么，也要继续下去，努力做好吧！")]), _vm._v(" "), _c('p', [_vm._v("嗯，那之后我要\n。。。"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/f6ef73f58dd64b149c13341c8074c333.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("2024/7/4")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/README.md?vue&type=template&id=636a1226

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/README.md

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

/* harmony default export */ var README = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);