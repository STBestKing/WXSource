// pages/demo04/clipboard/clipboard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: 'LsZw5W2a0Nj' //随机写一串复杂的序列号
  },
  //复制到剪贴板
  setClipboard: function () {
    let code = this.data.code
    wx.setClipboardData({
      data: code,
      success: function () {
        wx.showToast({
          title: '复制成功！'
        })
      }
    })
  },
  //获取剪贴板内容
  getClipboard: function () {
    wx.getClipboardData({
      success: function (res) {
        wx.showToast({
          title: '剪贴板内容是：' + res.data,
          icon: 'none'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})