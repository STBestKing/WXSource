// pages/demo/getSavedFileList/getSavedFileList.js
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
          //保存文件到本地
          wx.saveFile({
            tempFilePath: res.tempFilePath,
            success: function (res) {
              console.log('文件保存成功！')
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
  //获取本地文件列表
  getSavedFileList:function(){
    var that = this
    wx.getSavedFileList({
      success: function (res) {
        console.log(res.fileList)
        that.setData({
          tip2: '提示：文件列表已获取。'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //如果有别的保存文件影响测试结果，可以先删除
    // wx.getSavedFileList({
    //   success: function (res) {
    //     let array = res.fileList
    //     for(var i=0;i<array.length;i++){
    //       wx.removeSavedFile({
    //         filePath: array[i].filePath
    //       })
    //     }
    //   }
    // })
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