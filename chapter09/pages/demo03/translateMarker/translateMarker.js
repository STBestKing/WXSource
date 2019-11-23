// pages/demo03/translateMarker/translateMarker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat: 39.917940,
    lon: 116.397140,
    markers: [{
      id: '001',
      latitude: 39.911810,
      longitude: 116.394800, 
      iconPath: '/images/demo03/location.png',
      label: {
        content: '故宫博物院'
      }
    }]  
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: '001',
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 39.917940,
        longitude: 116.397140
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap');
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