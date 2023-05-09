// index.js
const db = wx.cloud.database()
<<<<<<< HEAD
Page({
  data:{
  words:'',
  Unwords:'',
  bookId:'',
  type:'',
  wordId:'',
  nums:0
  },
  getKnownWords(){ 
    // var num=this.data.num
    wx.cloud.database().collection('word').where({known:true}).get({
    success: (res)=> {
      // console.log(res)
     this.setData({
      words:res.data
    })
    }
    })
  },
  getUnknownWords(){ 
    // var num=this.data.num
    wx.cloud.database().collection('word').where({known:false}).get({
    success: (res)=> {
      // console.log(res)
      this.setData({
      Unwords:res.data
    })
      }
    })
  },
  getInfo(e){
    var id= e.currentTarget.dataset.id
    
    console.log(id);
    wx.navigateTo({
      url: '/pages/wordDetail/index?type=1&wordId='+id,
    })
  },
  
  onLoad:async function(options){
    var count = await db.collection('word').where({known:true}).count();
    var count = count.total;
    console.log(count);
    this.setData({
      // bookId:options.bookId,
      type:options.type
    })
    this.getKnownWords(),
    this.getUnknownWords()
  },
  onReachBottom() {
    if(this.data.type==1){
    this.data.nums += 20
    let x = this.data.nums
    console.log(x)
    db.collection('word').where({known:true}).skip(x) // 限制返回数量为 20 条
      .get({
        success: (res)=> {
          // console.log(res)
          this.setData({
          words: this.data.words.concat(res.data)
        })
          }
      })
  }else{
    this.data.nums += 20
    let x = this.data.nums
    console.log(x)
    db.collection('word').where({known:false}).skip(x) // 限制返回数量为 20 条
      .get({
        success: (res)=> {
          // console.log(res)
          this.setData({
          Unwords: this.data.Unwords.concat(res.data)
        })
          }
      })
  }

}

})
=======
var app = getApp()
Page({
  data: {
    words: '',
    Unwords: '',
    bookId: '',
    type: '',
    wordId: '',
    nums: 0
  },
  // getKnownWords(){ 

  //   wx.cloud.database().collection('word').where({known:true}).get({
  //   success: (res)=> {

  //    this.setData({
  //     words:res.data
  //   })
  //   }
  //   })
  // },
  getWords() {
    // var num=this.data.num
    if (this.data.type == 1) {
      db.collection('userWord').where({
        bookId: this.data.bookId,
        _openid: app.globalData.openid
      }).get({
        success: (res) => {
          // console.log(res)
          this.setData({
            words: res.data
          })
        }
      })
    } else if (this.data.type == 2) {
      db.collection('userWord').where({
        bookId: this.data.bookId,
        _openid: app.globalData.openid,
        learnnum: 5
      }).get({
        success: (res) => {
          this.setData({
            words: res.data
          })
        }
      })
    } else if (this.data.type == 3) {
      db.collection('word').where({
        bookId: this.data.bookId,
        known: wx.cloud.database().command.nin([getApp().globalData.openid])
      }).get({
        success: (res) => {
          // console.log(res)
          this.setData({
            words: res.data,
          })
        }
      })
    } else if (this.data.type == 4) {
      db.collection('word').where({
        bookId: this.data.bookId
      }).get({
        success: (res) => {
          this.setData({
            words: res.data,
          })
        }
      })
    }
  },
  getInfo(e) {
    var id = e.currentTarget.dataset.id
    console.log(this.data.words);
    wx.navigateTo({
      url: '/pages/wordDetail/index?type=1&wordId=' + id,
    })
  },

  onLoad: async function (options) {
    var count = await db.collection('word').count();
    var count = count.total;
    console.log(count);
    this.setData({
      bookId: app.globalData.bookId,
      type: options.type
    })
    this.getWords()
  },
  onReachBottom() {
    if (this.data.type == 1) {
      this.data.nums += 20
      let x = this.data.nums
      console.log(x)
      db.collection('userWord').where({
        bookId: this.data.bookId,
        _openid: app.globalData.openid
        }).skip(x) // 限制返回数量为 20 条
        .get({
          success: (res) => {
            console.log(res)
            this.setData({
              words: this.data.words.concat(res.data)
            })
          }
        })
    } 
    else if (this.data.type == 2) {
      this.data.nums += 20
      let x = this.data.nums
      console.log(x)
      db.collection('userWord').where({
        bookId: this.data.bookId,
        _openid: app.globalData.openid,
        learnnum: 5
        }).skip(x) // 限制返回数量为 20 条
        .get({
          success: (res) => {
            // console.log(res)
            this.setData({
              words: this.data.words.concat(res.data)
            })
          }
        })
    }else if (this.data.type == 3) {
      this.data.nums += 20
      let x = this.data.nums
      console.log(x)
      db.collection('word').where({
        bookId: this.data.bookId,
        known: wx.cloud.database().command.nin([getApp().globalData.openid])
        }).skip(x) // 限制返回数量为 20 条
        .get({
          success: (res) => {
            // console.log(res)
            this.setData({
              words: this.data.words.concat(res.data)
            })
          }
        })
    }else if (this.data.type == 4) {
      this.data.nums += 20
      let x = this.data.nums
      console.log(x)
      db.collection('word').where({
          bookId: this.data.bookId
        }).skip(x) // 限制返回数量为 20 条
        .get({
          success: (res) => {
            // console.log(res)
            this.setData({
              words: this.data.words.concat(res.data)
            })
          }
        })
    }

  }

})
>>>>>>> a6b7aee (卷卷背单词实现)
