// pages/demo02/recorder/recorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //开始录音
  start:function(){
    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
    }
    this.rm.start(options)
  },
  //停止录音
  stop:function(){
    this.rm.stop()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.rm = wx.getRecorderManager()
    this.rm.onStop((res) => {
      //播放录音内容
      const audioCtx = wx.createInnerAudioContext()
      audioCtx.src=res.tempFilePath
      audioCtx.play()
    })
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