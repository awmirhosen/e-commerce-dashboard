<template>
  <div class="w-full">
    <div class="flex justify-between mt-16 lg:mt-8">
      <div class="flex items-center">
        <p class="text-white text-xl hidden lg:block">{{ props.headerText }}</p>
      </div>
      <div class="flex gap-4">
        <!--        search box-->
        <SearchBox/>
        <!--        notification-->
        <div class="p-2 rounded-md bg-dark-custom-sidebar text-gray-400 relative">
          <div class="absolute w-2 h-2 rounded-lg bg-orange-600"></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
               class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import SearchBox from "./SearchBox.vue";

const props = defineProps([
    "header-text"
])


</script>

<style scoped>

</style>