// pages/demo05/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //旋转
  rotate: function () {
    this.animation.rotate(45).step()
    this.setData({ animation: this.animation.export() })
  },
  //缩放
  scale: function () {
    this.animation.scale(0.5).step()
    this.setData({ animation: this.animation.export() })
  },
  //偏移
  translate: function () {
    this.animation.translate(100, 50).step()
    this.setData({ animation: this.animation.export() })
  },
  //倾斜
  skew: function () {
    this.animation.skewX(45).step()
    this.setData({ animation: this.animation.export() })
  },
  //同时动画
  sync: function () {
    this.animation.rotate(45).scale(0.5).translate(100, 50).skewX(45).step()
    this.setData({ animation: this.animation.export() })
  },
  //依次动画
  queue: function () {
    this.animation.rotate(45).step().scale(0.5).step().translate(100, 50).step().skewX(45).step()
    this.setData({ animation: this.animation.export() })
  },
  //还原
  reset: function () {
    this.animation.rotate(0).scale(1).translate(0, 0).skewX(0).step()
    this.setData({ animation: this.animation.export() })
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
    this.animation = wx.createAnimation({
      duration: 3000
    })
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