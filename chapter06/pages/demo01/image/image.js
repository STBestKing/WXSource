// pages/demo01/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //选择图片
  chooseImage:function(){
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({ src: tempFilePaths[0]})
      }
    })
  },
  //预览图片
  previewImage:function(){
    var that = this
    wx.previewImage({
      urls: [this.data.src],
    })
  },
  //获取图片信息
  getImageInfo: function () {
    var that = this
    wx.getImageInfo({
      src: this.data.src,
      success:function(res){
        wx.showToast({
          icon:'none',
          title: '宽:'+res.width+',高:'+res.height,
        })
      }
    })
  },
  //保存图片
  saveImage: function () {
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath: that.data.src,
      success:function(){
        wx.showToast({
          title: '保存成功！',
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