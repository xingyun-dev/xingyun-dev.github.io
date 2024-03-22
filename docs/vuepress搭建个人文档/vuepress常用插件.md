---
title: vuepress常用插件
date: 2024-01-13
sidebar: 'auto'
categories:
 - 项目
tags:
 - vuepress
publish: true
---


:::tip
介绍一些在使用vuepress博客搭建中常用的插件
:::



## 一、所配置的插件



### 1. 动态标题插件
```bash
#install
npm i vuepress-plugin-dynamic-title -D

#usage
module.exports = {
   plugins: [
      [
    'dynamic-title',
    {
      showIcon: '/img/favicon.ico',
      showText: '欢迎回来！',
      hideIcon: '/img/favicon.ico',
      hideText: '祝一路顺风！',
      recoverTime: 2000,
    },
 	 ],
   ],
}
```
[https://github.com/moefyit/vuepress-plugin-dynamic-title](https://github.com/moefyit/vuepress-plugin-dynamic-title)



### 2. 音乐播放器插件

```bash
#install
npm i @vuepress-reco/vuepress-plugin-bgm-player


#usage
 [
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        {
          name: '真英雄',
          artist: '隋唐英雄传插曲',
          url: '/music/真英雄.mp3',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
      ] ,

      // 是否默认缩小
      autoShrink: true ,
      // 缩小时缩为哪种模式
      shrinkMode: 'float',
      // 悬浮窗样式
      floatStyle:{ bottom: '40px', 'z-index': '999999' }
    }
  ],

```
[
https://gitee.com/vuepress-reco/vuepress-plugin-bgm-player](https://gitee.com/vuepress-reco/vuepress-plugin-bgm-player#details)


### 3. 代码复制插件

```bash
#install
npm install vuepress-plugin-code-copy


#usage
//代码复制
["vuepress-plugin-code-copy", {
  align: 'top-right',
  successText: '复制成功',
  color: 'green'

  }
],
```

[
https://www.npmjs.com/package/vuepress-plugin-code-copy](https://www.npmjs.com/package/vuepress-plugin-code-copy)


### 4. PWA插件

> PWA，Progressive Web Apps（渐进式 Web 应用）
> PWA 指的是使用指定技术和标准模式来开发的 Web 应用，这同时赋予它们 Web 应用和原生应用的特性。

PWA了解参考 
[https://juejin.cn/post/7065653370903592996](https://juejin.cn/post/7065653370903592996)


```bash
#install
npm install -D @vuepress/plugin-pwa


#usage
 //PWA    站点将具备离线访问能力，并且用户在访问站点时，如果有新内容可用，会弹出一个更新提示，用户可以选择刷新页面以查看最新内容。
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
    message: "发现新内容可用",
    buttonText: "刷新"
    }
  }],

```


### 5. 添加著作权信息插件

```bash
#install
npm install -D vuepress-plugin-copyright


#usage
//处理复制操作
  [
      'copyright',
      {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
      },
    ],

```

[https://vuepress-community.netlify.app/zh/plugins/copyright](https://vuepress-community.netlify.app/zh/plugins/copyright/#%E5%AE%89%E8%A3%85)



### 6. 评论插件

> 在vuepress支持valine和vssue等评论系统
> 
Valine 是一款基于 LeanCloud 的快速、简洁且高效的无后端评论系统，Vssue 是 Vue 驱动的、基于 Issue 的评论插件。

使用 Valine 需要先获取 AppId 和 AppKey。访问 LeanCloud 网站，进行注册登陆。登陆后进入到控制台页面，创建一个新应用，创建成功后，进入创建的应用中，在 设置->应用凭证 选项卡中，就可以看到 AppId 和 AppKey 了。
![在这里插入图片描述](/docs_img/vuepress-reco主题个人博客搭建/529226d916124315b847e9a8c94b0b3e.png)

```bash
#install
npm install --save vuepress-plugin-comment

#usage
[
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'Your own appId',
          appKey: 'Your own appKey'
        }
      }
    ],
```

> 另外因为vuepress-reco主题内置了valine，可以直接在config.js主配置文件中使用：

```bash
//valine评论插件
      valineConfig: {
        // your appId
        appId: '',
        // your appKey
        appKey: '',
        placeholder:'来都来了，冒个泡再走呗...',
        //showComment: false,  
  },

```

[https://valine.js.org/vuepress.html](https://valine.js.org/vuepress.html)
### 7. 分页插件

```bash
#install
npm i @vuepress-reco/vuepress-plugin-pagation

#usage
//分页
  ['@vuepress-reco/vuepress-plugin-pagation', {
    perPage: 5  // 每页展示条数
  }],

```

[https://www.npmjs.com/package/@vuepress-reco/vuepress-plugin-pagation](https://www.npmjs.com/package/@vuepress-reco/vuepress-plugin-pagation)



### 8. 看板娘插件


```bash
#install
npm i @vuepress-reco/vuepress-plugin-kan-ban-niang

#usage
//看板娘插件
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
    }
  ],
```
[https://gitee.com/vuepress-reco/vuepress-plugin-kan-ban-niang](https://gitee.com/vuepress-reco/vuepress-plugin-kan-ban-niang)


### 9. 公告栏弹窗插件

```bash
#install
npm i @vuepress-reco/vuepress-plugin-bulletin-popover


#usage
 ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    title: '消息提示',
    body: [
      {
        type: 'title',
        content: '欢迎加入QQ交流群 🎉🎉🎉',
        style: 'text-aligin: center;'
      },
      {
        type: 'image',
        src: '/rvcode_qq.png'
      }
    ],
    footer: [
      {
        type: 'button',
        text: '打赏',
        link: '/donate'
      },
      {
        type: 'button',
        text: '打赏',
        link: '/donate'
      }
    ]
  }]
```

[https://www.npmjs.com/package/@vuepress-reco/vuepress-plugin-bulletin-popover](https://www.npmjs.com/package/@vuepress-reco/vuepress-plugin-bulletin-popover)


### 10. 更多插件

[https://vuepress-community.netlify.app/zh/](https://vuepress-community.netlify.app/zh/)

[https://v1.vuepress.vuejs.org/zh/plugin/official/](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html)
