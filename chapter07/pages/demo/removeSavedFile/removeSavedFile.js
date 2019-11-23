// pages/demo/removeSavedFile/removeSavedFile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    savedFilePath: '' //本地文件路径
  },
  //下载和保存文件
  saveFile: function () {
    var that = this
    wx.downloadFile({
      url: 'http://localhost/miniDemo/demo.docx', //用户可以更改
      success: function (res) {
        // 只要服务器有响应数据，就会进入 success 回调
        if (res.statusCode === 200) {
          console.log('文件被下载到：' + res.tempFilePath)
          //保存文件到本地
          wx.saveFile({
            tempFilePath: res.tempFilePath,
            success: function (res) {
              console.log('文件被保存到：' + res.savedFilePath)
              that.setData({
                tip1: '提示：文件已保存。',
                savedFilePath: res.savedFilePath
              })
            }
          })
        }
      }
    })
  },
  //删除文件
  removeFile: function () {
    var that = this
    let savedFilePath = this.data.savedFilePath
    if (savedFilePath == '') {
      //文件尚未保存
      wx.showModal({
        title: '提示',
        content: '请先下载和保存文件！',
        showCancel: false
      })
    } else {
      //删除本地文件
      wx.removeSavedFile({
        filePath: savedFilePath,
        success: function (res) {
          that.setData({
            tip2: '提示：文件已被删除。'
          })
        }
      })
    }
  },
  //获取文件信息
  getSavedFileInfo: function () {
    var that = this
    let savedFilePath = this.data.savedFilePath
    //获取保存的文件信息
    wx.getSavedFileInfo({
      filePath: savedFilePath,
      success: function (res) {
        that.setData({
          tip3: '文件大小：' + res.size + '字节。'
        })
      },
      fail: function (res) {
        console.log(res)
        that.setData({
          tip3: '提示：文件不存在。'
        })
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