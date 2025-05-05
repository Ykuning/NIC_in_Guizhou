/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

// 当DOM内容加载完成后执行初始化操作
document.addEventListener('DOMContentLoaded', function() {
    // 初始化ECharts实例，绑定到id为radar的DOM元素
    const myChart = echarts.init(document.getElementById('radar'));
    // 添加窗口大小变化事件监听，自动调整图表尺寸
    window.addEventListener('resize', () => myChart.resize());
  
    /**************** 数据配置部分 ****************/
    // 各城市数据配置（单位根据指标不同有所变化）
    const dataGY = [3, 8.5, 65, 4.3, 28, 90];  // 贵阳市
    const dataZY = [5, 4.2, 50, 4.1, 25, 70];  // 遵义市
    const dataLPS = [7, 3.0, 40, 3.8, 20, 60]; // 六盘水市
    const dataBJ = [10, 2.5, 30, 3.5, 18, 85]; // 毕节市
    const dataTR = [6, 3.5, 35, 3.9, 22, 65];  // 铜仁市
    const dataQN = [4, 4.0, 45, 4.2, 24, 80];  // 黔南州
    const dataQDN = [8, 3.8, 38, 3.7, 19, 65]; // 黔东南州
    const dataQXN = [12, 2.2, 25, 3.4, 15, 40];// 黔西南州
    const dataAS = [5, 3.5, 42, 4.0, 21, 65];  // 安顺市
    const lineStyle = { width: 2, opacity: 0.8 }; // 统一线条样式
  
    /**************** 图表配置对象 ****************/
    const option = {
        // 主标题配置
        title: {
            text: '贵州省新能源汽车充电桩建设多维度评估',
            left: 'center',      // 居中显示
            // 主标题样式
            textStyle: { 
                color: '#fff',   // 白色文字
                fontSize: 18     // 字号18
            }
        },
        // 图例配置
        legend: {
            bottom: "5",       // 距离底部5%
            left: 'center',     // 居中显示
            data: ['贵阳市','遵义市','六盘水市','毕节市','铜仁市','黔南州','黔东南州','黔西南州','安顺市'],
            // 图例样式
            textStyle: { 
                color: '#fff',  // 白色文字
                fontSize: 12    // 字号12
            },
            selectedMode: 'single'
        },
        // 提示框配置
        tooltip: {
            trigger: 'item',  // 数据项触发
            formatter: params => {
                // 各指标单位配置
                const units = ['%', '台/km²', '%', '分', '%', '分'];
                return `${params.name}<br>${
                    // 拼接数据值带单位
                    params.data.value.map((v,i) => 
                        `${option.radar.indicator[i].name}: ${v}${units[i]}`
                    ).join('<br>')
                }`;
            }
        },
        // 雷达图坐标系配置
        radar: {
            // 各维度指标配置（名称 + 最大值）
            indicator: [
                { name: '故障率', max: 15 },  // 单位：%
                { name: '覆盖率', max: 10 },   // 单位：台/km²
                { name: '快充占比', max: 70 }, // 单位：%
                { name: '满意度', max: 5 },    // 5分制
                { name: '投资增速', max: 30 }, // 单位：%
                { name: '政策支持', max: 100 } // 评分制
            ],
            shape: 'circle',  // 圆形雷达图
            // 坐标轴标签样式
            axisName: { 
                color: 'rgb(238, 197, 102)', // 金色文字
                fontSize: 12 
            },
            // 分割线样式
            splitLine: { 
                lineStyle: {
                    color: [
                      'rgba(238, 197, 102, 0.1)',
                      'rgba(238, 197, 102, 0.2)',
                      'rgba(238, 197, 102, 0.4)',
                      'rgba(238, 197, 102, 0.6)',
                      'rgba(238, 197, 102, 0.8)',
                      'rgba(238, 197, 102, 1)'
                    ].reverse()
                  }
            },
            splitArea: {
                show: false
              },
            // 坐标轴线样式
            axisLine: { 
                lineStyle: { 
                    color: 'rgba(238, 197, 102, 0.5)' // 半透明金色
                } 
            }
        },
        // 数据系列配置（调用生成函数）
        series: [
            createSeries('贵阳市', dataGY, '#F9713C'),    
            createSeries('遵义市', dataZY, '#4ECDC4'),    
            createSeries('六盘水市', dataLPS, '#45B7D1'), 
            createSeries('毕节市', dataBJ, '#FF6B6B'),   
            createSeries('铜仁市', dataTR, '#A78BFA'),    
            createSeries('黔南州', dataQN, '#FFE66D'),    
            createSeries('黔东南州', dataQDN, '#68D391'),
            createSeries('黔西南州', dataQXN, '#F687B3'), 
            createSeries('安顺市', dataAS, '#9CA3AF')     
        ],
    };
  
    /**************** 工具函数 ****************/
    // 生成雷达图数据系列配置
    function createSeries(name, data, color) {
        return {
            name,              // 系列名称
            type: 'radar',     // 雷达图类型
            lineStyle,         // 使用统一线条样式
            symbol: 'none',    // 不显示数据点符号
            data: [data],      // 数据值
            itemStyle: { color }, // 数据项颜色
            areaStyle: { opacity: 0.1 } // 区域填充样式（10%透明度）
        };
    }
  
    // 生成雷达图轴末端的"高"方向标签
    function createAxisLabels() {
        const center = ['50%', '50%'];  // 图表中心坐标
        const radius = '72%';           // 标签半径位置
        // 生成6个方向标签（每个间隔60度）
        return Array(6).fill().map((_, index) => {
            // 计算角度（从12点方向顺时针）
            const angle = (90 - index * 60) * Math.PI / 180;
            return {
                type: 'text',       // 文本类型
                style: {
                    text: '▲ 高',    // 显示内容
                    fontSize: 12,
                    fill: 'rgba(238, 197, 102, 0.8)' // 金色文字
                },
                // 计算坐标位置（三角函数计算）
                left: `calc(${center[0]} + ${radius} * ${Math.cos(angle)} + 8px)`,
                top: `calc(${center[1]} - ${radius} * ${Math.sin(angle)} - 6px)`,
                // 调整文本旋转角度（与坐标轴对齐）
                rotation: -angle * 180 / Math.PI + 90
            };
        });
    }
  
    // 应用配置到图表实例
    myChart.setOption(option);
  });