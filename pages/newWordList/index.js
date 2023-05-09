// index.js
const db = wx.cloud.database()
var app = getApp()
Page({
  data:{
  words:'',
  type:'',
  wordId:'',
  nums:0
  },
  getWords(){ 
    // console.log(111);
    db.collection('sign').where({
        _openid: getApp().globalData.openid
    }).get({
      success: (res)=> {
        this.setData({
        words:res.data
        })
      }
    })
  },
  getInfo(e){
    var id= e.currentTarget.dataset.id
    // console.log(id);
    wx.navigateTo({
      url: '/pages/wordDetail/index?type=1&wordId='+id,
    })
  },
  
  onLoad(options){
    // this.setData({
    //   bookId:app.globalData.bookId,
    //   type:options.type
    // })
    this.getWords()
  },
  onReachBottom() {
    this.data.nums += 20
    let x = this.data.nums
    // console.log(x)
    db.collection('sign').where({
      _openid: getApp().globalData.openid
  }).skip(x) // 限制返回数量为 20 条
      .get({
        success: (res)=> {
        //   console.log(res)
          this.setData({
          words: this.data.words.concat(res.data)
        })
          }
      })

  },
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection =='left'){
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
  delete(e) {
    let id = e.currentTarget.dataset.id;
    let words = [...this.data.words];
    console.log('id--->', id);
    wx.showModal({
         cancelColor: 'cancelColor',
        title:"是否删除",
        success:()=>{
            for (let i = 0; i < words.length; i++) {
                const item = words[i];
                item.isTouchMove = false;
                if (item._id === id) {
                  words.splice(i, 1);
                  db.collection('sign').where({
                      _id:id
                  }).remove()
                  break;
                }
              }
              this.setData({
                  words
              })
        }
    })
   
  },
})

