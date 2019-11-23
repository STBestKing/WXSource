// pages/demo07/bezier/bezier.js
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

    //设置填充颜色为红色
    ctx.setFillStyle('red');

    //三次曲线
    ctx.beginPath();
    ctx.moveTo(90, 55);
    ctx.bezierCurveTo(90, 52, 85, 40, 65, 40);
    ctx.bezierCurveTo(35, 40, 35, 77.5, 35, 77.5);
    ctx.bezierCurveTo(35, 95, 55, 117, 90, 135);
    ctx.bezierCurveTo(125, 117, 145, 95, 145, 77.5);
    ctx.bezierCurveTo(145, 77.5, 145, 40, 115, 40);
    ctx.bezierCurveTo(100, 40, 90, 52, 90, 55);
    ctx.fill();

    //绘制到画布上
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