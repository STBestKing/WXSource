// pages/demo07/line/line.js
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
    ctx.moveTo(150,75)
    ctx.lineTo(225,225)
    ctx.lineTo(75,225)
    ctx.closePath()
    ctx.stroke()
    ctx.draw()
  },
  //线条加粗
  setLineWidth: function () {
    this.ctx.setLineWidth(20)
    this.drawSample()
  },
  //圆形交点
  setLineJoin: function () {
    this.ctx.setLineJoin('round')
    this.drawSample()
  },
  //虚线效果
  setLineDash: function () {
    this.ctx.setLineDash([10,10],2)
    this.drawSample()
  },
  //还原
  reset:function(){
    let ctx = this.ctx
    ctx.lineWidth = 10
    ctx.lineJoin = 'miter'
    ctx.setLineDash([10,10],0)
    this.drawSample()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCanvasContext('myCanvas') //创建画布上下文
    this.ctx.lineWidth = 10
    this.drawSample()
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