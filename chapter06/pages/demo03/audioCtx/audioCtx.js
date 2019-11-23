// pages/demo03/audioCtx/audioCtx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  
  },
  //初始化音频
  initialAudio:function(){
    let audioCtx = this.audioCtx
    audioCtx.autoplay = true //允许自动播放
    audioCtx.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    audioCtx.onPlay(() => {
      console.log('开始播放')
    })
    audioCtx.onPause((res) => {
      console.log('暂停播放')
    })
    audioCtx.onStop((res) => {
      console.log('停止播放')
    })
  },
  //开始播放
  play:function(){
    this.audioCtx.play()
  },
  //暂停播放
  pause: function () {
    this.audioCtx.pause()
  },
  //停止播放
  stop:function(){
    this.audioCtx.stop()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audioCtx = wx.createInnerAudioContext()
    this.initialAudio()
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