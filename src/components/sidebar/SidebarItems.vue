<template>
  <div class="mt-16 text-gray-100">
    <!--      dashboard-->
    <div class=" mr-10 flex cursor-pointer transition-all hover:text-green-500">
      <RouterLink to="/" active-class="text-green-500">
        <div class="flex gap-4">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"/>
            </svg>
          </i>
          <p>داشبورد</p>
        </div>
      </RouterLink>
    </div>
    <hr class="mt-4 border-zinc-800">
    <!--        users item of menu -->
    <div class=" mr-10 flex mt-4 hover:text-green-500 flex-col">
      <div class="flex gap-4 justify-between w-full items-center cursor-pointer" @click="usersSidebarToggle">
        <div class="flex gap-4">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
            </svg>
          </i>
          <p>کاربران</p>
        </div>
        <!--          dropdown icon-->
        <i class="ml-4 transition-all" ref="usersItemDropdown">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </i>
      </div>
      <!--        submenu items-->
      <transition>
        <div class="flex-col mt-4 text-sm mr-1 text-gray-400" v-if="usersItemFlag">
          <RouterLink to="users" active-class="text-green-500">
          <div class="flex gap-4 hover:text-green-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd"
                    d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
                    clip-rule="evenodd"/>
            </svg>
            <p>لیست کاربران</p>
          </div>
          </RouterLink>
          <div class="flex gap-4 mt-2 hover:text-green-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd"
                    d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
                    clip-rule="evenodd"/>
            </svg>
            <p>افزودن کاربر</p>
          </div>
        </div>
      </transition>
      <!--        end of submenus-->
    </div>
    <hr class="mt-4 border-zinc-800">
    <!--      products items-->
    <div class=" mr-10 flex mt-4 hover:text-green-500 flex-col">
      <div class="flex gap-4 justify-between w-full items-center cursor-pointer" @click="productSidebarToggle">
        <div class="flex gap-4">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z"/>
              <path fill-rule="evenodd"
                    d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                    clip-rule="evenodd"/>
            </svg>

          </i>
          <p>محصولات</p>
        </div>
        <!--          dropdown icon-->
        <i class="ml-4 transition-all" ref="ProductsItemDropdown">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </i>
      </div>
      <!--        submenu items-->
      <transition>
        <div class="flex-col mt-4 text-sm mr-1 text-gray-400" v-if="ProducstItemFlag">
          <div class="flex gap-4 hover:text-green-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd"
                    d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
                    clip-rule="evenodd"/>
            </svg>
            <p>لیست محصولات</p>
          </div>
          <div class="flex gap-4 mt-2 hover:text-green-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd"
                    d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z"
                    clip-rule="evenodd"/>
            </svg>
            <p>افزودن محصول</p>
          </div>
        </div>
      </transition>
      <!--        end of submenus-->
    </div>
    <hr class="mt-4 border-zinc-800">
    <!--      orders items-->
    <div class=" mr-10 mt-4 flex cursor-pointer transition-all hover:text-green-500">
      <div class="flex gap-4">
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path
                d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
          </svg>

        </i>
        <p>سفارشات</p>
      </div>

    </div>
    <hr class="mt-4 border-zinc-800">
    <!--      logout-->
    <div class=" mr-10 flex mt-4 hover:text-orange-700 text-orange-600 flex-col">
      <div class="flex gap-4 justify-between w-full items-center cursor-pointer" @click="logoutModal">
        <div class="flex gap-4">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clip-rule="evenodd" />
            </svg>
          </i>
          <p>خروج از حساب</p>
        </div>
      </div>
      <!--        submenu items-->
      <transition>
        <div class="flex-col mt-4 text-sm mr-1 text-gray-400" v-if="logoutFlag">
          <div class="flex gap-4 hover:text-zinc-100 text-zinc-300 cursor-pointer" @click="cancelLogout">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
            </svg>

            <p>انصراف</p>
          </div>
          <div class="flex gap-4 mt-2 text-orange-300 hover:text-orange-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
            </svg>

            <p>خروج از حساب</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>


import {ref} from "vue";
import {useUiStore} from "../../store/ui.js";
import {useRouter} from "vue-router"

// refs


const router = useRouter()

// items flag for opening and closing users item
const usersItemFlag = ref(false)
const usersItemDropdown = ref(null);
// users toggle function
const usersSidebarToggle = () => {
  if (usersItemFlag.value === true) {
    usersItemFlag.value = false;
    usersItemDropdown.value.style.transform = "rotateZ(0deg)"
    return;
  }
  if (usersItemFlag.value === false) {
    usersItemFlag.value = true;
    usersItemDropdown.value.style.transform = "rotateZ(180deg)"
  }
}
// go to users page
const showUsersPage = (e) => {
  e.target.classList.add("text-green-500")
  router.push("/users")
}

const uiStore = useUiStore();

// items flag for product and closing product item
const ProducstItemFlag = ref(false)
const ProductsItemDropdown = ref(null);
// product toggle function
const productSidebarToggle = () => {
  if (ProducstItemFlag.value === true) {
    ProducstItemFlag.value = false;
    ProductsItemDropdown.value.style.transform = "rotateZ(0deg)"
    return;
  }
  if (ProducstItemFlag.value === false) {
    ProducstItemFlag.value = true;
    ProductsItemDropdown.value.style.transform = "rotateZ(180deg)"
  }
}

// logout functions
const logoutFlag = ref(false);
const cancelLogout = () => {
  logoutFlag.value = false;
}
const logoutModal = () => {
  logoutFlag.value = true;
}

</script>

<style scoped>

.bg-dark-custom {
  background: #191919;
}

.v-enter-active, .v-leave-active {
  transition: opacity linear 150ms;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

</style>