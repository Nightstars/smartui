/*
* A weapp packag library of the request function.
*
* FILE:	request.js
* VERSION:	1.0
* AUTHOR:	Christ Chang <christzhangowner@gmail.com>
*
* NOTE: This version is not tested thoroughly!
*
* Copyright (c) 2021, Christ Chang
* All rights reserved.
*/

const app=getApp()
const msg = require('../msg/msg')
const nav=require('../navigation/navigation')
const LOG=require('../devlog/devlog')
// request.post.login
// 2020-12-31
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartlogin=(url, data, success, fail)=> {
  wx.request({
    url: app.globalData.baseUrl+url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    method: 'Post',
    success: function (res) {
      if (res.statusCode == 200) {
        success(res)
      } else {
        fail()
      }

    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

// request.post.login
// 2021-06-10
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartlogin2=(url, data, success, fail)=> {
  wx.request({
    url: app.globalData.baseUrl+url,
    data: data,
    method: 'Post',
    success: function (res) {
      if (res.statusCode == 200) {
        success(res)
      } else {
        fail(res)
      }

    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

//request.get.details
// 2020-12-31
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartdetails=(url, data, success, fail)=> {
  wx.request({
    url: app.globalData.baseUrl+url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8', 
      'cookie': app.globalData.cookie
    },
    method: 'GET',
    success: function (res) {
      if (res.statusCode == 200) {
        if(res.header['Content-Type'].search('text/html')!=-1){
          nav.redirect(app.globalData.loginUrl)
        }
        else{
          success(res.data)
        }
      }else if(res.statusCode==404){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail(res)
      }

    },
    fail: function (res) {
      fail()
    },
    complete: function (res) {

    },
  })
}

//request.get.search
// 2021-01-04
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartsearch=(url, data, success, fail)=> {
  wx.request({
    url: app.globalData.baseUrl+url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8', 
      'cookie': app.globalData.cookie
    },
    method: 'GET',
    success: function (res) {
      if (res.statusCode == 200||res.statusCode==401) {
        if(res.header['Content-Type'].search('text/html')!=-1){
          nav.redirect(app.globalData.loginUrl)
        }else{
          success(res.data)
        }      
      }else if(res.statusCode==404){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail()
      }

    },
    fail: function (res) {
      fail()
    },
    complete: function (res) {

    },
  })
}

//request.Post.search
// 2021-06-10
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartsearch2=(url, data, success, fail)=> {
  LOG.logger(`request url:  ${app.globalData.baseUrl}${url}`)
  //LOG.logger(`accesstoken:  ${app.globalData.accessToken}`)
  wx.request({
    url: `${app.globalData.baseUrl}${url}`,
    data: data,
    header: {
      'Authorization': `Bearer ${app.globalData.accessToken}`
    },
    method: 'POST',
    success: function (res) {
      LOG.logger(res.data)
      if (res.statusCode == 200) {
          success(res.data)   
      }else if(res.statusCode==401){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail(res)
      }

    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

//request.post.audit
// 2021-01-04
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartaudit=(url, data, success, fail)=> {
  wx.request({
    url: app.globalData.baseUrl+url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8', 
      'cookie': app.globalData.cookie
    },
    method: 'Post',
    success: function (res) {
      if (res.statusCode == 200) {
        if(res.header['Content-Type'].search('text/html')!=-1){
          nav.redirect(app.globalData.loginUrl)
        }else{
          if(res.data.Success){
            success(res.data)
          }else{
            msg.info(res.data.Message)
          }        
        }
      }else if(res.statusCode==404){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail()
      }

    },
    fail: function (res) {
      fail()
    },
    complete: function (res) {

    },
  })
}

//request.get.get
// 2021-01-29
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartget=(url, data, success, fail)=> {
  wx.request({
    url: `${app.globalData.baseUrl}${url}`,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8', 
      'cookie': app.globalData.cookie
    },
    method: 'GET',
    success: function (res) {
      if (res.statusCode == 200) {
        if(res.header['Content-Type'].search('text/html')!=-1){
          nav.redirect(app.globalData.loginUrl)
        }else{
          success(res.data)
        }      
      }else if(res.statusCode==404){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail(res)
      }

    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

//request.post.audit
// 2021-03-17
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartpost=(url, data, success, fail)=> {
  wx.request({
    url: app.globalData.baseUrl+url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8', 
      'cookie': app.globalData.cookie
    },
    method: 'Post',
    success: function (res) {
      if (res.statusCode == 200) {
        success(res)
      }else if(res.statusCode==404){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail()
      }

    },
    fail: function (res) {
      fail()
    },
    complete: function (res) {

    },
  })
}

//request.get.get
// 2021-06-23
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartget2=(url, data, success, fail)=> {
  wx.request({
    url: app.globalData.baseUrl+url,
    data: data,
    header: {
      'Authorization': `Bearer ${app.globalData.accessToken}`
    },
    method: 'GET',
    success: function (res) {
      if (res.statusCode == 200) {
          success(res.data)  
      }else if(res.statusCode==401){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail(res)
      }
    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

//request.get.getwithurlparm
// 2021-06-23
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartgetwithurlparam=(url, data, success, fail)=> {
  LOG.logger(`request url:  ${app.globalData.baseUrl}${url}/${data}`)
  wx.request({
    url: `${app.globalData.baseUrl}${url}/${data}`,
    header: {
      'Authorization': `Bearer ${app.globalData.accessToken}`
    },
    method: 'GET',
    success: function (res) {
      LOG.logger(res)
      if (res.statusCode == 200) {
          success(res.data)  
      }else if(res.statusCode==401){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail(res)
      }
    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

//request.get.getwithurlparm
// 2021-08-02
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartgetwithmultiurlparam=(url, data, success, fail)=> {
  LOG.logger(`param length: ${data.length}`)
  if(data){
    let param = '';
    for(let i = 0; i< data.length; i++){
      let temp = ''
      if(i == 0)
        temp = `?${data[i].key}=${data[i].value}`
      else
        temp = `&${data[i].key}=${data[i].value}`
      param += temp
    }
    LOG.logger(`request url:  ${app.globalData.baseUrl}${url}${param}`)
    wx.request({
      url: `${app.globalData.baseUrl}${url}${param}`,
      header: {
        'Authorization': `Bearer ${app.globalData.accessToken}`
      },
      method: 'GET',
      success: function (res) {
        LOG.logger(res)
        if (res.statusCode == 200 && res.data.msg != 'Unauthorized') {
            success(res.data)  
        }else if(res.statusCode==401){
          nav.redirect(app.globalData.loginUrl)
        } else {
          fail(res)
        }
      },
      fail: function (res) {
        fail(res)
      },
      complete: function (res) {

      },
    })
  }
}

//request.post.audit
// 2021-08-02
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartaudit2=(url, data, success, fail)=> {
  LOG.logger(`${app.globalData.baseUrl}${url}`)
  LOG.logger(data)
  wx.request({
    url: `${app.globalData.baseUrl}${url}`,
    data: data,
    header: {
      'Authorization': `Bearer ${app.globalData.accessToken}`
    },
    method: 'Post',
    success: function (res) {
      if (res.statusCode == 200 && res.data.msg != 'Unauthorized') {
        LOG.logger(res.data)
        success(res.data)  
      }else if(res.statusCode==401){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail(res)
      }
    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

//request.put
// 2021-08-02
// by: ChristChang
// url: https://github.com/Nightstars/smartui
const smartput=(url, data, success, fail)=> {
  LOG.info(`${app.globalData.baseUrl}${url}`)
  LOG.info(data)
  wx.request({
    url: `${app.globalData.baseUrl}${url}`,
    data: data,
    header: {
      'Authorization': `Bearer ${app.globalData.accessToken}`
    },
    method: 'Put',
    success: function (res) {
      if (res.statusCode == 200 && res.data.msg != 'Unauthorized') {
        LOG.info(res.data)
        success(res.data)  
      }else if(res.statusCode==401){
        nav.redirect(app.globalData.loginUrl)
      } else {
        fail(res)
      }
    },
    fail: function (res) {
      fail(res)
    },
    complete: function (res) {

    },
  })
}

module.exports = {
  login: smartlogin,
  login2: smartlogin2,
  details: smartdetails,
  search: smartsearch,
  search2: smartsearch2,
  audit: smartaudit,
  get: smartget,
  post: smartpost,
  get2: smartget2,
  getwithurlparam: smartgetwithurlparam,
  getwithmultiurlparam: smartgetwithmultiurlparam,
  audit2: smartaudit2,
  put: smartput
}