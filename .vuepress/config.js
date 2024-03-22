const head = require('./config/head')
const plugins = require('./config/plugin')
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  title: "星云文档",
  description: "作为个人的项目文档",
  dest: "./dist",
  port: "8080",

  // base: '/',      // 默认是'/'
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