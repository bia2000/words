const db = wx.cloud.database()
Page({
  data: {
    items: [],
<<<<<<< HEAD
    bookId:''
  },

  onLoad: function (options) {
    
=======
    time: []
  },

  onLoad: function (options) {

>>>>>>> a6b7aee (卷卷背单词实现)
  },

  /**
   * 首次渲染事件
   */
  onShow: function () {
    this.onLoadData()
<<<<<<< HEAD
  },
  
=======


  },

>>>>>>> a6b7aee (卷卷背单词实现)
  /**
   * 新增笔记事件
   */
  onNewItem: function (event) {
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> a6b7aee (卷卷背单词实现)
      url: "../create/index"
    })
  },

  /**
   * 编辑笔记事件
   */
  onEditItem: function (event) {
    // console.log(event);
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> a6b7aee (卷卷背单词实现)
      url: '../edit/index?key=' + event.currentTarget.dataset.key
    })
  },


  /**
   * 获取数据事件
   */
  onLoadData: function () {
<<<<<<< HEAD
    db.collection('note').get({
      success: (res)=> {
        // console.log(res)
       this.setData({
          items:res.data
       })
=======
    var timestamp = []
    db.collection('note').where({
      _openid: getApp().globalData.openid
    }).get({
      success: (res) => {
        for (let i = 0; i < res.data.length; i++) {
          timestamp.push(this.timestampToTime(res.data[i].notes.update_time))
        }
        if (timestamp) {
          this.setData({
            items: res.data,
            time: timestamp
          })
        }
>>>>>>> a6b7aee (卷卷背单词实现)
      }
    })
  },

  /**
   * 下拉刷新事件, 数据同步
   */
  onPullDownRefresh: function () {
    wx.showToast({
      title: '正在同步数据',
      icon: 'loading'
<<<<<<< HEAD
    });   
}
})
=======
    });
  },
  timestampToTime(timestamp) {
    timestamp = timestamp ? timestamp : null;
    let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
  }
})
>>>>>>> a6b7aee (卷卷背单词实现)
