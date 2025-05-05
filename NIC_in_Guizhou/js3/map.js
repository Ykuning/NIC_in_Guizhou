/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function init5GMap() {
    const myChart = echarts.init(document.getElementById('map'));
    
    // 新能源汽车充电桩分布数据（示例数据）
    const g5Data = {
        '贵阳市': 26000,
        '遵义市': 4000,
        '安顺市': 2000,
        '毕节市': 1600,
        '铜仁市': 1500,
        '六盘水市': 2400,
        '黔东南苗族侗族自治州': 1400,
        '黔南布依族苗族自治州': 1400,
        '黔西南布依族苗族自治州': 1300
    };

    window.addEventListener('resize', () => myChart.resize());

    
            echarts.registerMap('guizhou', guizhouJson);

            // 生成符合ECharts要求的数据格式
            const formattedData = Object.entries(g5Data).map(([name, value]) => ({
                name,
                value,
                // 附加信息（可选）
                operators: ['特来电新能源', '星星充电', '南方电网'], // 假设的运营商分布
                coverage: value > 5000 ? '深度覆盖' : value > 3000 ? '重点覆盖' : '基础覆盖'
            }));

            const option = {
                title: {
                    text: '新能源汽车充电桩分布图',
                    subtext: '数据截至2024年第三季度',
                    left: 'center',
                    padding: [10, 0, 20, 0],
                    textStyle: {
                    color: '#ffffff',  // 白色标题
                    fontSize: 26,
                    fontWeight: 'bold',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'  // 添加文字阴影
                    },
                    subtextStyle: {
                    color: '#ffffff',  // 浅灰色副标题
                    fontSize: 15,
                    fontWeight: 'normal'
                    },
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.97)',  // 深海蓝背景
                    borderColor: '#4a7ab0',  // 中等蓝色边框
                    borderWidth: 2,  // 加粗边框
                    padding: [8, 12],  // 增加内边距
                    trigger: 'item',
                    confine: true ,// 提示框不会溢出容器
                    formatter: params => `
                        <strong>${params.name}</strong><br>
                        <strong>充电桩总数: </strong>${params.value}<br>
                        <strong>主要运营商: </strong>${params.data.operators.join(', ')}<br>
                        <strong>覆盖状态: </strong>${params.data.coverage}
                    `
                },
                visualMap: {
                    type: 'piecewise',
                    pieces: [
                        { min: 8000, label: '超密集 (8000+)', color: '#B22222' },
                        { min: 4000, max: 7999, label: '高密度 (4000-7999)', color: '#FF4500' },  // 调整下限
                        { min: 2000, max: 3999, label: '中等密度 (2000-3999)', color: '#EE6A50' }, // 调整下限
                        { min: 1000, max: 1999, label: '基础覆盖 (1000-1999)', color: '#FF8C00' },
                        { max: 999, label: '建设中 (0-1000)', color: '#ADFF2F' }
                            ]
                    ,
                    textStyle: {
                        color: '#cfdfff',
                        fontSize: 11
                    },  
                    bottom: '0%',
                    orient: 'vertical'
                },
                series: [{
                    type: 'map',
                    map: 'guizhou',
                    data: formattedData,
                    top: "20%",
                    label: {
                        show: true,
                        formatter: '{b}\n{@value}',
                        fontSize: 10,
                        lineHeight: 16
                    },
                    itemStyle: {
                        areaColor: '#f5f5f5',
                        borderColor: '#666',
                        borderWidth: 0.5
                    },
                    emphasis: {
                        itemStyle: {
                            areaColor: '#ffd700',
                            borderWidth: 2
                        },
                        label: {
                            show: true,
                            fontWeight: 'bold',
                            color: '#333'
                        }
                    },
                    select: {
                        itemStyle: {
                        areaColor: '#FFF5EE', 
                        borderColor: '#fff'
                        },
                    label: {
                        color: '#000'
                        }
                    }

                }]
            };

            myChart.setOption(option);
            
            // 点击事件交互
            myChart.on('click', params => {
                if (params.data) {
                    console.log(`选中地区: ${params.name}，桩数: ${params.value}`);
                    
                }
            });
}

window.addEventListener('load', init5GMap);