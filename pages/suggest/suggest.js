/**
 * @description 投诉建议界面
 */
//获取应用实例
var app = getApp()

Page({
  data: {
    content: '',
    items: [
      { name: 'YIJIAN', value: '意见', checked: 'true' },
      { name: 'YOUSU', value: '投诉' },

    ],
    userInfo: {}
  },
  //事件处理函数

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {

  },
  inputContent(e) {
    this.setData({
      content: e.detail.value
    });
  },
  goSubmit(e) {
    var content = this.data.content;
    console.log(content);
    wx.request({
      url: "https://pkumeeting.xyz/canteen/Suggestions/newSuggestion",
      data: {
        "suggest_content": content,
        "suggest_creater": 1801210721
      },
      success: function (res) {
        console.log('from php');
        console.log(res);
        if (res.statusCode == 200 && res.data.code == 200) {
          wx.showModal({
            title: '提交成功',
            content: '谢谢您的建议，我们会尽快反馈。',
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
