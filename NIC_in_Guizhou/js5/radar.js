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
    const dataGY = [[5, 20000, 1.3, 5000, 8],];
    const dataTR = [[1, 12000, 1.5, 3000, 5],];
    const dataZY = [[2, 15000, 1.4, 4000, 6],];
    const dataAS = [[3, 10000, 1.6, 2500, 4],];
    const dataLPS = [[1, 14000, 1.5, 3500, 5],];
    const dataBJ = [[1, 16000, 1.4, 4000, 6],];
    const dataQN = [[2, 11000, 1.5, 2800, 5],];
    const dataQDN = [[1, 12000, 1.5, 3000, 5],];
    const dataQXN = [[2, 13000, 1.4, 3200, 5],];
    // 设置图表的主题
    const lineStyle = {
    width: 2,
    opacity: 1,
    };
    // 配置项
    option = {
    // 标题
      title: {
        text: '贵州大数据中心综合能力评估雷达图',
        left: 'center',
    // 标题样式
        textStyle: {
      color: '#eee'
      }
    },
    // 图例
    legend:{
      bottom: '2%',
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
        { name: '数据中心数量', max: 5 },
        { name: '计算处理', max: 25000 },
        { name: '能耗效率 ', max: 2 },
        { name: '网络带宽能力 (Mbps)', max: 8000 },
        { name: '发展潜力', max: 10 }
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