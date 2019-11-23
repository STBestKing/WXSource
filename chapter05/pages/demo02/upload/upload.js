// pages/demo02/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '' //上传图片的路径地址
  },
  //选择文件
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let src = res.tempFilePaths[0]
        that.setData({ src: src })
      }
    })
  },
  //上传文件
  uploadFile: function () {
    var that = this
    //获取图片路径地址
    let src = this.data.src
    //尚未选择图片
    if (src == '') {
      wx.showToast({
        title: '请先选择文件！',
        icon: 'none'
      })
    }
    //准备上传文件
    else {
      //发起文件上传请求
      var uploadTask = wx.uploadFile({
        url: 'http://localhost/miniDemo/upload.php', //可以替换为开发者自己的服务器地址
        filePath: src,
        name: 'file',
        success: function (res) {
          console.log(res)
          wx.showToast({
            title: res.data
          })
        }
      })
      //监听文件上传进度
      uploadTask.onProgressUpdate((res) => {
        console.log('上传进度', res.progress)
        console.log('已经上传的数据长度', res.totalBytesSent)
        console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
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