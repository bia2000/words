import * as echarts from '../../ec-canvas/echarts';
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
const app = getApp();
var list = [1,4,6,8]
var list1 = [90,30,490,39]
 
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
 
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['客户']
    },
    grid: {
      x:35,
      y:30,
      x2:5,
      y2:20,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: list,
      name: '月份',
      nameGap: 2,
      axisLabel: {
        interval: 0
      }
    },
    yAxis: {
      type: 'value',
      name:'数量'
    },
    series: [
      {
        name: '客户',
        type: 'line',
        stack: '总量',
        data: list1
      }
    ]
  };
 
  chart.setOption(option);
  return chart;
}
Page({
  data: {
  ec: {
      onInit: initChart
  },
}
})