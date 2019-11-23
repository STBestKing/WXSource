// pages/demo05/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRecording: false,
    isHidden: true
  },
  //开始录像
  startRecord: function () {
    var that = this
    that.setData({ isRecording: true, isHidden: true })
    this.ctx.startRecord({
      //超时自动结束
      timeoutCallback(res) {
        that.setData({
          isRecording: false,
          src: res.tempVideoPath, //更新视频路径地址
          isHidden: false //显示video组件
        })
      }
    })
  },

  //停止录像
  stopRecord: function () {
    var that = this
    this.ctx.stopRecord({
      success: function (res) {
        that.setData({
          isRecording: false,
          src: res.tempVideoPath, //更新视频路径地址
          isHidden: false //显示video组件
        })
      }


    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext()
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