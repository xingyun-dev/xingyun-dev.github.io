/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "daabde5ce707e9180e3f85a29d353ec8"
  },
  {
    "url": "assets/css/0.styles.b432410e.css",
    "revision": "3b31f8dd11a450be3b36042ea0aceedc"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.af91f0bc.js",
    "revision": "3d2801f9cc44cea34206c227be26f329"
  },
  {
    "url": "assets/js/10.95a06d32.js",
    "revision": "00301ac9299eb1d70305053ff8ee1de1"
  },
  {
    "url": "assets/js/11.0b934b26.js",
    "revision": "fe5ad5dfa3ef2c70d306653224957f3f"
  },
  {
    "url": "assets/js/12.a56a49e3.js",
    "revision": "c101ce728280864d3e43421ad17ac627"
  },
  {
    "url": "assets/js/13.fc0f561e.js",
    "revision": "c92829241172d0f65881e3a924fd6a89"
  },
  {
    "url": "assets/js/14.896423b5.js",
    "revision": "ccd8b18215ec8c107054834119d7e95a"
  },
  {
    "url": "assets/js/15.ab08f707.js",
    "revision": "3b03fec66e3914536dbe9a4f2fd19dd6"
  },
  {
    "url": "assets/js/16.579f3ba8.js",
    "revision": "e0d7756657c0bef27374f7758d307912"
  },
  {
    "url": "assets/js/17.56d38e5d.js",
    "revision": "0a4abf14d6320d51092c747c419b8511"
  },
  {
    "url": "assets/js/18.21951183.js",
    "revision": "5f540170d18abd61bcae317a4db93e7b"
  },
  {
    "url": "assets/js/19.3702ce6e.js",
    "revision": "dac43f8b2e2b37435a05fcf75bf2a37a"
  },
  {
    "url": "assets/js/20.be1521b3.js",
    "revision": "be2c938d58b7f39b7f4a052d6669af48"
  },
  {
    "url": "assets/js/21.67d5c92f.js",
    "revision": "8d6371cd2b8dd5de2b7ac51ac1beff7e"
  },
  {
    "url": "assets/js/22.f9c20a3a.js",
    "revision": "26af98cefd69445ff032a2be3d39e66e"
  },
  {
    "url": "assets/js/23.13e70051.js",
    "revision": "0350b5baed2f3f42b3a7f53e2538322c"
  },
  {
    "url": "assets/js/24.8fdea6cc.js",
    "revision": "a5fc5dd95e2f89f2cc0e0e0e9a107b49"
  },
  {
    "url": "assets/js/25.1da3f57f.js",
    "revision": "2388cfdf9e4a70a68b48b2447cbc3c24"
  },
  {
    "url": "assets/js/26.fcffc69a.js",
    "revision": "4e63803fec06cf5fad17c4abe95b5d28"
  },
  {
    "url": "assets/js/27.f0a9bb4c.js",
    "revision": "4b1a706f9b15b433a318ccabdeb33aa6"
  },
  {
    "url": "assets/js/28.c0634476.js",
    "revision": "ec53b300e549ccce9f63a1e4327bf4ee"
  },
  {
    "url": "assets/js/29.4183b155.js",
    "revision": "950317cf06965fbacbbc2b5f502a121a"
  },
  {
    "url": "assets/js/3.d48b7f27.js",
    "revision": "6539f955650e869e470e1270b39e58ea"
  },
  {
    "url": "assets/js/30.c1650825.js",
    "revision": "56301222d54d334a4b013e001f17b8e8"
  },
  {
    "url": "assets/js/4.34811ebf.js",
    "revision": "d4a185a523a121206e18855af35d674f"
  },
  {
    "url": "assets/js/5.1df1f930.js",
    "revision": "c02125cb52b2d595b0b1371abc5fe4cc"
  },
  {
    "url": "assets/js/6.5e6ef69d.js",
    "revision": "b5a68a749da8e7d73210106299d6d538"
  },
  {
    "url": "assets/js/7.461c3f3f.js",
    "revision": "3402c2e3b3c76db0a19226bc0e5535cd"
  },
  {
    "url": "assets/js/8.19044bdd.js",
    "revision": "165ed58a06063bed0556f2dc6c56d74d"
  },
  {
    "url": "assets/js/9.7319a989.js",
    "revision": "c9c8cf8e4feb78b4b345a833d4262ff5"
  },
  {
    "url": "assets/js/app.861d1d05.js",
    "revision": "d12959d23f5defb1912d662983bd6070"
  },
  {
    "url": "categories/index.html",
    "revision": "1a7072c0a232eeb0d5ffed6f9143b6a1"
  },
  {
    "url": "categories/介绍/index.html",
    "revision": "1a253cb89ccf6d764b53fe8d25c30310"
  },
  {
    "url": "categories/留言板/index.html",
    "revision": "50415ceb8214b4746d5825bc240a7fed"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "64beb8518b58f5ecb91c2e568e8cf674"
  },
  {
    "url": "categories/项目/page/2/index.html",
    "revision": "0646065a0b274cf2806c771985397b0f"
  },
  {
    "url": "css/style.css",
    "revision": "af22774d02b80b050ebaff0f32e8c903"
  },
  {
    "url": "docs_img/vuepress-reco主题个人博客搭建/25838e706c5f4d17a6d3b88491b278c0.png",
    "revision": "10b9f22401c528de075d9700a0d0a573"
  },
  {
    "url": "docs_img/vuepress-reco主题个人博客搭建/3694347aeee34888b497fc58a8fd98a8.png",
    "revision": "85905639c1a9195f7b7abb12bc31c712"
  },
  {
    "url": "docs_img/vuepress-reco主题个人博客搭建/529226d916124315b847e9a8c94b0b3e.png",
    "revision": "84fae66cd3d6d7a8b1513fedfd428c2a"
  },
  {
    "url": "docs_img/vuepress-reco主题个人博客搭建/6323c849d51841058c88112f4fe63c0f.png",
    "revision": "fe9cd4232a67b0e92ed6218c389108ed"
  },
  {
    "url": "docs_img/vuepress-reco主题个人博客搭建/a4ba69c033a540e894e6551a52afd328.png",
    "revision": "c1072931aed1d779634396795a2cd407"
  },
  {
    "url": "docs_img/vuepress博客部署/1947d22984524bbcaf4b19d2129a7f73.png",
    "revision": "c66a9ed552546a1b66db9a85c928c125"
  },
  {
    "url": "docs_img/vuepress博客部署/1f1c131ebde04cdeb5a3687e05971a79.png",
    "revision": "6a5cbddf161b36339da2d9130ae332f8"
  },
  {
    "url": "docs_img/vuepress博客部署/3b2338633c414983a9fe5f41eb21925e.png",
    "revision": "7b13819f2df6b9dfa45012995338df27"
  },
  {
    "url": "docs_img/vuepress博客部署/4e34188004ab44f7b6c57b69e1a99a05.png",
    "revision": "7d962197a4c8b3473d3c3c4c3992f7c8"
  },
  {
    "url": "docs_img/vuepress博客部署/5e1353de7e284ecfbfcab46bd85ed373.png",
    "revision": "03a747a486e00928bfc5280b3f8d4d5d"
  },
  {
    "url": "docs_img/vuepress博客部署/63ea768d4f68409ca64e112112f37244.png",
    "revision": "f002ee0de8031b56951f57561b4cb6f0"
  },
  {
    "url": "docs_img/vuepress博客部署/683e59b946c6424e9733383b40bd4d60.png",
    "revision": "cc15100c0f5b32e016835bb8d41dc222"
  },
  {
    "url": "docs_img/vuepress博客部署/c3e6b238a3124f35bb55d9a7a5406e61.png",
    "revision": "5917ce56d53b45b7d0d75908be2a29f5"
  },
  {
    "url": "docs_img/vuepress博客部署/cc155ccaad954937b4fe3ff3b2307910.png",
    "revision": "ed6c5c4a2a566539d60c7e3213202127"
  },
  {
    "url": "docs_img/vuepress博客部署/daf6685e398b45c9b66061827066bed8.png",
    "revision": "76e505118b0b4974fc38a629b7951502"
  },
  {
    "url": "docs_img/vuepress博客部署/db26f0df737c49eabbd0260ed7225071.png",
    "revision": "77a4a936c8b2a0ccd9784ad64e77543a"
  },
  {
    "url": "docs_img/vuepress博客部署/de409e7004f640d6aaba27d973765922.png",
    "revision": "914c7dc5925e9f7360ccdce8ea4e3277"
  },
  {
    "url": "docs_img/vuepress后续补充/b9c016b0d810493fbf9775e3b0e3572b.png",
    "revision": "e07eb6f7a04b708d1aa362c054440627"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "3a00dca4ea6fa41d95295070d18c704d"
  },
  {
    "url": "docs/vuepress搭建个人文档/index.html",
    "revision": "a413aee5b628fd5806a4efbe94e67248"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress-reco主题个人博客搭建.html",
    "revision": "a4e5ddbabff0cd0e552c75c16a0ebfaa"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress博客部署.html",
    "revision": "5d82f54f3bccfe0a445ce74bb772df10"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress后续补充.html",
    "revision": "a243d3e014fd0520d9156f491ad8eac1"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress常用插件.html",
    "revision": "9a500585b297538f77d149af89040f5d"
  },
  {
    "url": "docs/以flask为后端的博客项目/index.html",
    "revision": "3e271d7ea65d53165169650a2d3b5583"
  },
  {
    "url": "docs/以flask为后端的博客项目/前后端分离MVC模式.html",
    "revision": "a0d6210e98e754c12bb734075007afa8"
  },
  {
    "url": "docs/以flask为后端的博客项目/前端部分之介绍页面.html",
    "revision": "fb75c819a9aff60cf2aac866bc3f2da5"
  },
  {
    "url": "docs/以flask为后端的博客项目/前端部分之娱乐休闲.html",
    "revision": "ac18e54e65e0b47c74b77ae92dc04af1"
  },
  {
    "url": "docs/以flask为后端的博客项目/前端部分之星云笔记.html",
    "revision": "2eced466a5201f45ef9498c6631f4e21"
  },
  {
    "url": "docs/以flask为后端的博客项目/前端部分之首页界面.html",
    "revision": "c0dcff8dea283768fd7272a16d0d9a55"
  },
  {
    "url": "docs/以flask为后端的博客项目/后端部分之星云笔记.html",
    "revision": "eb995e61e2225e62a463a2b0fb461362"
  },
  {
    "url": "docs/以flask为后端的博客项目/后端部分之登录实现.html",
    "revision": "a1dd04908c6870dcca9d923c37530bd0"
  },
  {
    "url": "docs/留言板.html",
    "revision": "97e05808296c091973f3ef5a2842fcc8"
  },
  {
    "url": "img/B.jpg",
    "revision": "37afbe220346db04a915724d0ea944d0"
  },
  {
    "url": "img/bg.jpg",
    "revision": "0747855cc5d27e082e4476eb21d9f28b"
  },
  {
    "url": "img/bg2.jpg",
    "revision": "7de81bfdf64029f3a9dc0b06c2ebf758"
  },
  {
    "url": "img/logo.png",
    "revision": "dfc14df4a26505f1fa294571dae0655f"
  },
  {
    "url": "img/星石传说.jpg",
    "revision": "378983e8d84ffb8e6989dfb23e24ebbc"
  },
  {
    "url": "img/知乎.jpg",
    "revision": "1720d6e9384e45c2007106e8f72f5c68"
  },
  {
    "url": "img/背景.jpg",
    "revision": "1b84b14271be05dcb3aef5387a0e6a87"
  },
  {
    "url": "img/花草有情.png",
    "revision": "3afcf1af591d1d77549ce27beeb40e13"
  },
  {
    "url": "index.html",
    "revision": "92b255e4ba1614a8c5994ddb0ab2a0d7"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "28c437c5e1245f57af2733b7dd548bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "fd002f3b6410cdd9f92dad01db8c33f1"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "22b712bf63a77c052e2307e59c935fee"
  },
  {
    "url": "tag/介绍/index.html",
    "revision": "d0b9ce629cef3dede7273e3843229af0"
  },
  {
    "url": "tag/留言板/index.html",
    "revision": "434ca2dcbc265832efde71fad83f3f32"
  },
  {
    "url": "timeline/index.html",
    "revision": "fd9b9fd3f024fa5bbf46822779238021"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
