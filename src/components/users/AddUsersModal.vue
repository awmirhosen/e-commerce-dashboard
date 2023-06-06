<template>
  <!--  header of modal-->
  <div class="flex justify-between mt-4">
    <div><p class="text-gray-200 mr-4">{{ props.modalHeader }}</p></div>
    <div class="text-gray-200 ml-4 cursor-pointer" @click="closeUserModal">
      <i>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </i>
    </div>
  </div>
  <!--    main content of modal-->
  <div class="p-4 mt-4">
    <div class="relative">
      <div class="absolute bg-dark-custom-sidebar px-1 right-3 -top-4 text-zinc-600">نام</div>
      <input type="text" class="w-full bg-dark-custom-sidebar text-zinc-200 border-2 border-zinc-700 rounded-md p-1">
    </div>
    <div class="relative mt-8">
      <div class="absolute bg-dark-custom-sidebar px-1 right-3 -top-4 text-zinc-600">نام خانوادگی</div>
      <input type="text" class="w-full bg-dark-custom-sidebar text-zinc-200 border-2 border-zinc-700 rounded-md p-1">
    </div>
    <div class="relative mt-8">
      <div class="absolute bg-dark-custom-sidebar px-1 right-3 -top-4 text-zinc-600">تلفن همراه</div>
      <input type="text" class="w-full bg-dark-custom-sidebar text-zinc-200 border-2 border-zinc-700 rounded-md p-1">
    </div>

    <div class="mt-10 w-full">
      <button class="w-full text-zinc-200 bg-green-600 py-2 rounded-md transition-all hover:bg-green-700">افزودن کاربر</button>
    </div>

  </div>
</template>

<script setup>

import {useUiStore} from "../../store/ui.js";

const uiStore = useUiStore();

const props = defineProps([
  "modalHeader"
])

const closeUserModal = () => {
  uiStore.modalFlag = false;
  uiStore.userModalFlag = false;
}

</script>

<style scoped>
input:focus {
  outline: none;
}

</style>