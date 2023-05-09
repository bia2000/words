
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
<<<<<<< HEAD
        var item = this.data.item;
        item.value.title = event.detail.value.title;
        item.value.content = event.detail.value.content;
        this.setData({
            item: item
        });
        
=======
      var item = this.data.item[0];
      // console.log(item);
      var now = Date.parse(new Date());
      item.notes.title = event.detail.value.title;
      item.notes.content = event.detail.value.content;
      item.notes.update_time = now;
      // console.log(item.notes);
      this.setData({
          item: item
      });
      if(item.notes.content){
<<<<<<< HEAD
=======
        console.log(111);
>>>>>>> 59cb0a6 (note2)
        db.collection('note').where({_id:this.data.item._id}).update({
          data: {
            notes:item.notes
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
>>>>>>> a6b7aee (卷卷背单词实现)
    },
    onFocus:function(e){
        this.setData({
            focus: true,
        });
    },
    /**
<<<<<<< HEAD
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

=======
     * 删除记事本事件
     */
    onDelete: function(event) {
      wx.showModal({
        cancelColor: 'cancelColor',
        title:"确定要删除该笔记？",
        success:()=>{
          db.collection('note').where({_id:this.data.item[0]._id}).remove({
            success: function(res) {
            // console.log(res.data)
            setTimeout(()=>{
              wx.showToast({
                title: "删除成功",
              });
              
            },1000)
            wx.redirectTo({
              url: '../index/index',
            })
            
        }
      })
        }
        })
      
    },
>>>>>>> a6b7aee (卷卷背单词实现)
    /**
     * 获取数据
     */
    loadData: function() {
<<<<<<< HEAD
      db.collection('note').where({_id:this.data.item.id}).get({
        success: (res)=> {
          console.log(res)
=======
      
        db.collection('note').where({_id:this.data.item.id}).get({
          success: (res)=> {
          // console.log(res)
>>>>>>> a6b7aee (卷卷背单词实现)
          this.setData({
            item:res.data
         })
        }
      })
        
    }
});
