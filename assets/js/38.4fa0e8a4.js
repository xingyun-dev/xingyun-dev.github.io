(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/以flask为后端的博客项目/星云小窝项目-项目启动.md?vue&type=template&id=17353840
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
  }), _c('p', [_vm._v("上一篇博客大致介绍了星云小窝这个网站，这篇博客将介绍一下如何启动它。")])]), _c('hr'), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("上一篇博客大致介绍了星云小窝这个网站，这篇博客将介绍一下如何启动它。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_1-从github从下载它"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-从github从下载它"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 从Github从下载它")]), _vm._v(" "), _c('p', [_vm._v("我已经把源码发布在github上，有需要可自取：")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://github.com/xingyun-dev/xingyun-xiaowo/tree/main",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("xingyun-dev/xingyun-xiaowo"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/b846f1689e7944e9b6a418ad0a4e10bc.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("可以选择直接下载压缩包或用git拉取")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_2-使用编辑器打开-以pycharm为例"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-使用编辑器打开-以pycharm为例"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 使用编辑器打开（以pycharm为例）")]), _vm._v(" "), _c('p', [_vm._v("（我的python版本是python3.11)")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/f1b0b610a81f4378bc87386c80270b88.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-1-下载所需要的模块"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-1-下载所需要的模块"
    }
  }, [_vm._v("#")]), _vm._v(" 2.1. 下载所需要的模块")]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("pip "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-i")]), _vm._v(" https://pypi.tuna.tsinghua.edu.cn/simple "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-r")]), _vm._v(" requirements.txt\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_2-2-配置mysql数据库"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-2-配置mysql数据库"
    }
  }, [_vm._v("#")]), _vm._v(" 2.2.  配置mysql数据库")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("补充，如何备份mysql数据库 （同时其sql文件我也放置于github上了）")])]), _vm._v(" "), _c('p', [_vm._v("参考文章   "), _c('a', {
    attrs: {
      "href": "https://zhuanlan.zhihu.com/p/269983875",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://zhuanlan.zhihu.com/p/269983875"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# flaskvue 是数据库名")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 导出所有数据库")]), _vm._v("\nmysqldump "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-uroot")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--host")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("127.0")]), _vm._v(".0.1 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--port")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3306")]), _vm._v(" --all-databases "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v("/tmp/full.sql\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 完整导出指定的数据库. 包括建库语句、表结构、数据")]), _vm._v("\nmysqldump "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-uroot")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--host")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("127.0")]), _vm._v(".0.1 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--port")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3306")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--databases")]), _vm._v(" flaskvue "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" /tmp/flaskvue.sql\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 只导出数据库表结构，不包含数据")]), _vm._v("\nmysqldump "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-uroot")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" --no-data "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--databases")]), _vm._v(" flaskvue "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" /tmp/flaskvue.sql\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 只导出数据，而不添加CREATE TABLE语句")]), _vm._v("\nmysqldump "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-uroot")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" --no-create-info "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--databases")]), _vm._v(" flaskvue "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" /tmp/flaskvue.sql\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 导出school数据库中指定表的数据和结构")]), _vm._v("\nmysqldump "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-uroot")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" flaskvue "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--tables")]), _vm._v(" sc_admin "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("users")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" /tmp/flaskvue.sql\nmysqldump "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-uroot")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" flaskvue sc_admin "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("users")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" /tmp/flaskvue.sql\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 恢复导出数据")]), _vm._v("\nmysql "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-u")]), _vm._v(" username "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-p")]), _vm._v(" flaskvue "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v(" /tmp/flaskvue.sql   "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 注意,数据库必须已经存在")]), _vm._v("\nmysql"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("source")]), _vm._v(" /tmp/maotiweb.sql     "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 确认sql文件中是否有建库语句")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("22")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/3377150822c6465baae8a7a6cbf86900.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("有点问题，我发现导出的中文数据有些乱码；")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v("所以我直接用MySQL Workbench导出")]), _vm._v("\n点击Sever 中的 “Data Export\"")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/1dd6af4f457b4e56a49ebb669c1fd168.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/2ce1563cd803476bb2f796836efa70db.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/688fa0bd4313409a954fe8f653d3eff0.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("打开文件后，发现是正确编码的\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/ef96fe63354d4bc7b2a954ac8ed1e448.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("之后就是新建一个数据库，将这个建表语句文件导入，创建表格")])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-3-配置qq邮箱发送验证码"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-3-配置qq邮箱发送验证码"
    }
  }, [_vm._v("#")]), _vm._v(" 2.3.  配置QQ邮箱发送验证码")]), _vm._v(" "), _c('p', [_vm._v("这里就不细讲了，网上也有许多教程。\n参考：\n"), _c('a', {
    attrs: {
      "href": "https://zhuanlan.zhihu.com/p/664771819",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://zhuanlan.zhihu.com/p/664771819"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-4-修改代码"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-4-修改代码"
    }
  }, [_vm._v("#")]), _vm._v(" 2.4. 修改代码")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("连接数据库")])]), _vm._v(" "), _c('div', {
    staticClass: "language-python line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-python"
    }
  }, [_c('code', [_vm._v("app "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" Flask"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("__name__"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" static_url_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"/\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" static_folder"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"resource\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" template_folder"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"template\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\napp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("config"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'SECRET_KEY'")]), _c('span', {
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
      "class": "token string"
    }
  }, [_vm._v("'3jhbhjkhkhj60gjgjhg3hjkkh13kj200501061538ghfhgkjg'")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# app.config['SECRET_KEY'] = os.urandom(24)")]), _vm._v("\napp"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("config"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'SQLALCHEMY_DATABASE_URI'")]), _c('span', {
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
      "class": "token string"
    }
  }, [_vm._v("'mysql+pymysql://数据库的账号:密码@localhost:3306/数据库名?charset=utf8mb4'")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("4")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/e83c0b649aa94731a41c09e57389c515.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("连接邮箱")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 发送邮件验证码")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("from")]), _vm._v(" smtplib "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" SMTP_SSL\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("from")]), _vm._v(" email"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("mime"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("text "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" MIMEText\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("from")]), _vm._v(" email"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("header "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" Header\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 发送QQ邮箱验证码,参数为收件箱地址和随机生成的验证码")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("send_email")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("receiver"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" ecode"), _c('span', {
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
  }, [_vm._v("# 邮箱账号和发件者签名")]), _vm._v("\n    sender "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'xxx <你的邮箱账号>'")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 定义发送邮件的内容,支持HTML标签和CSS样式")]), _vm._v("\n    content "), _c('span', {
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
  }, [_vm._v("f\"<br/>欢迎来到星云小窝，您的邮箱验证码为：<span style='color:red;font-size:20px;'>")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("ecode"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("</span>，请在4分钟内填写完成注册，如非本人操作，请忽略此邮件。\"")])]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 实例化邮件对象,并指定邮件的关键信息。")]), _vm._v("\n    message "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" MIMEText"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("content"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'html'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'utf-8'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 指定邮件的标题,同样使用utf-8编码")]), _vm._v("\n    message"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Subject'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" Header"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'星云小窝注册验证码'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'utf-8'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    message"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'From'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" sender  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 指定发件人信息")]), _vm._v("\n    message"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'To'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" receiver  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 指定收件人邮箱地址")]), _vm._v("\n\n    smtpObj "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" SMTP_SSL"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'smtp.qq.com'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 建立与QQ邮箱服务器的SSL连接")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 通过邮箱账号和获取到的授权码登录邮箱服务器")]), _vm._v("\n    smtpObj"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("login"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'你的邮箱账号'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'你的授权码'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 指定发件人、收件人和邮件内容")]), _vm._v("\n    smtpObj"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("sendmail"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("sender"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" receiver"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("message"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    smtpObj"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("quit"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 生成6位随机字符串作为邮箱验证码")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("gen_email_code")]), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" random"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("sample"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("string"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("ascii_letters "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" string"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("digits"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("6")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("''")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("join"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("str")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("34")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/7c98b165d35d467388f6290b2ddb1404.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "_3-启动"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-启动"
    }
  }, [_vm._v("#")]), _vm._v(" 3. 启动")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("打开终端")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("python ."), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("\\")]), _vm._v("wsgi.py\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/65e029d6832d470c8bf74ad889107717.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("然后就能在本地打开指定端口号的网站了")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E6%98%9F%E4%BA%91%E5%B0%8F%E7%AA%9D%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A82/55f88904253144d08c0ef8f73540ffb6.png",
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
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("ok.至此项目就正常启动了，你也可以在此基础上再度创作，同时欢迎提出修改意见。")]), _vm._v(" "), _c('p', [_vm._v("天远楼台横北固，夜深灯火见扬州。")]), _vm._v(" "), _c('p', [_vm._v("--2024-3-22")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/以flask为后端的博客项目/星云小窝项目-项目启动.md?vue&type=template&id=17353840

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/以flask为后端的博客项目/星云小窝项目-项目启动.md

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