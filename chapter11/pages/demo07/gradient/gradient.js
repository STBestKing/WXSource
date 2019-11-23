// pages/demo07/gradient/gradient.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //线性渐变
  linear: function () {
    let ctx = this.ctx
    // 创建渐变
    var grd = ctx.createLinearGradient(0, 0, 200, 200)
    grd.addColorStop(0, 'blue')
    grd.addColorStop(1, 'lightblue')
    // 画图形
    ctx.setFillStyle(grd)
    ctx.fillRect(50, 50, 200, 200)
    ctx.draw()
  },
  //圆形渐变
  circular: function () {
    let ctx = this.ctx
    // 创建渐变
    var grd = ctx.createCircularGradient(150, 150, 100)
    grd.addColorStop(0, 'purple')
    grd.addColorStop(1, 'white')
    // 画图形
    ctx.setFillStyle(grd)
    ctx.fillRect(50, 50, 200, 200)
    ctx.draw()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCanvasContext('myCanvas')

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