---
title: vuepress博客部署
date: 2024-01-15
sidebar: 'auto'
categories:
 - 项目
tags:
 - vuepress
publish: true
---


:::tip
将vuepress-reco主题个人博客搭建好之后，要将此项目部署，该文档主要介绍将博客部署到github上
:::

<!-- more -->

---
## 前言
前文将vuepress-reco主题个人博客搭建好之后，要将此项目部署，本文主要介绍将博客部署到github上，（因为我的gitee还未实名认证，所以也不好展示）。


---

##  一、事先准备
### 1. github注册

> 如果还未进入github，可以参考下面这篇文章，注册github账号

[https://blog.csdn.net/m0_67906358/article/details/128808210](https://blog.csdn.net/m0_67906358/article/details/128808210)





### 2. 配置SSH

> 首先，检查本地主机是否已经存在ssh key

```bash
cd ~/.ssh
ls
//看是否存在 id_ed25519 和 id_ed25519.pub文件，如果存在，说明已经有SSH Key
```
![在这里插入图片描述](/docs_img/vuepress博客部署/db26f0df737c49eabbd0260ed7225071.png)



> 如果不存在，则要生成ssh key

```bash
ssh-keygen -t ed25519 -C "<your github email>"
# -C后面的是自定义的密钥注释/标签，这里一般输入自己的邮箱
# -----------------------------------------------
# 运行上述命令，会询问你是否自定义密钥名字/路径，以及是否需要给该密钥添加密码，敲回车是跳过
# Generating public/private ed25519 key pair.
# Enter file in which to save the key (/home/xxx/.ssh/id_ed25519): github_auth
# Enter passphrase (empty for no passphrase): 
# Enter same passphrase again: 
# Your identification has been saved in github_auth.
# Your public key has been saved in github_auth.pub.
# The key fingerprint is: xxx
# The key's randomart image is: xxx
# -----------------------------------------------
# ed25519是目前最安全、加解密速度最快的key类型。
# 但有些旧版本的SSH还不支持ed25519算法，这时候可以用rsa算法。

# 因此，有ed25519就用ed25519，没有就用rsa。
ssh-keygen -t rsa -C "<your github email>"

```

> 获取ssh key公钥内容  (id_ed25519.pub)

```bash
cd ~/.ssh
cat id_ed25519.pub

```

>复制公钥后，在Github账号上添加公钥

1. 进入Settings设置

![在这里插入图片描述](/docs_img/vuepress博客部署/683e59b946c6424e9733383b40bd4d60.png)

2. 点击’New SSH Key'

![在这里插入图片描述](/docs_img/vuepress博客部署/c3e6b238a3124f35bb55d9a7a5406e61.png)
3. 添加ssh key，把刚才复制的内容粘贴上去保存即可
![在这里插入图片描述](/docs_img/vuepress博客部署/5e1353de7e284ecfbfcab46bd85ed373.png)



> 最后验证是否设置成功

```bash
ssh -T git@github.com
```

显示如下信息表明设置成功

![在这里插入图片描述](/docs_img/vuepress博客部署/daf6685e398b45c9b66061827066bed8.png)
注意：在这里因为我前面生成SSH密钥时添加了密码，所以这里我先输入了密码（大家也可以不添加)。





## 二、部署到github
### 1. 新建仓库

> 博客就算是正式的做好了，接下来我们部署到免费的 Github Pages 上，首先在Github上新建一个仓库
> 项目名称为：<你的用户名>.github.io

![在这里插入图片描述](/docs_img/vuepress博客部署/1947d22984524bbcaf4b19d2129a7f73.png)


### 2. 上传项目代码

> 首先对项目文件进行打包，形成一个放置静态资源的文件夹dist（路径和名字可在config.js配置文件中自定义）

```bash
npm run build
```
![在这里插入图片描述](/docs_img/vuepress博客部署/1f1c131ebde04cdeb5a3687e05971a79.png)


![在这里插入图片描述](/docs_img/vuepress博客部署/cc155ccaad954937b4fe3ff3b2307910.png)


> 然后就是提交该dist文件

```bash
#进入静态文件目录
cd ./dist


#上传到你的仓库
git init
git add -A
git commit -m 'first-commit'
git branch -M master
git push -f  git@github.com:<你的用户名>/<仓库名称>.git master
```






### 3. deploy.sh
> 我们可以在项目 xingyun3 目录下建立一个脚本文件：deploy.sh，以便日后的提交修改
> 注意修改一下对应的用户名和仓库名：

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

cd ./dist  #进入静态文件目录

git init
git add -A
git commit -m '--deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@gitee.com:wht050106/vuepress-blog.git master:gh-pages
git push -f  git@github.com:xingyun-dev/xingyun-dev.github.io.git master

cd -

```

> 可以在package.json文件中，添加"deploy": "bash deploy.sh"，以便调用

![在这里插入图片描述](/docs_img/vuepress博客部署/3b2338633c414983a9fe5f41eb21925e.png)

```bash
#所以运行脚本为：
npm run deploy
```





### 4. 部署成功

> 成功上传代码至仓库后，要在GitHub  page 中配置页面


点击设置
![在这里插入图片描述](/docs_img/vuepress博客部署/de409e7004f640d6aaba27d973765922.png)
在”Pages'中，可以获得最终的部署地址
![在这里插入图片描述](/docs_img/vuepress博客部署/4e34188004ab44f7b6c57b69e1a99a05.png)












>链接： [https://xingyun-dev.github.io/](https://xingyun-dev.github.io/)


![在这里插入图片描述](/docs_img/vuepress博客部署/63ea768d4f68409ca64e112112f37244.png)

## 三、部署到gitee （要实名认证）

> 与github的部署类似，只不过需要进行实名认证，但是在国内访问比较快速。

参考文章：
[
https://blog.csdn.net/qq_39367226/article/details/107449816?](https://blog.csdn.net/qq_39367226/article/details/107449816?ops_request_misc=&request_id=&biz_id=102&utm_term=vuepress-reco%E9%83%A8%E7%BD%B2%E5%88%B0gitee&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-2-107449816.142%5Ev99%5Epc_search_result_base1&spm=1018.2226.3001.4187)



---


