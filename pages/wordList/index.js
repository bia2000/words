// index.js
const db = wx.cloud.database()
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
