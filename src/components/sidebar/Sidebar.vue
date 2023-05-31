<template>
  <div class="bg-dark-custom-sidebar custom-shadow-1 h-screen fixed w-80 lg:relative fixed overflow-x-hidden z-10"
       :class="{ hidden: !uiStore.sidebarFlag }"
  >
    <div class="text-red-500 absolute left-2 top-2 z-10 block lg:hidden" @click="closeSidebar">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-8 h-8 z-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </div>
    <!--    top design in sidebar-->
    <RoundedDesignTop/>
    <!--    avatar component-->
    <SidebarAvatar/>
    <!--    links and dropdowns-->
    <SidebarItems/>

  </div>
</template>

<script setup>
import SidebarAvatar from "./SidebarAvatar.vue";
import RoundedDesignTop from "./RoundedDesignTop.vue";
import SidebarItems from "./SidebarItems.vue";
import {useUiStore} from "../../store/ui.js";

const uiStore = useUiStore();

const closeSidebar = () => {
  uiStore.toggleSidebar();
}


</script>


<style scoped>

</style>