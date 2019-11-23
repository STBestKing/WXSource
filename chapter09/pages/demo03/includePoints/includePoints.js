// pages/demo03/includePoints/includePoints.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        //安徽黄山风景区
        latitude: 30.129590,
        longitude: 118.174940
      }, {
        //安徽九华山风景区
        latitude: 30.471110,
        longitude: 117.804250
      }]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.mapCtx = wx.createMapContext('myMap');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})