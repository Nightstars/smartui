/*
* A weapp packag library of the message function.
*
* FILE:	system.js
* VERSION:	1.0
* AUTHOR:	Christ Chang <christzhangowner@gmail.com>
*
* NOTE: This version is not tested thoroughly!
*
* Copyright (c) 2021, Christ Chang
* All rights reserved.
*/

const app = getApp()

//init theme
// 2021-06-21
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartinittheme=(obj)=>{
   //init theme
   if(app.globalData.theme){
    obj.setData({
      theme: app.globalData.theme,
      btnthme: app.globalData.theme.split('-')[2],
      limit:app.globalData.limit,
      baseUrl: app.globalData.baseUrl
    })
  }else{
    obj.setData({
      theme: "bg-gradual-blue",
      btnthme: 'blue',
      limit:app.globalData.limit,
      baseUrl: app.globalData.baseUrl
    })
  }
}

module.exports = {
  inittheme: smartinittheme,
}