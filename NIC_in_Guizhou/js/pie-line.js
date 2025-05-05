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
        text: '贵州各地区每年新建5G基站数量',
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
              ['product', '2019', '2020', '2021', '2022', '2023'],
              ['贵阳', 200,2000,3500,3800,4000],
              ['铜仁', 50,500,800,900,1000,],
              ['黔南',50,400,700,900,1100 ],
              ['黔东南',30,300,600,800,1000],
              ['黔西南',40,350,650,850,1050],
              ['毕节',60,450,750,950,1200],
              ['六盘水',45,380,680,880,1100],
              ['安顺',2,403,1200,2707,2887],
              ['遵义',80,600,1200,1500,1800]
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
        name: '个数',
        min: 0,
        max: 5000,
        interval: 1000,
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
                formatter: '{b}: {@2020} ({d}%)',
                color: '#fff',
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