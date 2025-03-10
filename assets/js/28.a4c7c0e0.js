(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"29bf0584-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/三叶青图像识别项目/【7】树莓派图像分类部署.md?vue&type=template&id=a4d0f36a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('hr'), _vm._v(" "), _c('div', {
    staticClass: "custom-block tip"
  }, [_c('p', {
    staticClass: "title"
  }), _c('p', [_vm._v("树莓派学习笔记，树莓派图像分类部署")])]), _c('blockquote', [_c('p', [_vm._v("【7】树莓派图像分类部署")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "树莓派学习笔记"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#树莓派学习笔记"
    }
  }, [_vm._v("#")]), _vm._v(" 树莓派学习笔记")]), _vm._v(" "), _c('p', [_vm._v("2024/6/15")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("参考文档\n"), _c('a', {
    attrs: {
      "href": "https://doc.itprojects.cn/0007.zhishi.raspberrypi/02.doc/index.html#/README",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("树莓派快速上手说明"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("参考视频 "), _c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV1vK411U7Br?p=4&vd_source=e34f9443a7e5ae37b9a8faac238fc132",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Python+树莓派+Linux 快速上手"), _c('OutboundLink')], 1), _vm._v("；\n"), _c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV16U4y1879Q/?spm_id_from=333.337",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("树莓派教程十分钟玩转系列入门篇"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "一、树莓派介绍"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#一、树莓派介绍"
    }
  }, [_vm._v("#")]), _vm._v(" 一、树莓派介绍")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("树莓派（Raspberry Pi）是一款信用卡大小的单板计算机. "), _c('a', {
    attrs: {
      "href": "https://baike.baidu.com/item/%E6%A0%91%E8%8E%93%E6%B4%BE/80427",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("百度百科介绍"), _c('OutboundLink')], 1), _vm._v("、\n"), _c('a', {
    attrs: {
      "href": "https://www.raspberrypi.org",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("官网"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("树莓派开发板")]), _vm._v(" "), _c('li', [_vm._v("安装Linux系统")]), _vm._v(" "), _c('li', [_vm._v("链接设备\n通过HDMI链接显示器\nUSB键盘\nUSB鼠标")]), _vm._v(" "), _c('li', [_vm._v("用Python编写控制代码")])]), _vm._v(" "), _c('p', [_vm._v("我使用的是树莓派4B 4GB主板,组装效果如图所示（包含CSI摄像头模块、树莓派主板、USB键盘鼠标、7寸显示器）")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/e43b59c0db9446df97b608841bf9e5eb.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "二、烧录系统"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#二、烧录系统"
    }
  }, [_vm._v("#")]), _vm._v(" 二、烧录系统")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将树莓派系统，烧录到SD卡中，然后将SD插到树莓派，连接上HDMI就能看到开机画面")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "_2-1-准备"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-1-准备"
    }
  }, [_vm._v("#")]), _vm._v(" 2.1. 准备")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://doc.itprojects.cn/0007.zhishi.raspberrypi/01.download/win32diskimager-1.0.0-install.exe",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("烧录工具下载"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://www.raspberrypi.com/software/operating-systems/#raspberry-pi-os-64-bit",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("树莓派系统下载网站"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("【树莓派64位版本】如果用到pytorch等AI相关功能，选择此版本")])]), _vm._v(" "), _c('p', [_vm._v("链接："), _c('a', {
    attrs: {
      "href": "https://pan.baidu.com/s/1mTBoVgr5Tg5ORQumAV0_1g?pwd=1wht",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://pan.baidu.com/s/1mTBoVgr5Tg5ORQumAV0_1g?pwd=1wht "), _c('OutboundLink')], 1), _vm._v("\n提取码：1wht\n--来自百度网盘超级会员V5的分享")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "_2-2-烧录"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_2-2-烧录"
    }
  }, [_vm._v("#")]), _vm._v(" 2.2. 烧录")]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("首先将SD卡插入电脑中，打开win32diskimager，选择要烧录的SD卡，选择要烧录的镜像文件，点击写入，等待写入完成。\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/8dd379fd6b434c209bf6c0c9927f3e9c.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/8bd36f499a5349578a4c012203d96b80.png",
      "alt": "在这里插入图片描述"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("写入完成后，取出SD卡，插入树莓派\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/82c80b785f96491ea09bb86ef95f1638.png",
      "alt": "在这里插入图片描述"
    }
  })])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "三、运行树莓派"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#三、运行树莓派"
    }
  }, [_vm._v("#")]), _vm._v(" 三、运行树莓派")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("将SD卡插入树莓派后，连接上HDMI，USB键盘鼠标，电源\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/f434688ffbce4c4cb4cad8ed0dfd25ac.png",
      "alt": "在这里插入图片描述"
    }
  })])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/6bf62ff703e0441f99e9f7c868950ea7.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('ol', {
    attrs: {
      "start": "2"
    }
  }, [_c('li', [_vm._v("开机，等待开机完成，进入系统（若是第一次开机，要设置用户名密码等）\n"), _c('a', {
    attrs: {
      "href": "https://doc.itprojects.cn/0007.zhishi.raspberrypi/02.doc/index.html#/a05.loadsystem",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("参考文章：第一次运行树莓派"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "四、vnc远程树莓派"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#四、vnc远程树莓派"
    }
  }, [_vm._v("#")]), _vm._v(" 四、VNC远程树莓派")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("为了在电脑上可以远程控制树莓派屏幕显示的内容，便于开发调试，我们可以启用VNC远程桌面功能")])]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "_4-1-在电脑上安装vnc-viewer"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-1-在电脑上安装vnc-viewer"
    }
  }, [_vm._v("#")]), _vm._v(" 4.1. 在电脑上安装VNC Viewer")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://doc.itprojects.cn/0007.zhishi.raspberrypi/01.download/VNC-Viewer-6.22.826-Windows.exe",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("点击下载"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "_4-2-树莓派上开启vnc功能"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-2-树莓派上开启vnc功能"
    }
  }, [_vm._v("#")]), _vm._v(" 4.2. 树莓派上开启VNC功能")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://doc.itprojects.cn/0007.zhishi.raspberrypi/02.doc/index.html#/a06.vnc.md",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("开启VNC详细步骤"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("树莓派连接电脑移动热点：\n"), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/weixin_43529394/article/details/123267629",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("如何使用树莓派连接电脑无线网络热点并查看树莓派ip地址"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_vm._v("输入树莓派ip地址，回车；之后输入之前设置的用户名密码，点击OK，即可进入树莓派桌面\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/69d5b1aad04e4f48b3c9cacbed53d4ff.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/87c82e410731446a86d8e826bb46c359.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "_4-3-补充-传输文件"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-3-补充-传输文件"
    }
  }, [_vm._v("#")]), _vm._v(" 4.3. 补充（传输文件）")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("开启VNC之后，可以在电脑上传输文件到树莓派")])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/1004443d9ece4272bea6d2bb57fa691d.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("我一般使用WinSCP来进行文件的传输；")])]), _vm._v(" "), _c('p', [_vm._v("winscp的下载与使用，推荐文章："), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/qq_26383975/article/details/120220823",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("文件传输工具WinSCP下载安装教程"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('ol', [_c('li', [_c('p', [_vm._v("在这之前记得开启树莓派上的SSH\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/18a2e4ce39a1401389854bf1b1630abf.png",
      "alt": "在这里插入图片描述"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/74ef8ab7d24e4cfbaaf03e6f116bf41a.png",
      "alt": "在这里插入图片描述"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("之后则是在电脑上打开WinSCP，选择树莓派的ip地址，输入用户名密码，即可进行文件传输\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/ec2f94434eaa44449c28068ddbe84847.png",
      "alt": "在这里插入图片描述"
    }
  })])])]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/e289b0f363314e4ab24b50d33a25f4c6.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "_4-4-补充-安装中文输入法"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_4-4-补充-安装中文输入法"
    }
  }, [_vm._v("#")]), _vm._v(" 4.4. 补充（安装中文输入法）")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("树莓派默认安装的是英文输入法，如果需要中文输入法，需要安装中文输入法 "), _c('a', {
    attrs: {
      "href": "https://blog.csdn.net/sinat_37842336/article/details/104690384",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("树莓派4B——显示中文和添加中文输入法"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("安装中文字体库(终端中输入以下命令)：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("sudo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("apt-get")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" ttf-wqy-zenhei\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('ol', {
    attrs: {
      "start": "2"
    }
  }, [_c('li', [_vm._v("添加中文输入法sunpinyin和google拼音")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("sudo")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("apt-get")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" fcitx fcitx-googlepinyin fcitx-module-cloudpinyin fcitx-sunpinyin\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('ol', {
    attrs: {
      "start": "3"
    }
  }, [_c('li', [_vm._v("设置支持中文(在终端输入以下代码打开设置界面)")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("sudo")]), _vm._v(" raspi-config\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/b3f96b9c8f53474aaffd5263821ab519.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/751ed842c81341d8972463550e39224f.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/66142e7b2b084395a2a3bdea439fab04.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('ol', {
    attrs: {
      "start": "4"
    }
  }, [_c('li', [_c('p', [_vm._v("打开树莓派设置，修改character set为GB18030并确认，过程完成后会提示重启，重启即可\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/5d4688c555f046cb822c5b8e8e4e372a.png",
      "alt": "在这里插入图片描述"
    }
  })])]), _vm._v(" "), _c('li', [_c('p', [_vm._v("成功后，会出现一个键盘的小图标，点击即可切换输入法\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/706fb4610ecf423f9253d0ccc081d6ca.png",
      "alt": "在这里插入图片描述"
    }
  })])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "五、opencv-摄像头模块的初步使用"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#五、opencv-摄像头模块的初步使用"
    }
  }, [_vm._v("#")]), _vm._v(" 五、opencv+摄像头模块的初步使用")]), _vm._v(" "), _c('p', [_vm._v("首先下载opencv的python包")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("install")]), _vm._v(" opencv-python "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-i")]), _vm._v(" https://pypi.tuna.tsinghua.edu.cn/simple\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#更新numpy")]), _vm._v("\npip "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" numpy "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--upgrade")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-i")]), _vm._v(" https://pypi.tuna.tsinghua.edu.cn/simple\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("3")]), _c('br')])]), _c('h4', {
    attrs: {
      "id": "_5-1-组装摄像头模块"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-1-组装摄像头模块"
    }
  }, [_vm._v("#")]), _vm._v(" 5.1. 组装摄像头模块")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV14A411i7w7/?spm_id_from=333.337",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("参考视频"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://blog.csdn.net/weixin_51245887/article/details/123545360",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("参考文章：树莓派4b使用摄像头+视频监控"), _c('OutboundLink')], 1)]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "_5-2-测试摄像头"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#_5-2-测试摄像头"
    }
  }, [_vm._v("#")]), _vm._v(" 5.2. 测试摄像头")]), _vm._v(" "), _c('p', [_vm._v("测试代码如下：")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("import")]), _vm._v(" cv2\ncap "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("VideoCapture"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 调用摄像头‘0’一般是打开电脑自带摄像头，‘1’是打开外部摄像头（只有一个摄像头的情况）")]), _vm._v("\nwidth "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1280")]), _vm._v("\nheight "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("960")]), _vm._v("\ncap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("set")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("CAP_PROP_FRAME_WIDTH"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" width"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 设置图像宽度")]), _vm._v("\ncap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("set")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("CAP_PROP_FRAME_HEIGHT"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" height"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 设置图像高度")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 显示图像")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("while")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v(" \n    ret"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" frame "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read"), _c('span', {
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
  }, [_vm._v("# 读取图像(frame就是读取的视频帧，对frame处理就是对整个视频的处理)")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# print(ret)")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# ######例如将图像灰度化处理，")]), _vm._v("\n    img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("cvtColor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("frame"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("COLOR_BGR2GRAY"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 转灰度图")]), _vm._v("\n    \n    cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imshow"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"img\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# #######图像不处理的情况")]), _vm._v("\n    cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imshow"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"frame\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" frame"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("    \n \n    input_str "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("waitKey"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("20")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" input_str "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("ord")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'q'")]), _c('span', {
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
  }, [_vm._v("# 如过输入的是q就break，结束图像显示，鼠标点击视频画面输入字符")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("break")]), _vm._v("\n    \ncap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("release"), _c('span', {
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
  }, [_vm._v("# 释放摄像头")]), _vm._v("\ncv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("destroyAllWindows"), _c('span', {
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
  }, [_vm._v("# 销毁窗口")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("23")]), _c('br')])]), _c('p', [_vm._v("打开树莓派自带的编程文件Thonny，然后运行此代码\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/77d4120fde9c43b8b61f957a1df413d4.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/e6a9c6c39dd64e1a87bbca9b9d2a2e43.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("成功运行，打开摄像头！")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "六、pc端-yolov5识别图片"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#六、pc端-yolov5识别图片"
    }
  }, [_vm._v("#")]), _vm._v(" 六、PC端 YOLOv5识别图片")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("YOLO5识别象棋 "), _c('a', {
    attrs: {
      "href": "https://www.bilibili.com/video/BV15G4y1Z7gP/?vd_source=dd339383fe56235f7b1eb7464f67c84d",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("在线参考视频"), _c('OutboundLink')], 1), _vm._v("；\n"), _c('a', {
    attrs: {
      "href": "https://doc.itprojects.cn/0007.zhishi.raspberrypi/02.doc/index.html#/c01.yolo5",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("参考文章"), _c('OutboundLink')], 1)])]), _vm._v(" "), _c('p', [_vm._v("租用GPU云服务器进行训练")]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("#训练的命令:")]), _vm._v("\npython3 train.py "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--weights")]), _vm._v(" yolov5s.pt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--data")]), _vm._v(" data/ChineseChess/ChineseChess.yaml "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--workers")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("4")]), _vm._v(" --batch-size "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("20")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--epochs")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("100")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#识别的命令：")]), _vm._v("\npython3 detect.py "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--weight")]), _vm._v(" best.pt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--source")]), _vm._v(" data/ChineseChess/images/test\n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("5")]), _c('br')])]), _c('p', [_vm._v("代码下载（包含训练好的模型文件best.pt）：\n链接："), _c('a', {
    attrs: {
      "href": "https://pan.baidu.com/s/1bT9Cs8EmTI-5OeBn5-oLxQ?pwd=53ta",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("https://pan.baidu.com/s/1bT9Cs8EmTI-5OeBn5-oLxQ?pwd=53ta"), _c('OutboundLink')], 1), _vm._v("\n提取码：53ta\n--来自百度网盘超级会员V5的分享")]), _vm._v(" "), _c('p', [_vm._v("使用pycharm打开该项目,配置好环境后，能正常运行\n"), _c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/1119d14e9068459e83adc0f2a11a811a.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/927002656bab42849ebe4aba254af54e.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "七、树莓派端运行yolov5"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#七、树莓派端运行yolov5"
    }
  }, [_vm._v("#")]), _vm._v(" 七、树莓派端运行yolov5")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("将代码目录上传到树莓派后，进入代码目录，在终端中运行：")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("# 安装依赖包，python版本在3.9到3.11之间都可以")]), _vm._v("\npip "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-r")]), _vm._v(" requirements.txt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-i")]), _vm._v(" https://pypi.tuna.tsinghua.edu.cn/simple \n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br')])]), _c('div', {
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
  }, [_vm._v("# 运行测试图片识别")]), _vm._v("\npython detect.py "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--weight")]), _vm._v(" best.pt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--source")]), _vm._v(" data/ChineseChess/images/test\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br')])]), _c('div', {
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
  }, [_vm._v("#打开摄像头实时识别")]), _vm._v("\npython detect.py "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--weight")]), _vm._v(" best.pt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--source")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _vm._v("\n")])]), _vm._v(" "), _c('div', {
    staticClass: "line-numbers-wrapper"
  }, [_c('span', {
    staticClass: "line-number"
  }, [_vm._v("1")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("2")]), _c('br')])]), _c('p', [_vm._v("与PC端的操作大致一样")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "八、使用onnx加速"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#八、使用onnx加速"
    }
  }, [_vm._v("#")]), _vm._v(" 八、使用onnx加速")]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("生成所需的onnx模型，并安装onnx和onnxruntime")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("#安装onnx和onnxruntime")]), _vm._v("\npip "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("install")]), _vm._v(" onnx onnxruntime "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("-i")]), _vm._v(" https://pypi.tuna.tsinghua.edu.cn/simple\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#生成onnx模型")]), _vm._v("\npython export.py "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--weights")]), _vm._v(" best.pt "), _c('span', {
    pre: true,
    attrs: {
      "class": "token parameter variable"
    }
  }, [_vm._v("--include")]), _vm._v(" onnx\n  \n")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("6")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/9f9c5c7f965d476284f0e4d33a930e59.png",
      "alt": "在这里插入图片描述"
    }
  })]), _vm._v(" "), _c('blockquote', [_c('p', [_vm._v("编写一个代码文件test_video.py，用来运行onnx模型文件，并实时显示摄像头画面和帧率")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("import")]), _vm._v(" cv2\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" numpy "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("as")]), _vm._v(" np\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" onnxruntime\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" time\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("import")]), _vm._v(" torch\n\nCLASSES "), _c('span', {
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
  }, [_vm._v("'r-bing'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'b-zu'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("class")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token class-name"
    }
  }, [_vm._v("YOLOV5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("__init__")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" model_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" use_onnx"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n        self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("use_onnx "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" use_onnx\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" use_onnx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("session "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" onnxruntime"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("InferenceSession"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("model_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("input_name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("get_input_name"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("output_name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("get_output_name"), _c('span', {
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
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 有点问题，算了")]), _vm._v("\n            device "), _c('span', {
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
  }, [_vm._v("\"cuda:0\"")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("\"cpu\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("model "), _c('span', {
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
  }, [_vm._v("(")]), _vm._v("model_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" map_location"), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v("device"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("model"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("get_input_name")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
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
  }, [_vm._v("if")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("use_onnx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            input_name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("node"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" node "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("session"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("get_inputs"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" input_name\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("raise")]), _vm._v(" NotImplementedError"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"This method is only for ONNX models.\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("get_output_name")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
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
  }, [_vm._v("if")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("use_onnx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            output_name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("node"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("name "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" node "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("session"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("get_outputs"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" output_name\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("raise")]), _vm._v(" NotImplementedError"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("\"This method is only for ONNX models.\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("preprocess_image")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" image"), _c('span', {
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
      "class": "token comment"
    }
  }, [_vm._v("# 图像预处理逻辑，与原始逻辑保持一致")]), _vm._v("\n        resized_img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("resize"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("640")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("640")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        img_tensor "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" resized_img"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
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
  }, [_vm._v(".")]), _vm._v("transpose"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
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
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# BGR to RGB, HWC to CHW")]), _vm._v("\n        img_tensor "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" img_tensor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("astype"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("float32"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        img_tensor "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("255.0")]), _vm._v("\n        img_tensor "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("expand_dims"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img_tensor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" axis"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" img_tensor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" resized_img\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("inference_pt")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        img_tensor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" resized_img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("preprocess_image"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n            outputs "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("model"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("torch"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("from_numpy"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img_tensor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" outputs"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("detach"), _c('span', {
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
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" resized_img\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("inference_onnx")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        img_tensor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" resized_img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("preprocess_image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        input_feed "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("input_name"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v(" img_tensor"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("}")]), _vm._v("\n        pred "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("session"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("run"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("None")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" input_feed"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" pred"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" resized_img\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("inference")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" img"), _c('span', {
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
  }, [_vm._v("if")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("use_onnx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("inference_onnx"), _c('span', {
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
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" self"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("inference_pt"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# dets:  array [x,6] 6个值分别为x1,y1,x2,y2,score,class")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# thresh: 阈值")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("nms")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("dets"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" thresh"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    x1 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" dets"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n    y1 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" dets"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n    x2 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" dets"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    y2 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" dets"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#   计算框的面积")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t置信度从大到小排序")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    areas "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("y2 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" y1 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("x2 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" x1 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    scores "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" dets"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n    keep "), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n    index "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" scores"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("argsort"), _c('span', {
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
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
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
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("while")]), _vm._v(" index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("size "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        i "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" index"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n        keep"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#   计算相交面积")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t1.相交")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t2.不相交")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n        x11 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("maximum"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("x1"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" x1"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("index"), _c('span', {
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
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        y11 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("maximum"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("y1"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" y1"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("index"), _c('span', {
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
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        x22 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("minimum"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("x2"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" x2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("index"), _c('span', {
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
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        y22 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("minimum"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("y2"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" y2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("index"), _c('span', {
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
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n        w "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("maximum"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" x22 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" x11 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        h "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("maximum"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" y22 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" y11 "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n        overlaps "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" w "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("*")]), _vm._v(" h\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#   计算该框与其它框的IOU，去除掉重复的框，即IOU值大的框")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\tIOU小于thresh的框保留下来")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n        ious "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" overlaps "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("areas"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" areas"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("index"), _c('span', {
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
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" overlaps"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        idx "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("where"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("ious "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("<=")]), _vm._v(" thresh"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n        index "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" index"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("idx "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" keep\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("xywh2xyxy")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("x"), _c('span', {
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
  }, [_vm._v("# [x, y, w, h] to [x1, y1, x2, y2]")]), _vm._v("\n    y "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("copy"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("x"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    y"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" x"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" x"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
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
      "class": "token number"
    }
  }, [_vm._v("2")]), _vm._v("\n    y"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" x"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" x"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
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
      "class": "token number"
    }
  }, [_vm._v("2")]), _vm._v("\n    y"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" x"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" x"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("2")]), _c('span', {
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
      "class": "token number"
    }
  }, [_vm._v("2")]), _vm._v("\n    y"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" x"), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("+")]), _vm._v(" x"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("3")]), _c('span', {
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
      "class": "token number"
    }
  }, [_vm._v("2")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" y\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("filter_box")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("org_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" conf_thres"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" iou_thres"), _c('span', {
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
  }, [_vm._v("# 过滤掉无用的框")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#   删除为1的维度")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t删除置信度小于conf_thres的BOX")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    org_box "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("squeeze"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("org_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    conf "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" org_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
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
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" conf_thres\n    box "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" org_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("conf "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t通过argmax获取置信度最大的类别")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    cls_cinf "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
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
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n    cls "), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cls_cinf"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n        cls"), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("int")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("argmax"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cls_cinf"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n    all_cls "), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("set")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cls"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#   分别对每个类别进行过滤")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t1.将第6列元素替换为类别下标")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t2.xywh2xyxy 坐标转换")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t3.经过非极大抑制后输出的BOX下标")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t4.利用下标取出非极大抑制后的BOX")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    output "), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n\n    "), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("all_cls"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n        curr_cls "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" all_cls"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("i"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v("\n        curr_cls_box "), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n        curr_out_box "), _c('span', {
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
  }, [_vm._v("for")]), _vm._v(" j "), _c('span', {
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
      "class": "token builtin"
    }
  }, [_vm._v("len")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("cls"), _c('span', {
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
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" cls"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("j"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" curr_cls"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n                box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("j"), _c('span', {
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
  }, [_vm._v("5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" curr_cls\n                curr_cls_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("j"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("6")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        curr_cls_box "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("array"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("curr_cls_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# curr_cls_box_old = np.copy(curr_cls_box)")]), _vm._v("\n        curr_cls_box "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" xywh2xyxy"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("curr_cls_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        curr_out_box "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" nms"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("curr_cls_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" iou_thres"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" k "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" curr_out_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            output"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("append"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("curr_cls_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("k"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    output "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("array"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("output"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("return")]), _vm._v(" output\n\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("def")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token function"
    }
  }, [_vm._v("draw")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" box_data"), _c('span', {
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
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("#\t取整，方便画框")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# -------------------------------------------------------")]), _vm._v("\n    boxes "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" box_data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("4")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("astype"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("int32"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    scores "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" box_data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
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
  }, [_vm._v("]")]), _vm._v("\n    classes "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" box_data"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _c('span', {
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
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("astype"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("np"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("int32"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("for")]), _vm._v(" box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" score"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" cl "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("in")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("zip")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("boxes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" scores"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" classes"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        top"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" left"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" right"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" bottom "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" box\n        "), _c('span', {
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
  }, [_vm._v("'class: {}, score: {}'")]), _c('span', {
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
  }, [_vm._v("(")]), _vm._v("CLASSES"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("cl"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" score"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
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
  }, [_vm._v("'box coordinate left,top,right,down: [{}, {}, {}, {}]'")]), _c('span', {
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
  }, [_vm._v("(")]), _vm._v("top"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" left"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" right"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" bottom"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n        cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("rectangle"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("top"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" left"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("right"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" bottom"), _c('span', {
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
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("255")]), _c('span', {
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
  }, [_vm._v("0")]), _c('span', {
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
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("putText"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("image"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'{0} {1:.2f}'")]), _c('span', {
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
  }, [_vm._v("(")]), _vm._v("CLASSES"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("[")]), _vm._v("cl"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("]")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" score"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("top"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" left"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                    cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("FONT_HERSHEY_SIMPLEX"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v("\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.6")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("255")]), _c('span', {
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
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n\n\n"), _c('span', {
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
  }, [_vm._v("\"__main__\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n    onnx_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"best.onnx\"")]), _vm._v("\n    model "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" YOLOV5"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("onnx_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" use_onnx"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n    img_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"D:\\yolov5-master\\data\\ChineseChess\\images\\test\\Snipaste_2022-11-17_15-14-11.png\"")]), _vm._v("\n    img "), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n    output"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" or_img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" model"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("inference"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    outbox "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" filter_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("output"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    draw"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("or_img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" outbox"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imshow"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'Result Image'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" or_img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 第一个参数是窗口名称，第二个参数是要显示的图像")]), _vm._v("\n    cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("waitKey"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 等待按键操作，0表示无限等待，直到任意键被按下")]), _vm._v("\n    cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("destroyAllWindows"), _c('span', {
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
  }, [_vm._v("# 关闭所有OpenCV创建的窗口")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# cv2.imwrite('res.jpg', or_img)")]), _vm._v("\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 使用ONNX模型")]), _vm._v("\n    onnx_path "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("r\"best.onnx\"")]), _vm._v("\n    model_onnx "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" YOLOV5"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("onnx_path"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" use_onnx"), _c('span', {
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
  }, [_vm._v("# 根据需要选择模型进行推理")]), _vm._v("\n    cap "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("VideoCapture"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("while")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token boolean"
    }
  }, [_vm._v("True")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n        ret"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" frame "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" cap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("read"), _c('span', {
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
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("not")]), _vm._v(" ret"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("break")]), _vm._v("\n        start_time "), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 使用ONNX模型推理")]), _vm._v("\n        output"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" or_img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" model_onnx"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("inference"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("frame"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        outbox "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" filter_box"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("output"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0.5")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" outbox"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("size "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v(">")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            draw"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("or_img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" outbox"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("else")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(":")]), _vm._v("\n            "), _c('span', {
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
  }, [_vm._v("\"No detections found.\"")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 即使没有检测到物体，也应该使用原始图像or_img来显示FPS，但这里直接使用frame假设没有改变它")]), _vm._v("\n            or_img "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" frame  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 确保or_img是最新的图像")]), _vm._v("\n        end_time "), _c('span', {
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
  }, [_vm._v(")")]), _vm._v("\n        fps "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("=")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("1.0")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("/")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("end_time "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("-")]), _vm._v(" start_time"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n        cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("putText"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _vm._v("or_img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token string-interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("f'FPS: ")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token interpolation"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("{")]), _vm._v("fps"), _c('span', {
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
  }, [_vm._v("'")])]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v("30")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("FONT_HERSHEY_SIMPLEX"), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
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
  }, [_vm._v(",")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("255")]), _c('span', {
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
  }, [_vm._v("2")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 在带有预测框的图像上写入FPS")]), _vm._v("\n        cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("imshow"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'YOLOv5 Real-time Detection'")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(",")]), _vm._v(" or_img"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("  "), _c('span', {
    pre: true,
    attrs: {
      "class": "token comment"
    }
  }, [_vm._v("# 确保显示带有FPS和预测框的图像")]), _vm._v("\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "token keyword"
    }
  }, [_vm._v("if")]), _vm._v(" cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("waitKey"), _c('span', {
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
  }, [_vm._v(")")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("&")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token number"
    }
  }, [_vm._v("0xFF")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token operator"
    }
  }, [_vm._v("==")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "token builtin"
    }
  }, [_vm._v("ord")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token string"
    }
  }, [_vm._v("'q'")]), _c('span', {
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
  }, [_vm._v("break")]), _vm._v("\n    cap"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("release"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(")")]), _vm._v("\n    cv2"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v(".")]), _vm._v("destroyAllWindows"), _c('span', {
    pre: true,
    attrs: {
      "class": "token punctuation"
    }
  }, [_vm._v("(")]), _c('span', {
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
  }, [_vm._v("151")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("152")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("153")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("154")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("155")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("156")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("157")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("158")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("159")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("160")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("161")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("162")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("163")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("164")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("165")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("166")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("167")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("168")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("169")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("170")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("171")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("172")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("173")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("174")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("175")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("176")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("177")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("178")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("179")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("180")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("181")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("182")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("183")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("184")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("185")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("186")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("187")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("188")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("189")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("190")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("191")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("192")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("193")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("194")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("195")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("196")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("197")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("198")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("199")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("200")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("201")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("202")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("203")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("204")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("205")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("206")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("207")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("208")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("209")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("210")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("211")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("212")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("213")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("214")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("215")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("216")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("217")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("218")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("219")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("220")]), _c('br'), _c('span', {
    staticClass: "line-number"
  }, [_vm._v("221")]), _c('br')])]), _c('p', [_c('img', {
    attrs: {
      "src": "/docs_img/%E4%B8%89%E5%8F%B6%E9%9D%92%E5%9B%BE%E5%83%8F%E8%AF%86%E5%88%AB%E9%A1%B9%E7%9B%AE/e2bf9b6455944255b2c3de4ca59a3bb3.png",
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
  }, [_vm._v("#")]), _vm._v(" 总结")]), _vm._v(" "), _c('p', [_vm._v("本文主要记录了我学习树莓派时的笔记，包括对树莓派的认识和组装、树莓派的运行和VNC远程连接、摄像头模块的使用、以及最后的使用yolov5来对象棋进行识别等。\n（尝试了以下租用GPU 进行训练，不得不说与之前使用kaggle平台相比，还是氪金玩家比较爽。省去了配置环境的麻烦）\n另外，也是因为目前暂时没有yolo的三叶青标记数据，所以数据是从其它教程中找过来的。")]), _vm._v(" "), _c('p', [_c('valine')], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【7】树莓派图像分类部署.md?vue&type=template&id=a4d0f36a

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./docs/三叶青图像识别项目/【7】树莓派图像分类部署.md

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

/* harmony default export */ var _7_ = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);