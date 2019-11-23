// pages/demo07/alpha/alpha.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //绘制基本图形
  drawBox: function () {
    let ctx = this.ctx
    ctx.setFillStyle('green')
    ctx.fillRect(75, 75, 150, 150)
    ctx.draw()
  },
  //不透明
  setAlpha01: function () {
    let ctx = this.ctx
    ctx.setGlobalAlpha(1)
    this.drawBox()
  },
  //半透明
  setAlpha02: function () {
    let ctx = this.ctx
    ctx.setGlobalAlpha(0.5)
    this.drawBox()
  },
  //全透明
  setAlpha03: function () {
    let ctx = this.ctx
    ctx.setGlobalAlpha(0)
    this.drawBox()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCanvasContext('myCanvas') //创建画布上下文
    this.drawBox()
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