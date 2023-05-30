<template>

  <div class="w-11/12 mx-auto">
    <!--  dashboard header-->
    <DashboardHeader/>
    <!--    dashboard cards-->
    <DashboardCards/>
    <!--    chart-->
    <div class="flex justify-center gap-8 mt-14">
      <LineChart/>
    </div>


  </div>

</template>

<script setup>

import DashboardHeader from "../components/dashboard/DashboardHeader.vue";
import DashboardCards from "../components/dashboard/DashboardCards.vue";
import LineChart from "../components/ui/LineChart.vue";
</script>

<style scoped>

input:focus {
  outline: none;
}

</style>