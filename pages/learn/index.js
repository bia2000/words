// index.js
Page({
  data: {
    words: '',
    bookId: '',
    trans: [],
    sentence: [],
    usphone: '',
    wordId: '',
<<<<<<< HEAD
    num: 0
  },
  getWordsName() {
    var num = this.data.num
    wx.cloud.database().collection('word').where({
      bookId: this.data.bookId,
      known: wx.cloud.database().command.nin([getApp().globalData.openID])
    }).get({
      success: (res) => {
        console.log(res)
=======
    more:0,
    flag:1,
    num: 0
  },
  getWordsName() {
    console.log(getApp().globalData.openid)
    var num = this.data.num
    wx.cloud.database().collection('word').where({
      bookId: this.data.bookId,
      known: wx.cloud.database().command.nin([getApp().globalData.openid])
    }).get({
      success: (res) => {
        console.log(res)
        if(res.data[num]!=null){
>>>>>>> a6b7aee (卷卷背单词实现)
        this.setData({
          words: res.data[num].word,
          trans: res.data[num].trans,
          usphone: res.data[num].usphone,
          wordId: res.data[num]._id,
          sentence: res.data[num].sentence
        })
      }
<<<<<<< HEAD
=======
      else{
        this.setData({more:1,flag:0})
      }
    }
>>>>>>> a6b7aee (卷卷背单词实现)
    })
  },

  knowWord() {
    wx.cloud.database().collection('userWord').add({
        // data 字段表示需新增的 JSON 数据
        data: {
<<<<<<< HEAD
          _id: this.data.wordId,
=======
          wordId: this.data.wordId,
>>>>>>> a6b7aee (卷卷背单词实现)
          sentence: this.data.sentence,
          bookId: this.data.bookId,
          rank: this.data.rank,
          trans: this.data.trans,
          usphone: this.data.usphone,
          word: this.data.words,
<<<<<<< HEAD
          due: new Date()
=======
          learnnum:1,
          due: {
            year:new Date().getFullYear(),
            month:new Date().getMonth(),
            day:new Date().getDate()
          }
>>>>>>> a6b7aee (卷卷背单词实现)
        }
      })
      .then(res => {
        // console.log(res)
      })
    wx.cloud.database().collection('word').doc(this.data.wordId).update({
      data: {
<<<<<<< HEAD
        known: wx.cloud.database().command.push(getApp().globalData.openID)
      },
    })
    wx.redirectTo({
      url: '/pages/wordDetail/index?num=' + this.data.num + '&wordId=' + this.data.wordId,
=======
        known: wx.cloud.database().command.push(getApp().globalData.openid)
      },
    })
    wx.redirectTo({
      url: '/pages/wordDetail/index?type=2&num=' + this.data.num + '&wordId=' + this.data.wordId,
>>>>>>> a6b7aee (卷卷背单词实现)
    })
  },

  toDetail() {
    wx.cloud.database().collection('sign').add({
      // data 字段表示需新增的 JSON 数据
      data: {
<<<<<<< HEAD
        _id: this.data.wordId,
=======
        wordId: this.data.wordId,
>>>>>>> a6b7aee (卷卷背单词实现)
        sentence: this.data.sentence,
        bookId: this.data.bookId,
        rank: this.data.rank,
        trans: this.data.trans,
        usphone: this.data.usphone,
        word: this.data.words,
<<<<<<< HEAD
        due: new Date()
      }
    })
    wx.redirectTo({
      url: '/pages/wordDetail/index?num=' + this.data.num + '&wordId=' + this.data.wordId,
=======
        due:{
          year:new Date().getFullYear(),
          month:new Date().getMonth(),
          day:new Date().getDate()
        }
      }
    })
    wx.redirectTo({
      url: '/pages/wordDetail/index?type=2&num=' + this.data.num + '&wordId=' + this.data.wordId,
>>>>>>> a6b7aee (卷卷背单词实现)
    })
  },
  onLoad(options) {
    if (parseInt(options.num) > 0) {
      this.setData({
        num: parseInt(options.num)
      })
    }
    this.setData({
      bookId: options.bookId,
    })
    this.getWordsName()
  },

})