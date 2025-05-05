/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

// 等待DOM加载完成
document.addEventListener("DOMContentLoaded", function () {
  // 初始化图表实例
  const myChart = echarts.init(document.getElementById("radar"));
  // 窗口自适应
  window.addEventListener("resize", () => myChart.resize());
  // 数据
  const dataGY = [[4.5, 4, 4, 4, 4.5, 4.5]];
  const dataTR = [[4, 3.5, 3.5, 3.32, 3, 3.2]];
  const dataZY = [[2.5, 3, 2.5, 2.92, 2.8, 2.5]];
  const dataAS = [[2.5, 1.45, 1.28, 1.374, 1.86, 2]];
  const dataLPS = [[2.23, 2.5, 2, 1.537, 2.45, 2]];
  const dataBJ = [[2.21, 2.31, 2.42, 1.853, 1.86, 1.75]];
  const dataQN = [[2.5, 2.65, 2.6, 1.56, 2.48, 2.5]];
  const dataQDN = [[2.6, 2.5, 2.78, 1.68, 2.36, 2.64]];
  const dataQXN = [[2.34, 2.65, 2.3, 1.52, 2, 2.2]];
  // 设置图表的主题
  const lineStyle = {
    width: 2,
    opacity: 1,
  };
  // 配置项
  option = {
    // 标题
    title: {
      text: "各地区人工智能建设评估图",
      left: "center",
      // 标题样式
      textStyle: {
        color: "#eee",
      },
    },
    // 图例
    legend: {
      bottom: "5",
      left: "center",
      data: [
        "贵阳市",
        "铜仁市",
        "遵义市",
        "安顺市",
        "六盘水市",
        "毕节市",
        "黔南州",
        "黔东南州",
        "黔西南州",
      ],
      itemGap: 10,
      // 图例样式
      textStyle: {
        color: "#eee",
        fontSize: 12,
      },
      // 选中样式
      selectedMode: "single",
    },

    radar: {
      // 雷达图指标
      indicator: [
        { name: "政策支持", max: 5 },
        { name: "产业应用", max: 5 },
        { name: "科研创新", max: 5 },
        { name: "人才储备", max: 5 },
        { name: "数据资源", max: 5 },
        { name: "基础设施", max: 5 },
      ],
      shape: "circle",
      splitNumber: 5,
      axisName: {
        color: "rgb(238, 197, 102)",
      },
      splitLine: {
        lineStyle: {
          color: [
            "rgba(238, 197, 102, 0.1)",
            "rgba(238, 197, 102, 0.2)",
            "rgba(238, 197, 102, 0.4)",
            "rgba(238, 197, 102, 0.6)",
            "rgba(238, 197, 102, 0.8)",
            "rgba(238, 197, 102, 1)",
          ].reverse(),
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(238, 197, 102, 0.5)",
        },
      },
    },
    series: [
      {
        name: "贵阳市",
        type: "radar",
        lineStyle: lineStyle,
        data: dataGY,
        symbol: "none",
        itemStyle: {
          color: "#FFFFFF",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: "铜仁市",
        type: "radar",
        lineStyle: lineStyle,
        data: dataTR,
        symbol: "none",
        itemStyle: {
          color: "#4ECDC4",
        },
        areaStyle: {
          opacity: 0.05,
        },
      },
      {
        name: "遵义市",
        type: "radar",
        lineStyle: lineStyle,
        data: dataZY,
        symbol: "none",
        itemStyle: {
          color: "#FFE66D",
        },
        areaStyle: {
          opacity: 0.05,
        },
      },
      {
        name: "安顺市",
        type: "radar",
        lineStyle: lineStyle,
        data: dataAS,
        symbol: "none",
        itemStyle: {
          color: "#FF6B6B",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: "六盘水市",
        type: "radar",
        lineStyle: lineStyle,
        data: dataLPS,
        symbol: "none",
        itemStyle: {
          color: "#7CFC00",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: "毕节市",
        type: "radar",
        lineStyle: lineStyle,
        data: dataBJ,
        symbol: "none",
        itemStyle: {
          color: "#FF00FF",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: "黔南州",
        type: "radar",
        lineStyle: lineStyle,
        data: dataQN,
        symbol: "none",
        itemStyle: {
          color: "#90EE90",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: "黔东南州",
        type: "radar",
        lineStyle: lineStyle,
        data: dataQDN,
        symbol: "none",
        itemStyle: {
          color: "#FFF0F5",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: "黔西南州",
        type: "radar",
        lineStyle: lineStyle,
        data: dataQXN,
        symbol: "none",
        itemStyle: {
          color: "#FF34B3",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
    ],
  };
  // 应用配置
  myChart.setOption(option);
});
