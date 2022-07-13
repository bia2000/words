const db = wx.cloud.database()
Page({
  data: {
    items: [],
    bookId:''
  },

  onLoad: function (options) {
    
  },

  /**
   * 首次渲染事件
   */
  onShow: function () {
    this.onLoadData()
  },
  
  /**
   * 新增笔记事件
   */
  onNewItem: function (event) {
    wx.navigateTo({
      url: "../create/index"
    })
  },

  /**
   * 编辑笔记事件
   */
  onEditItem: function (event) {
    // console.log(event);
    wx.navigateTo({
      url: '../edit/index?key=' + event.currentTarget.dataset.key
    })
  },


  /**
   * 获取数据事件
   */
  onLoadData: function () {
    db.collection('note').get({
      success: (res)=> {
        // console.log(res)
       this.setData({
          items:res.data
       })
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
    });   
}
})
