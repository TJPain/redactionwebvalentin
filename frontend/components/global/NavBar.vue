<template>
  <nav
    class="bg-white border-gray-200 rounded fixed"
    z="100"
    p="x-5 md:x-10 y-2.5"
    w="full"
    max-w="500"
    m="x-auto"
  >
    <div class="flex flex-wrap items-center justify-between mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <img src="~/static/global/logo.png" class="h-8 mr-3 sm:h-9" alt="">
      </NuxtLink>
      <div id="navbar-default" class="hidden w-full md:block md:w-auto">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white" m="b-0">
          <template v-if="$route.name === 'index'">
            <li>
              <button v-scroll-to="{ element: '#qui' }" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0">
                Qui Suis-Je
              </button>
            </li>
            <li>
              <button v-scroll-to="{ element: '#bonProfil' }" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0">
                Avez-Vous Le Bon Profil ?
              </button>
            </li>
            <li>
              <button v-scroll-to="{ element: '#services' }" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0">
                Services
              </button>
            </li>
          </template>
          <template v-else>
            <li>
              <a href="/#qui" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0">
                Qui Suis-Je
              </a>
            </li>
            <li>
              <a href="/#bonProfil" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0">
                Avez-Vous Le Bon Profil ?
              </a>
            </li>
            <li>
              <a href="/#services" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0">
                Services
              </a>
            </li>
          </template>
          <li>
            <NuxtLink to="/blog" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0">
              Blog
            </NuxtLink>
          </li>
        </ul>
      </div>
      <template v-if="$route.name === 'index'">
        <button
          v-scroll-to="{ element: '#contactez' }"
          rounded="lg"
          bg="dark-600 hover:dark-100"
          text="white"
          font="semibold"
          p="y-2.5 x-4"
          class="hidden lg:block"
        >
          Contactez Moi
        </button>
      </template>
      <template v-else>
        <a
          href="/#contactez"
          rounded="lg"
          bg="dark-600 hover:dark-100"
          text="white hover:white"
          font="semibold"
          p="y-2.5 x-4"
          class="hidden lg:block"
          style="text-decoration: none"
        >
          Contactez Moi
        </a>
      </template>
      <button type="button" class="inline-flex items-center p-2 ml-3 text-sm text-dark-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false" @click="$emit('toggleMobileMenu')">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
      </button>
    </div>
  </nav>
</template>
