/**
 * Powered by Apache ECharts (https://echarts.apache.org)
 * License: Apache-2.0
 */

function initChart() {
  const chartDom = document.getElementById("bar-diagram");
  const myChart = echarts.init(chartDom);

  // 配置项
  const option = {
    title: {
      text: "贵州各地区各年人工智能经济投入(亿元)",
      textStyle: {
        color: "#fff", // 标题颜色
      },
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0,0,0,0.8)", // 工具提示背景
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: "rgba(255,255,255,0.1)", // 指针阴影
        },
      },
    },
    legend: {
      data: ["2020", "2021", "2022", "2023", "2024"],
      textStyle: {
        color: "#fff", // 图例文字颜色
      },
      top: 30,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      name: '亿元',
      nameTextStyle:{
        color: '#ffffff'
      },
      boundaryGap: [0, 0.01],
      axisLabel: { color: "#fff" }, // X轴标签颜色
      splitLine: {
        lineStyle: {
          color: ["rgba(255,255,255,0.1)"], // X轴分割线
        },
      },
    },
    yAxis: {
      type: "category",
      data: [
        "贵阳市",
        "铜仁市",
        "安顺市",
        "遵义市",
        "六盘水市",
        "毕节市",
        "黔南州",
        "黔东南州",
        "黔西南州",
      ],
      axisLabel: { color: "#fff" }, // Y轴标签颜色
      splitLine: { show: false }, // 隐藏Y轴分割线
    },
    series: [
      {
        name: "2020",
        type: "bar",
        data: [
          80, 18,5, 10,5, 5, 2, 3.5,
          8, 6.5, 5,
        ],
        itemStyle: {
          color: "#FFD700", // 金色
          borderRadius: [0, 5, 5, 0],
        },
      },
      {
        name: "2021",
        type: "bar",
        data: [
          95, 22, 13, 6, 2.5, 4.2,
          10, 8, 6.5,
        ],
        itemStyle: {
          color: "#FF0000", // 红色
          borderRadius: [0, 5, 5, 0], // 柱状图圆角
        },
      },
      {
        name: "2022",
        type: "bar",
        data: [
          110, 25, 15.8, 7.5, 3.2, 5,
          12.5, 10, 8,
        ],
        itemStyle: {
          color: "#FFC0CB", // 粉色
          borderRadius: [0, 5, 5, 0], // 柱状图圆角
        },
      },
      {
        name: "2023",
        type: "bar",
        data: [
          130, 28, 18.6, 9, 4, 6,
          15, 12.5, 10,
        ],
        itemStyle: {
          color: "#A020F0", // 紫色
          borderRadius: [0, 5, 5, 0], // 柱状图圆角
        },
      },
      {
        name: "2024",
        type: "bar",
        data: [
          150, 31, 21, 11, 5, 7.5,
          18, 15, 13,
        ],
        itemStyle: {
          color: "#00FF00", // 绿色
          borderRadius: [0, 5, 5, 0], // 柱状图圆角
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => myChart.resize());
}
window.onload = initChart;
