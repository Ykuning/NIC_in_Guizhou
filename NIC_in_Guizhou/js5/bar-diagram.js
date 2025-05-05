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
            text: '贵州各地区数据中心机架数量对比',
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
            data: ['2019', '2020', '2021', '2022', '2023','2024(预计)'],
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
            name: '数量(台)',
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
                data: [400,200,100,300,150,250,200,180,220],
                itemStyle: {
                    color: '#7EC0EE', // 浅蓝色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2020',
                type: 'bar',
                data: [420,220,120,320,170,270,220,200,240],
                itemStyle: {
                    color: '#FFD700', // 金色
                    borderRadius: [0, 5, 5, 0]
                }
            },
            {
                name: '2021',
                type: 'bar',
                data: [450,250,150,350,200,300,250,230,270],
                itemStyle: {
                    color: '#FF0000', // 红色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2022',
                type: 'bar',
                data: [470,270,170,370,220,320,270,250,290],
                itemStyle: {
                    color: '#FFC0CB', // 粉色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2023',
                type: 'bar',
                data: [490,290,190,390,240,340,290,270,310],
                itemStyle: {
                    color: '#A020F0', // 紫色
                    borderRadius: [0, 5, 5, 0] // 柱状图圆角
                }
            },
            {
                name: '2024(预计)',
                type: 'bar',
                data: [500,300,200,400,250,350,300,280,320],
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