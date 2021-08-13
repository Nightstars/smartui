/*
* A weapp packag library of the message function.
*
* FILE:	msg.js
* VERSION:	1.0
* AUTHOR:	Christ Chang <christzhangowner@gmail.com>
*
* NOTE: This version is not tested thoroughly!
*
* Copyright (c) 2021, Christ Chang
* All rights reserved.
*/

//toast.err
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartshowerr=msg=>{
  wx.showToast({
    title: msg,
    icon: 'error',
    mask: true,
    duration: 2000,
  })
}

//toast.info
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartshowinfo=msg=>{
  wx.showToast({
    title: msg,
    icon: 'none',
    mask: true,
    duration: 2000,
  })
}

//toast.success
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartshowsuccess=()=>{
  wx.showToast({
    title: '操作成功！',
    icon: 'Success',
    mask: true,
    duration: 2000,
  })
}

//toast.fail
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartshowfail=()=>{
  wx.showToast({
    title: "请求失败，接口异常！",
    icon: 'none',
    mask: true,
    duration: 2000,
  })
}

//toast.audsuccess
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartshowaudsuccess=()=>{
  wx.showToast({
    title: '审核成功！',
    icon: 'Success',
    mask: true,
    duration: 2000,
  })
}

module.exports = {
  err: smartshowerr,
  info: smartshowinfo,
  success: smartshowsuccess,
  fail: smartshowfail,
  audsuccess: smartshowaudsuccess
}