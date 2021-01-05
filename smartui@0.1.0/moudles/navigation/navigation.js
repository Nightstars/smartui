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
const smartto=(pageurl)=>{
  wx.navigateTo({
    url: pageurl
  })
}

//redirect to another page
// 2021-01-04
// by: Christ Chang
// url: https://github.com/Nightstars/smartui
const smartredirect=(pageurl)=>{
  wx.redirectTo({
    url: pageurl
  })
}

module.exports={
  to: smartto,
  redirect: smartredirect
}
