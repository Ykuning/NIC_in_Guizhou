/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

// 初始化图表（使用DOMContentLoaded确保DOM加载完成）
 document.addEventListener('DOMContentLoaded', function() {
// 初始化图表实例
  var myChart = echarts.init(document.getElementById('pie-line'));
  
  // 配置项
  var option = {
    title: {
        text: '贵州数据中心建设投资趋势(亿元)',
        left: 'center',
        textStyle: {
          color: '#ffffff' // 标题颜色
        }
      },
      legend: {
        textStyle:{
        color: '#ffffff',
        },
        top: '5%',
        left: 'center',
      },
      tooltip: {
          trigger: 'axis',
          showContent: false
      },
      dataset: {
          source: [
              ['product', '2019', '2020', '2021', '2022', '2023', '2024(预计)'],
              ['贵阳', 120,150,200,180,160,200],
              ['铜仁', 10,15,20,25,22,30],
              ['黔南',4,6,12,15,18,20],
              ['黔东南',3,5,8,10,12,15],
              ['黔西南',7,9,15,18,20,35],
              ['毕节',5,10,15,20,18,50],
              ['六盘水',6,8,18,22,20,25],
              ['安顺',8,12,25,30,25,40],
              ['遵义',15,20,35,40,30,50]
          ]
      },
      xAxis: { 
        type: 'category',
        name: '年份', 
        nameTextStyle:{
          color: '#fff'
        },
        axisLabel:{
          color: '#fff'
        },
        
      },
      yAxis: {
        type: 'value',
        name: '数量(亿元)',
        gridIndex: 0 ,
        nameTextStyle:{
          color: '#ffffff'
        },
        axisLabel:{
          color: '#ffffff'
        }
      },
      grid: { top: '55%' },
      series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },

          {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '30%'],
              emphasis: {
                focus: 'self'
              },
              label: {
                formatter: '{b}: {@2019} ({d}%)',
                color: '#fff',
              },
              encode: {
                itemName: 'product',
                value: '2019',
                tooltip: '2019'
              }
          }
      ]
  };

  // 事件处理
  myChart.on('updateAxisPointer', function (event) {
      var xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
              series: {
                  id: 'pie',
                  
                  label: {
                      formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                  },
                  encode: {
                      value: dimension,
                      tooltip: dimension
                  }
              }
          });
      }
  });

  // 应用配置
  myChart.setOption(option);

  // 响应式调整
  window.addEventListener('resize', function() {
      myChart.resize();
  });
});