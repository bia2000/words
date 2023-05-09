// app.js
App({
  // app.js
<<<<<<< HEAD
 onLaunch: function() {
 
     
  this.globalData = {
    bookId:'CET4'
  } // 务必确保这一行在前面
   
  wx.getSystemInfo({
    success: e => {
      this.globalData.StatusBar = e.statusBarHeight;
      let custom = wx.getMenuButtonBoundingClientRect();
      this.globalData.Custom = custom;  
      this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
    }
  })  
  wx.cloud.init({
     env:'cloud1-5gef4k6d4460cb8c' 
   })
},
=======
  onLaunch: function () {
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
    this.globalData = {
      bookId: 'CET4'
    } // 务必确保这一行在前面

    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
    wx.cloud.init({
      env: 'cloud1-5gef4k6d4460cb8c'
    })
    var that = this;
    wx.cloud.callFunction({
      name: 'login_user_openid',
      success(res) {
        // console.log(res)
        that.globalData.openid = res.result.openid
        wx.cloud.database().collection('login_users').where({
          _openid: res.result.openid
        }).get({
          success(result) {
            // console.log(result)
            that.globalData.userInfo = result.data[0]
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    openid: null,
    curLang: {},
    langList: [
      {
        'chs': '英文',
        "lang": 'en',
        "index": 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        "index": 1
      },
      {
        'chs': '日语',
        'lang': 'jp',
        "index": 2
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        "index": 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 5
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 6
      }
    ]

  }
>>>>>>> a6b7aee (卷卷背单词实现)
})
