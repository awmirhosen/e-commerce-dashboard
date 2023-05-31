<template>
  <div class="text-gray-200 lg:hidden block mt-4 mr-4 absolute" @click="toggleSidebar">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>
  </div>
</template>

<script setup>
import {useUiStore} from "../../store/ui.js";

const uiStore = useUiStore()

const toggleSidebar = () => {
  uiStore.toggleSidebar();
  console.log(uiStore.sidebarFlag);
}

</script>

<style scoped>

</style>