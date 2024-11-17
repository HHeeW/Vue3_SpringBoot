<template>
    <div class="colContainer">
        <div class="rowContainer">
            <div><span>총 방문자: </span><b>132</b></div>
            <div><span>오늘 방문자: </span><b>31</b></div>
        </div>
        <div class="brick">
            <highcharts :options="chartOptions"></highcharts>
        </div>
    </div>
</template>

<script>
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";

export default {
  components: {
    highcharts: HighchartsVue.component,
  },
  data() {
    return {
      chartOptions: {
        title: {
          text: "오늘의 방문자 수",
        },
        series: [
          {
            name: "방문자 수",
            data: [0, 0, 0, 0, 0, 1, 3, 10,  15, 10,  13, 15, 8, 20, 18, 23, 17, 21, 20, 9, 5, 2, 0, 0],
          },
        ],
      },
    };
  },
};
</script>

<style>
.rowContainer {
    margin-bottom: 20px;
}

.brick {
    width: 100%;
    height: 400px; /* 적절한 높이 설정 */
}
</style>