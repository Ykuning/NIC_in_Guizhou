// 自动调整图表
const charts = [RadarChartChart, mapChart, pie-lineChart, bar-diagramChart];
/**
 * 自动调整图表尺寸的函数
 * 遍历所有图表并重新设置它们的尺寸为当前容器大小
 */
function autoResize() {
    charts.forEach(chart => {
        chart && chart.resize({
            width: chart.getDom().clientWidth,      // 获取图表容器的实际宽度
            height: chart.getDom().clientHeight     // 获取图表容器的实际高度
        });
    });
}

// 添加防抖resize监听
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(autoResize, 300);
});

// 初始化执行
autoResize();