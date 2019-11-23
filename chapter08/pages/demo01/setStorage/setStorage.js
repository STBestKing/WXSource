// pages/demo01/setStorage/setStorage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    data: ''
  },
  keyInput: function (e) {
    this.setData({ key: e.detail.value });
  },
  dataInput: function (e) {
    this.setData({ data: e.detail.value });
  },
  setStorage: function (e) {
    let key = this.data.key;
    if (key.length == 0) {
      wx.showToast({
        title: 'KEY不能为空！',
        icon: 'none'
      })
    } else {
      wx.setStorage({
        key: key,
        data: this.data.data
      })
    }
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