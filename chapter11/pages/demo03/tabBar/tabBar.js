// pages/demo03/tabBar/tabBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //设置文本
  setText: function () {
    wx.setTabBarBadge({
      index: 1,
      text: '99'
    })
  },
  //取消文本
  removeText: function () {
    wx.removeTabBarBadge({
      index: 1
    })
  },
  //显示红点
  showRedDot: function () {
    wx.showTabBarRedDot({
      index: 1,
    })
  },
  //隐藏红点
  hideRedDot: function () {
    wx.hideTabBarRedDot({
      index: 1,
    })
  },
  //设置tabBar整体样式
  setBarStyle: function () {
    wx.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#0000FF'
    })
  },
  //设置tabBar单项样式
  setBarItemStyle: function () {
    wx.setTabBarItem({
      index: 1,
      text: '首页',
      iconPath: '/images/demo03/house.png',
      selectedIconPath: '/images/demo03/house_green.png'
    })
  },
  //还原tabBar样式
  resetBarStyle: function () {
    wx.setTabBarItem({
      index: 1,
      text: 'tabBar例题',
      iconPath: '/images/demo03/star.png',
      selectedIconPath: '/images/demo03/star_green.png'
    })

    wx.setTabBarStyle({
      color: '#000000',
      selectedColor: '#1AAD19'
    })
  },
  //显示tabBar
  showTabBar: function () {
    wx.showTabBar({})

  },
  //隐藏tabBar
  hideTabBar: function () {
    wx.hideTabBar({})
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