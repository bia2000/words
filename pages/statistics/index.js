// pages/profile/index.js
import * as echarts from '../../ec-canvas/echarts';
var app = getApp()
const db = wx.cloud.database()

let chart = null
let isInit = false
function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  isInit = true
  return chart
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookId:'',
    learnedWord:0,
    allWord:0,
    needWord:0,
    reviewWord:0,
    allLearn:0
    // learnConfig: {},
        // learnPercentage: 0,
        // learnReset: false,
        // reviewConfig: {},
        // reviewPercentage: 0,
        // reviewReset: false,
        // percentage: 100,
        // resetCanvas: false,
        // isStop: false,
        // ec: { onInit: initChart },
        // bkDetail: {},
        // bkLearnData: {},
        // allLearnData: {},
        // notebookWord: [],
        // todayLearnData: {},
        // selectedDay: {},
        // isChangingBook: false,
        // allBkData: [],
        // dailyTask: {},
    },
    chartdata: {},
    
  showMessage(){
    wx.navigateTo({
      url: '/pages/message/index',
    })
  },
  getCount: async function(){
    var learn = await (await db.collection('word').where({bookId:this.data.bookId,known:true}).count()).total
    var review = await (await db.collection('userWord').where({bookId:this.data.bookId}).count()).total
    var all = await (await db.collection('word').where({bookId:this.data.bookId}).count()).total
    var need = all-review
    var allLearn = await (await db.collection('word').where({known:true}).count()).total;
    this.setData({
      learnedWord:learn,
      needWord:need,
      reviewWord:review,
      allWord:all,
      allLearn:allLearn
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onShow(options) {
    this.getCount()
    this.setData({
      bookId:app.globalData.bookId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  }

  
})