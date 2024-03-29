// pages/demo01/getSysInfo/getSysInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //异步获取系统信息
  getSysInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({ res: res })
      },
    })
  },
  //同步获取系统信息
  getSysInfoSync: function () {
    let res = wx.getSystemInfoSync()
    this.setData({ res: res })
  },
  //清空查询结果
  reset: function () {
    this.setData({ res: '' })
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