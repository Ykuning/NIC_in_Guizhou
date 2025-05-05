/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function init5GMap() {
    const myChart = echarts.init(document.getElementById('map'));
    
    // 5G基站分布数据（示例数据）
    const g5Data = {
        '贵阳市': 16000,
        '遵义市': 8500,
        '安顺市': 7499,
        '毕节市': 4810,
        '铜仁市': 4450,
        '六盘水市':4385,
        '黔东南苗族侗族自治州': 4230,
        '黔南布依族苗族自治州': 4450,
        '黔西南布依族苗族自治州': 4140
    };

    window.addEventListener('resize', () => myChart.resize());

    
            echarts.registerMap('guizhou', guizhouJson);

            // 生成符合ECharts要求的数据格式
            const formattedData = Object.entries(g5Data).map(([name, value]) => ({
                name,
                value,
                operators: ['中国移动', '中国电信', '中国联通'], // 运营商分布
                coverage: value > 5000 ? '全覆盖' : value > 3000 ? '重点覆盖' : '建设中'
            }));

            const option = {
                title: {
                    text: '5G基站分布图',
                    subtext: '数据截至2023年第三季度',
                    left: 'center',
                    padding: [10, 0, 20, 0],
                    textStyle: {
                    color: '#ffffff',  // 白色标题
                    fontSize: 26,
                    fontWeight: 'bold',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'  // 添加文字阴影
                    },
                    subtextStyle: {
                    color: '#ffffff',  // 白色副标题
                    fontSize: 15,
                    fontWeight: 'normal'
                    },
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.97)',  // 白色背景
                    borderColor: '#4a7ab0',  // 中等蓝色边框
                    borderWidth: 2,  // 加粗边框
                    padding: [8, 12],  // 增加内边距
                    trigger: 'item',
                    confine: true ,// 提示框不会溢出容器
                    formatter: params => `
                        <strong>${params.name}</strong><br>
                        <strong>5G基站总数: </strong>${params.value}<br>
                        <strong>主要运营商: </strong>${params.data.operators.join(', ')}<br>
                        <strong>覆盖状态: </strong>${params.data.coverage}
                    `
                },
                visualMap: {
                    type: 'piecewise',
                    pieces: [
                        { min: 8000, label: '超密集 (8000+)', color: '#DAA520' },
                        { min: 5000, max: 7999, label: '高密度 (5000-7999)', color: '#CDCD00' },
                        { min: 3000, max: 4999, label: '中等密度 (3000-4999)', color: '#FFFF00' },
                        { min: 1000, max: 2999, label: '基础覆盖 (1000-2999)', color: '#EEEED1' },
                        { max: 999, label: '建设中 (<1000)', color: '#FFFFE0' }
                    ],
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
                    console.log(`选中地区: ${params.name}，基站数: ${params.value}`);
                    
                }
            });
}

window.addEventListener('load', init5GMap);