<template>
  <div class=" bg-dark-custom flex min-h-screen relative" dir="rtl">
    <!--    sidebar icon-->
    <SidebarIcon/>
    <!--    main sidebar-->
    <Sidebar/>
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
import SidebarIcon from "./components/ui/SidebarIcon.vue";
import {useUiStore} from "./store/ui.js";

const uiStore = useUiStore();

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
  uiStore.sidebarFlag = window.innerWidth >= 1024;
})

</script>

<style>

</style>