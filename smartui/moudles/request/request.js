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
let nav=require('../navigation/navigation')
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

module.exports = {
  login: smartlogin,
  details: smartdetails,
  search: smartsearch,
  audit: smartaudit,
  get: smartget,
  post: smartpost
}