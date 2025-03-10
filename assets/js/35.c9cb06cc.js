(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/以flask为后端的博客项目/flask项目的部署.md?vue&type=template&id=0391821a
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
  }), _c('p', [_vm._v("前面的众多博客，已经大致说明了项目的整体逻辑，这篇博客则主要讲述flask项目如何从开发环境到部署上线（以我个人为例）")])]), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("前面的众多博客，已经大致说明了项目的整体逻辑，这篇博客则主要讲述flask项目如何从开发环境到部署上线（以我个人为例）")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_1-准备服务器"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-准备服务器"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 准备服务器")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("项目开发好后，就必然需要部署在服务器上，然后还要经历备案等繁琐的操作。")])]), _vm._v(" "), _c('p', [_vm._v("这里就不赘述了，\n以腾讯云的轻量应用服务器为例，具体流程官方网站都有。")]), _vm._v(" "), _c('p', [_vm._v("参考文章"), _c('a', {
    attrs: {
      "href": "https://zhuanlan.zhihu.com/p/493122610#:~:text=%E8%85%BE%E8%AE%AF%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85Web%E7%BD%91%E7%AB%99%E7%8E%AF%E5%A2%83%201%20%E4%B8%80%EF%BC%9ASSH%E8%BF%9E%E6%8E%A5%E8%85%BE%E8%AE%AF%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%202%20%E4%BA%8C%EF%BC%9A%E6%89%A7%E8%A1%8C%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E5%AE%89%E8%A3%85%E5%91%BD%E4%BB%A4%203%20%E4%B8%89%EF%BC%9A%E5%BC%80%E6%94%BE%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%89%80%E9%9C%80%E7%AB%AF%E5%8F%A3%E5%A6%828888%204,Web%E7%8E%AF%E5%A2%83%206%20%E5%85%AD%EF%BC%9A%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%B7%BB%E5%8A%A0%E7%AB%99%E7%82%B9%207%20%E4%B8%83%EF%BC%9A%E4%B8%8B%E8%BD%BDWordPress%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F%208%20%E5%85%AB%EF%BC%9A%E4%B8%8A%E4%BC%A0%E7%BD%91%E7%AB%99%E7%A8%8B%E5%BA%8F%E5%88%B0%E5%AE%9D%E5%A1%94%E7%AB%99%E7%82%B9%E6%A0%B9%E7%9B%AE%E5%BD%95%20%E6%9B%B4%E5%A4%9A%E9%A1%B9%E7%9B%AE",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("使用腾讯云服务器搭建网站全流程"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_2-宝塔面板部署"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-宝塔面板部署"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 宝塔面板部署")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("我个人使用的是宝塔面板部署，")])]), _vm._v(" "), _c('p', [_vm._v("因为我租的云服务器有对应的宝塔面板，所以我没有安装，如果有需要，也可以安装宝塔面板")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/c353279b270a453faf1bc80eb6e5d168.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("进入宝塔面板后")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/0435df4233c44ccb86d197824c4cce7f.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n可以点击网站  ：  添加python项目,将你的项目上传到文件\n"), _c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/0aeb4ba9bce1485b847219377a681154.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/615331f1fcbf4d97a8472f53e7dc28b5.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("然后指定项目路径等配置信息")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/b6f0c26bfb244809be032dd158b15d97.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n打开设置查看配置信息：")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/41a3259dc01c4a878109ab193b44159b.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("如果显示未启动，可以查看项目日志中的报错信息，去修改（或许是你的模块未安装好、或许是代码有问题、或许是你的开发环境没有换为生产环境等）")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_3-gunicorn配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-gunicorn配置"
    }
  }, [_vm._v("#")]), _vm._v(" 3. gunicorn配置")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/57e6831f85674b05b2f119992bb66f62.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 项目目录")]), _vm._v("\nchdir "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/www/xingshixiaowo'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 指定进程数")]), _vm._v("\nworkers "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("4")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 指定每个进程开启的线程数")]), _vm._v("\nthreads "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#启动用户")]), _vm._v("\nuser "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'www'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 启动模式")]), _vm._v("\nworker_class "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'sync'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 绑定的ip与端口")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("bind")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'0.0.0.0:80'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 设置进程文件目录（用于停止服务和重启服务，请勿删除）")]), _vm._v("\npidfile "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/www/xingshixiaowo/gunicorn.pid'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 设置访问日志和错误信息日志路径")]), _vm._v("\naccesslog "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/www/wwwlogs/python/xingshixiaowo/gunicorn_acess.log'")]), _vm._v("\nerrorlog "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'/www/wwwlogs/python/xingshixiaowo/gunicorn_error.log'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# debug:调试级别，记录的信息最多；")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# info:普通级别；")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# warning:警告消息；")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# error:错误消息；")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# critical:严重错误消息；")]), _vm._v("\nloglevel "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'critical'")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 代码发生变化是否自动重启")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token assign-left variable"
    }
  }, [_vm._v("reload")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("True\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 自定义设置项请写到该处")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 最好以上面相同的格式 <注释 + 换行 + key = value> 进行书写， ")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# PS: gunicorn 的配置文件是python扩展形式，即\".py\"文件，需要注意遵从python语法，")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 如：loglevel的等级是字符串作为配置的，需要用引号包裹起来")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("40")]), _c('br')])]), _c('h2', {
    attrs: {
      "id": "_4-nginx配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-nginx配置"
    }
  }, [_vm._v("#")]), _vm._v(" 4. nginx配置")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("nginx是一个高性能的 HTTP服务器")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_3-1-进入软件商店-安装nginx"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-1-进入软件商店-安装nginx"
    }
  }, [_vm._v("#")]), _vm._v(" 3.1. 进入软件商店，安装nginx")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/1819bfff8c3f476b908c7f6f003f3b74.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("  \n  \n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# HTTPS server")]), _vm._v("\n  server "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#listen 443 ssl;  #为什么")]), _vm._v("\n  listen "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("443")]), _vm._v("\n\n  server_name www.whtuu.cn"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  root /www/xingshixiaowo"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  index index.html index.htm"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n ssl_certificate whtuu.cn_bundle.crt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n ssl_certificate_key whtuu.cn.key"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  ssl_session_timeout 5m"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!")]), _vm._v("NULL:"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!")]), _vm._v("aNULL:"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!")]), _vm._v("MD5:"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!")]), _vm._v("ADH:"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("!")]), _vm._v("RC4"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#使用此加密套件。")]), _vm._v("\n  ssl_protocols TLSv1 TLSv1.1 TLSv1.2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#使用该协议进行配置。")]), _vm._v("\n  ssl_prefer_server_ciphers on"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n   include /etc/nginx/default.d/*.conf"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n \n\n  location / "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n      add_header Content-Security-Policy upgrade-insecure-requests"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#这里这个就是处理https反向代理http时候静态资源的关键")]), _vm._v("\n      proxy_set_header HOST "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$host")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n      proxy_set_header X-Forwarded-Proto "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$scheme")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n      proxy_set_header X-Real-IP "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$remote_addr")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n      proxy_set_header X-Forwarded-For "), _c('span', {
    pre: true,
    attrs: {
      "class": "token variable"
    }
  }, [_vm._v("$proxy_add_x_forwarded_for")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n      proxy_pass http://127.0.0.1:80"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("       \n      \n    \n  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n  \n        location ~ .*"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("."), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("gif"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("jpg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("jpeg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("png"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("bmp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("swf"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("$\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            expires      30d"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n\n        location ~ .*"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("."), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("js"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("css"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("?$\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            expires      12h"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n        location ~ /"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v(".\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            deny all"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n \n "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n \n\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("51")]), _c('br')])]), _c('p', [_vm._v("我这里配置有点问题，我发现如果我配置了SSL证书，即https服务，那么原来的代理功能就失效了，无法返回正确的静态文件。")]), _vm._v(" "), _c('p', [_vm._v("如果我把下面的代码注释掉，开启了https服务的网站就不会没有样式等静态文件（可是代理似乎就失效了）")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("   location ~ .*"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("."), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("gif"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("jpg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("jpeg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("png"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("bmp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("swf"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("$\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            expires      30d"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n\n        location ~ .*"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("."), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("js"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("css"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("?$\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            expires      12h"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n        location ~ /"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v(".\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            deny all"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
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
  }, [_vm._v("15")]), _c('br')])]), _c('p', [_vm._v("这是为什么呢，十分疑惑。请大佬帮我看一下，指出问题，十分感谢。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_5-ssl证书配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-ssl证书配置"
    }
  }, [_vm._v("#")]), _vm._v(" 5. SSL证书配置")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("腾讯云是有免费的ssl证书的")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/d64ec999fc3d42c5ad9e1d540fb0fa58.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("可以申请证书，之后下载证书：")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/65189323d8ba45209ac612b31c754302.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n我下载的是nginx的,解压后得到安全证书：\n"), _c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/440a1826a9b54c989fea237bcb7e0487.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("为面板配置SSL证书：")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/e2c215e736ef4d14b73410834b6bf90f.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("将.Key文件和.PEM文件分别复制进去即可：\n"), _c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/2e29c2e627ce40b4bbbca90c49110254.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n如果没有生效（建议重启一下面板）")]), _vm._v(" "), _c('p', [_vm._v("之后就是为网站配置SSL证书了，同理：\n"), _c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/f3cadd48994b4e2f8e80f2b863c43003.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("配置完成后，对应的nginx配置也要修改，但是我也不太清除，想要求助有没有大佬，帮我看一下，为何无法正确代理。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_6-数据库的配置"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_6-数据库的配置"
    }
  }, [_vm._v("#")]), _vm._v(" 6. 数据库的配置")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("我使用的是宝塔面板软件商店中的一个sql管理器 phpmyadmin")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/b73981e8f5a04ab98dc7da59e8500776.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n在数据库中添加数据库，我添加的是Mysql数据库：\n"), _c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/b86dde47c56b4c558c922e235baf28a8.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("然后，检查一下nginx的配置文件，确保有这些配置（同时监听的端口号要在面板的安全组中、以及服务器控制台的防火墙中开放）")]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_vm._v(" server "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n   listen "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("888")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n   server_name phpmyadmin"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n   index index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("html index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("htm index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("php"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n   root "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("www"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("server"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("phpmyadmin"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n   location "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("~")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("tmp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("403")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n   include enable"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v("php"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("conf"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n   \n     location "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("~")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v("\\"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("gif"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("jpg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("jpeg"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("png"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("bmp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("swf"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("$\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            expires      30d"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n\n        location "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("~")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v("\\"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("js"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("|")]), _vm._v("css"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("?$\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            expires      12h"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n        location "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("~")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v("\\"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("\n            deny "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("all")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(";")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n\n \n   \n   \n "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("       \n        \n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("31")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/5fc9190ea47948ac8dc323c201496ce4.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/8aa99b0c3f2046ed970bf75db7834051.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("然后，回到数据库，点击管理即可，然后输入你的用户名和密码，即可进入")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/5d7ae436cad648838ef1b346aa8e1e5f.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/flask%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%83%A8%E7%BD%B2/2579b02f517c458e9990fc3c422f8972.png",
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
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("总的来说，我是使用gunicorn+nginx来部署的flask项目。")]), _vm._v(" "), _c('p', [_vm._v("--2024-3-22")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/以flask为后端的博客项目/flask项目的部署.md?vue&type=template&id=0391821a

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/以flask为后端的博客项目/flask项目的部署.md

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

/* harmony default export */ var flask_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);