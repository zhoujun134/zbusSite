---
slug: zbus-start
title: zbus.top 站点出生啦
date: 2023-09-03 22:31:31
author: zhouJun134
tags: [杂谈]
keywords: [杂谈]
---

# zbus.top 站点出生啦

很久很久之前，就想拥有一个自己的博客网站，一直没有找到很好的博客方式，直到我遇到 docusaurus 并在这个站点上发现了很多有趣的朋友，以及构建出来的网页，很简介明了，喜欢这种风格。所以就有了 zbus 的诞生，在这里希望它能够督促我的成长，更好的记录日常生活和学习的点点滴滴。
<!-- truncate -->
![](https://img.zbus.top//zbus/blog/202309022259194.webp)

下面将是我记录的我搭建的过程，希望用到的同学，可以参考。本人的博客是部署在腾讯云下的，基于腾讯与服务器，将这个小站部署在上面，主要涉及下面几个部分，

1. npm 配置
2. nginx 服务器配置
3. docsearch 搜索服务的使用

## 1. npm 的相关配置记录

npm 配置淘宝源

```bash
npm config set registry https://registry.npm.taobao.org/
```

npm 获取当前的镜像配置

```bash
 npm config get registry
```

需要切换回官方源时，使用以下命令：

```bash
npm config set registry https://registry.npmjs.org/
```

## 2. nginx 的配置记录

Nginx 服务验证配置文件

```bash
nginx -tnginx -t
```

重启 nginx 服务

```bash
systemctl reload nginx
```

## 3. docsearch 的配置记录

爬取网站的内容

```bash
docker run -it --env-file=.env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper
```







