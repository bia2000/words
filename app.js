// app.js
App({
  // app.js
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
})
