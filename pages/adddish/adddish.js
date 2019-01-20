/**
 * @description 申请新菜品界面
 */
//获取应用实例
var app = getApp()

Page({
  data: {
    dish_name: '',
    description: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {

  },
  inputDishName(e) {
    this.setData({
      dish_name: e.detail.value
    });
  },
  inputDescription(e) {
    this.setData({
      description: e.detail.value
    });
  },
  goSubmit(e) {
    var description = this.data.description;
    var dish_name = this.data.dish_name;
    console.log(dish_name);
    console.log(description);
    wx.request({
      url: "https://pkumeeting.xyz/canteen/Newdish/newDish",
      data: {
        "dish_name": dish_name,
        "dish_description": description,
        "suggester_id": 1801210721
      },
      success: function (res) {
        console.log('from php');
        console.log(res);
        if (res.statusCode == 200 && res.data.code == 200) {
          wx.showModal({
            title: '提交成功',
            content: '谢谢您推荐新菜品，食堂大厨会认真考虑的。',
            showCancel: false,
          });
        }
        else {
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
  }

})
