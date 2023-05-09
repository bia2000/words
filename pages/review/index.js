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
=======
    learnnum: 0,
    more:0,
    flag:1,
>>>>>>> a6b7aee (卷卷背单词实现)
    num: 0
  },
  getWordsName() {
    var num = this.data.num
    wx.cloud.database().collection('userWord').where({
      bookId: this.data.bookId,
<<<<<<< HEAD
      _openid: getApp().globalData.openID
    }).get({
      success: (res) => {
        // console.log(num)
        this.setData({
          words: res.data[num].word,
          trans: res.data[num].trans,
          usphone: res.data[num].usphone,
          wordId: res.data[num]._id,
          sentence: res.data[num].sentence
        })
=======
      _openid: getApp().globalData.openid,
      learnnum: wx.cloud.database().command.lt(5)
    }).get({
      success: (res) => {
        if(res.data[num]!=null){
            this.setData({
          words: res.data[num].word,
          trans: res.data[num].trans,
          usphone: res.data[num].usphone,
          wordId: res.data[num].wordId,
          sentence: res.data[num].sentence,
          learnnum: res.data[num].learnnum
        })
        }
      else{
        this.setData({more:1,flag:0})
      }
>>>>>>> a6b7aee (卷卷背单词实现)
      }
    })
  },

  knowWord() {
<<<<<<< HEAD
    wx.redirectTo({
      url: '/pages/wordDetail/index?num=' + this.data.num + '&wordId=' + this.data.wordId,
=======
    wx.cloud.database().collection('userWord').where({
      wordId: this.data.wordId,
      _openid: getApp().globalData.openid,
    }).update({
      data: {
        learnnum: this.data.learnnum + 1,
        due: {
          year:new Date().getFullYear(),
          month:new Date().getMonth(),
          day:new Date().getDate()
        }
      },
    })
    wx.redirectTo({
      url: '/pages/wordDetail/index?type=3&num=' + this.data.num + '&wordId=' + this.data.wordId,
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
   
    wx.cloud.database().collection('word').doc(this.data.wordId).update({
      data: {
        known: wx.cloud.database().command.pull(getApp().globalData.openID)
      },
    })
    wx.cloud.database().collection('userWord').doc(this.data.wordId).remove()
    wx.redirectTo({
      url: '/pages/wordDetail/index?num=' + this.data.num + '&wordId=' + this.data.wordId,
=======
        due: {
          year:new Date().getFullYear(),
          month:new Date().getMonth(),
          day:new Date().getDate()
        }
      }
    })

    wx.cloud.database().collection('word').doc(this.data.wordId).update({
      data: {
        known: wx.cloud.database().command.pull(getApp().globalData.openid)
      },
    })
    wx.cloud.database().collection('userWord').where({
      wordId: this.data.wordId,
      _openid: getApp().globalData.openid,
    }).remove()
    wx.redirectTo({
      url: '/pages/wordDetail/index?type=3&num=' + this.data.num + '&wordId=' + this.data.wordId,
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