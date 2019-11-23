// pages/demo02/download/download.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDownload: false
  },
  //下载图片文件
  download: function () {
    var that = this
    //开始下载
    var downloadTask = wx.downloadFile({
      url: 'http://img06.tooopen.com/images/20180821/tooopen_sl_135625562533875.jpg', //用户可自行更换
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          let src = res.tempFilePath//文件临时路径地址
          that.setData({
            src: src,
            isDownload: true
          })
        }
      }
    })
    //任务对象监听下载进度
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  },
  //清空下载图片
  reset: function () {
    this.setData({ 
      src: '',
      isDownload:false
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