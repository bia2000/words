// index.js
var app = getApp()
Page({
  data:{
    modalName:'',
    level:'四级核心词',
    levels:['四级核心词','六级核心词','考研必考词','四级大纲词','六级大纲词','考研大纲词汇','中考大纲词','小学词汇','高考大纲词汇','雅思大纲词','商务英语'],
    bookId:'CET4',
    wordId:''
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
<<<<<<< HEAD
=======
  signIn(){
    wx.redirectTo({
      url: '/pages/calendar/index',
    })
  },
>>>>>>> a6b7aee (卷卷背单词实现)
  toLearn(){
    wx.navigateTo({
      url: '/pages/learn/index?bookId='+this.data.bookId,
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items
    })
  },
  handleLevel(e){
<<<<<<< HEAD
    wx.cloud.database().collection('book').where({name:e.currentTarget.dataset.level}).get({
      success: (res)=> {
        console.log(res.data)
       this.setData({ 
        bookId:res.data[0]._id,
        level:e.currentTarget.dataset.level,
=======
    // console.log(e);
    wx.cloud.database().collection('book').where({name:e.detail.value}).get({
      success: (res)=> {
        // console.log(res.data)
       this.setData({ 
        bookId:res.data[0]._id,
        level:e.detail.value,
>>>>>>> a6b7aee (卷卷背单词实现)
      })
      app.globalData.bookId=this.data.bookId
        }
      })
  
  
  },
  handleSearch(e){
    var keyword = e.detail.value
    wx.cloud.database().collection('word').where({word:keyword}).get({
      success: (res)=> {
<<<<<<< HEAD
        console.log(keyword);
        console.log(res.data),
=======
        // console.log(res.data),
>>>>>>> a6b7aee (卷卷背单词实现)
       this.setData({
        wordId:res.data[0]._id,
      })
    }
  })
  setTimeout(()=>{
<<<<<<< HEAD
    wx.navigateTo({
=======
    wx.redirectTo({
>>>>>>> a6b7aee (卷卷背单词实现)
      url: '/pages/wordDetail/index?type=1&wordId='+this.data.wordId,
    })
  },1000)
  }
})
