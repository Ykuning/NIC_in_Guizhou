/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function init5GMap() {
    const myChart = echarts.init(document.getElementById('map'));
    const industryData = {
        '贵阳市': ['大数据中心','智能制造','智慧城市'],
        '遵义市': ['电子信息制造', '白酒产业智能化'],
        '安顺市': ['智慧旅游', '航空装备'],
        '毕节市': ['农业大数据', '扶贫数字化'],
        '铜仁市': ['智慧农业', '矿业智能化'],
        '六盘水市': ['能源大数据', '智能矿山'],
        '黔东南苗族侗族自治州': ['民族文化数字化', '智慧农业'],
        '黔南布依族苗族自治州': ['智慧物流', '磷化工数字化'],
        '黔西南布依族苗族自治州': ['智慧旅游', '特色农业']
    };

    const g5Data = {
        '贵阳市': { value: 130, coverage: '全覆盖' },
        '遵义市': { value: 30, coverage: '高密度' },
        '安顺市': { value: 8, coverage: '基础覆盖' },
        '毕节市': { value: 10, coverage: '基础覆盖' },
        '铜仁市': { value: 8, coverage: '基础覆盖' },
        '六盘水市': { value: 10, coverage: '基础覆盖' },
        '黔东南苗族侗族自治州': { value: 15, coverage: '中等密度' },
        '黔南布依族苗族自治州': { value: 16, coverage: '中等密度' },
        '黔西南布依族苗族自治州': { value: 4, coverage: '建设中' },
    };

    window.addEventListener('resize', () => myChart.resize());

    
            echarts.registerMap('guizhou', guizhouJson);

            
    // 生成符合要求的数据格式
    const formattedData = Object.entries(g5Data).map(([name, data]) => ({
        name,
        value: data.value,
        coverage: data.coverage,
        industries: industryData[name] // 新增主要领域数据
    }));
                

            const option = {
                title: {
                    text: '人工智能建设分布图',
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
                    backgroundColor: 'rgba(255, 255, 255, 0.97)',
                    borderColor: '#4a7ab0',
                    borderWidth: 2,
                    padding: [8, 12],
                    trigger: 'item',
                    confine: true ,// 提示框不会溢出容器
                    formatter: params => `
                        <strong>${params.name}</strong><br>
                        <strong>人工智能企业: </strong>${params.value}<br>
                        <strong>主要领域: </strong>${params.data.industries.join(',')}<br>
                        <strong>覆盖状态: </strong>${params.data.coverage}
                    `
                },
                visualMap: {
                    type: 'piecewise',
                    pieces: [
                        { min: 51, label: '超密集 (51+)', color: '#008B00' },
                        { min: 26, max: 50, label: '高密度 (26-50)', color: '#00CD00' },
                        { min: 15, max: 25, label: '中等密度 (15-25)', color: '#43CD80' },
                        { min: 6, max: 14, label: '基础覆盖 (6-14)', color: '#00FF00' },
                        { max: 5, label: '建设中 (<6)', color: '#00FF7F' }
                    ],
                    textStyle: {
                        color: '#cfdfff',
                        fontSize: 11
                    },  
                    left: 'right',
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
                    console.log(`选中地区: ${params.name}，人工智能企业数: ${params.value}`);
                    
                }
            });
}

window.addEventListener('load', init5GMap);