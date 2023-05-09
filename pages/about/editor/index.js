const app = getApp();
Page({
  data: {
    index: '',
    nickname: '',
    age: '',
    height: '',
    school: '',
    picker: ['男', '女'],
    region: ['', '', ''],
    lables:[]
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
    wx.setStorageSync(
      'index', this.data.index
    )
  },
  RegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
    wx.setStorageSync(
      'region', this.data.region
    )
  },

  textinput(e) {
    this.setData({
      nickname: e.detail.value
    })
    wx.setStorageSync(
      'nickname', this.data.nickname
    )
  },
  ageChange(e) {
    this.setData({
      age: e.detail.value
    })
    wx.setStorageSync(
      'age', this.data.age
    )
  },
  heightChange(e) {
    this.setData({
      height: e.detail.value
    })
    wx.setStorageSync(
      'height', this.data.height
    )
  },
  schoolChange(e) {
    this.setData({
      school: e.detail.value
    })
    wx.setStorageSync(
      'school', this.data.school
    )
  },
  lables() {
    const db = wx.cloud.database()
    const lables = db.collection('Individual_labels')
    lables.get({
      success:(res)=>{
        // console.log(res.data)
        this.setData({
          lables:res.data
        })
      }
    })
  },
  add(){
    wx.redirectTo({
      url: './lable/index',
    })
  },
  onLoad: function (options) {
    this.lables()
    this.PickerChange
    this.setData({
      nickname: wx.getStorageSync('nickname'),
      index: wx.getStorageSync('index'),
      age: wx.getStorageSync('age'),
      height: wx.getStorageSync('height'),
      school: wx.getStorageSync('school'),
      region: wx.getStorageSync('region')
    })

  },
})