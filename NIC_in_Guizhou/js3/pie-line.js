/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

// 当DOM内容加载完成后执行初始化操作
document.addEventListener('DOMContentLoaded', function() {
    // 初始化ECharts实例，绑定到id为pie-line的DOM元素
    var myChart = echarts.init(document.getElementById('pie-line'));
    
    /**************** 图表配置对象 ****************/
    var option = {
        // 主标题配置
        title: {
            text: '贵州省各地市充电桩资金投入趋势',
            left: 'center',         // 居中显示
            textStyle: {
                color: '#ffffff',   // 白色标题
                fontSize: 18        // 字号18
            }
        },
        // 图例配置
        legend: {
            textStyle: {
                color: '#ffffff' // 白色图例文字
            },
            top: 'bottom',       // 图例显示在底部
            type: 'scroll',      // 支持滚动
            pageTextStyle: {
                color: '#fff'    // 分页文字颜色
            }
        },
        // 提示框配置
        tooltip: {
            trigger: 'axis',      // 坐标轴触发
            showContent: false,   // 不显示默认内容
            axisPointer: {
                type: 'shadow'    // 阴影指示器样式
            }
        },
        // 数据集配置（二维表格数据）
        dataset: {
            source: [  // 数据表格（第一行为列头）
                ['地区', '2019', '2020', '2021', '2022', '2023', '2024'],
                // 各城市资金投入数据（单位：亿元）
                ['贵阳市', 1.2, 1.8, 2.5, 3.2, 4.0, 5.0],
                ['遵义市', 0.8, 1.2, 1.6, 2.0, 2.5, 3.0],
                ['毕节市', 0.5, 0.7, 1.0, 1.3, 1.6, 2.0],
                ['六盘水市', 0.4, 0.6, 0.8, 1.0, 1.3, 1.6],
                ['黔南州', 0.3, 0.5, 0.7, 0.9, 1.1, 1.4],
                ['黔东南州', 0.25, 0.45, 0.65, 0.85, 1.05, 1.3],
                ['黔西南州', 0.2, 0.4, 0.6, 0.8, 1.0, 1.2],
                ['安顺市', 0.15, 0.35, 0.55, 0.75, 0.95, 1.1],
                ['铜仁市', 0.1, 0.3, 0.5, 0.7, 0.9, 1.0]
            ]
        },
        // X轴配置（年份轴）
        xAxis: { 
            type: 'category',  // 类目型坐标轴
            axisLabel: {
                color: '#ffffff',  // 白色标签
                rotate: 30        // 标签旋转30度（避免重叠）
            },
            axisLine: {
                lineStyle: {
                    color: '#666'  // 轴线颜色（灰色）
                }
            }
        },
        // Y轴配置（资金轴）
        yAxis: { 
            gridIndex: 0,  // 对应第一个网格
            axisLabel: {
                color: '#ffffff'  // 白色标签
            },
            name: '投入资金（亿元）',  // 轴名称
            nameTextStyle: {
                color: '#ffffff'  // 白色轴名称
            },
            axisLine: {
                show: true,  // 显示轴线
                lineStyle: {
                    color: '#666'  // 轴线颜色（灰色）
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'  // 半透明白色分隔线
                }
            }
        },
        // 网格布局配置（折线图区域）
        grid: { 
            top: '70%',      // 网格顶部位于容器的70%位置
            bottom: '10%',   // 底部留空10%
            backgroundColor: 'rgba(30,30,60,0.3)'  // 深蓝色半透明背景
        },
        // 系列配置（组合折线图+饼图）
        series: (function() {
            // ==== 折线图系列配置 ====
            var series = [];
            // 预定义颜色数组（每个城市对应一个颜色）
            var colors = [  
                '#00a8ff', '#9c88ff', '#4cd137', '#e84118', '#fbc531',
                '#487eb0', '#8c7ae6', '#44bd32', '#c23616'
            ];
            
            // 生成9个折线图系列（对应9个城市）
            for (var i = 0; i < 9; i++) {
                series.push({
                    type: 'line',        // 折线图类型
                    smooth: true,       // 平滑曲线
                    seriesLayoutBy: 'row',  // 按数据表的行映射系列
                    // 高亮样式
                    emphasis: { 
                        focus: 'series',  // 聚焦当前系列
                        lineStyle: {
                            width: 4  // 高亮时线宽
                        },
                        itemStyle: {
                            color: '#fff',          // 高亮节点颜色
                            borderColor: colors[i], // 边框使用预定义颜色
                            borderWidth: 2
                        }
                    },
                    // 普通状态线样式
                    lineStyle: {
                        width: 2,  // 线宽
                        shadowColor: 'rgba(0,0,0,0.3)', // 阴影颜色
                        shadowBlur: 4,    // 阴影模糊度
                        shadowOffsetY: 2   // 阴影垂直偏移
                    },
                    symbol: 'circle',    // 数据点符号类型
                    symbolSize: 8,       // 符号尺寸
                    showSymbol: true,    // 始终显示数据点
                    // 数据点样式
                    itemStyle: {
                        color: colors[i],    // 填充颜色
                        borderColor: '#fff',// 边框颜色
                        borderWidth: 1       // 边框宽度
                    },
                    animationEasing: 'elasticOut',  // 弹性动画效果
                    animationDuration: 1200         // 动画时长1.2秒
                });
            }

            // ==== 饼图系列配置 ====
            series.push({
                type: 'pie',       // 饼图类型
                id: 'pie',          // 系列ID
                radius: ['35%', '45%'],  // 内外半径（环形饼图）
                center: ['50%', '35%'],  // 饼图中心位置（上半部分）
                // 高亮样式
                emphasis: {
                    scale: true,          // 高亮时放大
                    scaleSize: 10,        // 放大尺寸
                    itemStyle: {
                        shadowBlur: 20,   // 阴影模糊度
                        shadowColor: 'rgba(0, 0, 0, 0.5)' // 阴影颜色
                    }
                },
                // 标签配置
                label: {
                    color: '#ffffff',  // 白色标签
                    formatter: function(params) {  // 标签内容格式化
                        return params.name + '\n' + params.value[1] + '亿'; // 显示名称+2020年值
                    },
                    fontSize: 12,    // 标签字号
                    lineHeight: 16   // 行高
                },
                // 标签引导线配置
                labelLine: {
                    length: 10,      // 第一段长度
                    length2: 20,     // 第二段长度
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'  // 半透明白色
                    },
                    smooth: 0.2      // 轻微弯曲
                },
                // 数据项样式
                itemStyle: {
                    borderRadius: 6,      // 圆角半径
                    borderColor: '#0f1c3a',  // 边框颜色
                    borderWidth: 2        // 边框宽度
                },
                encode: {
                    itemName: '地区',  // 使用"地区"字段作为项名
                    value: '2019', // 动态设置为选中的年份
                    tooltip: '2019'
                },
                animationType: 'scale',      // 缩放动画
                animationEasing: 'elasticOut' // 弹性动画效果
            });
            
            return series;
        })(),
        // 全局颜色配置（与折线图颜色一致）
        color: [  
            '#00a8ff', '#9c88ff', '#4cd137', '#e84118', '#fbc531',
            '#487eb0', '#8c7ae6', '#44bd32', '#c23616'
        ],
        backgroundColor: '#27408B'  // 深蓝色背景
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

    /**************** 应用配置 ****************/
    myChart.setOption(option);
    /**************** 响应式调整 ****************/
    window.addEventListener('resize', function() {
        myChart.resize();  // 窗口大小变化时自动调整图表
    });
});