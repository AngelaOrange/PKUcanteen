/**
 * @description 菜品投票界面
 */
//获取应用实例
var app = getApp()

Page({
  data: {
    dishesList:[],
    breakfastList: [],
    meatList: [],
    vegetableList: [],
    soupList: [],
    stapleList: [],
    currentData:1
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    var that = this

    //早餐数据
    wx.request({
      url: "https://pkumeeting.xyz/canteen/votelist/breakfast",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if (res.data) {
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

    //肉菜数据
    wx.request({
      url: "https://pkumeeting.xyz/canteen/votelist/meat",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if (res.data) {
          that.setData({
            meatList: res.data
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

    //素菜数据
    wx.request({
      url: "https://pkumeeting.xyz/canteen/votelist/vegetable",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if (res.data) {
          that.setData({
            vegetableList: res.data
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

    //汤羹数据
    wx.request({
      url: "https://pkumeeting.xyz/canteen/votelist/soup",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if (res.data) {
          that.setData({
            soupList: res.data
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

    //主食数据
    wx.request({
      url: "https://pkumeeting.xyz/canteen/votelist/staple",
      success: function (res) {
        //渲染到 wxml 页面中
        console.log(res.data);
        if (res.data) {
          that.setData({
            stapleList: res.data
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

  goVote(e) {
    console.log(e.currentTarget.dataset.dish_id);
    var timestamp = Date.parse(new Date());
    timestamp = timestamp;
    console.log("当前时间戳为：" + timestamp);
    wx.request({
      url: "https://pkumeeting.xyz/canteen/Voterecord/newRecord",
      data: {
        "dish_id": e.currentTarget.dataset.dish_id,
        "dish_name": e.currentTarget.dataset.dish_name,
        "voter_id": 1801210721
      },
      success: function (res) {
        console.log('from php');
        console.log(res);
        if (res.statusCode == 200 && res.data.code == 200) {
          wx.showToast({
            title: '投票成功',
            //showCancel:false
          });
        }
        else{
          wx.showModal({
            title: '服务器连接失败，请重试',
            showCancel: false
          });
        }
      },
      fail: function (res) {
        wx.showModal({
          title: '服务器连接失败，请重试',
          showCancel: false
        });
      }
    });
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
  }

})
