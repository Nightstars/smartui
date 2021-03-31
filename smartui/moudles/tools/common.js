/*
* A weapp packag library of the common function.
*
* FILE:	common.js
* VERSION:	1.0
* AUTHOR:	Christ Chang <christzhangowner@gmail.com>
*
* NOTE: This version is not tested thoroughly!
*
* Copyright (c) 2021, Christ Chang
* All rights reserved.
*/

const { fail } = require("../msg/msg")

//scan
// 2021-01-29
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartscan=(success,fail)=>{
  wx.scanCode({
    success: (res) => {
      success(res)
    },
    fail:(err)=>{
      fail(err)
    }
  })
}

//scan
// 2021-03-01
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartda=(success,fail)=>{
  wx.scanCode({
    success: (res) => {
      success(res)
    },
    fail:(err)=>{
      fail(err)
    }
  })
}

module.exports = {
  scan: smartscan,
}