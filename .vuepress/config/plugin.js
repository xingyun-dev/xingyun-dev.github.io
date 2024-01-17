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
          cover:'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
        {
          name: '落空',
          artist: '印子月',
          url: '/music/落空-印子月.mp3',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
        {
          name: '左手右手',
          artist: '虎虎生威插曲',
          url: '/music/左手右手.mp3',
          cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
        },
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



  [
    '@vuepress-reco/loading-page',
    {
      text: 'Please wait...',
      bgColor: '#f0f0f0'
    }
  ],


]















