/**
 * @description 票数排行榜界面
 */
//获取应用实例
var app = getApp()

Page({
  data: {
    rankingList:[],
    currentData:0   //预定的位置
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
    var url = "https://pkumeeting.xyz/canteen/ranking/getList"
    wx.request({
      url: url,
      success: function (res) {
        //渲染到 wxml 页面中
        var rankingList = res.data;
        console.log(rankingList);
        that.setData({
          rankingList: rankingList
        })

   //     console.log(res.data);
   //     if (res.data) {
    //      that.setData({
    //        rankingList: res.data
    //      })
    //    }

      },
      fail: function (res) {
        wx.showModal({
          title: '服务器连接失败，请重试',
          showCancel: false
        });
      },
      complete: function (res) { },
    })
  }
})

