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
    wx.cloud.database().collection('book').where({name:e.currentTarget.dataset.level}).get({
      success: (res)=> {
        console.log(res.data)
       this.setData({ 
        bookId:res.data[0]._id,
        level:e.currentTarget.dataset.level,
      })
      app.globalData.bookId=this.data.bookId
        }
      })
  
  
  },
  handleSearch(e){
    var keyword = e.detail.value
    wx.cloud.database().collection('word').where({word:keyword}).get({
      success: (res)=> {
        console.log(keyword);
        console.log(res.data),
       this.setData({
        wordId:res.data[0]._id,
      })
    }
  })
  setTimeout(()=>{
    wx.navigateTo({
      url: '/pages/wordDetail/index?type=1&wordId='+this.data.wordId,
    })
  },1000)
  }
})
