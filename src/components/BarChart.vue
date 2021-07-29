<template>
  <h1 class="text-center text-xl text-gray-700">Bar Chart</h1>
  <h2 id="basic-bar" class="text-center text-lg text-gray-500 p-5">
    <a href="#basic-bar">基本</a>
  </h2>
  <v-chart class="chart" :option="option1" />

  <h2 id="normal-bar" class="text-center text-lg text-gray-500 p-5">
    <a href="#normal-bar">随机正态分布</a>
  </h2>
  <v-chart class="chart" :option="option2" @zr:click="handleZrClick" />
</template>

<script lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { defineComponent, ref } from "vue";
import getBarData from "../data/bar";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
]);

export default defineComponent({
  name: "Bar",
  components: {
    VChart,
  },
  provide: {},
  setup() {
    const option2 = ref(getBarData());
    const handleZrClick = () => {
      option2.value = getBarData();
    };
    return {
      handleZrClick,
      option1: {
        legend: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        dataset: {
          // 用 dimensions 指定了维度的顺序。直角坐标系中，
          // 默认把第一个维度映射到 X 轴上，第二个维度映射到 Y 轴上。
          // 如果不指定 dimensions，也可以通过指定 series.encode
          // 完成映射，参见后文。
          dimensions: ["product", "2015", "2016", "2017"],
          source: [
            {
              product: "Matcha Latte",
              "2015": 43.3,
              "2016": 85.8,
              "2017": 93.7,
            },
            { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
            {
              product: "Cheese Cocoa",
              "2015": 86.4,
              "2016": 65.2,
              "2017": 82.5,
            },
            {
              product: "Walnut Brownie",
              "2015": 72.4,
              "2016": 53.9,
              "2017": 39.1,
            },
          ],
        },
        xAxis: {},
        yAxis: { type: "category" },
        series: [
          {
            type: "bar",
            showBackground: true,
            stack: "year",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            type: "bar",
            showBackground: true,
            stack: "year",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
          {
            type: "bar",
            showBackground: true,
            stack: "year",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
          },
        ],
      },
      option2,
    };
  },
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
