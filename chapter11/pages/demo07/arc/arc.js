// pages/demo07/arc/arc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建画布上下文
    const ctx = wx.createCanvasContext('myCanvas')

    //设置填充颜色为黄色
    ctx.setFillStyle('yellow')

    //绘制圆形的脸，并填充为黄色
    ctx.beginPath()
    ctx.arc(150, 150, 80, 0, Math.PI * 2, true)
    ctx.stroke()
    //如果不需要勾勒脸的轮廓，此句可省略
    ctx.fill()

    //设置填充颜色为黑色
    ctx.setFillStyle('black')

    //填充黑色的左眼
    ctx.beginPath()
    ctx.arc(190, 130, 10, 0, Math.PI * 2, true)
    ctx.fill()

    //填充黑色的右眼
    ctx.beginPath()
    ctx.arc(110, 130, 10, 0, Math.PI * 2, true)
    ctx.fill()

    //绘制带有弧度的笑容
    ctx.beginPath()
    ctx.arc(150, 160, 50, 0, Math.PI, false)
    ctx.stroke()

    //全部绘制到画布上
    ctx.draw()
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