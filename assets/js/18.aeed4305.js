(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/vuepress搭建个人文档/vuepress博客部署.md?vue&type=template&id=f34a07e0
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
  }), _c('p', [_vm._v("将vuepress-reco主题个人博客搭建好之后，要将此项目部署，该文档主要介绍将博客部署到github上")])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "前言"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#前言"
    }
  }, [_vm._v("#")]), _vm._v(" 前言")]), _vm._v(" "), _c('p', [_vm._v("前文将vuepress-reco主题个人博客搭建好之后，要将此项目部署，本文主要介绍将博客部署到github上，（因为我的gitee还未实名认证，所以也不好展示）。")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "一、事先准备"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、事先准备"
    }
  }, [_vm._v("#")]), _vm._v(" 一、事先准备")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-github注册"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-github注册"
    }
  }, [_vm._v("#")]), _vm._v(" 1. github注册")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("如果还未进入github，可以参考下面这篇文章，注册github账号")])]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://blog.csdn.net/m0_67906358/article/details/128808210",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://blog.csdn.net/m0_67906358/article/details/128808210"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-配置ssh"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-配置ssh"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 配置SSH")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("首先，检查本地主机是否已经存在ssh key")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" ~/.ssh\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("ls")]), _vm._v("\n//看是否存在 id_ed25519 和 id_ed25519.pub文件，如果存在，说明已经有SSH Key\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/db26f0df737c49eabbd0260ed7225071.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("如果不存在，则要生成ssh key")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_vm._v("ssh-keygen "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-t")]), _vm._v(" ed25519 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-C")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"<your github email>\"")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -C后面的是自定义的密钥注释/标签，这里一般输入自己的邮箱")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -----------------------------------------------")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 运行上述命令，会询问你是否自定义密钥名字/路径，以及是否需要给该密钥添加密码，敲回车是跳过")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Generating public/private ed25519 key pair.")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Enter file in which to save the key (/home/xxx/.ssh/id_ed25519): github_auth")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Enter passphrase (empty for no passphrase): ")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Enter same passphrase again: ")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Your identification has been saved in github_auth.")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# Your public key has been saved in github_auth.pub.")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# The key fingerprint is: xxx")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# The key's randomart image is: xxx")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -----------------------------------------------")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# ed25519是目前最安全、加解密速度最快的key类型。")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 但有些旧版本的SSH还不支持ed25519算法，这时候可以用rsa算法。")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 因此，有ed25519就用ed25519，没有就用rsa。")]), _vm._v("\nssh-keygen "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-t")]), _vm._v(" rsa "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-C")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"<your github email>\"")]), _vm._v("\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("19")]), _c('br')])]), _c('blockquote', [_c('p', [_vm._v("获取ssh key公钥内容  (id_ed25519.pub)")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" ~/.ssh\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("cat")]), _vm._v(" id_ed25519.pub\n\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br')])]), _c('blockquote', [_c('p', [_vm._v("复制公钥后，在Github账号上添加公钥")])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("进入Settings设置")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/683e59b946c6424e9733383b40bd4d60.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('ol', {
    attrs: {
      "start": "2"
    }
  }, [_c('li', [_vm._v("点击’New SSH Key'")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/c3e6b238a3124f35bb55d9a7a5406e61.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n3. 添加ssh key，把刚才复制的内容粘贴上去保存即可\n"), _c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/5e1353de7e284ecfbfcab46bd85ed373.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("最后验证是否设置成功")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("ssh")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-T")]), _vm._v(" git@github.com\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('p', [_vm._v("显示如下信息表明设置成功")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/daf6685e398b45c9b66061827066bed8.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n注意：在这里因为我前面生成SSH密钥时添加了密码，所以这里我先输入了密码（大家也可以不添加)。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "二、部署到github"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、部署到github"
    }
  }, [_vm._v("#")]), _vm._v(" 二、部署到github")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_1-新建仓库"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_1-新建仓库"
    }
  }, [_vm._v("#")]), _vm._v(" 1. 新建仓库")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("博客就算是正式的做好了，接下来我们部署到免费的 Github Pages 上，首先在Github上新建一个仓库\n项目名称为：<你的用户名>.github.io")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/1947d22984524bbcaf4b19d2129a7f73.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "_2-上传项目代码"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-上传项目代码"
    }
  }, [_vm._v("#")]), _vm._v(" 2. 上传项目代码")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("首先对项目文件进行打包，形成一个放置静态资源的文件夹dist（路径和名字可在config.js配置文件中自定义）")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("npm")]), _vm._v(" run build\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/1f1c131ebde04cdeb5a3687e05971a79.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/cc155ccaad954937b4fe3ff3b2307910.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("然后就是提交该dist文件")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("#进入静态文件目录")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" ./dist\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#上传到你的仓库")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" init\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-A")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" commit "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-m")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'first-commit'")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" branch "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-M")]), _vm._v(" master\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" push "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-f")]), _vm._v("  git@github.com:"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("你的用户名"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v("/"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<")]), _vm._v("仓库名称"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(".git master\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("10")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_3-deploy-sh"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_3-deploy-sh"
    }
  }, [_vm._v("#")]), _vm._v(" 3. deploy.sh")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("我们可以在项目 xingyun3 目录下建立一个脚本文件：deploy.sh，以便日后的提交修改\n注意修改一下对应的用户名和仓库名：")])]), _vm._v(" "), _c('div', {
    staticClass: "language-bash line-numbers-mode"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-bash"
    }
  }, [_c('code', [_c('span', {
    pre: true,
    attrs: {
      "class": "token shebang important"
    }
  }, [_vm._v("#!/usr/bin/env sh")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 确保脚本抛出遇到的错误")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("set")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-e")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 生成静态文件")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" run build\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" ./dist  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#进入静态文件目录")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" init\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("add")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-A")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" commit "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-m")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'--deploy'")]), _vm._v("\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# git push -f git@gitee.com:wht050106/vuepress-blog.git master:gh-pages")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("git")]), _vm._v(" push "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-f")]), _vm._v("  git@github.com:xingyun-dev/xingyun-dev.github.io.git master\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin class-name"
    }
  }, [_vm._v("cd")]), _vm._v(" -\n\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("21")]), _c('br')])]), _c('blockquote', [_c('p', [_vm._v("可以在package.json文件中，添加\"deploy\": \"bash deploy.sh\"，以便调用")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/3b2338633c414983a9fe5f41eb21925e.png",
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
  }, [_vm._v("#所以运行脚本为：")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("npm")]), _vm._v(" run deploy\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br')])]), _c('h3', {
    attrs: {
      "id": "_4-部署成功"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-部署成功"
    }
  }, [_vm._v("#")]), _vm._v(" 4. 部署成功")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("成功上传代码至仓库后，要在GitHub  page 中配置页面")])]), _vm._v(" "), _c('p', [_vm._v("点击设置\n"), _c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/de409e7004f640d6aaba27d973765922.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v("\n在”Pages'中，可以获得最终的部署地址\n"), _c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/4e34188004ab44f7b6c57b69e1a99a05.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("链接： "), _c('a', {
    attrs: {
      "href": "https://xingyun-dev.github.io/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://xingyun-dev.github.io/"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/vuepress%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2/63ea768d4f68409ca64e112112f37244.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "三、部署到gitee-要实名认证"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、部署到gitee-要实名认证"
    }
  }, [_vm._v("#")]), _vm._v(" 三、部署到gitee （要实名认证）")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("与github的部署类似，只不过需要进行实名认证，但是在国内访问比较快速。")])]), _vm._v(" "), _c('p', [_vm._v("参考文章：\n"), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/qq_39367226/article/details/107449816?ops_request_misc=&request_id=&biz_id=102&utm_term=vuepress-reco%E9%83%A8%E7%BD%B2%E5%88%B0gitee&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-2-107449816.142%5Ev99%5Epc_search_result_base1&spm=1018.2226.3001.4187",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("\nhttps://blog.csdn.net/qq_39367226/article/details/107449816?"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/vuepress博客部署.md?vue&type=template&id=f34a07e0

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/vuepress搭建个人文档/vuepress博客部署.md

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