/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function initMap() {
    const myChart = echarts.init(document.getElementById('map'));
    
    // 高铁与轨道建设数据
    const railwayData = {
        '贵阳市': {
            lines: 5,             // 数据中心建设数量
            status: '已建成',      // 建设状态
            bigdata: [
               '富士康绿色隧道数据中心（2019 首期投运）',
               '中国电信云计算贵州信息园（2020 扩建）',
               '苹果iCloud数据中心（2021 一期投运）',
               '华为云贵安数据中心（2022 三期竣工）',
               '腾讯贵安七星数据中心（2022 服务器扩容）',
               '苹果iCloud数据中心（2024 规划扩建）'
            ]
        },
        '遵义市': {
            lines: 2,
            status: '已建成',
            bigdata: [
                '中国电信遵义云计算基地（2020）',
                '华为云遵义边缘计算节点（2021）'
            ]
        },
        '安顺市': {
            lines: 3,
            status: '已建成',
            bigdata: [
                '安顺市政务云数据中心（2018 一期）',
                '中国电信安顺云计算节点（2020）',
                '安顺智慧旅游数据中心（2022）'
            ]
        },
        '铜仁市': {
            lines: 1,
            status: '已建成',
            bigdata: ['铜仁华为云计算下载（2019）']
        },
        '毕节市': {
            lines: 2,
            status: '已建成',
            bigdata: [
                '毕节市政务云数据中心（2020 一期）',
                '中国联通毕节边缘计算节点（2021）'
            ]
        },
        '六盘水市': {
            lines: 1,
            status: '已建成',
            bigdata: ['六盘水智能云数据中心（2020）']
        },
        '黔南布依族苗族自治州': {
            lines: 2,
            status: '已建成',
            bigdata: [
                '黔南州政务云数据中心（2019 一期）',
                '中国移动黔南边缘计算节点（2022）'

            ]
        },
        '黔东南苗族侗族自治州': {
            lines: 1,
            status: '已建成',
            bigdata: ['凯里市政务数据中心（2017）']
        },
        '黔西南布依族苗族自治州': {
            lines: 2,
            status: '已建成',
            bigdata: [
                '贵州义龙大数据中心（2019 一期）',
                '中国联通黔西南数据中心（2021）'
            ]
        },
        
    };

    // 注册贵州地图
    echarts.registerMap('guizhou', guizhouJson);

    // 生成标准化数据格式
    const formattedData = Object.entries(railwayData).map(([name, data]) => ({
        name,
        value: data.lines,       // 使用高铁线路数量作为主数值
        status: data.status,
        bigdata: data.bigdata
    }));

    const option = {
        title: {
            text: '贵州省数据中心建设分布图',
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
                <strong>建设数量:</strong> ${params.value}<br>
                <strong>建设状态:</strong> ${params.data.status}<br>
                <strong>代表项目:</strong><br> ${params.data.bigdata.join('<br> ')}
            `
        },
        visualMap: {
            pieces: [
                { min: 4, label: '高覆盖 (5+)', color: '#B03060' },
                { min: 3, max: 4, label: '中等覆盖 (3-4)', color: '#DB7093' },
                { min: 1, max: 2, label: '基础覆盖 (1-2)', color: '#FFC0CB' },
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
                color: '#000000',  
                fontSize: 10,
                formatter: '{b}\n{@value}'  
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
}

window.addEventListener('load', initMap);