// pages/profile/index.js
import * as echarts from '../../ec-canvas/echarts';
var app = getApp()
const db = wx.cloud.database()
<<<<<<< HEAD

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
=======
let Chart = null
Page({
>>>>>>> a6b7aee (卷卷背单词实现)
  data: {
    bookId:'',
    learnedWord:0,
    allWord:0,
    needWord:0,
    reviewWord:0,
<<<<<<< HEAD
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
    
=======
    allLearn:0,
    allLearned:0,
    allReview:0,
    dayWord:0,
    weekLearnWord:[],
    weekReviewWord:[],
    week:[],
    ec: {
      onInit: function (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart);
        return chart;
      },
      lazyLoad: true // 延迟加载
    },
    },
>>>>>>> a6b7aee (卷卷背单词实现)
  showMessage(){
    wx.navigateTo({
      url: '/pages/message/index',
    })
  },
  getCount: async function(){
<<<<<<< HEAD
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
=======
    var dayWord = await (await db.collection('userWord').where({
      _openid: getApp().globalData.openid,
      due:{day:15}
    }).count()).total;
    var learn = await (await db.collection('userWord').where({
      bookId: this.data.bookId,
      _openid: getApp().globalData.openid,
      learnnum:5
    }).count()).total  
    var review = await (await db.collection('userWord').where({
      bookId:this.data.bookId,
      _openid: getApp().globalData.openid}).count()).total
    var all = await (await db.collection('word').where({bookId:this.data.bookId}).count()).total
    var need = all-review
    var allLearn = await (await db.collection('userWord').where({
      _openid: getApp().globalData.openid
    }).count()).total;
    var allLearned = await (await db.collection('userWord').where({
      _openid: getApp().globalData.openid,
      learnnum:5
    }).count()).total;
    var allReview = allLearn - allLearned;
    this.setData({
      learnedWord: learn,
      needWord: need,
      reviewWord: review,
      allWord: all,
      allLearn: allLearn,
      allReview:allReview,
      allLearned:allLearned
    })
  },
  getWordList(e){
    // console.log(e);
    wx.redirectTo({
      url: '../wordList/index?type='+e.currentTarget.dataset.type,
    })
  },
  getEchartsData:async function(){
    var now = new Date();
    var month = now.getMonth()+1;//得到月份
    var date = now.getDate();//得到日期
    var now = month + '-' + date
    var dayWord = await (await db.collection('userWord').where({
      _openid: getApp().globalData.openid,
      due:{day:date}
    }).count()).total;
    this.setData({
      dayWord:dayWord
    })
    for(let i=0;i<7;i++){
      this.setData({
        week:this.data.week.concat(month+'-'+(date-i))
      })
    }
    for(let i=0;i<7;i++){
      this.setData({
        weekLearnWord:this.data.weekLearnWord.concat(await (await db.collection('userWord').where({
          _openid: getApp().globalData.openid,
          due:{day:date-i}
        }).count()).total+'')
      })
    }
    for(let i=0;i<7;i++){
      this.setData({
        weekReviewWord:this.data.weekReviewWord.concat(await (await db.collection('userWord').where({
          _openid: getApp().globalData.openid,
          learnnum:5,
          due:{day:date-i}
        }).count()).total+'')
      })
    }
  },
  onLoad(){
    this.getEchartsData()
    setTimeout(()=>{
      this.echartsComponnet = this.selectComponent('#mychart');
      //如果是第一次绘制
      if (!Chart) {
        this.init_echarts(); //初始化图表
      } else {
        this.setOption(Chart); //更新数据
      }
    },5000)
  },

  onShow(options) {
    this.getCount()
    this.setData({
      bookId: app.globalData.bookId
>>>>>>> a6b7aee (卷卷背单词实现)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

<<<<<<< HEAD
  }

  
=======
  },
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      this.setOption(Chart)
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  setOption: function (Chart) {
    Chart.clear();  // 清除
    Chart.setOption(this.getOption());  //获取新数据
  },
  // 图表配置项
  getOption() {
    var self = this;
    var week = this.data.week.reverse()
    var weekLearnWord = this.data.weekLearnWord.reverse()
    var weekReviewWord = this.data.weekReviewWord.reverse()
    var option = {
      renderAsImage: true, //支持渲染为图片模式
      color: ["#FF6D60", "#44B2FB"],//图例图标颜色
      legend: {
        show: true,
        itemGap: 25,//每个图例间的间隔
        top: 30,
        x: 30,//水平安放位置,离容器左侧的距离  'left'
        z: 100,
        textStyle: {
          color: '#383838'
        },
        data: [//图例具体内容
          {
            name: '学习',
            textStyle: {
              fontSize: 13,
              color: '#383838'
            },
            icon: 'roundRect'
          },
          {
            name: '复习',
            textStyle: {
              fontSize: 13,
              color: '#383838'
            },
            icon: 'roundRect'
          }
        ]
      },
      grid: {//网格
        left: 30,
        top:100,
        containLabel: true,//grid 区域是否包含坐标轴的刻度标签
      },
      xAxis: {//横坐标
        type: 'category',
        splitLine: {//坐标轴在 grid 区域中的分隔线。
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        boundaryGap: false,//1.true 数据点在2个刻度直接  2.fals 数据点在分割线上，即刻度值上
        data: week,
        axisLabel: {
          textStyle: {
            fontSize: 13,
            color: '#5D5D5D'
          }
        }
      },
      yAxis: {//纵坐标
        type: 'value',
        position:'left',
        splitNumber: 5,//坐标轴的分割段数
        splitLine: {//坐标轴在 grid 区域中的分隔线。
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 13,
            color: '#5D5D5D',
          }
        },
        min: 0,
        max: 60,
      },
      series: [{
        name: '学习',
        type: 'line',
        data: weekLearnWord,
        // data: ["80", "20", "50", "70", "80", "60", "70"],
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#FF6D60'
            }
          }
        }
      }, {
        name: '复习',
        type: 'line',
        data: weekReviewWord,
        // data: ["50", "30", "40", "20", "10", "30", "20"],
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#44B2FB'
            }
          }
        }
      }],
    }
    return option;
  },


>>>>>>> a6b7aee (卷卷背单词实现)
})