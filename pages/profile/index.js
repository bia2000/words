<<<<<<< HEAD
=======
const app = getApp()
>>>>>>> a6b7aee (卷卷背单词实现)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaAValue: '',
    modalName: null,
<<<<<<< HEAD
  },
  showMessage(){
    wx.navigateTo({
      url: '/pages/message/index',
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  loadModal (e) {
    this.setData({
      loadModal: true
    })
    setTimeout(()=> {
      this.setData({
        modalName: null
      })
      this.setData({
        loadModal: false
      })
    }, 1000)
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  }
=======
    
  },
 
  onLoad() {
    // console.log(app.globalData.userInfo)
    this.setData({
        userInfo:app.globalData.userInfo
    })
  },
  getUserProfile(e) {
    var that = this;
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res)
        var user = res.userInfo
        app.globalData.userInfo = user
        that.setData({
          userInfo: user,
        //   hasUserInfo: true
        })
        wx.cloud.database().collection('login_users').where({
            _openid:app.globalData.openid
        }).get({
            success(res){
                // console.log(res)
                if(res.data.length==0){
                    wx.cloud.database().collection('login_users').add({
                        data:{
                            avatarUrl:user.avatarUrl,
                            nickName:user.nickName
                        },
                        success(res){
                            // console.log(res)
                            wx.showToast({
                                title:'登陆成功',
                            })
                        }
                    })
                }
                else{
                    that.setData({
                        userInfo:res.data[0]
                    })
                }
            }
        })
       
      }
    })
  },
  loginout(){
      app.globalData.userInfo = null
      this.setData({
          userInfo:null
      })
  },
 
  onLoad() {
    // console.log(app.globalData.userInfo)
    this.setData({
        userInfo:app.globalData.userInfo
    })
  },
  getUserProfile(e) {
    var that = this;
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res)
        var user = res.userInfo
        app.globalData.userInfo = user
        that.setData({
          userInfo: user,
        //   hasUserInfo: true
        })
        wx.cloud.database().collection('login_users').where({
            _openid:app.globalData.openid
        }).get({
            success(res){
                // console.log(res)
                if(res.data.length==0){
                    wx.cloud.database().collection('login_users').add({
                        data:{
                            avatarUrl:user.avatarUrl,
                            nickName:user.nickName
                        },
                        success(res){
                            // console.log(res)
                            wx.showToast({
                                title:'登陆成功',
                            })
                        }
                    })
                }
                else{
                    that.setData({
                        userInfo:res.data[0]
                    })
                }
            }
        })
       
      }
    })
  },
  loginout(){
      app.globalData.userInfo = null
      this.setData({
          userInfo:null
      })
  },
>>>>>>> a6b7aee (卷卷背单词实现)
})