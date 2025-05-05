/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表实例
    const myChart = echarts.init(document.getElementById('radar'));
    // 窗口自适应
    window.addEventListener('resize', () => myChart.resize());
    // 数据
    const dataGY = [[98,60,80,30,100],];
    const dataTR = [[97,44,81,30,120],];
    const dataZY = [[95,35,75,40,90],];
    const dataAS = [ [93,47,75,34,120],];
    const dataLPS = [ [80,12,80,50,120],];
    const dataBJ = [ [81, 25, 85, 54,110],];
    const dataQN = [ [85, 18, 80, 34, 105],];
    const dataQDN = [ [87, 20, 82,40, 110],];
    const dataQXN = [ [91, 16, 85,45, 120],];
    // 设置图表的主题
    const lineStyle = {
    width: 2,
    opacity: 1,
    };
    // 配置项
    option = {
    // 标题
      title: {
        text: '各地区5G建设多维度评估图',
        left: 'center',
    // 标题样式
        textStyle: {
      color: '#eee'
      }
    },
    // 图例
    legend:{
      bottom: '5',
      left: 'center',
      data: ['贵阳市', '铜仁市', '遵义市','安顺市','六盘水市','毕节市','黔南州','黔东南州','黔西南州'],
      itemGap: 10,
      // 图例样式
      textStyle: {
        color: '#eee',
        fontSize: 12
      },
      // 选中样式
      selectedMode: 'single'
    },
    
    radar: {
       // 雷达图指标
       indicator: [
        { name: '覆盖范围', max: 150 },
        { name: '基站密度', max: 150 },
        { name: '信号强度', max: 150 },
        { name: '网络延迟', max: 150 },
        { name: '传输速率', max: 150 }
      ],
      shape: 'circle', 
      splitNumber: 5,
      axisName: {
        color: 'rgb(238, 197, 102)'
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.1)',
            'rgba(238, 197, 102, 0.2)',
            'rgba(238, 197, 102, 0.4)',
            'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)',
            'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    series: [
      {
        name: '贵阳市',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataGY,
        symbol: 'none',
        itemStyle: {
          color: '#FFFFFF'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: '铜仁市',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataTR,
        symbol: 'none',
        itemStyle: {
          color: '#4ECDC4'
        },
        areaStyle: {
          opacity: 0.05
        }
      },
      {
        name: '遵义市',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataZY,
        symbol: 'none',
        itemStyle: {
          color: '#FFE66D'
        },
        areaStyle: {
          opacity: 0.05
        }
      },
      {
        name: '安顺市',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataAS,
        symbol: 'none',
        itemStyle: {
          color: '#7EC0EE'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: '六盘水市',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataLPS,
        symbol: 'none',
        itemStyle: {
          color: '#FF0000'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: '毕节市',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataBJ,
        symbol: 'none',
        itemStyle: {
          color: '#FF6B6B'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: '黔南州',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataQN,
        symbol: 'none',
        itemStyle: {
          color: '#BCBD22'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: '黔东南州',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataQDN,
        symbol: 'none',
        itemStyle: {
          color: '#1F77B4'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: '黔西南州',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataQXN,
        symbol: 'none',
        itemStyle: {
          color: '#9467BD'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      
      
    ]
  };
  // 应用配置
  myChart.setOption(option);

  
})