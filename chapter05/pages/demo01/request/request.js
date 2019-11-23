// pages/demo01/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '待查询'
  },
  word: '',//初始化单词
  //更新单词
  wordBlur: function (e) {
    this.word = e.detail.value
  },
  //查询单词
  search: function () {
    let word = this.word //获得单词
    var that = this

    //未输入内容
    if (word == '') {
      wx.showToast({
        title: '单词不能为空！',
        icon: 'none'
      })
    }
    //发起网络请求
    else {
      wx.request({
        url: 'https://api.shanbay.com/bdc/search/',
        data: {
          word: word
        },
        success: function (res) {
          console.log(res.data)
          let result = res.data.data.cn_definition.defn
          that.setData({ result: result })
        }
      })
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