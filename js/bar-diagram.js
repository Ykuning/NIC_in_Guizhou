/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function initChart() {
    const chartDom = document.getElementById('bar-diagram');
    const myChart = echarts.init(chartDom);

    // 配置项
    const option = {
        title: {
            text: '贵州各地区5G基站年度投资(亿元)',
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
            data: ['2019', '2020', '2021', '2022', '2023'],
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
            name: '亿元',
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
                data: [1.2, 0.3, 0.25, 0.4, 0.28, 0.35,0.3,0.2,0.25],
                itemStyle: {
                    color: '#7EC0EE', // 浅蓝色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2020',
                type: 'bar',
                data: [6.5, 1.5, 1.3, 2.0, 1.4, 1.6,1.5,1.2,1.3],
                itemStyle: {
                    color: '#FFD700', // 金色
                    borderRadius: [0, 5, 5, 0]
                }
            },
            {
                name: '2021',
                type: 'bar',
                data: [9.0, 2.2, 2.0, 3.5, 2.1, 2.3,2.2,2.0,2.0],
                itemStyle: {
                    color: '#FF0000', // 红色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2022',
                type: 'bar',
                data: [10.8, 2.8, 2.5, 4.2, 2.7, 2.9,2.8,2.5,2.6],
                itemStyle: {
                    color: '#FFC0CB', // 粉色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2023',
                type: 'bar',
                data: [12.0, 3.0, 3.0, 4.8, 3.1, 3.3,3.2,3.0,3.0],
                itemStyle: {
                    color: '#A020F0', // 紫色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}
window.onload = initChart;