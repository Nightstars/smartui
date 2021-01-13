---
title: smartui组件库使用手册
tags: smartui,使用手册
slug:  storywriter/tutorial
---

# 基本组件

|     | 组件        | 描述     |
| --- | ----------- | -------- |
| 1   | floatingbtn | 悬浮按钮 |
| 2   | loading     | 加载状态 |
| 3   | loadmore    | 加载更多 |

# 基本模块

|     | 模块       | 描述                                 |
| --- | ---------- | ------------------------------------ |
| 1   | toast消息  | 二次封装更易于使用                   |
| 2   | 导航       | 二次封装更易于使用                   |
| 3   | 网络       | 二次封装便于管理程序中所有的网络请求 |
| 4   | sha256加密 | 前端sha256加密模块                   |

# 快速开始
1. **组件使用**
   

``` javascript
index.json

{
  "usingComponents": {
    ...,
    "smart-loading": "../../../../../smartui/components/loading/smartloading"
  }
}


index.wxml

<smart-loading bg='https://xxx.com/wechat/images/loading/xxx.gif' loadModal='{{loadModal}}'/>
```
2. **模块使用**
   

``` javascript
index.js

let rq=require('../../../../../smartui/moudles/request/request')
let msg=require('../../../../../smartui/moudles/msg/msg')

Page({
	...
	search(parm){
		var that=this
		rq.search('二级地址',parm,function(res){
		  that.setData({
			modle: res.data,
			loadModal:false,
			loaded:false
		  })
		},function(res){
		  msg.info(res.message)
		}) 
	}
})
```

**注意**
使用网络模块须在app.js中配置

``` javascript
globalData: {
    ...,
    baseUrl: 'https://xxx.com'
  }
```

