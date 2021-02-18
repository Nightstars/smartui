/*
* A weapp packag library of the navigation function.
*
* FILE:	navigation.js
* VERSION:	1.0
* AUTHOR:	Christ Chang <christzhangowner@gmail.com>
*
* NOTE: This version is not tested thoroughly!
*
* Copyright (c) 2021, Christ Chang
* All rights reserved.
*/

//navigate to another page
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const to=(pageurl)=>{
  wx.navigateTo({
    url: pageurl
  })
}

//redirect to another page
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const redirect=(pageurl)=>{
  wx.redirectTo({
    url: pageurl
  })
}

//navigate to another page
// 2021-01-25
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const back=()=>{
  wx.navigateBack({
    delta: 1
  });
}

module.exports={
  to: to,
  redirect: redirect,
  back: back,
}
