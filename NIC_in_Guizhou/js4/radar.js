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
    const dataGY = [[5,5,5,4,5,5]];
    const dataTR = [[3,2,3,2,3,3]];
    const dataZY = [[4,4,4,3,4,4]];
    const dataAS = [[3,3,3,2,3,3]];
    const dataLPS = [[4,4,4,3,4,4]];
    const dataBJ = [[2,2,2,1,2,2]];
    const dataQN = [[4,4,5,4,4,5]];
    const dataQDN = [[2,1,1,1,2,2]];
    const dataQXN = [[1,1,1,1,1]];
    // 设置图表的主题
    const lineStyle = {
    width: 2,
    opacity: 1
    };
    // 配置项
    option = {
    // 标题
      title: {
        text: '贵州城际交通运营效率多维度评估图',
        left: 'center',
    // 标题样式
        textStyle: {
      color: '#eee'
      }
    },
    // 图例
    legend:{
      bottom: "5",
      left: 'center',
      data: ['贵阳市', '铜仁市', '遵义市',
            '安顺市','六盘水市','毕节市',
            '黔南州','黔东南州','黔西南州'],
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
        { name: '线路里程', max: 5 },
        { name: '客流量', max: 5 },
        { name: '运营效率', max: 5 },
        { name: '投资回报率', max: 5 },
        { name: '准点率', max: 5 },
        { name: '乘客满意度', max: 5 }
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
          color: '#EE0000'
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
          color: '#FFA500'
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
          color: '#FFFF00'
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
          color: '#00FA9A'
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
          color: '#00FF00'
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
          color: '#00FFFF'
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
          color: '#FF6B6B'
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
          color: '#FFE4E1'
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
          color: '#CD00CD'
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