<template>
  <h1 class="text-center text-xl text-gray-700">Line Chart</h1>
  <h2 id="basic-line" class="text-center text-lg text-gray-500 p-5">
    <a href="#basic-line">基本</a>
  </h2>
  <v-chart class="chart h-96" :option="option1" />
</template>
<script lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import { defineComponent, ref } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
]);

export default defineComponent({
  components: {
    VChart,
  },
  setup() {
    return {
      option1: {
        legend: {},
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
});
</script>
