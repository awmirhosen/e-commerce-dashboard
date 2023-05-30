<template>
  <div class=" bg-dark-custom flex min-h-screen relative" dir="rtl">
    <div class=""></div>
    <Sidebar />
    <!--  main content-->
    <div class="w-full">
      <!--    header-->
      <RouterView></RouterView>
      <!--    content-->
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/sidebar/Sidebar.vue";

</script>

<style>

</style>