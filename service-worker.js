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
    "revision": "64b49020096b814e0013937c4f0cff7b"
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
    "url": "assets/js/1.5d58ef4f.js",
    "revision": "2e61c4eb7b240df8a20fcf48c8cdcb72"
  },
  {
    "url": "assets/js/10.ea0a4944.js",
    "revision": "adc96d2cb295a4120742e5f0b3203f56"
  },
  {
    "url": "assets/js/11.8bb40106.js",
    "revision": "75d4582b18e08cb7bf89142fe13a879b"
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
    "url": "assets/js/14.9e39cdf3.js",
    "revision": "49e7013500cd648dee532894ae0cf3d4"
  },
  {
    "url": "assets/js/15.0d53fa64.js",
    "revision": "070b04cddc46ea91765c56daa4a4fe6a"
  },
  {
    "url": "assets/js/16.5e7e3d44.js",
    "revision": "acc110faa497eba3d4b948ea7ae4fc0c"
  },
  {
    "url": "assets/js/17.809601c0.js",
    "revision": "a294edf492c97826e58f8a53a6e59019"
  },
  {
    "url": "assets/js/18.22d8e5c2.js",
    "revision": "7a61fa4f4e91ccd0dd63f6e5209342ab"
  },
  {
    "url": "assets/js/19.669efb31.js",
    "revision": "cfa5ec4906e02affec5dc7488d9800e9"
  },
  {
    "url": "assets/js/20.95edf71b.js",
    "revision": "9d271422b57b83ae2fce536dccfe3b00"
  },
  {
    "url": "assets/js/21.5173fac6.js",
    "revision": "f930036f1f1b2ef6327390b53009dbfd"
  },
  {
    "url": "assets/js/22.f04792aa.js",
    "revision": "1ebea0b89185b4ecce543795f987fe90"
  },
  {
    "url": "assets/js/23.9b5a7880.js",
    "revision": "b2132f1632189a14fd7f57a49324f5b7"
  },
  {
    "url": "assets/js/24.28adb7fd.js",
    "revision": "03df1281c54855cb28185c380c1536b0"
  },
  {
    "url": "assets/js/25.290e859f.js",
    "revision": "c91cc75eea245f346f10aa01156306d3"
  },
  {
    "url": "assets/js/26.c666fce6.js",
    "revision": "d80a1f6a8714cf1b0ef8b544cc65df2c"
  },
  {
    "url": "assets/js/27.75fbf0b4.js",
    "revision": "c8dcf30456eaab6c5b824e2f3f6129ea"
  },
  {
    "url": "assets/js/28.a9df191c.js",
    "revision": "8bffad757f667460ed25fffd507f25cc"
  },
  {
    "url": "assets/js/29.109d7d32.js",
    "revision": "85f5fa8eb6fd2653ae1017d8e63b7a8e"
  },
  {
    "url": "assets/js/3.1d401efd.js",
    "revision": "adf729d86f0f7825370a188f3a0b62d6"
  },
  {
    "url": "assets/js/30.29bc3c96.js",
    "revision": "534d504f84138fb5b7db3b4e55d0b0a6"
  },
  {
    "url": "assets/js/31.9203df25.js",
    "revision": "1d205935a03c8d975749e36084ec6f5a"
  },
  {
    "url": "assets/js/32.fb86891e.js",
    "revision": "6b72b33bd719823fa8b062717bedf2d7"
  },
  {
    "url": "assets/js/33.9efb1a28.js",
    "revision": "522fd6defb6aba71b1c53a93247efc2f"
  },
  {
    "url": "assets/js/34.74c15455.js",
    "revision": "cfceb3c43a1a1050d8b8dcffb446e272"
  },
  {
    "url": "assets/js/35.c9cb06cc.js",
    "revision": "d3a2f56eef54be7f9f91720c16fd1c60"
  },
  {
    "url": "assets/js/36.0ec7fc03.js",
    "revision": "34221b39f8c33f1b5e93ba0dc29e4a73"
  },
  {
    "url": "assets/js/37.6fb87db9.js",
    "revision": "dea1c04426f6eedc9ab04e503ec2565f"
  },
  {
    "url": "assets/js/38.4fa0e8a4.js",
    "revision": "077bde292b8924daf7632db3420fc3e8"
  },
  {
    "url": "assets/js/39.ab10d1d9.js",
    "revision": "cd7b38c78e47708fc7a601e60464ef4e"
  },
  {
    "url": "assets/js/4.ecab215c.js",
    "revision": "3a9dbd1f3acdab0de75ca2fcd02cf552"
  },
  {
    "url": "assets/js/40.4403d8fd.js",
    "revision": "9803434a43ebc3a01fd3c793117f0425"
  },
  {
    "url": "assets/js/41.b77cb84d.js",
    "revision": "31f3ae3de49f12c0e8f41887934ef2a1"
  },
  {
    "url": "assets/js/42.e50d24f9.js",
    "revision": "27719cb354821117dae5eb41149cbb3c"
  },
  {
    "url": "assets/js/5.9c8d591a.js",
    "revision": "b36f3560281b052ff0e1a6af2cfc9afa"
  },
  {
    "url": "assets/js/6.72e9cdce.js",
    "revision": "af6f296058c1c68cd3dd17ad1afbb57b"
  },
  {
    "url": "assets/js/7.33d3d58d.js",
    "revision": "33a9152ea86598dd42048bd252ec0927"
  },
  {
    "url": "assets/js/8.68313a62.js",
    "revision": "9cd04ce1269fa5e39ecf66a83d8aaf1a"
  },
  {
    "url": "assets/js/9.7319a989.js",
    "revision": "c9c8cf8e4feb78b4b345a833d4262ff5"
  },
  {
    "url": "assets/js/app.c378bf8d.js",
    "revision": "e99742f069313e4099041c525716e3d1"
  },
  {
    "url": "categories/index.html",
    "revision": "620fbd9ad491b25685cb83a3c66f118f"
  },
  {
    "url": "categories/介绍/index.html",
    "revision": "adf82db86aa67a2a0b357fa68148ac9e"
  },
  {
    "url": "categories/留言板/index.html",
    "revision": "bcb829f052ac8f0c016edf8db7ed20b2"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "f20c944670be87a8f04e5712dde299bf"
  },
  {
    "url": "categories/项目/page/2/index.html",
    "revision": "9f99ecda074d1569e0e5bddad00329bf"
  },
  {
    "url": "categories/项目/page/3/index.html",
    "revision": "27054f2dd786d4f43e6d1fbbd0d2217c"
  },
  {
    "url": "css/style.css",
    "revision": "af22774d02b80b050ebaff0f32e8c903"
  },
  {
    "url": "docs_img/flask项目的部署/0435df4233c44ccb86d197824c4cce7f.png",
    "revision": "8d3e1d1f75e406f8bd12d5c8844af2d5"
  },
  {
    "url": "docs_img/flask项目的部署/0aeb4ba9bce1485b847219377a681154.png",
    "revision": "2cc03e1f5b3634e096da0c9c43fc6897"
  },
  {
    "url": "docs_img/flask项目的部署/1819bfff8c3f476b908c7f6f003f3b74.png",
    "revision": "38b6f3cdc91aec7b43b9f9fbbf44319f"
  },
  {
    "url": "docs_img/flask项目的部署/2579b02f517c458e9990fc3c422f8972.png",
    "revision": "29c061903e9d0d10fb4e2e1fe221d981"
  },
  {
    "url": "docs_img/flask项目的部署/2e29c2e627ce40b4bbbca90c49110254.png",
    "revision": "8563b62e3a0cc7e5514ac241a34e433d"
  },
  {
    "url": "docs_img/flask项目的部署/41a3259dc01c4a878109ab193b44159b.png",
    "revision": "f94883d673377c08c4f6b2eb5057667c"
  },
  {
    "url": "docs_img/flask项目的部署/440a1826a9b54c989fea237bcb7e0487.png",
    "revision": "59f30c58054adcefc4f68987c75c80e2"
  },
  {
    "url": "docs_img/flask项目的部署/57e6831f85674b05b2f119992bb66f62.png",
    "revision": "67285eefafd3d4592e08700e2a3beae1"
  },
  {
    "url": "docs_img/flask项目的部署/5d7ae436cad648838ef1b346aa8e1e5f.png",
    "revision": "8e8c9ea30ca1f21425ee393ebaa4430e"
  },
  {
    "url": "docs_img/flask项目的部署/5fc9190ea47948ac8dc323c201496ce4.png",
    "revision": "f444eaf2cbcdfa076ea68ea1cd595ddd"
  },
  {
    "url": "docs_img/flask项目的部署/615331f1fcbf4d97a8472f53e7dc28b5.png",
    "revision": "48fbfa0762611d0bd8d2b55b1897d347"
  },
  {
    "url": "docs_img/flask项目的部署/65189323d8ba45209ac612b31c754302.png",
    "revision": "f0f08f5668467748908229191054eabf"
  },
  {
    "url": "docs_img/flask项目的部署/8aa99b0c3f2046ed970bf75db7834051.png",
    "revision": "571e362df824adf58a606075dcf36c9c"
  },
  {
    "url": "docs_img/flask项目的部署/b6f0c26bfb244809be032dd158b15d97.png",
    "revision": "088aa386c9244b482ad90c2be343aa95"
  },
  {
    "url": "docs_img/flask项目的部署/b73981e8f5a04ab98dc7da59e8500776.png",
    "revision": "627ac76328552c5414451fe9105c30d9"
  },
  {
    "url": "docs_img/flask项目的部署/b86dde47c56b4c558c922e235baf28a8.png",
    "revision": "0298ab3501b5d8c2b40c84289fd52060"
  },
  {
    "url": "docs_img/flask项目的部署/c353279b270a453faf1bc80eb6e5d168.png",
    "revision": "9d408aa148a0bef8d39b5ae71752f066"
  },
  {
    "url": "docs_img/flask项目的部署/d64ec999fc3d42c5ad9e1d540fb0fa58.png",
    "revision": "7b93a3efd2938615a5cf25fe357dc6cb"
  },
  {
    "url": "docs_img/flask项目的部署/e2c215e736ef4d14b73410834b6bf90f.png",
    "revision": "dba044bcddf6638ef72c230b6f93c8e5"
  },
  {
    "url": "docs_img/flask项目的部署/f3cadd48994b4e2f8e80f2b863c43003.png",
    "revision": "6c139785427f2cbfa3082586095a237f"
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
    "url": "docs_img/三叶青图像识别项目/00215b90e255479a849ae062431c00ea.png",
    "revision": "307905fe92410847775f0dda35a1d8b8"
  },
  {
    "url": "docs_img/三叶青图像识别项目/043df335b52c41b091f50282bc01e910.jpg",
    "revision": "3b274119c217d20e29905197f5039ab6"
  },
  {
    "url": "docs_img/三叶青图像识别项目/1004443d9ece4272bea6d2bb57fa691d.png",
    "revision": "be515975338d37c6c28a362dbbc97f3a"
  },
  {
    "url": "docs_img/三叶青图像识别项目/1119d14e9068459e83adc0f2a11a811a.png",
    "revision": "5d86b6b731ca12f39d5673e6f74d1c14"
  },
  {
    "url": "docs_img/三叶青图像识别项目/16f9fdac0e1546c9964ca2b05f7b4bfa.png",
    "revision": "2801b6bd567d6ef4aa0da8b7af2cff09"
  },
  {
    "url": "docs_img/三叶青图像识别项目/184f86dab8964a7db9507f4cb6ee16f4.png",
    "revision": "5d77e9e71d1eb69376b6c1ddc9c44216"
  },
  {
    "url": "docs_img/三叶青图像识别项目/18a2e4ce39a1401389854bf1b1630abf.png",
    "revision": "1d58c2acf249370577ad9e56803c6679"
  },
  {
    "url": "docs_img/三叶青图像识别项目/2226fb4656d8467c87773e207692145d.png",
    "revision": "1eb9cb6a2a94b0c84c197b53d007c29b"
  },
  {
    "url": "docs_img/三叶青图像识别项目/253278228ca84436aad35f8f045e4716.png",
    "revision": "f1167a52fb94dbaf224f30ed80fb7089"
  },
  {
    "url": "docs_img/三叶青图像识别项目/2715ae99544943c8a93a1ce735595a65.png",
    "revision": "fb97049acc40a30ed6948953bb9708ce"
  },
  {
    "url": "docs_img/三叶青图像识别项目/27c0358ad3724148afa657a8434d616c.png",
    "revision": "d6c66bdd60f21b93e5abe0beb671efa8"
  },
  {
    "url": "docs_img/三叶青图像识别项目/288e7863bf7341b68ba444fbf64d74dd.png",
    "revision": "f063c367561ef63bc9f3a0a97b954f3e"
  },
  {
    "url": "docs_img/三叶青图像识别项目/327ed36855f749f489cad9361addc6d6.png",
    "revision": "beb083dcc032a938219ba5e96154aeb5"
  },
  {
    "url": "docs_img/三叶青图像识别项目/34d9d7503c444ddd804ce692db4c8203.png",
    "revision": "d1a7300809cec29831b4794b48790332"
  },
  {
    "url": "docs_img/三叶青图像识别项目/3bf6bf94af1f4f2d99d7d9eafd2a8243.png",
    "revision": "fc52f34a60e5e0663711611d6d93fc4b"
  },
  {
    "url": "docs_img/三叶青图像识别项目/3c6dcf67e76b433ba65e68afea8f2bba.png",
    "revision": "9192a206c0fedf9875f2a41a58a5e621"
  },
  {
    "url": "docs_img/三叶青图像识别项目/3ffdaa18950741fca4e38141e48412c1.png",
    "revision": "3dafd707a41d35c25e4522aab7025c29"
  },
  {
    "url": "docs_img/三叶青图像识别项目/44e1165803ea461aad09fab248eac4bd.png",
    "revision": "4cad9ba2abe0407a71e0c929d38b0750"
  },
  {
    "url": "docs_img/三叶青图像识别项目/480a58b5f169407a97668013138eee8d.png",
    "revision": "efac12ef78df4b5772331b33221f1674"
  },
  {
    "url": "docs_img/三叶青图像识别项目/4cb6f440a2814c37a56f7c34a234e080.png",
    "revision": "f06318c81229ce6d9796e5a22f52e49e"
  },
  {
    "url": "docs_img/三叶青图像识别项目/51246f4bd27a4a8e9b920828a441066c.png",
    "revision": "d02554ebca03b7096f52f5c971ecf662"
  },
  {
    "url": "docs_img/三叶青图像识别项目/5461f5f741c94c38961a7751bc53d77a.png",
    "revision": "46199d212f748f3225292b27638439f6"
  },
  {
    "url": "docs_img/三叶青图像识别项目/5882c55d3a4a4e52965cdd9bbb7b73f7.png",
    "revision": "57aff12558439e40d6f53e2ef396788c"
  },
  {
    "url": "docs_img/三叶青图像识别项目/5d4688c555f046cb822c5b8e8e4e372a.png",
    "revision": "96cd93032f1efcd54ff18307b993ac56"
  },
  {
    "url": "docs_img/三叶青图像识别项目/5e35afa3f8d94ec29aaf88024624e60e.png",
    "revision": "ffcdfd0ca7135abb8879eb6b0e2363b0"
  },
  {
    "url": "docs_img/三叶青图像识别项目/5e598c6c5eb94d5d91d7c1f00f98174f.png",
    "revision": "52ef73310e2cdf05cf2156aadbc8b541"
  },
  {
    "url": "docs_img/三叶青图像识别项目/66142e7b2b084395a2a3bdea439fab04.png",
    "revision": "8579140c84d7f4b7902ccd409f2117d1"
  },
  {
    "url": "docs_img/三叶青图像识别项目/69d5b1aad04e4f48b3c9cacbed53d4ff.png",
    "revision": "21253e6ce29615ff41481aa7deaab39e"
  },
  {
    "url": "docs_img/三叶青图像识别项目/6bf62ff703e0441f99e9f7c868950ea7.png",
    "revision": "4567fe7c210aa00541b83757cbdf4a0d"
  },
  {
    "url": "docs_img/三叶青图像识别项目/6c8679c2cfb146129f5ed53172a17763.png",
    "revision": "ea0647cc2bcb8b2cb05b59099ba566cb"
  },
  {
    "url": "docs_img/三叶青图像识别项目/6fd5512fcefe4c54b4cf5571552048dd.png",
    "revision": "8eefc0f6d5bc4ac7b1358b04938e874c"
  },
  {
    "url": "docs_img/三叶青图像识别项目/70301867b15848e7b4bfaf46a0784b9c.png",
    "revision": "67117efb37290f9a1b7adcc3b03adb3f"
  },
  {
    "url": "docs_img/三叶青图像识别项目/706fb4610ecf423f9253d0ccc081d6ca.png",
    "revision": "3b4e78889c690c52a28e999139ebd30f"
  },
  {
    "url": "docs_img/三叶青图像识别项目/74ef8ab7d24e4cfbaaf03e6f116bf41a.png",
    "revision": "b435e7de0a733cf10d9a5f205f95cae9"
  },
  {
    "url": "docs_img/三叶青图像识别项目/751ed842c81341d8972463550e39224f.png",
    "revision": "8f3ab35afd36dc7437a8b3fb0484e3bd"
  },
  {
    "url": "docs_img/三叶青图像识别项目/77d4120fde9c43b8b61f957a1df413d4.png",
    "revision": "6d67f28be99e3ae3f1463c119974932a"
  },
  {
    "url": "docs_img/三叶青图像识别项目/78098bc53a9d412fa9b1cbc76c05889f.png",
    "revision": "dbdb1a8255777b1695fc99120f388143"
  },
  {
    "url": "docs_img/三叶青图像识别项目/7df1300cbe2245368db122452850dbba.png",
    "revision": "6c63b022eebec6056452f9284cd1c771"
  },
  {
    "url": "docs_img/三叶青图像识别项目/81d732436d0d495a86c22097ebe11811.png",
    "revision": "a7d3e94f6053d8f0e7dd5cf60e4c6916"
  },
  {
    "url": "docs_img/三叶青图像识别项目/82c80b785f96491ea09bb86ef95f1638.png",
    "revision": "dfb0e57e5b1667ed1c46df019351eb4a"
  },
  {
    "url": "docs_img/三叶青图像识别项目/83b2b6a14fd64b748d0a73a1baa18c17.png",
    "revision": "224dd2701025a1484ae082e9f1404a3b"
  },
  {
    "url": "docs_img/三叶青图像识别项目/83ce8f7eba1d48cc961d52c142cb1fbb.png",
    "revision": "64129192488de3610a11244bc8899903"
  },
  {
    "url": "docs_img/三叶青图像识别项目/87c82e410731446a86d8e826bb46c359.png",
    "revision": "33877e5ec8691ef2f8da3bff0f75357f"
  },
  {
    "url": "docs_img/三叶青图像识别项目/8a668eb7931c4c85853164b75cb1a18f.png",
    "revision": "a2948136ff028496af1cdf6a4233ca7d"
  },
  {
    "url": "docs_img/三叶青图像识别项目/8bd36f499a5349578a4c012203d96b80.png",
    "revision": "daa609bff5b5b6537710cc42ff4e8e14"
  },
  {
    "url": "docs_img/三叶青图像识别项目/8dd379fd6b434c209bf6c0c9927f3e9c.png",
    "revision": "a790bd698ccd229b9e67b90b8a866b11"
  },
  {
    "url": "docs_img/三叶青图像识别项目/927002656bab42849ebe4aba254af54e.png",
    "revision": "b7a01fecf5e8f4df14c5bc60b43bb004"
  },
  {
    "url": "docs_img/三叶青图像识别项目/974146bca7394fd281b247d63f87770f.png",
    "revision": "17a928fd73dae9993387e4e46093d58a"
  },
  {
    "url": "docs_img/三叶青图像识别项目/9ca3339b3ede475297090093cd02fa71.png",
    "revision": "e956fd8d0dcdafe0f26f9f3074dcc998"
  },
  {
    "url": "docs_img/三叶青图像识别项目/9efe90733d1e488594b92bf711cd17e0.png",
    "revision": "a946b468d2d1f22f322c081611bd5aab"
  },
  {
    "url": "docs_img/三叶青图像识别项目/9f9c5c7f965d476284f0e4d33a930e59.png",
    "revision": "f868860ba3df8ece422bc8394875e56e"
  },
  {
    "url": "docs_img/三叶青图像识别项目/af08a8659c834f958f891deccaa0ab91.png",
    "revision": "08cbe14ddad326f8b7c12302c42dcfb7"
  },
  {
    "url": "docs_img/三叶青图像识别项目/b100a88e0a1949408074f2c8bc96ff35.png",
    "revision": "8f1a89bb923dec163a17eb28d5dc8366"
  },
  {
    "url": "docs_img/三叶青图像识别项目/b3f96b9c8f53474aaffd5263821ab519.png",
    "revision": "acc27a2c2f04d9018a356ab1c61afabc"
  },
  {
    "url": "docs_img/三叶青图像识别项目/b7b5680449a94d1fb802bb37bf8f9bed.png",
    "revision": "6d41852e3ef09affa9b558361186584a"
  },
  {
    "url": "docs_img/三叶青图像识别项目/ba825cc06c854f40ac3ef5bd0065d681.png",
    "revision": "188c192a9e28bdf17ece5f59a5b2d3bd"
  },
  {
    "url": "docs_img/三叶青图像识别项目/c19615aa313b4485bc4af04dac6eae0a.png",
    "revision": "1f8ca5e3e799cf016b1f57a1de3c0bab"
  },
  {
    "url": "docs_img/三叶青图像识别项目/c5769a97e62e46949679487f14725fe6.png",
    "revision": "5bbf342c2042dee2c5d4a1301b92e043"
  },
  {
    "url": "docs_img/三叶青图像识别项目/cd42ab8b077c46e2addf6419ad0678c7.png",
    "revision": "830b754c0e33cfa11ca3f89a57e608f3"
  },
  {
    "url": "docs_img/三叶青图像识别项目/cda8496dfd264bd29a60467843bf24a8.png",
    "revision": "fe1d3c9b54b7e44a03cfd85f8b44d8a0"
  },
  {
    "url": "docs_img/三叶青图像识别项目/cde3c477078b4e85b46cc8011eee51cf.png",
    "revision": "5da60f3152eb6c87ac27540bfbd93c08"
  },
  {
    "url": "docs_img/三叶青图像识别项目/cff7d348cc404f599343e4896c2fb395.png",
    "revision": "621e82a2734828e27a23d11656030810"
  },
  {
    "url": "docs_img/三叶青图像识别项目/e289b0f363314e4ab24b50d33a25f4c6.png",
    "revision": "20501b22b5bfd41ebee057ac86a96d3c"
  },
  {
    "url": "docs_img/三叶青图像识别项目/e2bf9b6455944255b2c3de4ca59a3bb3.png",
    "revision": "fe9a652b58622c6478c7459e4f7c85bc"
  },
  {
    "url": "docs_img/三叶青图像识别项目/e43b59c0db9446df97b608841bf9e5eb.png",
    "revision": "80f14153d37845963d95c7f3b5c87a91"
  },
  {
    "url": "docs_img/三叶青图像识别项目/e6a9c6c39dd64e1a87bbca9b9d2a2e43.png",
    "revision": "8362e2c9c91bee8cd69e08b413c6584c"
  },
  {
    "url": "docs_img/三叶青图像识别项目/ec2f94434eaa44449c28068ddbe84847.png",
    "revision": "49006598890534a1c54a15e159f4fd1e"
  },
  {
    "url": "docs_img/三叶青图像识别项目/f434688ffbce4c4cb4cad8ed0dfd25ac.png",
    "revision": "805ed824d1010272e4a36120c441babb"
  },
  {
    "url": "docs_img/三叶青图像识别项目/f4a03962315d4bd49f586187c1ea80f4.png",
    "revision": "e21a7c8c943de46a6430b3c10dda02d9"
  },
  {
    "url": "docs_img/三叶青图像识别项目/f6ef73f58dd64b149c13341c8074c333.png",
    "revision": "b1c3436d89a70249f772d4c945d9ee1a"
  },
  {
    "url": "docs_img/星云小窝项目启动/0671f3ab048d43a8a4a679e14464e498.png",
    "revision": "c7635807baead7722942d088302d9508"
  },
  {
    "url": "docs_img/星云小窝项目启动/0cd0b33076084f8d9af558a118be9443.png",
    "revision": "c4e264e8485e994bd1893e7e2cab92bd"
  },
  {
    "url": "docs_img/星云小窝项目启动/0eee4a55247f4101b375404ccf18a284.png",
    "revision": "e2498c52b81dc9a89daf055a13028f41"
  },
  {
    "url": "docs_img/星云小窝项目启动/15e60921dc4e46bbb2a2be8d3e58f8ac.png",
    "revision": "92f6f0ab2fcc90f4048d2ebc5267314d"
  },
  {
    "url": "docs_img/星云小窝项目启动/1711176130011.jpg",
    "revision": "a10b680902cc6c61cda6c8c3fa6c53d9"
  },
  {
    "url": "docs_img/星云小窝项目启动/1711176230944.jpg",
    "revision": "4303eb458e4026a1f582f498b0d68169"
  },
  {
    "url": "docs_img/星云小窝项目启动/1faeafe9954647b39da6d90529890ca5.png",
    "revision": "b728b4f16b5e612a0080ea22826e1296"
  },
  {
    "url": "docs_img/星云小窝项目启动/4d370f8edab6425eaaa6a0a446aa8dbd.png",
    "revision": "ed618b70ce0fac738a4a265302d4287e"
  },
  {
    "url": "docs_img/星云小窝项目启动/5d830e140f77430f821ed0d718b51cbc.png",
    "revision": "ba08eed7610c24a2ab7109ed44bb2738"
  },
  {
    "url": "docs_img/星云小窝项目启动/62ec72a4b4794bd48046feb54412f59d.png",
    "revision": "7c2e3a6184f2e3aed1abad66b57c9f10"
  },
  {
    "url": "docs_img/星云小窝项目启动/659453e646f44867b4e8ceeac549461f.png",
    "revision": "34b880704e981d7ea0606179bb9e6de5"
  },
  {
    "url": "docs_img/星云小窝项目启动/68491a37861b477c8d6ae53a09536553.png",
    "revision": "0e1a03f7db16ce52fefedd7c4d873210"
  },
  {
    "url": "docs_img/星云小窝项目启动/69358a547b6c496a93c7fe68b0bf89e5.jpeg",
    "revision": "8efaf95b8540dda74c3841e594c2052f"
  },
  {
    "url": "docs_img/星云小窝项目启动/6ad7ac66ba804ee285d7afe1d47bcedf.png",
    "revision": "1cf55106c2a6e580e9de48135cc484f8"
  },
  {
    "url": "docs_img/星云小窝项目启动/73ea1f6c8a6b4e20bb1a1b2727014ec9.png",
    "revision": "2607183f199dcdfa2ee3f62482928777"
  },
  {
    "url": "docs_img/星云小窝项目启动/812e56eed54948deae2d058595311e7c.png",
    "revision": "eaae7aa37145f5767d9bc7cd733fbcf5"
  },
  {
    "url": "docs_img/星云小窝项目启动/89575d2d8e3f4a2993e79efd4d4d3161.png",
    "revision": "8ced65be05deea735285cced38b4c135"
  },
  {
    "url": "docs_img/星云小窝项目启动/a033ed4a42ca4415a372efe4d3da98f6.png",
    "revision": "031c4d5349eca908a3974caa4e90491b"
  },
  {
    "url": "docs_img/星云小窝项目启动/ac50ff954de44fb19b1e6b7c1bf9472b.png",
    "revision": "9cbe474348a702f22082786349b42f4b"
  },
  {
    "url": "docs_img/星云小窝项目启动/aedc9c7631004dabae9db9960cbdda5d.png",
    "revision": "f9840faddb4bf347118708dcf990f470"
  },
  {
    "url": "docs_img/星云小窝项目启动/aef34889c171417fab7c2522c19a1d18.png",
    "revision": "60583e569142c26d5183aaf531a95bf0"
  },
  {
    "url": "docs_img/星云小窝项目启动/af82b467e3034547975cd11fd03605ab.png",
    "revision": "413fc2032099dcebaf006fc90ebd9689"
  },
  {
    "url": "docs_img/星云小窝项目启动/b20bff7a48314296ad98eb659204b5e7.png",
    "revision": "71308eb1c2e77ceb8e0a72f12c857e21"
  },
  {
    "url": "docs_img/星云小窝项目启动/b95d4148a3f74dc0a54f622ec2fedb4d.png",
    "revision": "e482300ccdc527a5a46a64c227f7d531"
  },
  {
    "url": "docs_img/星云小窝项目启动/bb6e5e750a96410989807a772c46c6cf.png",
    "revision": "b6940f65d3c21a95b35b39e8afa94038"
  },
  {
    "url": "docs_img/星云小窝项目启动/c757c911305f4a2bb46f46c460cd25ef.png",
    "revision": "a68f093e2adeea868dc4a58f34331cb6"
  },
  {
    "url": "docs_img/星云小窝项目启动/ce87407dc194435fb41f25270d0a9366.png",
    "revision": "bb7c76243f21108ea8892a5fc2c08cbc"
  },
  {
    "url": "docs_img/星云小窝项目启动/d9f0c9b90f664606a1e69b4cc456cd60.png",
    "revision": "f68f533eb909120ec7d5d40969e0bcaa"
  },
  {
    "url": "docs_img/星云小窝项目启动/e28589cb50e2440eb3eebee4e35bc22e.png",
    "revision": "b275f73ca8ad31e9bac599dea337b22b"
  },
  {
    "url": "docs_img/星云小窝项目启动2/1dd6af4f457b4e56a49ebb669c1fd168.png",
    "revision": "2645a2052464a38a2ffba4e97f752a5f"
  },
  {
    "url": "docs_img/星云小窝项目启动2/2ce1563cd803476bb2f796836efa70db.png",
    "revision": "de33a389cf8045d14e68c6b2ad763e63"
  },
  {
    "url": "docs_img/星云小窝项目启动2/3377150822c6465baae8a7a6cbf86900.png",
    "revision": "a7ecaf9666306c3f9957debae9c52687"
  },
  {
    "url": "docs_img/星云小窝项目启动2/55f88904253144d08c0ef8f73540ffb6.png",
    "revision": "ef267bf28d35ee2ff6e805a76c786b78"
  },
  {
    "url": "docs_img/星云小窝项目启动2/65e029d6832d470c8bf74ad889107717.png",
    "revision": "0512bf033c0108bf000fe7e7ee56dbb1"
  },
  {
    "url": "docs_img/星云小窝项目启动2/688fa0bd4313409a954fe8f653d3eff0.png",
    "revision": "225c89496a95223a95ba79589be61baa"
  },
  {
    "url": "docs_img/星云小窝项目启动2/7c98b165d35d467388f6290b2ddb1404.png",
    "revision": "431bdaccb20e5c250aaebb07dd00bfa0"
  },
  {
    "url": "docs_img/星云小窝项目启动2/b846f1689e7944e9b6a418ad0a4e10bc.png",
    "revision": "0f835e19abc04a27625e73beedff8b9b"
  },
  {
    "url": "docs_img/星云小窝项目启动2/e83c0b649aa94731a41c09e57389c515.png",
    "revision": "8717d6062f42b654075b3e1716e8b2f8"
  },
  {
    "url": "docs_img/星云小窝项目启动2/ef96fe63354d4bc7b2a954ac8ed1e448.png",
    "revision": "8fbc5b2bb94c3066ccb645a74135cedb"
  },
  {
    "url": "docs_img/星云小窝项目启动2/f1b0b610a81f4378bc87386c80270b88.png",
    "revision": "dfe37a9799f5b9dc71b0f0de5de70244"
  },
  {
    "url": "docs/guide/index.html",
    "revision": "95784c3d0caccf5d4e3eb3efc4381204"
  },
  {
    "url": "docs/vuepress搭建个人文档/index.html",
    "revision": "079e4d04e62c4140cd4e17787fecf5a3"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress-reco主题个人博客搭建.html",
    "revision": "b8d13e1498fbc50c82f183c75f682b24"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress博客部署.html",
    "revision": "8dcbe46d5ee9fc4206a74864067fc266"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress后续补充.html",
    "revision": "457f85c9e7e2ef4f5f321af20c0ed9a1"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress常用插件.html",
    "revision": "e98b763cbda362607d27820768b5324d"
  },
  {
    "url": "docs/vuepress搭建个人文档/项目的目录结构.html",
    "revision": "b59418b1a17ce8eeca7c781a31693a92"
  },
  {
    "url": "docs/三叶青图像识别项目/【1】构建图像分类数据集.html",
    "revision": "269dfff83f65e84cb48f06508cf91617"
  },
  {
    "url": "docs/三叶青图像识别项目/【2】模型训练准备.html",
    "revision": "e70537d3b17218c1ebb629315c6c09f3"
  },
  {
    "url": "docs/三叶青图像识别项目/【3】迁移学习模型.html",
    "revision": "b400b87192ecbfc83a81d44022d4bad3"
  },
  {
    "url": "docs/三叶青图像识别项目/【4】在测试集上评估模型精度.html",
    "revision": "94da53f50b24b72b04f7e78dbeacae04"
  },
  {
    "url": "docs/三叶青图像识别项目/【6】图像分类部署.html",
    "revision": "3cd7ca5af63dcfe4667fca14e986d309"
  },
  {
    "url": "docs/三叶青图像识别项目/【7】树莓派图像分类部署.html",
    "revision": "e430eabf4adc6c26b87920be2bb493ff"
  },
  {
    "url": "docs/三叶青图像识别项目/【8】相关补充.html",
    "revision": "a78630e15313fcfd54b8847e94e85367"
  },
  {
    "url": "docs/三叶青图像识别项目/index.html",
    "revision": "4c6333a21b6621b48285abafeff99c96"
  },
  {
    "url": "docs/三叶青图像识别项目/使用flask的web网页部署介绍.html",
    "revision": "1d313da65fd36f588a2b2612b3293d74"
  },
  {
    "url": "docs/三叶青图像识别项目/使用pyqt界面化部署.html",
    "revision": "fa5518f131e5501bc0bab67bb3a30039"
  },
  {
    "url": "docs/三叶青图像识别项目/微信小程序部署.html",
    "revision": "d2ce11c7ed88ec1ee58dd45d955ecfe6"
  },
  {
    "url": "docs/三叶青图像识别项目/阶段总结——基于深度学习的三叶青图像识别.html",
    "revision": "210178bd31e122de1f8c84293dd527be"
  },
  {
    "url": "docs/以flask为后端的博客项目/flask项目的部署.html",
    "revision": "7073482a21592c73cbfe6ba134ec2ce7"
  },
  {
    "url": "docs/以flask为后端的博客项目/index.html",
    "revision": "bb597e33f8b1755bd4a01ffaddf38779"
  },
  {
    "url": "docs/以flask为后端的博客项目/关于星云小窝这个项目后续的思考.html",
    "revision": "fa930a187217c1fc499add824ae3928c"
  },
  {
    "url": "docs/以flask为后端的博客项目/星云小窝项目-项目介绍.html",
    "revision": "6c112c6fdbf9796f49cd0dc641c4f4c2"
  },
  {
    "url": "docs/以flask为后端的博客项目/星云小窝项目-项目启动.html",
    "revision": "29614de50c7e7b147babe326bb8b388e"
  },
  {
    "url": "docs/以flask为后端的博客项目/星云小窝项目-项目结构.html",
    "revision": "008ca8c4280830c122d09962fb67d819"
  },
  {
    "url": "docs/以flask为后端的博客项目/讨论一些代码实现的逻辑.html",
    "revision": "45f881c338cff2ae4938a2707fbbd557"
  },
  {
    "url": "docs/留言板.html",
    "revision": "ed2fdded788c383084cdaa1bca45b6fc"
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
    "revision": "1f16e135b78f94a579e161df586bfc7e"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "44f2aa5ce2b44d61813cf99d0b9dacdc"
  },
  {
    "url": "tag/index.html",
    "revision": "079af9832b310bbe5eb1da3afef2adb7"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4d38cfbaca8145cfccc9cafa32b700f2"
  },
  {
    "url": "tag/介绍/index.html",
    "revision": "14cd18cb0d29708026043abc727b5390"
  },
  {
    "url": "tag/图像分类/index.html",
    "revision": "9be9dfaee8402951147e82390330e537"
  },
  {
    "url": "tag/图像分类/page/2/index.html",
    "revision": "d47af1d785e636fcad6861dd1743e31f"
  },
  {
    "url": "tag/留言板/index.html",
    "revision": "834f49d8b1c30114f33fb7cf011bd623"
  },
  {
    "url": "timeline/index.html",
    "revision": "600e9d3abd7079d1124d6809c1b3d9c5"
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
