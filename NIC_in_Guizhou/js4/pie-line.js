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
        text: '贵州各地区每年高铁通车班次',
        left: 'center',
        textStyle: {
          color: '#ffffff' // 标题颜色
        }
      },
      legend: {
        textStyle:{
          color: '#ffffff'
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
              ['product', '2019', '2020', '2021', '2022', '2023', '2024'],
              ['贵阳市', 16200,14800,18500,21700,24300,27500],
              ['安顺市', 2100,3600,4300,4800,5400,6200],
              ['遵义市', 3600,4200,5000,5800,6500,7200],
              ['六盘水市', 1800,2000,3200,3800,4500,5200],
              ['毕节市', 3200,2800,3600,4300,5100,5800],
              ['铜仁市', 5000,4200,4800,5500,6000,6500],
              ['黔南州', 2500,2000,2800,3500,4200,5000],
              ['黔东南州', 3800,3200,3600,4200,4800,5500 ],
              ['黔西南州', 1200,1000,1500,1800,2200,2500]
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
        name: '班次',
        min: 0,
        max: 30000,
        interval: 5000,
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
        // 线图1
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图2
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图3
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图4
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图5
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图6
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图7
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图8
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 线图9
          {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
          },
        // 饼图
          {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '30%'],
              emphasis: {
              focus: 'self'
              },
              label: {
                formatter: '{b}: {@2020} ({d}%)',
                color: '#fff'
              },
              encode: {
                  itemName: 'product',
                  value: '2020',
                  tooltip: '2020'
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