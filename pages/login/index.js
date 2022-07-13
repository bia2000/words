Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  // 事件处理函数
  bindViewTap(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      fail:function (e) {
        wx.showToast({
          title: '你选择了取消',
          icon: "none",
          duration: 1500,
          mask: true
        })
      },
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(res.userInfo)
        wx.login({
          success(res) {
            if (res.code) {
              console.log(res.code)
              //发起网络请求
              wx.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
                data: {
                  code: res.code
                }
              })
              wx.showToast({
                title: '授权成功',
              })
              setTimeout(()=>{
                wx.switchTab({
                url: '/pages/home/index',
              })
              },1000)
              
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        }) 
      }
    })  
      }
  
})