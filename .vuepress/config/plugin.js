module.exports = [
  //分页
  ['@vuepress-reco/vuepress-plugin-pagation', {
    perPage: 6  // 每页展示条数
  }],


//代码复制
["vuepress-plugin-code-copy", {
  align: 'top-right',
  successText: '复制成功',
  color: 'green'

  }
],
  //PWA    站点将具备离线访问能力，并且用户在访问站点时，如果有新内容可用，会弹出一个更新提示，用户可以选择刷新页面以查看最新内容。
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
    message: "发现新内容可用",
    buttonText: "刷新"
    }
  }],

  // 处理复制操作
  // [
  //     'copyright',
  //     {
  //       noCopy: true, // 选中的文字将无法被复制
  //       minLength: 100, // 如果长度超过 100 个字符
  //     },
  //   ],

  //音乐播放器插件
  [
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        {
          name: '冬眠',
          artist: '司南',
          url: '/music/冬眠-司南.mp3',
          // url:"http://m10.music.126.net/20240118235118/bdaf04c38b2ceaca7adb7ce27081b40c/ymusic/5553/545e/5359/b9eca2ff9ec461c689d4d3738b57ac29.mp3",
          cover:'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
        {
          name: '落空',
          artist: '印子月',
          url: '/music/落空-印子月.mp3',
          // url:'http://m701.music.126.net/20240118232453/9be34286906141b89b94292035d0d8a2/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28665264551/cb03/9802/ed86/b9e70deb50e0678a9750d082dfc7f508.mp3',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
        {
          name: '左手右手',
          artist: '虎虎生威插曲',
          url: '/music/左手右手.mp3',
          // url:'http://m701.music.126.net/20240118233047/5ac82e10eaae6494d2a2b8f4f87172d2/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/13827064212/8600/53ad/943d/ca1f4877581a47493eb11addc4796353.mp3',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
        {
          name: '真英雄',
          artist: '隋唐英雄传插曲',
          url: '/music/真英雄.mp3',
          // url:'http://m701.music.126.net/20240118233240/5700de07469bf5b298e57d1e2f4025df/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11454778412/9dc1/665a/25cf/62817bdcfbf7a77b0273e83218fcf09c.mp3',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
        {
          name: '烟雨行舟',
          artist: '伦桑',
          // url: '/music/烟雨行舟-伦桑.mp3',
          url:'https://m704.music.126.net/20240119001307/2fd290a88a6ec0efeb1407b98306599a/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481830473/8b25/cec5/b7c5/4b4a0d3d512aa1353caf287ea152f292.mp3?_authSecret=0000018d1d42195713ce0aa460ac1346',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
        {
          name: '烟雨行舟',
          artist: '司南',
          url: '/music/烟雨行舟-司南.mp3',
          // url:'http://m801.music.126.net/20240118234449/9e3efb403cb980584c3171524e121fa7/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/13061420959/724c/ee3a/5f8b/330daefc1a0d91a3a0eef2fcb579feda.mp3',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },

      ] ,

      // 是否默认缩小
      autoShrink: true ,
      // 缩小时缩为哪种模式
      shrinkMode: 'float',
      // 悬浮窗样式
      floatStyle:{ bottom: '400px', 'z-index': '999999' }
    }
  ],

  //动态标题插件
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

  // //看板娘插件
  // [
  //   '@vuepress-reco/vuepress-plugin-kan-ban-niang',
  //   {
  //     theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
  //   }
  // ],



  //全屏
  
  // [
  //   '@vuepress-reco/vuepress-plugin-screenfull',
  //     {
  //       // 可选配置
  //       showIcon: true, // 是否显示全屏图标
  //       position: 'top', // 全屏图标的位置
  //       text: '点击全屏', // 自定义全屏功能的文本提示
  //       events: ['click', 'dblclick'] // 指定全屏功能的触发事件
  //     }
  // ],


  
  // [
  //   //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
  //   "ribbon",
  //   {
  //     size: 90,     // width of the ribbon, default: 90
  //     opacity: 0.8, // opacity of the ribbon, default: 0.3
  //     zIndex: -1    // z-index property of the background, default: -1
  //   }
  // ],


  [
    '@vuepress-reco/loading-page',
    {
      text: 'Please wait...',
      bgColor: '#f0f0f0'
    }
  ],


]















