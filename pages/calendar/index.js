<<<<<<< HEAD

let num =0
 
 
=======
>>>>>>> a6b7aee (卷卷背单词实现)
Page({
  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    data_arr:["日","一","二","三","四","五","六"],
    year:"",
    month:"",
    today:[],
    num:0,
 
    nowlist:[]
  },
  signIn(){ 
    
    let m = wx.getStorageSync('day')
    
    var time = new Date().getDate()
    
    if(m!=time){
    
    wx.showToast({
      title: '今日已成功签到',
      duration:2000
    })
    num++
    let todaylist = this.data.today
    todaylist.push({
      today:time
    })
    
    this.setData({
      num:num,
      today:todaylist
    })
    // console.log(todaylist);
 
    wx.setStorageSync('day', new Date().getDate()) 
    wx.setStorageSync('month', new Date().getMonth()+1)
    wx.setStorageSync('num', this.data.num)
    
}
else{
  wx.showToast({
    title: '今日已签到',
    icon:'error',
    duration:2000
  })
}
   
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
 
  let number = wx.getStorageSync('num')   
   let day = wx.getStorageSync('day')
   let nowlist = this.data.nowlist
   nowlist.push({
     today:day
   })
    this.setData({
      num:number,
     today:nowlist
    })
 
 
=======
    data_arr: ["日", "一", "二", "三", "四", "五", "六"],
    year: "",
    month: "",
    today: [],
    num: 0,
    days: [],
    nowlist: [],
    flag: 0
  },
  qiandao() {
    var time1 = new Date().getFullYear()
    var time2 = new Date().getMonth()
    var time3 = new Date().getDate()
    const db = wx.cloud.database()
    const sign = db.collection('sign_in')
    sign.where({
      _openid: getApp().globalData.openid,
      _year: time1,
      _month: time2 + 1,
      _date: time3
    }).get({
      success: res => {
        if (res.data.length != 0) {
        }
        else {
          this.setData({ flag: 1 })
          sign.add({
            data: {
              _year: time1,
              _month: time2 + 1,
              _date: time3,
            }
          })
          wx.showToast({
            title: '今日已成功签到',
            duration: 2000
          })
          sign.where({
            _openid: getApp().globalData.openid
          }).get({
            success: res => {
              this.setData({
                num: res.data.length,
              })
            }
          })
        }
      }
    })
    sign.where({
      _openid: getApp().globalData.openid
    }).get({
      success: res => {
        this.setData({ today: res.data })
      }
    })
  },
  getnum: function () {
    const db = wx.cloud.database()
    const sign = db.collection('sign_in')
    sign.where({
      _openid: getApp().globalData.openid
    }).get({
      success: res => {
        this.setData({
          today: res.data,
          num: res.data.length
        })
      }
    })
    var time1 = new Date().getFullYear()
    var time2 = new Date().getMonth()
    var time3 = new Date().getDate()
    sign.where({
      _openid: getApp().globalData.openid,
      _year: time1,
      _month: time2 + 1,
      _date: time3
    }).get({
      success: res => {
        if (res.data.length != 0) {
          this.setData({ flag: 1 })
        }
      }
    })
  },


  onLoad: function (options) {
    
    let number = wx.getStorageSync('num')
    let nowlist = this.data.nowlist
    // nowlist.push({
    //   today: day
    // })
    this.getnum()
   
    this.setData({
      num: number,
      today: nowlist
    })


>>>>>>> a6b7aee (卷卷背单词实现)
    let now = new Date()
    let year = now.getFullYear()
    // month获取是从 0~11
    let month = now.getMonth() + 1
    this.setData({
<<<<<<< HEAD
      year,month
    })
    this.showCalendar()
 
    
  },
  showCalendar(){
    let {year,month} = this.data
    //以下两个month已经+1
    let currentMonthDays = new Date(year,month,0).getDate() //获取当前月份的天数
    let startWeek = new Date(year + '/' + month + '/' + 1).getDay(); //本月第一天是从星期几开始的
    this.setData({
      currentMonthDays,startWeek
    })
  },
 
  //上个月按钮
  bindPreMonth(){
    let {year,month} = this.data
    //判断是否是1月
    if(month - 1 >= 1){
      month = month - 1 
    }else{
=======
      year, month
    })
    this.showCalendar()
  },
  showCalendar() {
    let { year, month } = this.data
    //以下两个month已经+1
    let currentMonthDays = new Date(year, month, 0).getDate() //获取当前月份的天数
    for (var i = 1; i <= currentMonthDays; i++) {
      this.data.days.push(i)
    }
    let startWeek = new Date(year + '/' + month + '/' + 1).getDay(); //本月第一天是从星期几开始的
    this.setData({
      currentMonthDays, startWeek
    })
  },

  //上个月按钮
  bindPreMonth() {
    let { year, month } = this.data
    //判断是否是1月
    if (month - 1 >= 1) {
      month = month - 1
    } else {
>>>>>>> a6b7aee (卷卷背单词实现)
      month = 12
      year = year - 1
    }
    this.setData({
<<<<<<< HEAD
      month,year
    })
    this.showCalendar()
  },
 
  //下个月按钮
  bindNextMonth(){
    let {year,month} = this.data
    //判断是否是12月
    if(month + 1 <= 12){
      month = month + 1 
    }else{
=======
      month, year
    })
    this.showCalendar()
  },

  //下个月按钮
  bindNextMonth() {
    let { year, month } = this.data
    //判断是否是12月
    if (month + 1 <= 12) {
      month = month + 1
    } else {
>>>>>>> a6b7aee (卷卷背单词实现)
      month = 1
      year = year + 1
    }
    this.setData({
<<<<<<< HEAD
      month,year
    })
    this.showCalendar()
  }
 
=======
      month, year
    })
    this.showCalendar()
  }


>>>>>>> a6b7aee (卷卷背单词实现)
})