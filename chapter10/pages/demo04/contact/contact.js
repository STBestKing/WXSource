// pages/demo04/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  name: '',  //联系人姓名
  phone: '', //电话号码
  //更新联系人姓名
  nameBlur: function (e) {
    this.name = e.detail.value
  },
  //更新电话号码
  phoneBlur: function (e) {
    this.phone = e.detail.value
  },
  //打电话
  makeCall: function () {
    let phone = this.phone
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },
  //添加联系人
  addPerson: function () {
    let name = this.name
    let phone = this.phone
    if (name == '' || phone == '') {
      wx.showToast({
        title: '姓名和电话不能为空！',
        icon: 'none'
      })
    } else {
      wx.addPhoneContact({
        firstName: name,
        mobilePhoneNumber: phone
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