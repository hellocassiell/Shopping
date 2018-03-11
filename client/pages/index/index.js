//index.js
//获取应用实例
var appInstance = getApp();
var GetCommentList = require('../../utils/getuserinfo.js');
Page({
  data: {
    commentlist:null,
    offset:0,
    is_more:true,
    is_loadnull: false,
    imgpath: appInstance.globalData.urlpath
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {

    var that=this;
      GetCommentList.getcomment(that, appInstance)
  },
  onLoadMoreDoctList: function () {
    var that = this;
    GetCommentList.getcomment(that, appInstance)
  },
 
  onShareAppMessage: function (res) {//转发默认设置
   
  },
  onMakePhone: function () {
    wx.makePhoneCall({
      phoneNumber: appInstance.globalData.yebotel
    })
  }
})
