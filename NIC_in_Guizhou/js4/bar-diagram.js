/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

// 初始化图表函数
function initChart() {
    // 获取图表容器DOM元素
    const chartDom = document.getElementById('bar-diagram');
    // 初始化ECharts实例
    const myChart = echarts.init(chartDom);

    // 图表配置项
    const option = {
        // 主标题配置
        title: {
            text: '贵州各地区每年铁路发展资金投入（亿元）', // 主标题文本
            textStyle: {
                color: '#ffffff' // 标题文字颜色设置为白色
            },
            left: 'center' // 标题水平居中
        },
        // 提示框配置
        tooltip: {
            trigger: 'axis', // 触发类型为坐标轴触发
            backgroundColor: 'rgba(0,0,0,0.8)', // 半透明黑色背景
            axisPointer: { 
                type: 'shadow', // 阴影指示器
                shadowStyle: {
                    color: 'rgba(255,255,255,0.1)' // 半透明白色阴影
                }
            }
        },
        // 图例配置
        legend: {
            data: ['2019', '2020', '2021', '2022', '2023', '2024'], // 图例数据
            textStyle: {
                color: '#fff' // 图例文字颜色
            },
            top: 30 // 距离顶部30px
        },
        // 图表网格配置
        grid: {
            left: '3%',    // 左边距3%
            right: '4%',   // 右边距4%
            bottom: '3%',  // 底部边距3%
            containLabel: true // 包含坐标轴标签
        },
        // X轴配置
        xAxis: {
            type: 'value', // 数值轴
            name: '亿元',
            nameTextStyle:{
                color: '#ffffff'
            },
            boundaryGap: [0, 0.01], // 坐标轴两边留白策略
            axisLabel: { color: '#fff' }, // X轴标签颜色
            splitLine: {
                lineStyle: {
                    color: ['rgba(255,255,255,0.1)'] // X轴分割线颜色
                }
            }
        },
        // Y轴配置
        yAxis: {
            type: 'category', // 类目轴
            data: [           // Y轴数据（贵州地市列表）
                '贵阳市', '铜仁市', '安顺市', '遵义市',
                '六盘水市', '毕节市', '黔南州', 
                '黔东南州', '黔西南州'
            ],
            axisLabel: { color: '#fff' }, // Y轴标签颜色
            splitLine: { show: false } // 隐藏Y轴分割线
        },
        // 数据系列配置
        series: [ 
            { // 2019年数据系列（浅蓝色）
                name: '2019',
                type: 'bar',
                data: [92.4,15.2,9.8,15.8,12.6,18.5,8.2,10.5,6.8], 
                itemStyle: {
                    color: '#7EC0EE', // 浅蓝色
                    borderRadius: [0, 5, 5, 0] // 右上/右下圆角
                }
            },
            { // 2020年数据系列（金色）
                name: '2020',
                type: 'bar',
                data: [85.7,12.8,14.2,18.3,15.3,15.2,7.5,9.2,6.2],
                itemStyle: {
                    color: '#FFD700', // 金色
                    borderRadius: [0, 5, 5, 0]
                }
            },
            { // 2021年数据系列（红色）
                name: '2021',
                type: 'bar',
                data: [108.3,14.5,16.5,21.6,18.7,20.1,9.0,11.0,7.5],
                itemStyle: {
                    color: '#FF0000', // 红色
                    borderRadius: [0, 5, 5, 0]
                }
            },
            { // 2022年数据系列（粉色）
                name: '2022',
                type: 'bar',
                data: [126.9,16.0,18.9,24.9,21.5,22.8,10.5,12.8,9.0],
                itemStyle: {
                    color: '#FFC0CB', // 粉色
                    borderRadius: [0, 5, 5, 0]
                }
            },
            { // 2023年数据系列（紫色）
                name: '2023',
                type: 'bar',
                data: [142.6,18.3,21.7,28.4,24.2,25.4,12.8,14.5,11.5],
                itemStyle: {
                    color: '#A020F0', // 紫色
                    borderRadius: [0, 5, 5, 0]
                }
            },
            { // 2024年数据系列（绿色）
                name: '2024',
                type: 'bar',
                data: [158.2,20.0,24.5,32.1,27.8,28.6,15.0,16.0,14.0],
                itemStyle: {
                    color: '#00FF00', // 绿色
                    borderRadius: [0, 5, 5, 0]
                }
            }
        ]
    };

    // 应用配置项
    myChart.setOption(option);
    // 添加窗口resize事件监听（响应式布局）
    window.addEventListener('resize', () => myChart.resize());
}

// 页面加载完成后执行初始化
window.onload = initChart;