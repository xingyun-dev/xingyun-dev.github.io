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
    "revision": "162cddb082cad4d0155cd47e5d87fc42"
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
    "url": "assets/js/12.c8122184.js",
    "revision": "7c20f2387f2b64703eb18cf7d813b431"
  },
  {
    "url": "assets/js/13.97938b40.js",
    "revision": "65051a5a1652a03f809071b1a7c44fc8"
  },
  {
    "url": "assets/js/14.34880c79.js",
    "revision": "84290fd61bee8488f40f0b9e1f6adcad"
  },
  {
    "url": "assets/js/15.0cc95f59.js",
    "revision": "30c21c45ecc9e154b31af30cdaccdd47"
  },
  {
    "url": "assets/js/16.f21c8a34.js",
    "revision": "b0ea583eb0a01ca4005ee3cfbd67a8e9"
  },
  {
    "url": "assets/js/17.eba7f4f8.js",
    "revision": "e71062c83ba8c43d8ea177391b87b8b5"
  },
  {
    "url": "assets/js/18.8881348f.js",
    "revision": "4831062fe850a7941cf236173d53ba8a"
  },
  {
    "url": "assets/js/19.33103a1e.js",
    "revision": "70b54065645e301c35e06c541567a340"
  },
  {
    "url": "assets/js/20.95edf71b.js",
    "revision": "9d271422b57b83ae2fce536dccfe3b00"
  },
  {
    "url": "assets/js/21.fd6298fa.js",
    "revision": "19b1ccc79da61e0659d6175f8a71423e"
  },
  {
    "url": "assets/js/22.872d4bef.js",
    "revision": "7921db1a1be0ffda1e58a97176426e56"
  },
  {
    "url": "assets/js/23.9ad45fc3.js",
    "revision": "2afd8bb72065edeef5dcc9114bcf382b"
  },
  {
    "url": "assets/js/24.b3546e61.js",
    "revision": "68aad74bea76c49ef5aa50f3d2ec2d3a"
  },
  {
    "url": "assets/js/25.5473b23a.js",
    "revision": "2b2c3c66764b10c8e6320b2f3baa6731"
  },
  {
    "url": "assets/js/26.cafc511a.js",
    "revision": "7c9ecd24fd27f8064abf432678c414aa"
  },
  {
    "url": "assets/js/27.85f98a7b.js",
    "revision": "22349b13252c135ab401f5894acce12b"
  },
  {
    "url": "assets/js/28.9bfef25b.js",
    "revision": "2c86c3ed737ae9147832ab8da8b0e348"
  },
  {
    "url": "assets/js/29.e72e1b80.js",
    "revision": "57b4db36d027f674a8939e87489e132d"
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
    "url": "assets/js/9.77efff30.js",
    "revision": "fbec70f7a5cc030928cb6ce4110eeac2"
  },
  {
    "url": "assets/js/app.eb30d583.js",
    "revision": "32668d22be4605fef118451849080c42"
  },
  {
    "url": "categories/index.html",
    "revision": "4cb915fb26913a63efa3fccb0f258e7d"
  },
  {
    "url": "categories/介绍/index.html",
    "revision": "71f832d6654280603930b1f26662efde"
  },
  {
    "url": "categories/留言板/index.html",
    "revision": "03eb69a4f458432a10a5f79ff6180be3"
  },
  {
    "url": "categories/项目/index.html",
    "revision": "95a671361d1a492de39c952c2ecdc6de"
  },
  {
    "url": "categories/项目/page/2/index.html",
    "revision": "d23a6eab1dfe3ccddd9b5d27882fc926"
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
    "revision": "330c5dfdc5cc7bd1a148bc6f37cc2ebd"
  },
  {
    "url": "docs/vuepress搭建个人文档/index.html",
    "revision": "6de7e6bf6516bb266cfc07ac76c9d31e"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress-reco主题个人博客搭建.html",
    "revision": "2b380fc1a49100c0ecf0aa890f9dd740"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress博客部署.html",
    "revision": "4e0351aab69dc2734413b4b8a3a55e80"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress后续补充.html",
    "revision": "c75eb635453cb1c84d3e15242500d05c"
  },
  {
    "url": "docs/vuepress搭建个人文档/vuepress常用插件.html",
    "revision": "568b2d8fb8dcdc599ac19fb7a3f198d4"
  },
  {
    "url": "docs/vuepress搭建个人文档/项目的目录结构.html",
    "revision": "502c314250b469124cc2f036d24b7c99"
  },
  {
    "url": "docs/以flask为后端的博客项目/flask项目的部署.html",
    "revision": "22bfa5c126156c224eea9cf8ce502dfd"
  },
  {
    "url": "docs/以flask为后端的博客项目/index.html",
    "revision": "a45a832d273bf0f8073eed2b3a6f6ae3"
  },
  {
    "url": "docs/以flask为后端的博客项目/关于星云小窝这个项目后续的思考.html",
    "revision": "4db3127f3b708201aafd68f856556503"
  },
  {
    "url": "docs/以flask为后端的博客项目/星云小窝项目-项目介绍.html",
    "revision": "291814b1e38c2c65c8c4d8c5980a4bca"
  },
  {
    "url": "docs/以flask为后端的博客项目/星云小窝项目-项目启动.html",
    "revision": "5e5c257f4060bd540dc8e9890d2bbb5a"
  },
  {
    "url": "docs/以flask为后端的博客项目/星云小窝项目-项目结构.html",
    "revision": "af9075554cf950dc9336e8d58fcefced"
  },
  {
    "url": "docs/以flask为后端的博客项目/讨论一些代码实现的逻辑.html",
    "revision": "a327cee9271833f01f4ed6cb7619026a"
  },
  {
    "url": "docs/留言板.html",
    "revision": "6bc373314d8e89444882afed3676ccb6"
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
    "revision": "09bba1fb0449a9f9d5073c7d6bc91f23"
  },
  {
    "url": "tag/flask/index.html",
    "revision": "622cb6785072e90c13d292bbd920c90e"
  },
  {
    "url": "tag/index.html",
    "revision": "aac5771ba83e10021dc85cc9314e14cf"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "978810ae9045e08c70cb67a22f173141"
  },
  {
    "url": "tag/介绍/index.html",
    "revision": "7829e86d669a4344e90ba16babf9c5b2"
  },
  {
    "url": "tag/留言板/index.html",
    "revision": "7d95e877a9259a748b333e7fb30a86bc"
  },
  {
    "url": "timeline/index.html",
    "revision": "8582f734f98a55a0f37e8cba19539408"
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
