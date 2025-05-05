/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function initMap() {
    const myChart = echarts.init(document.getElementById('map'));
    
    // 高铁与轨道建设数据
    const railwayData = {
        '贵阳市': {
            lines: 6,             // 高铁线路数量
            mileage: 1667.1,         // 轨道里程（公里）
            status: '已建成',      // 建设状态
            railways: ['沪昆高铁', '贵广高铁', '成贵高铁', '渝贵铁路','贵南高铁','贵阳环线铁路']
        },
        '遵义市': {
            lines: 1,
            mileage: 345,
            status: '已建成',
            railways: ['渝贵铁路','瓮马铁路南北延伸线（在建）', '泸遵高铁（规划）', '黔桂铁路增建二线（规划）']
        },
        '安顺市': {
            lines: 1,
            mileage: 265,
            status: '已建成',
            railways: ['沪昆高铁', '安六高铁','黄百铁路（在建）','贵兴铁路（规划）']
        },
        '铜仁市': {
            lines: 2,
            mileage: 327,
            status: '已建成',
            railways: ['沪昆高铁', '铜玉城际铁路','铜吉铁路（在建）']
        },
        '毕节市': {
            lines: 1,
            mileage: 117,
            status: '已建成',
            railways: ['成贵高铁', '渝昆高铁（在建）']
        },
        '六盘水市': {
            lines: 1,
            mileage: 125,
            status: '已建成',
            railways: ['安六高铁', '盘兴高铁（在建）']
        },
        '黔南布依族苗族自治州': {
            lines: 1,
            mileage: 857,
            status: '已建成',
            railways: ['贵广高铁']
        },
        '黔东南苗族侗族自治州': {
            lines: 1,
            mileage: 857,
            status: '已建成',
            railways: ['贵广高铁']
        },
        '黔西南布依族苗族自治州': {
            lines: 0,
            mileage: 98.3,
            status: '在建中',
            railways: ['盘兴高铁', '兴义至百色铁路（规划）']
        },
        
    };

    // 注册贵州地图
    echarts.registerMap('guizhou', guizhouJson);

    // 生成标准化数据格式
    const formattedData = Object.entries(railwayData).map(([name, data]) => ({
        name,
        value: data.lines,       // 使用高铁线路数量作为主数值
        mileage: data.mileage,
        status: data.status,
        railways: data.railways
    }));

    const option = {
        title: {
            text: '贵州高铁与轨道交通建设分布图',
            subtext: '数据截至2024年第三季度',
            left: 'center',
            padding: [10, 0, 20, 0],
            textStyle:{
                color: '#ffffff',  // 白色标题
                fontSize: 26,
                fontWeight: 'bold',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)'  // 添加文字阴影
            },
            subtextStyle:{
                color: '#ffffff',  // 白色副标题
                fontSize: 15,
                fontWeight: 'normal'
            },
        },
        tooltip: {
            confine: true,// 提示框不会溢出容器
            formatter: params => `
                <strong>${params.name}</strong><br>
                <strong>高铁线路数: </strong>${params.value}条<br>
                <strong>轨道总里程: </strong>${params.data.mileage}公里<br>
                <strong>建设状态: </strong>${params.data.status}<br>
                <strong>主要线路: </strong><br>${params.data.railways.join('<br>')}
            `
        },
        visualMap: {
            pieces: [
                { min: 4, label: '枢纽级 (5条+)', color: '#1E90FF' },
                { min: 3, max: 4, label: '主干节点 (3-4条)', color: '#40E0D0' },
                { min: 1, max: 2, label: '支线连接 (1-2条)', color: '#00FFFF' },
                { value: 0, label: '在建中', color: '#87CEFA' }
            ],
            textStyle: {
                color: '#ffffff'  // 白色文字
            },
            itemWidth: 20,
        },
        series: [{
            type: 'map',
            map: 'guizhou',
            top: '20%',
            data: formattedData,
            label: {
                show: true,  // 显示地区名称
                color: '#000000',  // 黑色文字
                fontSize: 10,
                formatter: '{b}\n{@value}条'  // 显示地区名称+线路数量
            },
            itemStyle: {
                areaColor: '#F5F5F5',  // 地区底色
                borderColor: '#666'
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#ffd700'  // 悬停颜色改为浅海洋绿
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

    // 交互事件增强
    myChart.on('click', params => {
        if (params.data) {
            const data = railwayData[params.name];
            console.log(`【${params.name}】高铁详情：
                线路数量: ${data.lines}条
                总里程: ${data.mileage}公里
                最新进展: ${data.status}
                途经线路: ${data.railways.join('、')}
            `);
        }
    });
}

window.addEventListener('load', initMap);