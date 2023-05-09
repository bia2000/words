// pages/about/editor/lable/index.js
Page({
    data: {

    },
    insertdata: function (e) {
        const db = wx.cloud.database()
        const lables = db.collection('Individual_labels')
        lables.add({
            data:{
                value:e.detail.value,
                color:'blue'
            },
    });
    },
    goto:function(){
      wx.redirectTo({
        url: '/pages/about/editor/index',
      })
    },

    onLoad: function (options) {

    },

})