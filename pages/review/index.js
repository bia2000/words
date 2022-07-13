// index.js
Page({
  data: {
    words: '',
    bookId: '',
    trans: [],
    sentence: [],
    usphone: '',
    wordId: '',
    num: 0
  },
  getWordsName() {
    var num = this.data.num
    wx.cloud.database().collection('userWord').where({
      bookId: this.data.bookId,
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
      }
    })
  },

  knowWord() {
    wx.redirectTo({
      url: '/pages/wordDetail/index?num=' + this.data.num + '&wordId=' + this.data.wordId,
    })
  },

  toDetail() {
    wx.cloud.database().collection('sign').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        _id: this.data.wordId,
        sentence: this.data.sentence,
        bookId: this.data.bookId,
        rank: this.data.rank,
        trans: this.data.trans,
        usphone: this.data.usphone,
        word: this.data.words,
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