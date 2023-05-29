<template>
  <div class="bg-dark-custom-sidebar custom-shadow-1 relative w-80 overflow-x-hidden">
    <!--    top design in sidebar-->
    <RoundedDesignTop/>
    <!--    avatar component-->
    <SidebarAvatar/>
    <!--    links and dropdowns-->
    <SidebarItems />

  </div>
</template>

<script setup>
import SidebarAvatar from "./SidebarAvatar.vue";
import RoundedDesignTop from "./RoundedDesignTop.vue";
import SidebarItems from "./SidebarItems.vue";




</script>


<style scoped>

</style>