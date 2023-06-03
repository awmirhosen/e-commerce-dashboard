<template>
  <div class="w-11/12 mx-auto text-gray-100">
    <!--  users header-->
    <Header header-text="کاربران"/>
    <div class="bg-orange-700/[.08] text-sm p-2 rounded-md mt-4 text-center text-orange-700 cursor-pointer w-36">
      اضافه کردن کاربر
    </div>
    <!--users main content-->
    <div class="w-full mt-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class=" relative bg-dark-custom-sidebar p-6 rounded-xl">
          <div class="w-full flex gap-8">
            <!--          users avatar-->
            <div class="w-14 h-14 rounded-full overflow-hidden">
              <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام</p>
              <p class="text-zinc-100 text-lg">نام</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام خانوادگی</p>
              <p class="text-zinc-100 text-lg">محمدی</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">شماره تلفن</p>
              <p class="text-zinc-100 text-lg">09100011073</p>
            </div>

          </div>
          <div class="absolute top-4 left-4 rotate-90 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
            </svg>
          </div>
          <hr class="mb-4 border-zinc-700 mt-4 w-full">
          <div class="flex justify-between">
            <!--            points-->
            <div class="flex items-center gap-2">
              <i class="text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              </i>
              <p class="text-orange-500 text-sm">935</p>
              <p class="text-zinc-400 text-sm">امتیاز</p>
            </div>
            <!--            last buys-->
            <div>
              <div class="flex gap-2 items-center">
                <p class="text-xs">خرید های اخیر</p>
                <p class="text-xs text-green-500">14</p>
                <div class="flex gap-1">
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden relative">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                    <div class="absolute top-0 h-full w-full bg-zinc-900 opacity-70 cursor-pointer">
                      <i class="absolute top-1 translate-x-2/4 right-1/2 -translate-y-2/4 top-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" relative bg-dark-custom-sidebar p-6 rounded-xl">
          <div class="w-full flex gap-8">
            <!--          users avatar-->
            <div class="w-14 h-14 rounded-full overflow-hidden">
              <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام</p>
              <p class="text-zinc-100 text-lg">نام</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام خانوادگی</p>
              <p class="text-zinc-100 text-lg">محمدی</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">شماره تلفن</p>
              <p class="text-zinc-100 text-lg">09100011073</p>
            </div>

          </div>
          <div class="absolute top-4 left-4 rotate-90 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
            </svg>
          </div>
          <hr class="mb-4 border-zinc-700 mt-4 w-full">
          <div class="flex justify-between">
            <!--            points-->
            <div class="flex items-center gap-2">
              <i class="text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              </i>
              <p class="text-orange-500 text-sm">935</p>
              <p class="text-zinc-400 text-sm">امتیاز</p>
            </div>
            <!--            last buys-->
            <div>
              <div class="flex gap-2 items-center">
                <p class="text-xs">خرید های اخیر</p>
                <p class="text-xs text-green-500">14</p>
                <div class="flex gap-1">
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden relative">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                    <div class="absolute top-0 h-full w-full bg-zinc-900 opacity-70 cursor-pointer">
                      <i class="absolute top-1 translate-x-2/4 right-1/2 -translate-y-2/4 top-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" relative bg-dark-custom-sidebar p-6 rounded-xl">
          <div class="w-full flex gap-8">
            <!--          users avatar-->
            <div class="w-14 h-14 rounded-full overflow-hidden">
              <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام</p>
              <p class="text-zinc-100 text-lg">نام</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام خانوادگی</p>
              <p class="text-zinc-100 text-lg">محمدی</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">شماره تلفن</p>
              <p class="text-zinc-100 text-lg">09100011073</p>
            </div>

          </div>
          <div class="absolute top-4 left-4 rotate-90 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
            </svg>
          </div>
          <hr class="mb-4 border-zinc-700 mt-4 w-full">
          <div class="flex justify-between">
            <!--            points-->
            <div class="flex items-center gap-2">
              <i class="text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              </i>
              <p class="text-orange-500 text-sm">935</p>
              <p class="text-zinc-400 text-sm">امتیاز</p>
            </div>
            <!--            last buys-->
            <div>
              <div class="flex gap-2 items-center">
                <p class="text-xs">خرید های اخیر</p>
                <p class="text-xs text-green-500">14</p>
                <div class="flex gap-1">
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden relative">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                    <div class="absolute top-0 h-full w-full bg-zinc-900 opacity-70 cursor-pointer">
                      <i class="absolute top-1 translate-x-2/4 right-1/2 -translate-y-2/4 top-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" relative bg-dark-custom-sidebar p-6 rounded-xl">
          <div class="w-full flex gap-8">
            <!--          users avatar-->
            <div class="w-14 h-14 rounded-full overflow-hidden">
              <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام</p>
              <p class="text-zinc-100 text-lg">نام</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام خانوادگی</p>
              <p class="text-zinc-100 text-lg">محمدی</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">شماره تلفن</p>
              <p class="text-zinc-100 text-lg">09100011073</p>
            </div>

          </div>
          <div class="absolute top-4 left-4 rotate-90 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
            </svg>
          </div>
          <hr class="mb-4 border-zinc-700 mt-4 w-full">
          <div class="flex justify-between">
            <!--            points-->
            <div class="flex items-center gap-2">
              <i class="text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              </i>
              <p class="text-orange-500 text-sm">935</p>
              <p class="text-zinc-400 text-sm">امتیاز</p>
            </div>
            <!--            last buys-->
            <div>
              <div class="flex gap-2 items-center">
                <p class="text-xs">خرید های اخیر</p>
                <p class="text-xs text-green-500">14</p>
                <div class="flex gap-1">
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden relative">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                    <div class="absolute top-0 h-full w-full bg-zinc-900 opacity-70 cursor-pointer">
                      <i class="absolute top-1 translate-x-2/4 right-1/2 -translate-y-2/4 top-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=" relative bg-dark-custom-sidebar p-6 rounded-xl">
          <div class="w-full flex gap-8">
            <!--          users avatar-->
            <div class="w-14 h-14 rounded-full overflow-hidden">
              <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام</p>
              <p class="text-zinc-100 text-lg">نام</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">نام خانوادگی</p>
              <p class="text-zinc-100 text-lg">محمدی</p>
            </div>

            <div class="flex flex-col">
              <p class="text-zinc-400 text-sm">شماره تلفن</p>
              <p class="text-zinc-100 text-lg">09100011073</p>
            </div>

          </div>
          <div class="absolute top-4 left-4 rotate-90 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
            </svg>
          </div>
          <hr class="mb-4 border-zinc-700 mt-4 w-full">
          <div class="flex justify-between">
            <!--            points-->
            <div class="flex items-center gap-2">
              <i class="text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              </i>
              <p class="text-orange-500 text-sm">935</p>
              <p class="text-zinc-400 text-sm">امتیاز</p>
            </div>
            <!--            last buys-->
            <div>
              <div class="flex gap-2 items-center">
                <p class="text-xs">خرید های اخیر</p>
                <p class="text-xs text-green-500">14</p>
                <div class="flex gap-1">
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                  </div>
                  <div class="w-7 h-7 rounded-md overflow-hidden relative">
                    <img src="public/images/test/DSC01817%20(2).JPG" class="h-full object-cover" alt="">
                    <div class="absolute top-0 h-full w-full bg-zinc-900 opacity-70 cursor-pointer">
                      <i class="absolute top-1 translate-x-2/4 right-1/2 -translate-y-2/4 top-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>

import Header from "../../components/ui/Header.vue";
</script>

<style scoped>

</style>