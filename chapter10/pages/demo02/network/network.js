// pages/demo03/network/network.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: '获取中'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //获取当前网络状态
    wx.getNetworkType({
      success: function (res) {
        that.setData({ status: res.networkType })
      }
    })
    //监听网络状态变化
    wx.onNetworkStatusChange(function (res) {
      if (res.isConnected) {
        that.setData({ status: res.networkType })
      } else {
        that.setData({ status: '未联网' })
      }
    })
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