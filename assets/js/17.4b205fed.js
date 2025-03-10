(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/vuepress搭建个人文档/vuepress-reco主题个人博客搭建.md?vue&type=template&id=bce2343c
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
  }), _c('p', [_vm._v("vuepress-reco主题个人博客搭建")])]), _c('hr'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("使用vuepress-theme-reco主题来实现个人博客的搭建\n官方文档：\n"), _c('a', {
    attrs: {
      "href": "https://vuepress-theme-reco.recoluan.com/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://vuepress-theme-reco.recoluan.com/"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("推荐视频：\n"), _c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV17t41177cr/?spm_id_from=333.999.0.0&vd_source=709d452fc2b366c0679bdbc13f5e5db6",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://www.bilibili.com/video/BV17t41177cr"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV1vb411m7NY/?spm_id_from=333.788.recommend_more_video.0&vd_source=709d452fc2b366c0679bdbc13f5e5db6",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://www.bilibili.com/video/BV1vb411m7NY"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、安装环境准备"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、安装环境准备"
    }
  }, [_vm._v("#")]), _vm._v(" 一、安装环境准备")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-git的安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-git的安装"
    }
  }, [_vm._v("#")]), _vm._v(" 1. git的安装")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("Git是一个分布式版本控制系统，它可以追踪文件的变化并协助多人协作开发项目。最关键的是git有一个相当于‘时光倒流’的效果，可以回溯之前的项目版本。\n并且Git提供了丰富的命令行工具和图形化界面，可以方便地进行代码管理和版本控制。")])]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://git-scm.com/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("下载地址"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("至于后续的安装过程，可看一下下面这篇文章（很详细了）\n推荐文章：\n"), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/mukes/article/details/115693833",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://blog.csdn.net/mukes/article/details/115693833"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-nvm安装"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-nvm安装"
    }
  }, [_vm._v("#")]), _vm._v(" 2. nvm安装")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("个人推荐安装nvm，来实现不同版本node的管理与切换。")])]), _vm._v(" "), _c('p', [_vm._v("之前我也是直接下载了node,但是后面因为不同版本而导致的兼容性问题，所以就将原来的node卸载了，安装了nvm，来实现不同版本的node之间的转换。")]), _vm._v(" "), _c('p', [_vm._v("推荐文章：\n"), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/HuangsTing/article/details/113857145",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://blog.csdn.net/HuangsTing/article/details/113857145"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、开始创建"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、开始创建"
    }
  }, [_vm._v("#")]), _vm._v(" 二、开始创建")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-安装脚手架工具"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-安装脚手架工具"
    }
  }, [_vm._v("#")]), _vm._v(" 1.安装脚手架工具")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" @vuepress-reco/theme-cli "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-g")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#在这之前可以尝试先切换淘宝源来加速下载")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" config "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("set")]), _vm._v(" registry https://registry.npm.taobao.org \n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("4")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_2-创建项目"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-创建项目"
    }
  }, [_vm._v("#")]), _vm._v(" 2.创建项目")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("theme-cli init\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('p', [_vm._v("执行完上述命令后，命令行窗口出现配置信息：")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("? Whether to create a new directory? "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("Y/n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#是否新建一个目录，输入Y")]), _vm._v("\n? What"), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'s the name of new directory?   #为新的文件夹命名\n? What'")]), _vm._v("s the title of your project?   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#项目标题")]), _vm._v("\n? What"), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'s the description of your project?  #项目描述\n? What'")]), _vm._v("s the author's name?  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#作者姓名")]), _vm._v("\n? What style "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("do")]), _vm._v(" you want your home page to be?"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("The "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _vm._v(".x version is the beta version"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#选择首页风格，这里我选择blog")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("7")]), _c('br')])]), _c('p', [_vm._v("如图所示：\n"), _c('img', {
    attrs: {
      "src": "/docs_img/vuepress-reco%E4%B8%BB%E9%A2%98%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/3694347aeee34888b497fc58a8fd98a8.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-启动项目"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-启动项目"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 启动项目")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#进入项目目录")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" xingyun2 \n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#安装依赖")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#运行")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" run dev\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("8")]), _c('br')])]), _c('p', [_vm._v("访问命令行输出的IP地址，一般为http://localhost:8080/，即可访问博客了")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress-reco%E4%B8%BB%E9%A2%98%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/a4ba69c033a540e894e6551a52afd328.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("初始界面如图所示：")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress-reco%E4%B8%BB%E9%A2%98%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/6323c849d51841058c88112f4fe63c0f.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("之后则是通过修改配置文件来定制自己的博客。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、博客配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、博客配置"
    }
  }, [_vm._v("#")]), _vm._v(" 三、博客配置")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("我这里用的是vscode编辑器打开代码文件夹")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-初始的项目结构"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-初始的项目结构"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 初始的项目结构")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("├─ node_modules      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#这里存放着项目所需的依赖")]), _vm._v("\n├─ docs        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#该目录下存放编写的文档")]), _vm._v("\n│  └─ theme-reco \n│     ├─ api.md\n│     ├─ plugin.md\n│     ├─ theme.md\n│     └─ README.md\n├─ blogs            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#该目录下存放编写的博客文章")]), _vm._v("\n│     ├─ category1\n│     │  ├─ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2018")]), _vm._v("\n│     │  │  └─ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("121501")]), _vm._v(".md\n│     │  └─ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2019")]), _vm._v("\n│     │     └─ 092101.md\n│     ├─ category2\n│     │  ├─ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2016")]), _vm._v("\n│     │  │  └─ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("121501")]), _vm._v(".md\n│     │  └─ "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2017")]), _vm._v("\n│     │     └─ 092101.md\n│     └─ other\n│        └─ guide.md\n├─ .vuepress         "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#存放项目配置文件与静态资源")]), _vm._v("\n│   ├─ config.js    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#用于配置项目")]), _vm._v("\n│   └─ public       "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#该目录下存放网页中所需的静态资源")]), _vm._v("\n│     ├─ hero.png   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 首页大图")]), _vm._v("\n│     ├─ logo.png     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#网站logo")]), _vm._v("\n│     ├─ favicon.ico   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#网站图标")]), _vm._v("\n│     └─ avatar.png   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#头像")]), _vm._v("\n├─ package.json      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#依赖管理文件")]), _vm._v("\n└─ README.md         "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#存放着博客首页的内容")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("29")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_2-readme-md首页"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-readme-md首页"
    }
  }, [_vm._v("#")]), _vm._v(" 2. README.md首页")]), _vm._v(" "), _c('div', {
    staticClass: "language-javascript line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-javascript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("--")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("home")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("true")]), _vm._v("  #指定该页为首页\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("heroText")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" 星云文档   #居中显示的文本\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("tagline")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" 烦死了  #文本下面的字\n\n\n# heroImage"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("hero"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("png  \n# heroImageStyle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n#   maxWidth"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'600px'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n#   width"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'100%'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n# "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n# 背景图\n# bgImage"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/img/bg2.jpg'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("bgImageStyle")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("   #背景图片样式\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("height")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'400px'")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("isShowTitleInHome")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("false")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("actionText")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" Guide\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("actionLink")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("views"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("other"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("guide\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("features")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" Yesterday\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("details")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" 开发一款看着开心、写着顺手的 vuepress 博客主题\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" Today\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("details")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" title"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" Tomorrow\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("details")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" 希望更多的爱好者能够参与进来，帮助这个主题更好的成长\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("--")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("Font "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
      "id": "_3-配置config-js文件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-配置config-js文件"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 配置config.js文件")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("我的配置文件如下（为了使主配置文件简单点，故将导航栏、侧边栏、插件等配置分别放到了不同文件中，然后再在主配置文件引入")])]), _vm._v(" "), _c('div', {
    staticClass: "language-javascript line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-javascript"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" head "), _c('span', {
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
  }, [_vm._v("'./config/head'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" plugins "), _c('span', {
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
  }, [_vm._v("'./config/plugin'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" nav "), _c('span', {
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
  }, [_vm._v("'./config/nav'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("const")]), _vm._v(" sidebar "), _c('span', {
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
  }, [_vm._v("'./config/sidebar'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\nmodule"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("exports "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
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
  }, [_vm._v("\"星云文档\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("description")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"作为个人的项目文档\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("dest")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"public\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("port")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"8080\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//设置为中文")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("locales")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("'/'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("lang")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'zh-CN'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//禁用webpack的最小化优化。(我在生成静态文件时，如果不禁用会导致并不能生成正常的静态文件,或许是我的版本不兼容问题？)")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function-variable function"
    }
  }, [_vm._v("chainWebpack")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter"
    }
  }, [_vm._v("config")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=>")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("process"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("env"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token constant"
    }
  }, [_vm._v("NODE_ENV")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("===")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"production\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      config"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("optimization"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("minimize")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("false")]), _c('span', {
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
  }, [_vm._v("}")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("head")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" head"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("plugins")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" plugins"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//  插件")]), _vm._v("\n\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("markdown")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"lineNumbers\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("true")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  \n\n    \n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//主题")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("theme")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"reco\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("themeConfig")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("nav")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" nav"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//导航栏")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("sidebar")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v("sidebar"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 侧边栏")]), _vm._v("\n\n\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("type")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"blog\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("smoothScroll")]), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("blogConfig")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"category\"")]), _c('span', {
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
      "class": "token string-property property"
    }
  }, [_vm._v("\"location\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("4")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 在导航栏菜单中所占的位置")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"博客分类\"")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"tag\"")]), _c('span', {
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
      "class": "token string-property property"
    }
  }, [_vm._v("\"location\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"标签\"")]), _vm._v("\n      "), _c('span', {
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
  }, [_vm._v("logo")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/img/logo.png\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//logo设置")]), _vm._v("\n\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("search")]), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//搜索设置")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("searchMaxSuggestions")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("10")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//搜索提示数量")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("lastUpdated")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"更新时间：\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//最后更新时间")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("editLinks")]), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("editLinkText")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'在 GitHub 上编辑此页 ！'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("author")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"星云\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//作者")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("authorAvatar")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/img/logo.png\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//作者头像")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("recordLink")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'https://beian.miit.gov.cn/'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//备案号")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("startYear")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"2024\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" \n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//友情链接")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("friendLink")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n      "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v("'CSDN'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("desc")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'主要是一些学习编程的学习笔记'")]), _c('span', {
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
  }, [_vm._v("\"/img/星石传说.jpg\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("link")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'https://blog.csdn.net/2301_78630677?type=blog'")]), _vm._v("\n      "), _c('span', {
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
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n  \n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("81")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_4-配置侧边栏"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-配置侧边栏"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 配置侧边栏")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("如下图所示")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress-reco%E4%B8%BB%E9%A2%98%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/25838e706c5f4d17a6d3b88491b278c0.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("在侧边栏的配置中，其中config文件夹中的sidebar,js如下：")]), _vm._v(" "), _c('div', {
    staticClass: "language-javascript line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-javascript"
    }
  }, [_c('code', [_vm._v("module"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("exports "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//对多模块进行分类")]), _vm._v("\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("'/docs/guide/'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("'../../docs/guide/sidebar'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//第一个模块下面的侧边栏")]), _vm._v("\n\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("'/docs/vuepress搭建个人文档/'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("'../../docs/vuepress搭建个人文档/sidebar'")]), _c('span', {
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
      "class": "token comment"
    }
  }, [_vm._v("//第二个模块下面的侧边栏")]), _vm._v("\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("'/docs/以flask为后端的博客项目/'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("'../../docs/以flask为后端的博客项目/sidebar'")]), _c('span', {
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
      "class": "token comment"
    }
  }, [_vm._v("//第三个模块下面的侧边栏")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\t\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("9")]), _c('br')])]), _c('p', [_vm._v("以第二个模块下面的侧边栏的配置为例，sidebar.js文件：")]), _vm._v(" "), _c('div', {
    staticClass: "language-javascript line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-javascript"
    }
  }, [_c('code', [_vm._v("module"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("exports "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("title")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'vuepress搭建个人文档'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("collapsable")]), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("children")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" \n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("''")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("//默认是README.md文件")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'vuepress介绍'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'vuepress-reco主题个人博客搭建'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\t\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'vuepress博客部署'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\t"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\t"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("14")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_5-导航栏配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-导航栏配置"
    }
  }, [_vm._v("#")]), _vm._v(" 5.  导航栏配置")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("以数组的形式嵌套配置")])]), _vm._v(" "), _c('div', {
    staticClass: "language-javascript line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-javascript"
    }
  }, [_c('code', [_vm._v("module"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("exports "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"首页\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"icon\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"reco-home\"")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"时间线\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/timeline/\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"icon\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"reco-date\"")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"项目文档\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"icon\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"reco-blog\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"items\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"介绍\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/docs/guide/\"")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"vuepress搭建个人文档\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/docs/vuepress搭建个人文档/\"")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"以flask为后端的博客项目\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/docs/以flask为后端的博客项目/\"")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        \n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"关于项目\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"icon\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"reco-message\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"items\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"GitHub\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"https://github.com/xingyun-dev\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"icon\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"reco-github\"")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// 图标")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Gitee'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" \n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'https://gitee.com/wht050106'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" \n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"icon\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'reco-mayun'")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("{")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"text\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"留言板\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("// \"icon\": \"\",")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-property property"
    }
  }, [_vm._v("\"link\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/docs/留言板.md\"")]), _c('span', {
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
  }, [_vm._v(",")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("54")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_6-配置头部文件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-配置头部文件"
    }
  }, [_vm._v("#")]), _vm._v(" 6. 配置头部文件")]), _vm._v(" "), _c('div', {
    staticClass: "language-javascript line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-javascript"
    }
  }, [_c('code', [_vm._v("module"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("exports "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'link'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("rel")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'icon'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("href")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/img/favicon.ico'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'meta'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("'viewport'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("content")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'width=device-width,initial-scale=1,user-scalable=no'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'meta'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("'keywords'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("content")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'星云文档,vuepress,自建博客'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'meta'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("'description'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("content")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'单纯的个人项目记录文档'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"meta\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
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
  }, [_vm._v("\"robots\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("content")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"all\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"meta\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
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
  }, [_vm._v("\"author\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("content")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(":")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"星云\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'link'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token literal-property property"
    }
  }, [_vm._v("rel")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
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
      "class": "token literal-property property"
    }
  }, [_vm._v("href")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
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
  }, [_vm._v("}")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("10")]), _c('br')])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "总结"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#总结"
    }
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文主要介绍了vuepress的一个主题vuepress-theme-reco，并介绍了使用该主题进行的个人博客搭建。下一篇文章则将介绍在不使用服务器的情况下，借助github、gitee来部署该个人博客。")]), _vm._v(" "), _c('p', [_vm._v("-- 2024-1-13")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/vuepress-reco主题个人博客搭建.md?vue&type=template&id=bce2343c

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/vuepress-reco主题个人博客搭建.md

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

/* harmony default export */ var vuepress_reco_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);