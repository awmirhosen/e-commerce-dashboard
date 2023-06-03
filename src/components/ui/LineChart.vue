<template>
  <div class="w-full text-center">
    <div class="w-full text-center flex justify-center">
      <canvas class="w-full" id="myChart"></canvas>
    </div>
  </div>
  <div class="w-full">
    <div class="w-full flex justify-center text-center">
      <canvas id="myChart2" class="w-full"></canvas>
    </div>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import {onMounted} from "vue";

const labels = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
]


const data = {
  labels: labels,
  datasets: [{
    label: "مقدار فروش",
    backgroundColor: "rgb(196,65,20)",
    borderColor: "rgb(196,65,20)",
    data: [0, 10, 5, 22, 30, 12, 43],
  }]
}

const data1 = {
  labels: labels,
  datasets: [{
    label: "مقدار فروش",
    backgroundColor: "rgb(13,179,231)",
    borderColor: "rgb(13,179,231)",
    data: [150, 150, 150, 150, 150, 150, 150],
  }]
}

const config = {
  type: "line",
  data: data,
  responsive: true,
  options: {
    plugins: {
      legend: false,
    }
  },
  interaction: {
    intersect: false,
  },
}

const config2 = {
  type: "line",
  data: data1,
  responsive: true,
  options: {
    plugins: {
      legend: false,
    }
  },
  interaction: {
    intersect: false,
  },
}


onMounted(() => {
  const myChart = new Chart(
      document.getElementById("myChart"),
      config
  )
  const myChart2 = new Chart(
      document.getElementById("myChart2"),
      config2
  )
})

</script>

<style scoped>

</style>