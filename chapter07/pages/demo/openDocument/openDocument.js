// pages/demo/openDocument/openDocument.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: ''
  },
  //下载文件
  downloadFile: function () {
    var that = this
    wx.downloadFile({
      url: 'http://localhost/miniDemo/demo.docx', //用户可以更改
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          console.log(res)
          that.setData({
            tip: '提示：文件已下载',
            path: res.tempFilePath
          })
        }
      }
    })
  },
  //打开文件
  openDocument: function () {
    let path = this.data.path
    //文档尚未下载
    if (path == '') {
      wx.showModal({
        title: '提示',
        content: '请先下载文档！',
        showCancel: false
      })
    }
    //打开文档
    else {
      wx.openDocument({ filePath: path })
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