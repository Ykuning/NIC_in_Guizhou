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
      title:{
        text: '贵州产业互联网发展趋势分析',
        left: 'center',
        textStyle: {
          color: '#fff', // 标题颜色
        },
      },
      legend: {
        data: ['农业', '制造业', '旅游业', '大数据产业'],
        textStyle: {
          color: '#fff' // 图例文字颜色
        },
        top: '5%',
        left: 'center'
      }, 
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: { 
        source: [ 
          ['industry', '2018', '2019', '2020', '2021', '2022', '2023'],
          ['农业', 250.3, 260.5, 275.8, 290.4, 310.2, 330.8],  
          ['制造业', 300.1, 320.4, 340.5, 365.0, 390.2, 420.3],
          ['旅游业', 125.8, 140.2, 160.4, 180.8, 200.1, 230.0],
          ['大数据产业', 80.5, 100.0, 120.5, 150.0, 180.0, 210.0]
        ]
      },
      xAxis: { type: 'category',
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
        name: '亿元',
        gridIndex: 0,
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
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '30%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2018} ({d}%)' ,
            color: '#fff'
          },
          encode: {
            itemName: 'industry',
            value: '2018',
            tooltip: '2018'
          }
        }
      ]
    };
  
    myChart.on('updateAxisPointer', function (event) {
      const xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        const dimension = xAxisInfo.value + 1;
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