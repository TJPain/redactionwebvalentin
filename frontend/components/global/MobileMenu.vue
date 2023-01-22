<template>
  <div class="sticky w-full bg-white z-40 inset-0 p-10" flex="~ col auto" h="screen" overflow="y-hidden">
    <div class="overflow-y-auto" m="t-5">
      <div flex="~ col auto" align="items-end" p="t-3">
        <button class="ml-1 flex items-center justify-center h-10" text="dark-700 xl" font="semibold" @click="$emit('closeMobileMenu')">
          X
        </button>
      </div>
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 flex-col md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white" m="b-0">
        <li>
          <a href="/#qui" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0" @click="$emit('closeMobileMenu')">
            Qui Suis-Je
          </a>
        </li>
        <li>
          <a href="/#bonProfil" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0" @click="$emit('closeMobileMenu')">
            Avez-Vous Le Bon Profil ?
          </a>
        </li>
        <li>
          <a href="/#services" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0" @click="$emit('closeMobileMenu')">
            Services
          </a>
        </li>
        <li>
          <a href="/blog" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0" @click="$emit('closeMobileMenu')">
            Blog
          </a>
        </li>
        <li>
          <a href="/#contactez" class="block py-2 pl-3 pr-4 text-dark-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0" @click="$emit('closeMobileMenu')">
            Contactez Moi
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
