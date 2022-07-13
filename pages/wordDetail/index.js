// pages/wordDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordId:'',
    words:'',
    trans:[],
    sentence:[],
    usphone:'',
    num:0,
    bookId:'',
    type:''
  },
  getWordInfo(){
    wx.cloud.database().collection('word').where({_id:this.data.wordId}).get({
      success: (res)=> {
        console.log(res)
       this.setData({
        usphone:res.data[0].usphone,
        words:res.data[0].word,
        trans:res.data[0].trans,
        bookId:res.data[0].bookId,
        sentence:res.data[0].sentence
      })
        }
      })
  },
  toNext(){
    wx.redirectTo({
      url: '/pages/learn/index?num='+this.data.num+'&bookId='+this.data.bookId,
    })
  },
  handleSearch(e){
    var keyword = e.detail.value
    
    this.data.wordId=''
    wx.cloud.database().collection('word').where({word:keyword}).get({
      success: (res)=> {
       this.setData({
          wordId:res.data[0]._id,
      })
    }
  })
  setTimeout(()=>{
    wx.redirectTo({
      url: '/pages/wordDetail/index?type=1&wordId='+this.data.wordId,
    })
  },1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      wordId:options.wordId,
      type:options.type,
      num:parseInt(options.num)+1
    })
    this.getWordInfo()
  },
})