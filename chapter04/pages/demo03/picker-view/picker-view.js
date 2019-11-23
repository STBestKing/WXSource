// pages/demo03/picker-view/picker-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    soup: ['奶油蘑菇汤', '罗宋汤', '牛肉清汤'],
    maincourse: ['煎小牛肉卷', '传统烤羊排', '清煮三文鱼'],
    dessert: ['坚果冰淇淋', '焦糖布丁', '奶酪蛋糕'],
    value: [1, 1, 1],//默认每个选项的数组下标
    menu:[]
  },
  pickerviewChange: function (e) {
    let v = e.detail.value;//获取每个选项的数组下标
    let menu = [];
    menu.push(this.data.soup[v[0]]);
    menu.push(this.data.maincourse[v[1]]);
    menu.push(this.data.dessert[v[2]]);
    this.setData({menu:menu});
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