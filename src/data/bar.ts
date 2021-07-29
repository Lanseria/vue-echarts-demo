import { groupBy, mapValues, toPairs, chain } from "lodash";
function getNumberInNormalDistribution(mean: number, stdDev: number) {
  return mean + randomNormalDistribution() * stdDev;
}

function randomNormalDistribution() {
  let u = 0.0,
    v = 0.0,
    w = 0.0,
    c = 0.0;
  do {
    //获得两个（-1,1）的独立随机变量
    u = Math.random() * 2 - 1.0;
    v = Math.random() * 2 - 1.0;
    w = u * u + v * v;
  } while (w == 0.0 || w >= 1.0);
  //这里就是 Box-Muller转换
  c = Math.sqrt((-2 * Math.log(w)) / w);
  //返回2个标准正态分布的随机数，封装进一个数组返回
  //当然，因为这个函数运行较快，也可以扔掉一个
  //return [u*c,v*c];
  return u * c;
}

export default function getBarData() {
  const data = Array.apply(null, Array(100000)).map(() => {
    return getNumberInNormalDistribution(0, 100);
  });
  const dataSource = chain(data)
    .groupBy(Math.floor)
    .mapValues("length")
    .toPairs()
    .value()
    .map((m) => {
      return {
        height: m[0],
        value: m[1],
      };
    });
  return {
    tooltip: {},
    dataset: {
      dimensions: ["height", "value"],
      source: dataSource,
    },
    xAxis: { type: "value" },
    yAxis: { axisLine: { show: false }, axisTick: { show: false } },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar", sampling: "lttb", animation: false }],
  };
}
