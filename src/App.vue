<template>
  <div class="text-3xl text-center p-5">Vue-Echarts-Demo</div>
  <div class="text-base text-center p-5 text-gray-400">
    Vue.js component for Apache ECharts. (docs)
  </div>
  <BarChart></BarChart>
  <LineChart></LineChart>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";

export default defineComponent({
  name: "App",
  components: {
    BarChart,
    LineChart,
  },
});
</script>
