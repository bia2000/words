// var hotapp = require('../../../utils/hotapp.js');
// var api = require('../../../utils/api.js');
const db = wx.cloud.database()

Page({
    data: {
        item: {
          title: "",
          content: "",
          create_time: "",
          update_time: "",
          state: 1
        },
        isNew: false,
        focus: false
    },
    onLoad: function(options) {
    },

    /**
     * 页面渲染事件
     */
    onShow: function() {
        var item = this.data.item;
        this.setData({
            item: item
        });
    },

    /**
     * 保存数据事件
     */
    onSubmit: function(event) {
        var item = this.data.item;
        var now = Date.parse(new Date()) / 1000;
        item.title = event.detail.value.title;
        item.content = event.detail.value.content;
        item.update_time = now;
        item.create_time = now;
        this.setData({
            item: item
        });
        if(item.content){
          console.log(111);
          db.collection('note').add({
            data: {
              notes:item
            }
          })
          setTimeout(()=>{
            wx.showToast({
              title: "保存成功",
            });
            
          },1000)
          wx.redirectTo({
            url: '../index/index',
          })
        }else{
          wx.showToast({
            title: "文本不能为空",
            icon:'error'
        });
        }
          
        
        // this.saveData();
    },
    onFocus:function(e){
        this.setData({
            focus: true
        });
    },
});
