
const db = wx.cloud.database()
Page({
    data: {
        item: { 
          id:'',
          title: "",
          content: "",
          create_time: "",
          update_time: "",
          state: 1
        },
        isNew: false,
        focus: false,
    },
    /**
     * 页面首次加载事件
     */
    onLoad: function(options) {
        var item = this.data.item;
        item.id = options.key;
        console.log(item.id);
        this.setData({
            item: item
        });
        this.loadData()
    },

    /**
     * 页面渲染事件
     */
    onShow: function() {
        var that = this;
        that.loadData(that.data.item.key);
    },
    /**
     * 保存数据事件
     */
    onSubmit: function(event) {
        var item = this.data.item;
        item.value.title = event.detail.value.title;
        item.value.content = event.detail.value.content;
        this.setData({
            item: item
        });
        
    },
    onFocus:function(e){
        this.setData({
            focus: true,
        });
    },
    /**
     * 请求服务器保存数据
     */
    saveData: function() {
      var item = this.data.item;
      var now = Date.parse(new Date()) / 1000;
      item.update_time = now;
      this.setData({
          item: item
      });
        
    },

    /**
     * 删除记事本事件
     */
    onDelete: function(event) {
        // api.destroy(this.data.item, function(res) {
        //     if (res) {
        //         wx.showToast({
        //             title: "删除成功",
        //             success:function(){
        //                 // 返回首页
        //                 setTimeout(function(){
        //                     wx.hideToast();
        //                     wx.navigateBack();
        //                 },1000)
        //             }
        //         });
        //     } else {
        //         wx.showToast({
        //             title: "删除失败"
        //         });
        //     }
        // });
    },

    /**
     * 获取数据
     */
    loadData: function() {
      db.collection('note').where({_id:this.data.item.id}).get({
        success: (res)=> {
          console.log(res)
          this.setData({
            item:res.data
         })
        }
      })
        
    }
});
