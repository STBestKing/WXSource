// pages/demo07/path/path.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //绘制基本图形
  drawSample: function () {
    let ctx = this.ctx
    //绘制三角形
    ctx.beginPath()
    ctx.moveTo(150, 75)
    ctx.lineTo(225, 225)
    ctx.lineTo(75, 225)
    ctx.closePath()
  },
  //描边路径
  strokePath:function(){
    let ctx = this.ctx
    this.drawSample()
    ctx.setStrokeStyle('red')
    ctx.stroke()
    ctx.draw()
  },
  //填充路径
  fillPath: function () {
    let ctx = this.ctx
    this.drawSample()
    ctx.setFillStyle('blue')
    ctx.fill()
    ctx.draw()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建画布上下文
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