// pages/demo/getFileInfo/getFileInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePath: '' //临时文件路径
  },
  //下载文件
  downloadFile: function () {
    var that = this
    wx.downloadFile({
      url: 'http://localhost/miniDemo/demo.docx', //用户可以更改
      success: function (res) {
        // 只要服务器有响应数据，就会进入 success 回调
        if (res.statusCode === 200) {
          console.log('文件被下载到：' + res.tempFilePath)
          that.setData({
            tip1: '提示：文件已下载。',
            tempFilePath: res.tempFilePath
          })
        }
      }
    })
  },
  //获取临时文件信息
  getFileInfo: function () {
    var that = this
    let tempFilePath = this.data.tempFilePath
    if (tempFilePath == '') {
      //文件尚未保存到本地
      wx.showModal({
        title: '提示',
        content: '请先下载文件！',
        showCancel: false
      })
    } else {
      //获取保存的文件信息
      wx.getFileInfo({
        filePath: tempFilePath,
        success: function (res) {
          that.setData({
            tip2: '文件大小：' + res.size + '字节。'
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