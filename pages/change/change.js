//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    curLang:{},
    langList: app.globalData.langList
  },
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang })
  },
  onTapItem: function (e) {
    console.log(e)
    let langObj = e.currentTarget.dataset
    wx.setStorageSync('language', langObj)
    this.setData({curLang:langObj})
    app.globalData.curLang = langObj
    //console.log(app.globalData.langList)
    wx.switchTab({ url: '/pages/index/index' })
  }
})
