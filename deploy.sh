#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

cd ./public

git init

git add -A

git commit -m '--deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xingyun/learn-typescript.git master:gh-pages
# git push -f git@gitee.com:wht050106/vuepress-blog.git master:gh-pages
git push -f  https://gitee.com/wht050106/vuepress-blog.git master:gh-pages

cd -

