// pages/demo07/preview/preview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  previewImage:function(){
    //保存画布内容到临时图片路径
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success:function(res){
        //图片路径地址
        var src = res.tempFilePath;
        //预览图片
        wx.previewImage({
          current: src, // 当前显示图片的http链接  
          urls: [src] // 需要预览的图片http链接列表  
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建画布上下文
    const ctx = wx.createCanvasContext('myCanvas')
    //绘制矩形
    ctx.setFillStyle('lightgreen')
    ctx.fillRect(75,75,150,150)
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