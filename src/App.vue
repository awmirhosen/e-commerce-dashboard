<template>
  <div class=" bg-dark-custom flex min-h-screen relative" dir="rtl">
    <div class="fixed top-0 w-full h-full bg-red-500 z-20 bg-zinc-900/[.4] flex justify-center items-center">
      <div class="w-96 h-96 bg-dark-custom-sidebar border border-zinc-800 rounded-md">
        <div class="flex justify-between">
          <p>افزودن کاربر</p>
        </div>
      </div>
    </div>
    <!--    sidebar icon-->
    <SidebarIcon/>
    <!--    main sidebar-->
    <Sidebar/>
    <!--  main content-->
    <div class="w-full">
      <!--    header-->
      <RouterView></RouterView>
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