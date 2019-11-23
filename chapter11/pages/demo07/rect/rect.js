// pages/demo07/rect/rect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  fillRect:function(){
    let ctx = this.ctx;
    ctx.rect(50, 50, 200, 200)
    ctx.setFillStyle('orange')
    ctx.fill()
    ctx.draw()
  },
  strokeRect: function () {
    let ctx = this.ctx;
    ctx.rect(100, 100, 100, 100)
    ctx.setStrokeStyle('purple')
    ctx.stroke()
    ctx.draw()
  },
  clearRect: function () {
    let ctx = this.ctx;
    ctx.clearRect(0, 0, 300, 300)
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