// pages/demo07/clip/clip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //绘制图像
  drawImage: function () {
    let ctx = this.ctx
    ctx.drawImage('/images/demo07/icon.jpg', 50, 50)
    ctx.draw()
  },
  //剪裁
  clip: function () {
    let ctx = this.ctx
    ctx.save()
    ctx.beginPath()
    ctx.arc(150, 150, 100, 0, 2 * Math.PI)
    ctx.clip()
    ctx.drawImage('/images/demo07/icon.jpg', 50, 50)
    ctx.draw()
    ctx.restore()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCanvasContext('myCanvas')//创建画布上下文
    this.drawImage()
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