// pages/demo01/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  showModal1:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗（有取消按钮）',
      success: function (res) {
        if (res.confirm) {
          console.log('确定按钮被点击')
        } else if (res.cancel) {
          console.log('取消按钮被点击')
        }
      }
    })
  },
  showModal2: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗（无取消按钮）',
      showCancel:false
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