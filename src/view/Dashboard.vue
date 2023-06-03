<template>

  <div class="w-11/12 mx-auto">
    <!--  dashboard header-->
    <Header header-text="داشبورد" />
    <p class="text-white text-xl block sm:block text-full block lg:hidden text-center mt-6">داشبورد</p>
    <!--    dashboard cards-->
    <DashboardCards/>
    <!--    chart-->
    <div class="flex justify-center gap-8 flex-wrap lg:flex-nowrap mt-14">
      <LineChart/>
    </div>


  </div>

</template>

<script setup>

import DashboardCards from "../components/dashboard/DashboardCards.vue";
import LineChart from "../components/ui/LineChart.vue";
import Header from "../components/ui/Header.vue";
</script>

<style scoped>

input:focus {
  outline: none;
}

</style>