---
title: vuepress后续补充
date: 2024-01-14
sidebar: 'auto'
categories:
 - 项目
tags:
 - vuepress
publish: true
---


:::tip
对自己使用vuepress的过程进行一些补充
:::

<!-- more -->




---

## 前言
对自己使用vuepress的过程进行一些补充

---

## 一、样式修改

> 在public文件夹下新建一个css文件夹，用来存放修改样式文件，style.css


再在config.js的头部head中引入：

```css
 ['link',{rel:"stylesheet",href:"/css/style.css"}],
```

> 文件内容如下：

```css
/* body {
    background-image: url('/img/背景.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: transparent;
} */

.content {
font-size:30px
}


.hero h1{
    color:aqua;
}

/* 首页标签列表样式 */
.abstract-item {
  background-color: #d3faea3d !important;  
  transition: all .5s;
}
.abstract-item:hover {
    transform:  scale(1.02);
    transition: all .5s;
}

/* 右侧文章标题导航栏 */
a.sidebar-link {
  font-size: 15px !important;
}

/* 时间线样式 */
.timeline-wrapper .year {
  margin: 80px 0px 20px !important;
  font-size: 27px !important;
}
.timeline-wrapper .year-wrapper li {
    padding: 10px 20px 10px !important;
    border-bottom: 2px solid #999da06b !important;
    background: #c1c1e626;
    border-radius: 5rem;
    margin: 5px 0px;
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li:hover {
    transform:  translate(50px,0);
    transition: all .5s;
}
.timeline-wrapper .year-wrapper li .date {
  width: 43px !important;
  font-size: 13px !important;
}
.timeline-wrapper .year-wrapper li .date:before {
    top: 22px !important;
    border: 1px solid !important;
}
.timeline-wrapper:after {
    background: skyblue !important;
}
.timeline-wrapper .desc:before, .timeline-wrapper .year:before {
  background: cadetblue !important;
}

```

> 找到要修改的元素的css名称，可以在开发者模式中查看以及调试


![在这里插入图片描述](/docs_img/vuepress后续补充/b9c016b0d810493fbf9775e3b0e3572b.png)


## 二、首页打字机效果

> 在  .vuepress目录下新建一个components目录（目录名称是确定的，以便后面直接引入文件）。该目录中的 Vue 组件将会被自动注册为全局组件。
> 新建一个vue文件，如Font.vue

更多目录结构信息参考官方文档：
[https://vuepress.vuejs.org/zh/guide/directory-structure.html](https://vuepress.vuejs.org/zh/guide/directory-structure.html)



Font.vue文件内容如下：

```html
<template>
    <div></div>
</template>


<style>
.hero .description {
    margin: 0;
    padding: 0;
  /* 必须是等宽字体 */
  /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
    font-family: monospace;
    position: relative;
    width: fit-content;
}

.hero .description::after {
    content: '';
    display: inline;
    position: absolute;
    width: 2px;
    height: 2ch;
    top: 9%;
    background-color: #000;
    border-radius: 2px;
    right: -0.5ch;
}

.hero .description.ended::after {
    animation: 1.1s cursor steps(2, jump-none) infinite;
}

.home-blog .hero .description span {
    --delay: 10s;
    display: inline-block;
    overflow: hidden;
    width: 0ch;
    animation: 0.1s text-in ease-in-out forwards;
    animation-delay: var(--delay);
    font-weight: 600;
}

@keyframes text-in {
    from {
        width: 0ch;
    }
    to {
    /* 必须是等宽字体 */
    /* 由于是等宽字体，1ch 等于 任何数字、英文、符号的宽度 */
    /* 中文2ch，英文1ch */
    width: 2ch;
    }
}

@keyframes text-out {
    from {
        /* 中文2ch，英文1ch */
        width: 2ch;
    }

    to {
        width: 0ch;
    }
    }

    @keyframes cursor {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
    }
    </style>
    
    


<script>
export default {
    name: '',
    data() {
        return {
        strs: [
            {
            title: '你要忍，忍到春暖花开',
            // 停顿的位置
            stop: 5,
            // stop: [4, 13] // 可以是数组，多几个位置停顿
            },
            {
            title: '你要走，走到灯火通明',
            },
            {
            title: '你要看过世界辽阔，再评判是好是坏',
            },
            {
            title: '你要卯足劲变好',
            },
            {
            title: '再旗鼓相当站在不敢想象的人身边',
            },
            {
            title: '你要变成想象中的样子',
            },
            {
            title: '这件事，一步都不能让',
            },
        ],
        // 当前进行到第几行
        currentIndex: 0,
        spans: null,
        el: null,
        titleEl: null,
        }
    },
    mounted() {
        if (!this.el) {
        const timer = setInterval(() => {
            this.el = document.querySelector('.hero .description')
            this.titleEl = document.querySelector('.hero  h1')
            if (this.el) {
            this.titleEl.style.fontWeight = 'bold'
            timer && clearInterval(timer)
            this.init()
            }
        }, 100)
        } else {
        this.init()
        }
    },
    methods: {
        init() {
        if (this.currentIndex == this.strs.length) {
            this.currentIndex = 0
        }
        const current = this.strs[this.currentIndex]
        this.el.innerHTML = current instanceof Object ? current.title : current
        this.el.innerHTML = this.el.textContent.replace(/\S/g, '<span>$&</span>')

        let delay = 0
        this.spans = [...document.querySelectorAll('.hero .description span')]
        this.spans.forEach((span, i) => {
            delay += 0.1
            if (current.hasOwnProperty('stop')) {
            if (current.stop instanceof Array) {
                if (current.stop.includes(i)) {
                delay += 0.3
                }
            } else {
                if (current.stop == i) {
                delay += 0.3
                }
            }
            }

            span.style.setProperty('--delay', `${delay}s`)
        })

        this.el.addEventListener('animationend', this.lastEnd)
        },

        lastEnd(e) {
        if (e.target == document.querySelector('.hero .description span:last-child')) {
            this.el.classList.add('ended')
            setTimeout(() => {
            this.el.removeEventListener('animationend', this.lastEnd)
            let delay = 0

            this.spans.reverse().forEach((span, i) => {
                this.el.classList.remove('ended')
                span.style.width = '2ch'
                span.style.animation = '0.1s text-out ease-in-out forwards'
                delay += 0.05

                span.style.animationDelay = `${delay}s`
            })
            this.el.addEventListener('animationend', this.firstEnd)
            }, 1500)
        }
        },

        firstEnd(e) {
        if (e.target == document.querySelector('.hero .description span:first-child')) {
            this.spans.forEach(v => {
            v.remove()
            })
            this.el.removeEventListener('animationend', this.firstEnd)
            this.currentIndex++
            this.init()
        }
        },
    },
    }
    </script>
    
```

> 之后就可以直接在首页README.md文件中引入 < Font />


```html
---
home: true  #指定该页为首页
heroText: 星云文档   #居中显示的文本

tagline: 烦死了


# heroImage: /hero.png  
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
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


## 三、valine评论问题

> 与直接引入官方 的插件不同，我们可以自己引入valine
同样，在components中新建一个vue文件: valine.vue

```html
<template>
    <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <div>
        <!-- id 将作为查询条件 -->
        <span class="leancloud-visitors"
            data-flag-title="Your Article Title">
        <em class="post-meta-item-text">阅读量： </em>
        <i class="leancloud-visitors-count"></i>
        </span>
    </div>
    <h3>
        <a href="javascript:;"></a>
        评 论：
    </h3>
    <div id="vcomments"></div>
    </section>
</template>

<script>
export default {
    name: 'Valine',
    mounted: function () {
      // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
        document.getElementsByClassName('leancloud-visitors')[0].id
        = window.location.pathname
        this.window = window
        window.AV = require('leancloud-storage')
    }

    new Valine({
        el: '#vcomments',
        appId: '',// your appId
        appKey: '', // your appKey
        notify: false,
        verify: false,
        path: window.location.pathname,
        visitor: true,
        avatar: 'mm',
        placeholder: '来都来了，冒个泡再走吧。。'
    });
    },
}
</script>

```

> 同样在一个指定的README.md文件中引入：

```html
---
title: 留言板
date: 2024-01-13
# sidebar: 'auto'
categories:
 - 留言板
tags:
 - 留言板
publish: true
---

::: tip 
欢迎大家在此留下你的足迹，让我们一起交流，共同进步！
:::

<valine></valine>

```




















