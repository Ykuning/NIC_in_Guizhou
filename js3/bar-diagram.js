/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function initChart() {
    const chartDom = document.getElementById('bar-diagram');//条形图
    const myChart = echarts.init(chartDom);

    // 配置项
    const option = {
        title: {
            text: '贵州各地区新能源充电桩总数对比',
            textStyle: {
                color: '#fff' // 标题颜色
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.8)', // 工具提示背景
            axisPointer: { 
                type: 'shadow',
                shadowStyle: {
                    color: 'rgba(255,255,255,0.1)' // 指针阴影
                }
            }
        },
        legend: {
            data: ['2019', '2020', '2021', '2022', '2023', '2024'],
            textStyle: {
                color: '#fff' // 图例文字颜色
            },
            top: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            name: '个数',
            nameTextStyle: {
                color: '#fff' // X轴名称颜色
            },
            boundaryGap: [0, 0.01],
            axisLabel: { color: '#fff' }, // X轴标签颜色
            splitLine: {
                lineStyle: {
                    color: ['rgba(255,255,255,0.1)'] // X轴分割线
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['贵阳市', '铜仁市', '安顺市', '遵义市','六盘水市', '毕节市', '黔南州', '黔东南州', '黔西南州'],
            axisLabel: { color: '#fff' }, // Y轴标签颜色
            splitLine: { show: false } // 隐藏Y轴分割线
        },
        series: [
            {
                name: '2019',
                type: 'bar',
                data: [6000, 500, 1100, 1500, 800, 600,500,400,300],
                itemStyle: {
                    color: '#7EC0EE', // 浅蓝色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2020',
                type: 'bar',
                data: [10000, 700, 1200, 2000, 1200, 800,600,500,500],
                itemStyle: {
                    color: '#FFD700', // 金色
                    borderRadius: [0, 5, 5, 0]
                }
            },
            {
                name: '2021',
                type: 'bar',
                data: [14000, 900, 1400, 2500, 1500, 900,800,700,700],
                itemStyle: {
                    color: '#FF0000', // 红色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2022',
                type: 'bar',
                data: [18000, 1100, 1400, 3000, 1800, 1200, 1000, 1000, 900],
                itemStyle: {
                    color: '#FFC0CB', // 粉色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2023',
                type: 'bar',
                data: [22000, 1300, 1800, 3500, 2100, 1400, 1200, 1200, 1100],
                itemStyle: {
                    color: '#A020F0', // 紫色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2024',
                type: 'bar',
                data: [26000, 1500, 2000, 4000, 2400, 1600, 1400, 1400,1300],
                itemStyle: {
                    color: '#00FF00', // 绿色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}
window.onload = initChart;