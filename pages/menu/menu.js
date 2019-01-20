/**
 * @description 票数排行榜界面
 */
//获取应用实例
var app = getApp()

Page({
  data: {
    breakfastList: [],
    lunchList: [],
    dinnerList: [],
    currentData: 0
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  onShow: function () {
    var that = this
    wx.request({
      url: "https://pkumeeting.xyz/canteen/todaymenu/breakfast",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if(res.data){
          that.setData({
            breakfastList: res.data
          })
        }
      },
      fail: function (res) {
        wx.showModal({
          title: '服务器连接失败，请重试',
          showCancel: false
        });
      },
      complete: function (res) { },
    })

    wx.request({
      url: "https://pkumeeting.xyz/canteen/todaymenu/lunch",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if(res.data){
          that.setData({
            lunchList: res.data
          })
        }
      },
      fail: function (res) {
        wx.showModal({
          title: '服务器连接失败，请重试',
          showCancel: false
        });
      },
      complete: function (res) { },
    })

    wx.request({
      url: "https://pkumeeting.xyz/canteen/todaymenu/dinner",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if(res.data){
          that.setData({
            dinnerList: res.data
          })
        }
        
      },
      fail: function (res) {
        wx.showModal({
          title: '服务器连接失败，请重试',
          showCancel: false
        });
      },
      complete: function (res) { },
    })

  },

})
