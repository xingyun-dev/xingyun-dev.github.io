---
title: vuepress-reco主题个人博客搭建
date: 2024-01-10
sidebar: 'auto'
categories:
 - 项目
tags:
 - vuepress
publish: true
---

::: tip
vuepress-reco主题个人博客搭建
:::

---


---

## 前言
使用vuepress-theme-reco主题来实现个人博客的搭建
官方文档：
[https://vuepress-theme-reco.recoluan.com/](https://vuepress-theme-reco.recoluan.com/)

推荐视频：
[https://www.bilibili.com/video/BV17t41177cr](https://www.bilibili.com/video/BV17t41177cr/?spm_id_from=333.999.0.0&vd_source=709d452fc2b366c0679bdbc13f5e5db6)

[https://www.bilibili.com/video/BV1vb411m7NY](https://www.bilibili.com/video/BV1vb411m7NY/?spm_id_from=333.788.recommend_more_video.0&vd_source=709d452fc2b366c0679bdbc13f5e5db6)

---




## 一、安装环境准备

### 1. git的安装

> Git是一个分布式版本控制系统，它可以追踪文件的变化并协助多人协作开发项目。最关键的是git有一个相当于‘时光倒流’的效果，可以回溯之前的项目版本。
> 并且Git提供了丰富的命令行工具和图形化界面，可以方便地进行代码管理和版本控制。

[下载地址](https://git-scm.com/)


至于后续的安装过程，可看一下下面这篇文章（很详细了）
推荐文章：
[https://blog.csdn.net/mukes/article/details/115693833](https://blog.csdn.net/mukes/article/details/115693833)





### 2. nvm安装

> 个人推荐安装nvm，来实现不同版本node的管理与切换。

之前我也是直接下载了node,但是后面因为不同版本而导致的兼容性问题，所以就将原来的node卸载了，安装了nvm，来实现不同版本的node之间的转换。



推荐文章：
[https://blog.csdn.net/HuangsTing/article/details/113857145](https://blog.csdn.net/HuangsTing/article/details/113857145)









## 二、开始创建
### 1.安装脚手架工具

```bash
npm install @vuepress-reco/theme-cli -g

#在这之前可以尝试先切换淘宝源来加速下载
npm config set registry https://registry.npm.taobao.org 
```

### 2.创建项目

```bash
theme-cli init
```
执行完上述命令后，命令行窗口出现配置信息：

```bash
? Whether to create a new directory? (Y/n)  #是否新建一个目录，输入Y
? What's the name of new directory?   #为新的文件夹命名
? What's the title of your project?   #项目标题
? What's the description of your project?  #项目描述
? What's the author's name?  #作者姓名
? What style do you want your home page to be?(The 2.x version is the beta version)  #选择首页风格，这里我选择blog

```
如图所示：
![在这里插入图片描述](/docs_img/vuepress-reco主题个人博客搭建/3694347aeee34888b497fc58a8fd98a8.png)




### 3. 启动项目

```bash
#进入项目目录
cd xingyun2 

#安装依赖
npm install

#运行
npm run dev
```
访问命令行输出的IP地址，一般为http://localhost:8080/，即可访问博客了

![在这里插入图片描述](/docs_img/vuepress-reco主题个人博客搭建/a4ba69c033a540e894e6551a52afd328.png)

初始界面如图所示：

![在这里插入图片描述](/docs_img/vuepress-reco主题个人博客搭建/6323c849d51841058c88112f4fe63c0f.png)

之后则是通过修改配置文件来定制自己的博客。

## 三、博客配置

> 我这里用的是vscode编辑器打开代码文件夹


### 1. 初始的项目结构

```bash
├─ node_modules      #这里存放着项目所需的依赖
├─ docs        #该目录下存放编写的文档
│  └─ theme-reco 
│     ├─ api.md
│     ├─ plugin.md
│     ├─ theme.md
│     └─ README.md
├─ blogs            #该目录下存放编写的博客文章
│     ├─ category1
│     │  ├─ 2018
│     │  │  └─ 121501.md
│     │  └─ 2019
│     │     └─ 092101.md
│     ├─ category2
│     │  ├─ 2016
│     │  │  └─ 121501.md
│     │  └─ 2017
│     │     └─ 092101.md
│     └─ other
│        └─ guide.md
├─ .vuepress         #存放项目配置文件与静态资源
│   ├─ config.js    #用于配置项目
│   └─ public       #该目录下存放网页中所需的静态资源
│     ├─ hero.png   # 首页大图
│     ├─ logo.png     #网站logo
│     ├─ favicon.ico   #网站图标
│     └─ avatar.png   #头像
├─ package.json      #依赖管理文件
└─ README.md         #存放着博客首页的内容
```


### 2. README.md首页

```javascript
---
home: true  #指定该页为首页
heroText: 星云文档   #居中显示的文本

tagline: 烦死了  #文本下面的字


# heroImage: /hero.png  
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
# }

# 背景图
# bgImage: '/img/bg2.jpg'

bgImageStyle: {   #背景图片样式
  height: '400px'
}


isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---

<Font />
```





### 3. 配置config.js文件

> 我的配置文件如下（为了使主配置文件简单点，故将导航栏、侧边栏、插件等配置分别放到了不同文件中，然后再在主配置文件引入

```javascript
const head = require('./config/head')
const plugins = require('./config/plugin')
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  title: "星云文档",
  description: "作为个人的项目文档",
  dest: "public",
  port: "8080",
  //设置为中文
  locales: {
    '/':{
      lang: 'zh-CN',
    }
  },

//禁用webpack的最小化优化。(我在生成静态文件时，如果不禁用会导致并不能生成正常的静态文件,或许是我的版本不兼容问题？)
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimize(false);
    }
  },

  head: head,
  plugins: plugins,   //  插件

  markdown: {
    "lineNumbers": true
  },
  

    
  //主题
  theme: "reco",
  themeConfig: {
    nav: nav,   //导航栏
    sidebar:sidebar, // 侧边栏



    type: "blog",
    smoothScroll: true,
    blogConfig: {
      "category": {
        "location": 4,  // 在导航栏菜单中所占的位置
        "text": "博客分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    logo: "/img/logo.png",  //logo设置


    search: true,  //搜索设置
    searchMaxSuggestions: 10,  //搜索提示数量
    lastUpdated: "更新时间：",  //最后更新时间
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！',

    author: "星云",  //作者
    authorAvatar: "/img/logo.png",     //作者头像

    recordLink: 'https://beian.miit.gov.cn/',    //备案号
    startYear: "2024", 

    //友情链接
    friendLink: [
      {
        title: 'CSDN',
        desc: '主要是一些学习编程的学习笔记',
        avatar: "/img/星石传说.jpg",
        link: 'https://blog.csdn.net/2301_78630677?type=blog'
      },
    ],

  },
  
}
```


### 4. 配置侧边栏

> 如下图所示

![在这里插入图片描述](/docs_img/vuepress-reco主题个人博客搭建/25838e706c5f4d17a6d3b88491b278c0.png)

在侧边栏的配置中，其中config文件夹中的sidebar,js如下：

```javascript
module.exports = {

    //对多模块进行分类
	'/docs/guide/': require('../../docs/guide/sidebar'),  //第一个模块下面的侧边栏

	'/docs/vuepress搭建个人文档/': require('../../docs/vuepress搭建个人文档/sidebar'), //第二个模块下面的侧边栏
	'/docs/以flask为后端的博客项目/': require('../../docs/以flask为后端的博客项目/sidebar'), //第三个模块下面的侧边栏
}	

```
以第二个模块下面的侧边栏的配置为例，sidebar.js文件：

```javascript
module.exports = [
	{
	title:'vuepress搭建个人文档',
	collapsable: true,
	children: 
	[
        '',  //默认是README.md文件
        'vuepress介绍',
        'vuepress-reco主题个人博客搭建',
		'vuepress博客部署',
	],
	},
]

```

### 5.  导航栏配置

> 以数组的形式嵌套配置

```javascript
module.exports = [
    {
    "text": "首页",
    "link": "/",
    "icon": "reco-home"
    },
    {
    "text": "时间线",
    "link": "/timeline/",
    "icon": "reco-date"
    },
    {
    "text": "项目文档",
    "icon": "reco-blog",
    "items": [
        {
            "text": "介绍",
            "link": "/docs/guide/"
        },
        {
        "text": "vuepress搭建个人文档",
        "link": "/docs/vuepress搭建个人文档/"
        },
        {
        "text": "以flask为后端的博客项目",
        "link": "/docs/以flask为后端的博客项目/"
        },
        
    ]
    },
    {
    "text": "关于项目",
    "icon": "reco-message",
    "items": [
        {
        "text": "GitHub",
        "link": "https://github.com/xingyun-dev",
        "icon": "reco-github"  // 图标
        },
        {
        "text": 'Gitee', 
        "link": 'https://gitee.com/wht050106', 
        "icon": 'reco-mayun'
        },

    ]
    },
    {
        "text": "留言板",
        // "icon": "",
        "link": "/docs/留言板.md",
    },

]
```

### 6. 配置头部文件

```javascript
module.exports = [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: '星云文档,vuepress,自建博客' }],
    ['meta', { name: 'description', content: '单纯的个人项目记录文档' }],
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "星云"}],
    ['link',{rel:"stylesheet",href:"/css/style.css"}],
]

```




---

## 总结
本文主要介绍了vuepress的一个主题vuepress-theme-reco，并介绍了使用该主题进行的个人博客搭建。下一篇文章则将介绍在不使用服务器的情况下，借助github、gitee来部署该个人博客。

-- 2024-1-13	
