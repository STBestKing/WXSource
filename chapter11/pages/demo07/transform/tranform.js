// pages/demo07/transform/tranform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //绘制基本图形
  drawBox:function(){
    let ctx = this.ctx
    ctx.setFillStyle('lightgreen')
    ctx.fillRect(75,75,150,150)
    ctx.draw()
  },
  //移动
  translate: function () {
    this.ctx.translate(75, 75)
    this.drawBox()
  },
  //旋转
  rotate: function () {
    this.ctx.rotate(20*Math.PI/180)
    this.drawBox()
  },
  //缩放
  scale: function () {
    this.ctx.scale(0.5,0.5)
    this.drawBox()
  },
  //矩阵变形
  transform: function () {
    this.ctx.transform(1.25, 20 * Math.PI / 180,0,0.5,50,50)
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