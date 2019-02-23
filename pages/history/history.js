const app = getApp()

Page({
  data:{
    history:[]
  },
  onShow:function () {
    this.setData({ history: wx.getStorageSync('history') })
  },
  onTapItem:function (e) {
    console.log(e)
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
      // success (res) {
      //   console.log(res)
      //   console.log(e.currentTarget.dataset.query, app.globalData.curLang)
      //} 
    })
  }
})