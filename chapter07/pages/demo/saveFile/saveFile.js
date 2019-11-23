// pages/demo/saveFile/saveFile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '' //图片临时地址
  },
  //下载文件
  downloadFile: function () {
    var that = this
    wx.downloadFile({
      url: 'http://img06.tooopen.com/images/20180724/tooopen_sl_084220422097499.jpg',
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({
            src: res.tempFilePath
          })
        }
      }
    })
  },
  //保存文件
  saveFile: function () {
    var that = this
    let src = this.data.src
    if (src == '') {
      wx.showToast({
        title: '请先下载文件！',
        icon: 'none'
      })
    } else {
      wx.saveFile({
        tempFilePath: src,
        success: function (res) {
          console.log('文件被保存到：' + res.savedFilePath)
          wx.showToast({
            title: '保存成功！'
          })
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