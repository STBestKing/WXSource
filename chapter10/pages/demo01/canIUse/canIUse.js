// pages/demo01/canIUse/canIUse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '待查询'
  },
  //初始化输入框内容
  inputValue: '',
  //获取输入框内容
  inputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  //查询兼容性
  canIUse: function () {
    let txt = this.inputValue
    if (txt == '') {
      wx.showToast({
        title: '输入框不能为空',
        icon: 'none'
      })
    } else {
      let result = wx.canIUse(this.inputValue)
      this.setData({ result: (result ? '支持' : '不支持') })
    }
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